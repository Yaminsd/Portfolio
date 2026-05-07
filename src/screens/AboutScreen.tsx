import type { CSSProperties } from 'react';
import { useGame } from '../game/GameContext';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { CharacterPortrait } from '../components/CharacterPortrait';
import { DialogBox } from '../components/DialogBox';
import { PixelFrame } from '../components/PixelFrame';
import { DPad } from '../components/DPad';
import { ABOUT } from '../data/about';

const stagger = (i: number): CSSProperties => ({ ['--i' as string]: i } as CSSProperties);

export function AboutScreen() {
  const { dispatch, settings } = useGame();
  const reduceMotion = settings.reduceMotion;
  const back = () => dispatch({ type: 'BACK' });

  useKeyboardNav({ onBack: back, onConfirm: back });

  return (
    <div className="section section--about">
      <header className="section__header stagger-in" style={stagger(0)}>
        <h1 className="section__title">{ABOUT.title}</h1>
        <button type="button" className="section__back" onClick={back}>
          [ ESC · BACK ]
        </button>
      </header>

      <div className="section__columns">
        <div className="section__main">
          <div className="stagger-in" style={stagger(1)}>
            <DialogBox text={ABOUT.intro} reduceMotion={reduceMotion} />
          </div>
          <div className="stagger-in" style={stagger(2)}>
            <PixelFrame title="STATS" className="section__stats">
              <ul className="stats-list">
                {ABOUT.stats.map((s, i) => (
                  <li
                    key={s.label}
                    className="stats-list__row stagger-in"
                    style={stagger(3 + i)}
                  >
                    <span className="stats-list__key">{s.label}</span>
                    <span className="stats-list__dots" aria-hidden="true">
                      ...........................................
                    </span>
                    <span className="stats-list__val">{s.value}</span>
                  </li>
                ))}
              </ul>
            </PixelFrame>
          </div>

          <div className="stagger-in" style={stagger(4)}>
            <PixelFrame title="TECHNIQUES">
              <ul className="techniques">
                {ABOUT.techniques.map((t, i) => (
                  <li
                    key={t}
                    className="techniques__row stagger-in"
                    style={stagger(5 + i)}
                  >
                    <span aria-hidden="true">◆</span> {t}
                  </li>
                ))}
              </ul>
            </PixelFrame>
          </div>
        </div>
        <aside className="section__aside stagger-in" style={stagger(2)}>
          <CharacterPortrait character="gojo" />
        </aside>
      </div>

      <DPad onBack={back} onConfirm={back} />
    </div>
  );
}
