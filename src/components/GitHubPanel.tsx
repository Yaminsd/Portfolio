import {
  useGitHubProfile,
  relativeTime,
  type GitHubData,
} from '../hooks/useGitHubProfile';

type Props = {
  handle: string;
  /** how many top repos to show */
  topN?: number;
};

export function GitHubPanel({ handle, topN = 4 }: Props) {
  const result = useGitHubProfile(handle);

  return (
    <section className="gh-panel" aria-label="Live GitHub data">
      <header className="gh-panel__title">
        <span className="gh-panel__title-text">LIVE FROM GITHUB · SIDE QUESTS</span>
        {result.status === 'success' && result.cached ? (
          <span className="gh-panel__cached" aria-hidden="true">
            ◐ cached
          </span>
        ) : null}
      </header>

      {result.status === 'loading' ? <Skeleton /> : null}

      {result.status === 'error' ? (
        <div className="gh-panel__error">
          <p>{result.message}</p>
          <a
            className="gh-panel__error-link"
            href={`https://github.com/${handle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶ visit github.com/{handle}
          </a>
        </div>
      ) : null}

      {result.status === 'success' ? (
        <Loaded handle={handle} data={result.data} topN={topN} />
      ) : null}
    </section>
  );
}

function Skeleton() {
  return (
    <div className="gh-panel__skeleton" aria-busy="true">
      <div className="gh-panel__sk-line gh-panel__sk-line--lg">▒▒▒▒▒▒▒▒</div>
      <div className="gh-panel__sk-line">▒▒▒▒▒▒▒▒▒▒▒▒▒▒</div>
      <div className="gh-panel__sk-line">▒▒▒▒▒▒▒▒▒▒</div>
    </div>
  );
}

function Loaded({
  handle,
  data,
  topN,
}: {
  handle: string;
  data: GitHubData;
  topN: number;
}) {
  const { profile, repos } = data;
  const shown = repos.slice(0, topN);

  return (
    <>
      <div className="gh-stats" role="group" aria-label="GitHub stats">
        <Stat label="HANDLE" value={`@${profile.login}`} />
        <Stat label="REPOS" value={String(profile.public_repos)} />
        <Stat label="FOLLOWERS" value={String(profile.followers)} />
        {profile.location ? <Stat label="LOCATION" value={profile.location} /> : null}
      </div>

      {shown.length === 0 ? (
        <p className="gh-panel__empty">
          No public repos yet. Visit{' '}
          <a
            href={`https://github.com/${handle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/{handle}
          </a>
          .
        </p>
      ) : (
        <ul className="gh-repos" role="list">
          {shown.map((r) => (
            <li key={r.id}>
              <a
                className="gh-repo"
                href={r.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="gh-repo__row">
                  <span className="gh-repo__name">{r.name}</span>
                  {r.language ? (
                    <span className="gh-repo__lang">{r.language}</span>
                  ) : null}
                </div>
                {r.description ? (
                  <p className="gh-repo__desc">{r.description}</p>
                ) : (
                  <p className="gh-repo__desc gh-repo__desc--muted">
                    no description
                  </p>
                )}
                <div className="gh-repo__meta">
                  <span aria-label={`${r.stargazers_count} stars`}>
                    ★ {r.stargazers_count}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>updated {relativeTime(r.pushed_at)}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="gh-stat">
      <div className="gh-stat__label">{label}</div>
      <div className="gh-stat__value">{value}</div>
    </div>
  );
}
