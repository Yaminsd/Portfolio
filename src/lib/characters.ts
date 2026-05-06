export type CharacterId = 'gojo' | 'sukuna' | 'megumi' | 'yuji' | 'system';

export type Character = {
  id: CharacterId;
  epithet: string;
  realName: string;
  motif: string;
  greeting: string;
};

export const CHARACTERS: Record<CharacterId, Character> = {
  gojo: {
    id: 'gojo',
    epithet: 'The Strongest',
    realName: 'Gojo',
    motif: 'Limitless · Six Eyes',
    greeting: "Throughout heaven and earth, I alone am the honored one.",
  },
  sukuna: {
    id: 'sukuna',
    epithet: 'King of Curses',
    realName: 'Sukuna',
    motif: 'Malevolent Shrine',
    greeting: 'Know your place, mortal. The bosses await.',
  },
  megumi: {
    id: 'megumi',
    epithet: 'Shadow Wielder',
    realName: 'Megumi',
    motif: 'Ten Shadows Technique',
    greeting: 'Open the inventory. Summon what you need.',
  },
  yuji: {
    id: 'yuji',
    epithet: 'Cursed Vessel',
    realName: 'Yuji',
    motif: 'Divergent Fist',
    greeting: "Yo! Don't be a stranger — hit me up.",
  },
  system: {
    id: 'system',
    epithet: 'System',
    realName: 'System',
    motif: 'Settings',
    greeting: 'Configure your experience.',
  },
};
