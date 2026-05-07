import { useEffect, useRef } from 'react';
import { useGame } from '../game/GameContext';
import { useKeyboardNav } from '../hooks/useKeyboardNav';

export type MenuItem = {
  label: string;
  hint?: string;
  onSelect: (el: HTMLElement) => void;
  disabled?: boolean;
};

type Props = {
  items: MenuItem[];
  cursor: number;
  onCursor: (next: number) => void;
  enabled?: boolean;
};

export function MenuList({ items, cursor, onCursor, enabled = true }: Props) {
  const { play } = useGame();
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Move focus to the active item so screen readers announce it.
  useEffect(() => {
    if (!enabled) return;
    itemRefs.current[cursor]?.focus({ preventScroll: false });
  }, [cursor, enabled]);

  const move = (delta: -1 | 1) => {
    if (items.length === 0) return;
    const next = ((cursor + delta) % items.length + items.length) % items.length;
    onCursor(next);
    play('move');
  };

  const confirm = () => {
    const item = items[cursor];
    const el = itemRefs.current[cursor];
    if (!item || item.disabled || !el) return;
    play('confirm');
    item.onSelect(el);
  };

  useKeyboardNav(
    {
      onUp: () => move(-1),
      onDown: () => move(1),
      onConfirm: confirm,
    },
    enabled,
  );

  return (
    <ul className="menu-list" role="menu">
      {items.map((item, i) => {
        const active = i === cursor;
        return (
          <li key={item.label} role="none" className="menu-list__item-wrap">
            <button
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              role="menuitem"
              type="button"
              className={`menu-list__item ${active ? 'is-active' : ''}`}
              aria-current={active ? 'true' : undefined}
              disabled={item.disabled}
              onMouseEnter={() => {
                if (!active && enabled) {
                  onCursor(i);
                  play('move');
                }
              }}
              onClick={(e) => {
                onCursor(i);
                if (!item.disabled) {
                  play('confirm');
                  item.onSelect(e.currentTarget);
                }
              }}
            >
              <span className="menu-list__cursor" aria-hidden="true">
                {active ? '▶' : ' '}
              </span>
              <span className="menu-list__label">{item.label}</span>
              {item.hint ? <span className="menu-list__hint">{item.hint}</span> : null}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
