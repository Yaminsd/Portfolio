import { useGame } from '../game/GameContext';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { DPad } from '../components/DPad';
import { PixelFrame } from '../components/PixelFrame';

export function OptionsScreen() {
  const { dispatch, settings, setSettings, play } = useGame();
  const back = () => dispatch({ type: 'BACK' });

  useKeyboardNav({ onBack: back });

  return (
    <div className="section section--options">
      <header className="section__header">
        <h1 className="section__title">OPTIONS</h1>
        <button type="button" className="section__back" onClick={back}>
          [ ESC · BACK ]
        </button>
      </header>

      <PixelFrame title="SYSTEM">
        <div className="options-list">
          <div className="options-row">
            <label htmlFor="opt-volume">
              <span className="options-row__label">SFX VOLUME</span>
              <span className="options-row__hint">
                {Math.round(settings.sfxVolume * 100)}%
              </span>
            </label>
            <input
              id="opt-volume"
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={settings.sfxVolume}
              onChange={(e) => {
                const sfxVolume = parseFloat(e.target.value);
                setSettings((s) => ({ ...s, sfxVolume }));
              }}
              onMouseUp={() => play('confirm')}
            />
          </div>

          <div className="options-row">
            <label htmlFor="opt-motion">
              <span className="options-row__label">REDUCE MOTION</span>
              <span className="options-row__hint">
                Disables typewriter, scanline drift, flicker.
              </span>
            </label>
            <input
              id="opt-motion"
              type="checkbox"
              checked={settings.reduceMotion}
              onChange={(e) =>
                setSettings((s) => ({ ...s, reduceMotion: e.target.checked }))
              }
            />
          </div>

          <div className="options-row">
            <label htmlFor="opt-crt">
              <span className="options-row__label">CRT EFFECTS</span>
              <span className="options-row__hint">
                Scanline + vignette overlay.
              </span>
            </label>
            <input
              id="opt-crt"
              type="checkbox"
              checked={settings.crtEffects}
              onChange={(e) =>
                setSettings((s) => ({ ...s, crtEffects: e.target.checked }))
              }
            />
          </div>
        </div>
      </PixelFrame>

      <DPad onBack={back} />
    </div>
  );
}
