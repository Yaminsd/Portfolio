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
    value: 'abdallah.alsous@barqagency.com',
    href: 'mailto:abdallah.alsous@barqagency.com',
    glyph: '✉',
  },
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    value: 'linkedin.com/in/yazan',
    href: 'https://linkedin.com/in/',
    glyph: '⌬',
  },
  {
    id: 'github',
    label: 'GITHUB',
    value: 'github.com/yazan',
    href: 'https://github.com/',
    glyph: '◐',
  },
  {
    id: 'twitter',
    label: 'X / TWITTER',
    value: '@yazan',
    href: 'https://x.com/',
    glyph: '◇',
  },
];
