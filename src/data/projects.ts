export type Project = {
  id: string;
  name: string;
  tagline: string;
  /** progress 0-100, rendered as an HP bar */
  hp: number;
  level: number;
  techniques: string[];
  url?: string;
  status: 'shipped' | 'in-progress' | 'archived';
};

export const PROJECTS: Project[] = [
  {
    id: 'barq-academy',
    name: 'Barq Academy Builder',
    tagline: 'No-code builder for branded learning experiences.',
    hp: 90,
    level: 9,
    techniques: ['React', 'TypeScript', 'Drag-and-drop', 'CMS'],
    status: 'in-progress',
  },
  {
    id: 'barq-mvp',
    name: 'Barq MVP',
    tagline: 'Agency operating system — projects, clients, deliverables.',
    hp: 75,
    level: 7,
    techniques: ['Next.js', 'Postgres', 'Auth', 'Workflows'],
    status: 'in-progress',
  },
  {
    id: 'import-mvp',
    name: 'Import MVP',
    tagline: 'Streamlined import / logistics tooling for SMEs.',
    hp: 60,
    level: 5,
    techniques: ['React', 'Forms', 'PDF gen'],
    status: 'shipped',
  },
  {
    id: 'bmw-config',
    name: 'BMW Concept',
    tagline: 'Interactive configurator concept — pixel-clean motion.',
    hp: 100,
    level: 6,
    techniques: ['Figma', 'Prototype', 'Motion'],
    status: 'archived',
  },
];
