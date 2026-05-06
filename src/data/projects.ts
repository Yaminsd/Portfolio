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
    id: 'ingreedy',
    name: 'Ingreedy — Smart Grocery Assistant',
    tagline:
      'Led evolutionary prototyping from low-fi sketches to a hi-fi consumer app. Shipped a social "Activity Board" that lifted engagement, validated by A/B tests on UI components.',
    hp: 95,
    level: 8,
    techniques: ['UX Research', 'Personas', 'A/B Testing', 'Hi-fi Prototyping'],
    status: 'shipped',
  },
  {
    id: 'noqodi',
    name: 'Noqodi — Automated Financial Planning',
    tagline:
      'Designed an AI-driven financial planning module proposal: requirements engineering, UML sequence + data-flow diagrams, full feasibility study, ROI analysis, predictive cash-flow forecasting.',
    hp: 80,
    level: 7,
    techniques: ['System Design', 'UML', 'Feasibility Study', 'Agile Scrum'],
    status: 'shipped',
  },
  {
    id: 'designar',
    name: 'DesignAR — AR Interior Designer',
    tagline:
      'Led a cross-functional team of five from problem framing to functional prototype. Owned the GTM strategy and pitched a scalable subscription model to investors.',
    hp: 70,
    level: 6,
    techniques: ['AR', 'Team Leadership', 'GTM Strategy', 'Pitching'],
    status: 'archived',
  },
];
