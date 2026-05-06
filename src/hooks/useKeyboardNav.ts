import { useEffect } from 'react';

export type KeyboardHandlers = {
  onUp?: () => void;
  onDown?: () => void;
  onLeft?: () => void;
  onRight?: () => void;
  onConfirm?: () => void;
  onBack?: () => void;
};

const UP = new Set(['ArrowUp', 'w', 'W', 'k', 'K']);
const DOWN = new Set(['ArrowDown', 's', 'S', 'j', 'J']);
const LEFT = new Set(['ArrowLeft', 'a', 'A', 'h', 'H']);
const RIGHT = new Set(['ArrowRight', 'd', 'D', 'l', 'L']);
const CONFIRM = new Set(['Enter', ' ', 'z', 'Z']);
const BACK = new Set(['Escape', 'x', 'X', 'Backspace']);

export function useKeyboardNav(handlers: KeyboardHandlers, enabled = true): void {
  useEffect(() => {
    if (!enabled) return;
    const onKey = (e: KeyboardEvent) => {
      // Don't hijack typing inside form fields.
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      let handled: (() => void) | undefined;
      if (UP.has(e.key)) handled = handlers.onUp;
      else if (DOWN.has(e.key)) handled = handlers.onDown;
      else if (LEFT.has(e.key)) handled = handlers.onLeft;
      else if (RIGHT.has(e.key)) handled = handlers.onRight;
      else if (CONFIRM.has(e.key)) handled = handlers.onConfirm;
      else if (BACK.has(e.key)) handled = handlers.onBack;

      if (handled) {
        e.preventDefault();
        handled();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handlers, enabled]);
}
