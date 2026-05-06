export type ResumeSlot = {
  id: string;
  shadow: string; // shikigami / inventory icon
  title: string;
  org: string;
  period: string;
  bullets: string[];
};

export const RESUME: ResumeSlot[] = [
  {
    id: 'ahu',
    shadow: '✦',
    title: 'B.Sc. — Computer Science',
    org: 'Al-Hussein Technical University · Amman',
    period: '2022 — present',
    bullets: [
      'Final-year student. Focus on product engineering and SDLC.',
      'Database Heroes IT Competition — Finalist (2025).',
    ],
  },
  {
    id: 'black-oasis-sales',
    shadow: '◆',
    title: 'Sales',
    org: 'Black Oasis · Amman',
    period: 'Jan 2025 — Feb 2025',
    bullets: [
      'Generated $4k+ in qualified pipeline within the first month via cold calls and social outreach.',
      'Partnered with marketing to refine messaging, lifting lead-to-meeting conversion.',
    ],
  },
  {
    id: 'black-oasis-support',
    shadow: '◆',
    title: 'Support Agent',
    org: 'Black Oasis · Amman',
    period: 'Sept 2024 — Dec 2024',
    bullets: [
      'Handled up to 500 calls/day, qualifying prospects and resolving objections in professional English with US-based clients.',
      'Documented every interaction in CRM and routed complex cases to keep service levels.',
    ],
  },
  {
    id: 'extensya',
    shadow: '◇',
    title: 'Customer Service Agent',
    org: 'Extensya · Amman',
    period: 'Jan 2023 — May 2023',
    bullets: [
      'Performed customer due diligence (CDD): identity verification, risk assessment, documentation.',
      'Collected KYC documentation and explained regulatory requirements to clients.',
    ],
  },
  {
    id: 'gocardi',
    shadow: '◈',
    title: 'Marketing Team Member',
    org: 'GoCardi · Amman',
    period: 'Nov 2022 — Mar 2023',
    bullets: [
      'Wrote SEO-aware product descriptions informed by market and competitor research.',
      'Curated trend-based events calendar and shipped social content with cross-functional teams.',
    ],
  },
  {
    id: 'cashu-design',
    shadow: '◉',
    title: 'Graphic Designer',
    org: 'Cashu · Dubai',
    period: 'Mar 2021 — Jun 2021',
    bullets: [
      'Designed marketing assets — social posts, banners, email graphics — aligned with brand guidelines.',
      'Translated briefs into clear visuals using Adobe Creative Cloud, reducing revision cycles.',
    ],
  },
  {
    id: 'cashu-kyc',
    shadow: '◉',
    title: 'KYC Officer',
    org: 'Cashu · Dubai',
    period: 'Jan 2021 — Mar 2021',
    bullets: [
      'Performed CDD across identity verification, risk assessment, and documentation.',
      'Coordinated with internal teams and trained on policy/regulatory updates.',
    ],
  },
];

export const SKILLS = [
  'Java',
  'C',
  'PHP',
  'CSS',
  'System Design',
  'Prototyping',
  'Agile Scrum',
  'UML / Architecture',
  'Leadership',
  'Communication',
  'Adaptability',
  'Time Management',
];
