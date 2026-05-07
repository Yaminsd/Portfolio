import { createContext, useContext, type Dispatch } from 'react';
import type { Action, GameState } from './stateMachine';
import type { SfxName } from '../hooks/useSfx';
import type { CharacterId } from '../lib/characters';

export type Settings = {
  sfxVolume: number;
  reduceMotion: boolean;
  crtEffects: boolean;
};

export type StrikeRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

export type GameContextValue = {
  state: GameState;
  dispatch: Dispatch<Action>;
  play: (name: SfxName) => void;
  settings: Settings;
  setSettings: (next: Settings | ((prev: Settings) => Settings)) => void;
  /**
   * Trigger a character strike at the clicked button's rect, then run the
   * navigation callback at impact frame. If reduce-motion is on, skips the
   * animation and runs the callback immediately. The optional targetEl is
   * decorated with [data-strike-target] so it can recoil on impact.
   */
  requestStrike: (
    rect: StrikeRect,
    character: CharacterId,
    onImpact: () => void,
    targetEl?: HTMLElement | null,
  ) => void;
};

export const GameContext = createContext<GameContextValue | null>(null);

export function useGame(): GameContextValue {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used inside <GameShell>');
  return ctx;
}
