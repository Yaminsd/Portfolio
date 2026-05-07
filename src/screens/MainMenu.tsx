import { useMemo, type CSSProperties } from 'react';
import { useGame } from '../game/GameContext';
import { MenuList, type MenuItem } from '../components/MenuList';
import { CharacterPortrait } from '../components/CharacterPortrait';
import type { ScreenKind } from '../game/stateMachine';
import { DPad } from '../components/DPad';
import type { CharacterId } from '../lib/characters';

const stagger = (i: number): CSSProperties => ({ ['--i' as string]: i } as CSSProperties);

const SCREEN_TO_CHARACTER: Record<ScreenKind, CharacterId> = {
  BOOT: 'system',
  MAIN_MENU: 'system',
  ABOUT: 'gojo',
  PROJECTS: 'sukuna',
  RESUME: 'megumi',
  CONTACT: 'yuji',
  OPTIONS: 'system',
};

const ITEMS: Array<{ label: string; target: ScreenKind; hint: string }> = [
  { label: 'NEW GAME', target: 'ABOUT', hint: 'about / bio' },
  { label: 'CONTINUE', target: 'PROJECTS', hint: 'projects' },
  { label: 'INVENTORY', target: 'RESUME', hint: 'resume / cv' },
  { label: 'PARTY', target: 'CONTACT', hint: 'contact' },
  { label: 'OPTIONS', target: 'OPTIONS', hint: 'settings' },
];

export function MainMenu() {
  const { state, dispatch, requestStrike } = useGame();

  const items = useMemo<MenuItem[]>(
    () =>
      ITEMS.map((it) => ({
        label: it.label,
        hint: it.hint,
        onSelect: (el: HTMLElement) => {
          const rect = el.getBoundingClientRect();
          requestStrike(
            { left: rect.left, top: rect.top, width: rect.width, height: rect.height },
            SCREEN_TO_CHARACTER[it.target],
            () => dispatch({ type: 'GOTO', target: it.target }),
            el,
          );
        },
      })),
    [dispatch, requestStrike],
  );

  const onCursor = (next: number) => {
    dispatch({ type: 'SET_MENU_CURSOR', cursor: next });
  };

  const fireFromDPad = () => {
    const target = ITEMS[state.menuCursor]?.target;
    if (!target) return;
    const el = document.querySelector<HTMLButtonElement>(
      '.menu-list__item.is-active',
    );
    if (!el) {
      dispatch({ type: 'GOTO', target });
      return;
    }
    const rect = el.getBoundingClientRect();
    requestStrike(
      { left: rect.left, top: rect.top, width: rect.width, height: rect.height },
      SCREEN_TO_CHARACTER[target],
      () => dispatch({ type: 'GOTO', target }),
      el,
    );
  };

  return (
    <div className="main-menu">
      <section className="main-menu__title stagger-in" style={stagger(0)}>
        <h1 className="main-menu__title-text">YAMEN.exe</h1>
        <p className="main-menu__subtitle">— select a path —</p>
      </section>

      <section className="main-menu__center">
        <div className="main-menu__menu-frame stagger-in" style={stagger(2)}>
          <MenuList items={items} cursor={state.menuCursor} onCursor={onCursor} />
        </div>
        <aside className="main-menu__roster" aria-hidden="true">
          <div className="stagger-in" style={stagger(3)}>
            <CharacterPortrait character="gojo" size="sm" />
          </div>
          <div className="stagger-in" style={stagger(4)}>
            <CharacterPortrait character="sukuna" size="sm" />
          </div>
          <div className="stagger-in" style={stagger(5)}>
            <CharacterPortrait character="megumi" size="sm" />
          </div>
          <div className="stagger-in" style={stagger(6)}>
            <CharacterPortrait character="yuji" size="sm" />
          </div>
        </aside>
      </section>

      <DPad
        onUp={() =>
          dispatch({ type: 'MOVE_MENU', delta: -1, itemCount: ITEMS.length })
        }
        onDown={() =>
          dispatch({ type: 'MOVE_MENU', delta: 1, itemCount: ITEMS.length })
        }
        onConfirm={fireFromDPad}
      />
    </div>
  );
}
