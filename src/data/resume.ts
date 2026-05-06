export type ResumeSlot = {
  id: string;
  shadow: string; // shikigami / inventory item icon
  title: string;
  org: string;
  period: string;
  bullets: string[];
};

export const RESUME: ResumeSlot[] = [
  {
    id: 'barq',
    shadow: '◆',
    title: 'Product Designer / Engineer',
    org: 'Barq Agency',
    period: '2025 — present',
    bullets: [
      'Lead end-to-end product work for client engagements.',
      'Design systems, prototyping, front-end implementation.',
    ],
  },
  {
    id: 'freelance',
    shadow: '◇',
    title: 'Freelance Designer / Developer',
    period: '2023 — 2025',
    org: 'Independent',
    bullets: [
      'Shipped marketing sites, MVPs, and brand systems.',
      'Worked across React, TypeScript, Figma, motion.',
    ],
  },
  {
    id: 'edu',
    shadow: '✦',
    title: 'B.Sc. — Computer Science',
    org: 'University',
    period: '2020 — 2024',
    bullets: ['Focus: HCI, design, applied ML.'],
  },
];

export const SKILLS = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Figma',
  'Design systems',
  'Motion / animation',
  'Postgres',
];
