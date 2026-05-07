import { useCallback, useMemo, useReducer, useRef, useState } from 'react';
import { GameContext, type Settings, type StrikeRect } from './GameContext';
import { initialState, reducer } from './stateMachine';
import { Routes } from './routes';
import { ScanlineOverlay } from '../components/ScanlineOverlay';
import { Backdrop } from '../components/Backdrop';
import { EnergyParticles } from '../components/EnergyParticles';
import { CharacterStrike, type StrikeRequest } from '../components/CharacterStrike';
import { useSfx } from '../hooks/useSfx';
import { usePersistentState } from '../hooks/usePersistentState';
import { useSystemReducedMotion } from '../hooks/useReducedMotion';
import { CHARACTERS, type CharacterId } from '../lib/characters';

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

  const [strikeRequest, setStrikeRequest] = useState<StrikeRequest | null>(null);
  const strikeTargetRef = useRef<HTMLElement | null>(null);

  const requestStrike = useCallback(
    (
      rect: StrikeRect,
      character: CharacterId,
      onImpact: () => void,
      targetEl?: HTMLElement | null,
    ) => {
      if (reduceMotion) {
        onImpact();
        return;
      }
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      if (targetEl) {
        targetEl.setAttribute('data-strike-target', 'true');
        strikeTargetRef.current = targetEl;
      }
      setStrikeRequest({ id, rect, character });
      window.setTimeout(() => onImpact(), 720);
      window.setTimeout(() => {
        setStrikeRequest((curr) => (curr?.id === id ? null : curr));
        if (strikeTargetRef.current) {
          strikeTargetRef.current.removeAttribute('data-strike-target');
          strikeTargetRef.current = null;
        }
      }, 1280);
    },
    [reduceMotion],
  );

  const value = useMemo(
    () => ({ state, dispatch, play, settings, setSettings, requestStrike }),
    [state, play, settings, setSettings, requestStrike],
  );

  const characterTheme = SCREEN_TO_CHARACTER[state.screen];
  const characterName = CHARACTERS[characterTheme].realName;

  return (
    <GameContext.Provider value={value}>
      <a className="skip-link" href="#screen-content">
        Skip to content
      </a>
      <Backdrop />
      {!reduceMotion && state.screen !== 'BOOT' ? (
        <EnergyParticles themeKey={characterTheme} />
      ) : null}
      <div
        className="game-shell"
        data-character={characterTheme}
        data-screen={state.screen.toLowerCase()}
        data-reduce-motion={reduceMotion ? 'true' : 'false'}
      >
        <header className="game-shell__header" aria-hidden="true">
          <span className="game-shell__title">YAMEN.exe</span>
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
      <CharacterStrike request={strikeRequest} />
      <ScanlineOverlay enabled={settings.crtEffects && !reduceMotion} />
    </GameContext.Provider>
  );
}
