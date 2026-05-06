import { useMemo } from 'react';
import { useGame } from '../game/GameContext';
import { MenuList, type MenuItem } from '../components/MenuList';
import { CharacterPortrait } from '../components/CharacterPortrait';
import type { ScreenKind } from '../game/stateMachine';
import { DPad } from '../components/DPad';

const ITEMS: Array<{ label: string; target: ScreenKind; hint: string }> = [
  { label: 'NEW GAME', target: 'ABOUT', hint: 'about / bio' },
  { label: 'CONTINUE', target: 'PROJECTS', hint: 'projects' },
  { label: 'INVENTORY', target: 'RESUME', hint: 'resume / cv' },
  { label: 'PARTY', target: 'CONTACT', hint: 'contact' },
  { label: 'OPTIONS', target: 'OPTIONS', hint: 'settings' },
];

export function MainMenu() {
  const { state, dispatch } = useGame();

  const items = useMemo<MenuItem[]>(
    () =>
      ITEMS.map((it) => ({
        label: it.label,
        hint: it.hint,
        onSelect: () => dispatch({ type: 'GOTO', target: it.target }),
      })),
    [dispatch],
  );

  const onCursor = (next: number) => {
    dispatch({ type: 'SET_MENU_CURSOR', cursor: next });
  };

  return (
    <div className="main-menu">
      <section className="main-menu__title">
        <h1 className="main-menu__title-text">YAMEN.exe</h1>
        <p className="main-menu__subtitle">— select a path —</p>
      </section>

      <section className="main-menu__center">
        <div className="main-menu__menu-frame">
          <MenuList items={items} cursor={state.menuCursor} onCursor={onCursor} />
        </div>
        <aside className="main-menu__roster" aria-hidden="true">
          <CharacterPortrait character="gojo" size="sm" />
          <CharacterPortrait character="sukuna" size="sm" />
          <CharacterPortrait character="megumi" size="sm" />
          <CharacterPortrait character="yuji" size="sm" />
        </aside>
      </section>

      <DPad
        onUp={() =>
          dispatch({ type: 'MOVE_MENU', delta: -1, itemCount: ITEMS.length })
        }
        onDown={() =>
          dispatch({ type: 'MOVE_MENU', delta: 1, itemCount: ITEMS.length })
        }
        onConfirm={() => {
          const target = ITEMS[state.menuCursor]?.target;
          if (target) dispatch({ type: 'GOTO', target });
        }}
      />
    </div>
  );
}
