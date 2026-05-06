import { useMemo, useReducer } from 'react';
import { GameContext, type Settings } from './GameContext';
import { initialState, reducer } from './stateMachine';
import { Routes } from './routes';
import { ScanlineOverlay } from '../components/ScanlineOverlay';
import { useSfx } from '../hooks/useSfx';
import { usePersistentState } from '../hooks/usePersistentState';
import { useSystemReducedMotion } from '../hooks/useReducedMotion';
import { CHARACTERS } from '../lib/characters';

const DEFAULT_SETTINGS: Settings = {
  sfxVolume: 0.6,
  reduceMotion: false,
  crtEffects: true,
};

const SCREEN_TO_CHARACTER = {
  BOOT: 'system',
  MAIN_MENU: 'system',
  ABOUT: 'gojo',
  PROJECTS: 'sukuna',
  RESUME: 'megumi',
  CONTACT: 'yuji',
  OPTIONS: 'system',
} as const;

export function GameShell() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [settings, setSettings] = usePersistentState<Settings>(
    'yazan.exe.settings',
    DEFAULT_SETTINGS,
  );

  const systemReduce = useSystemReducedMotion();
  const reduceMotion = systemReduce || settings.reduceMotion;

  const play = useSfx(settings.sfxVolume);

  const value = useMemo(
    () => ({ state, dispatch, play, settings, setSettings }),
    [state, play, settings, setSettings],
  );

  const characterTheme = SCREEN_TO_CHARACTER[state.screen];
  const characterName = CHARACTERS[characterTheme].realName;

  return (
    <GameContext.Provider value={value}>
      <a className="skip-link" href="#screen-content">
        Skip to content
      </a>
      <div
        className="game-shell"
        data-character={characterTheme}
        data-reduce-motion={reduceMotion ? 'true' : 'false'}
      >
        <header className="game-shell__header" aria-hidden="true">
          <span className="game-shell__title">YAZAN.exe</span>
          <span className="game-shell__separator">·</span>
          <span className="game-shell__chapter">{characterName}</span>
        </header>
        <main id="screen-content" className="game-shell__stage">
          <Routes />
        </main>
        <footer className="game-shell__hints" aria-hidden="true">
          <span>↑↓ MOVE</span>
          <span>ENTER SELECT</span>
          <span>ESC BACK</span>
        </footer>
      </div>
      <ScanlineOverlay enabled={settings.crtEffects && !reduceMotion} />
    </GameContext.Provider>
  );
}
