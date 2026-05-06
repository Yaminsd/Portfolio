import { createContext, useContext, type Dispatch } from 'react';
import type { Action, GameState } from './stateMachine';
import type { SfxName } from '../hooks/useSfx';

export type Settings = {
  sfxVolume: number;
  reduceMotion: boolean;
  crtEffects: boolean;
};

export type GameContextValue = {
  state: GameState;
  dispatch: Dispatch<Action>;
  play: (name: SfxName) => void;
  settings: Settings;
  setSettings: (next: Settings | ((prev: Settings) => Settings)) => void;
};

export const GameContext = createContext<GameContextValue | null>(null);

export function useGame(): GameContextValue {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used inside <GameShell>');
  return ctx;
}
