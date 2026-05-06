import { useGame } from '../game/GameContext';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { CharacterPortrait } from '../components/CharacterPortrait';
import { DialogBox } from '../components/DialogBox';
import { PixelFrame } from '../components/PixelFrame';
import { DPad } from '../components/DPad';
import { CHARACTERS } from '../lib/characters';
import { ABOUT } from '../data/about';

export function AboutScreen() {
  const { dispatch, settings } = useGame();
  const reduceMotion = settings.reduceMotion;
  const back = () => dispatch({ type: 'BACK' });

  useKeyboardNav({ onBack: back, onConfirm: back });

  const character = CHARACTERS.gojo;

  return (
    <div className="section section--about">
      <header className="section__header">
        <h1 className="section__title">{ABOUT.title}</h1>
        <button type="button" className="section__back" onClick={back}>
          [ ESC · BACK ]
        </button>
      </header>

      <div className="section__columns">
        <div className="section__main">
          <DialogBox
            speaker={character.epithet}
            text={`"${character.greeting}"\n\n${ABOUT.intro}`}
            reduceMotion={reduceMotion}
          />
          <PixelFrame title="STATS" className="section__stats">
            <ul className="stats-list">
              {ABOUT.stats.map((s) => (
                <li key={s.label} className="stats-list__row">
                  <span className="stats-list__key">{s.label}</span>
                  <span className="stats-list__dots" aria-hidden="true">
                    ...........................................
                  </span>
                  <span className="stats-list__val">{s.value}</span>
                </li>
              ))}
            </ul>
          </PixelFrame>

          <PixelFrame title="TECHNIQUES">
            <ul className="techniques">
              {ABOUT.techniques.map((t) => (
                <li key={t} className="techniques__row">
                  <span aria-hidden="true">◆</span> {t}
                </li>
              ))}
            </ul>
          </PixelFrame>
        </div>
        <aside className="section__aside">
          <CharacterPortrait character="gojo" />
        </aside>
      </div>

      <DPad onBack={back} onConfirm={back} />
    </div>
  );
}
