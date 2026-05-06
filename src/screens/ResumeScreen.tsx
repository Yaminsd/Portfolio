import { useGame } from '../game/GameContext';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { CharacterPortrait } from '../components/CharacterPortrait';
import { DialogBox } from '../components/DialogBox';
import { PixelFrame } from '../components/PixelFrame';
import { DPad } from '../components/DPad';
import { CHARACTERS } from '../lib/characters';
import { RESUME, SKILLS } from '../data/resume';

export function ResumeScreen() {
  const { dispatch, settings } = useGame();
  const back = () => dispatch({ type: 'BACK' });

  useKeyboardNav({ onBack: back });

  const character = CHARACTERS.megumi;

  return (
    <div className="section section--resume">
      <header className="section__header">
        <h1 className="section__title">INVENTORY · RESUME</h1>
        <button type="button" className="section__back" onClick={back}>
          [ ESC · BACK ]
        </button>
      </header>

      <div className="section__columns">
        <div className="section__main">
          <DialogBox
            speaker={character.epithet}
            text={`"${character.greeting}"\n\nThe summon below downloads my CV.`}
            reduceMotion={settings.reduceMotion}
          />

          <a
            className="summon-button"
            href="/docs/Yazan_Resume.pdf"
            download
            aria-label="Download Yazan's resume PDF"
          >
            <span aria-hidden="true">▼</span>
            <span>SUMMON · DOWNLOAD CV</span>
          </a>

          <PixelFrame title="EXPERIENCE">
            <div className="resume-grid">
              {RESUME.map((slot) => (
                <article key={slot.id} className="resume-slot">
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

          <PixelFrame title="SKILLS · SHIKIGAMI">
            <div className="skills-grid">
              {SKILLS.map((s) => (
                <span key={s} className="skills-grid__chip">
                  {s}
                </span>
              ))}
            </div>
          </PixelFrame>
        </div>

        <aside className="section__aside">
          <CharacterPortrait character="megumi" />
        </aside>
      </div>

      <DPad onBack={back} />
    </div>
  );
}
