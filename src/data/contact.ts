export const GITHUB_HANDLE = 'Yaminsd';
export const LINKEDIN_URL =
  'https://www.linkedin.com/in/yamen-al-sader-2956a225b/';

export type ContactLink = {
  id: string;
  label: string;
  value: string;
  href: string;
  glyph: string;
};

export const CONTACT_LINKS: ContactLink[] = [
  {
    id: 'email',
    label: 'EMAIL',
    value: 'yaminalsadderr@gmail.com',
    href: 'mailto:yaminalsadderr@gmail.com',
    glyph: '✉',
  },
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    value: 'yamen-al-sader',
    href: LINKEDIN_URL,
    glyph: '⌬',
  },
  {
    id: 'github',
    label: 'GITHUB',
    value: `github.com/${GITHUB_HANDLE}`,
    href: `https://github.com/${GITHUB_HANDLE}`,
    glyph: '◐',
  },
  {
    id: 'location',
    label: 'BASE',
    value: 'Amman, Jordan',
    href: 'https://www.google.com/maps/place/Amman',
    glyph: '◇',
  },
];
