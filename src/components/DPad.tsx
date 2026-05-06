import { useGame } from '../game/GameContext';

type Props = {
  onUp?: () => void;
  onDown?: () => void;
  onConfirm?: () => void;
  onBack?: () => void;
};

/**
 * Mobile on-screen controls. Mounted by GameShell when viewport ≤ 768px.
 * Each button is a real <button> so it's keyboard/screen-reader accessible too.
 */
export function DPad({ onUp, onDown, onConfirm, onBack }: Props) {
  const { play } = useGame();

  const press = (cb?: () => void, sfx: 'move' | 'confirm' | 'back' = 'move') => {
    if (!cb) return;
    play(sfx);
    cb();
  };

  return (
    <div className="dpad" aria-label="On-screen controls">
      <div className="dpad__pad">
        <button
          type="button"
          className="dpad__btn dpad__btn--up"
          onClick={() => press(onUp, 'move')}
          aria-label="Up"
        >
          ▲
        </button>
        <button
          type="button"
          className="dpad__btn dpad__btn--down"
          onClick={() => press(onDown, 'move')}
          aria-label="Down"
        >
          ▼
        </button>
      </div>
      <div className="dpad__actions">
        <button
          type="button"
          className="dpad__btn dpad__btn--b"
          onClick={() => press(onBack, 'back')}
          aria-label="Back"
        >
          B
        </button>
        <button
          type="button"
          className="dpad__btn dpad__btn--a"
          onClick={() => press(onConfirm, 'confirm')}
          aria-label="Confirm"
        >
          A
        </button>
      </div>
    </div>
  );
}
