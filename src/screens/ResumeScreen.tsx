import type { CSSProperties } from 'react';
import { useGame } from '../game/GameContext';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { CharacterPortrait } from '../components/CharacterPortrait';
import { DialogBox } from '../components/DialogBox';
import { PixelFrame } from '../components/PixelFrame';
import { DPad } from '../components/DPad';
import { RESUME, SKILLS } from '../data/resume';

const stagger = (i: number): CSSProperties => ({ ['--i' as string]: i } as CSSProperties);

export function ResumeScreen() {
  const { dispatch, settings } = useGame();
  const back = () => dispatch({ type: 'BACK' });

  useKeyboardNav({ onBack: back });

  return (
    <div className="section section--resume">
      <header className="section__header stagger-in" style={stagger(0)}>
        <h1 className="section__title">INVENTORY · RESUME</h1>
        <button type="button" className="section__back" onClick={back}>
          [ ESC · BACK ]
        </button>
      </header>

      <div className="section__columns">
        <div className="section__main">
          <div className="stagger-in" style={stagger(1)}>
            <DialogBox
              text={'The summon below downloads my CV.'}
              reduceMotion={settings.reduceMotion}
            />
          </div>

          <div className="summon-wrapper stagger-in" style={stagger(2)}>
            <span className="summon-ring summon-ring--outer" aria-hidden="true" />
            <span className="summon-ring summon-ring--inner" aria-hidden="true" />
            <a
              className="summon-button"
              href="/docs/Yamen_Al-Sader_Resume.pdf"
              download
              aria-label="Download Yamen Al-Sader's resume PDF"
            >
              <span aria-hidden="true">▼</span>
              <span>SUMMON · DOWNLOAD CV</span>
            </a>
          </div>

          <div className="stagger-in" style={stagger(3)}>
            <PixelFrame title="EXPERIENCE">
              <div className="resume-grid">
                {RESUME.map((slot, i) => (
                  <article
                    key={slot.id}
                    className="resume-slot stagger-in"
                    style={stagger(4 + i)}
                  >
                    <div className="resume-slot__icon" aria-hidden="true">
                      {slot.shadow}
                    </div>
                    <div>
                      <h3 className="resume-slot__title">{slot.title}</h3>
                      <div className="resume-slot__org">{slot.org}</div>
                      <div className="resume-slot__period">{slot.period}</div>
                      <ul className="resume-slot__bullets">
                        {slot.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </PixelFrame>
          </div>

          <div className="stagger-in" style={stagger(5)}>
            <PixelFrame title="SKILLS · SHIKIGAMI">
              <div className="skills-grid">
                {SKILLS.map((s, i) => (
                  <span
                    key={s}
                    className="skills-grid__chip stagger-in"
                    style={stagger(6 + i)}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </PixelFrame>
          </div>
        </div>

        <aside className="section__aside stagger-in" style={stagger(2)}>
          <CharacterPortrait character="megumi" />
        </aside>
      </div>

      <DPad onBack={back} />
    </div>
  );
}
