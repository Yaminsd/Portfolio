import { useEffect, useState } from 'react';

export type GitHubProfile = {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  location: string | null;
};

export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

export type GitHubData = {
  profile: GitHubProfile;
  repos: GitHubRepo[];
};

export type GitHubResult =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; data: GitHubData; cached: boolean };

const TTL_MS = 60 * 60 * 1000; // 1 hour
const CACHE_PREFIX = 'gh:';

type CachedEntry = { fetchedAt: number; data: GitHubData };

function readCache(handle: string): CachedEntry | null {
  try {
    const raw = window.localStorage.getItem(CACHE_PREFIX + handle);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachedEntry;
    if (
      typeof parsed?.fetchedAt !== 'number' ||
      !parsed.data?.profile ||
      !Array.isArray(parsed.data.repos)
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function writeCache(handle: string, data: GitHubData) {
  try {
    const entry: CachedEntry = { fetchedAt: Date.now(), data };
    window.localStorage.setItem(CACHE_PREFIX + handle, JSON.stringify(entry));
  } catch {
    /* ignore quota / private mode */
  }
}

export function useGitHubProfile(handle: string): GitHubResult {
  const [result, setResult] = useState<GitHubResult>({ status: 'loading' });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const cached = readCache(handle);
      const fresh = cached && Date.now() - cached.fetchedAt < TTL_MS;

      if (cached) {
        // serve cache immediately so first paint isn't empty
        setResult({ status: 'success', data: cached.data, cached: true });
        if (fresh) return;
      } else {
        setResult({ status: 'loading' });
      }

      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${handle}`, {
            headers: { Accept: 'application/vnd.github+json' },
          }),
          fetch(
            `https://api.github.com/users/${handle}/repos?per_page=30&sort=updated`,
            { headers: { Accept: 'application/vnd.github+json' } },
          ),
        ]);

        if (profileRes.status === 404) {
          if (!cancelled) {
            setResult({
              status: 'error',
              message: `GitHub user "${handle}" not found.`,
            });
          }
          return;
        }
        if (profileRes.status === 403 || reposRes.status === 403) {
          if (!cancelled) {
            setResult({
              status: 'error',
              message: 'GitHub API rate-limited. Visit profile directly.',
            });
          }
          return;
        }
        if (!profileRes.ok || !reposRes.ok) {
          if (!cancelled) {
            setResult({
              status: 'error',
              message: `GitHub responded ${profileRes.status} / ${reposRes.status}.`,
            });
          }
          return;
        }

        const profile = (await profileRes.json()) as GitHubProfile;
        const allRepos = (await reposRes.json()) as GitHubRepo[];
        // Exclude forks, archived, and the GitHub "profile README" repo
        // (a repo named identically to the user is just their profile bio).
        const repos = allRepos
          .filter(
            (r) =>
              !r.fork &&
              !r.archived &&
              r.name.toLowerCase() !== handle.toLowerCase(),
          )
          .sort((a, b) => {
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }
            return (
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
            );
          });

        const data: GitHubData = { profile, repos };
        if (!cancelled) {
          setResult({ status: 'success', data, cached: false });
          writeCache(handle, data);
        }
      } catch (err) {
        if (!cancelled) {
          setResult({
            status: 'error',
            message:
              err instanceof Error
                ? err.message
                : 'GitHub fetch failed (offline?).',
          });
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [handle]);

  return result;
}

/** Format an ISO date as "3 days ago" / "2 months ago" */
export function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const day = 24 * 60 * 60 * 1000;
  if (diff < day) return 'today';
  if (diff < 2 * day) return 'yesterday';
  if (diff < 30 * day) return `${Math.floor(diff / day)}d ago`;
  if (diff < 365 * day) return `${Math.floor(diff / (30 * day))}mo ago`;
  return `${Math.floor(diff / (365 * day))}y ago`;
}
