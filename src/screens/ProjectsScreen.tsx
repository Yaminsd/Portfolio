import { useEffect, useRef } from 'react';
import { useGame } from '../game/GameContext';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { CharacterPortrait } from '../components/CharacterPortrait';
import { DialogBox } from '../components/DialogBox';
import { DPad } from '../components/DPad';
import { CHARACTERS } from '../lib/characters';
import { PROJECTS } from '../data/projects';

export function ProjectsScreen() {
  const { state, dispatch, settings, play } = useGame();
  const cursor = state.sectionCursor % PROJECTS.length;
  const reduceMotion = settings.reduceMotion;
  const refs = useRef<Array<HTMLAnchorElement | HTMLButtonElement | null>>([]);

  const back = () => dispatch({ type: 'BACK' });
  const move = (delta: -1 | 1) => {
    dispatch({ type: 'MOVE_SECTION', delta, itemCount: PROJECTS.length });
    play('move');
  };
  const confirm = () => {
    const project = PROJECTS[cursor];
    if (project?.url) {
      play('confirm');
      window.open(project.url, '_blank', 'noopener');
    }
  };

  useKeyboardNav({
    onUp: () => move(-1),
    onDown: () => move(1),
    onConfirm: confirm,
    onBack: back,
  });

  useEffect(() => {
    refs.current[cursor]?.focus({ preventScroll: false });
  }, [cursor]);

  const character = CHARACTERS.sukuna;
  const active = PROJECTS[cursor];

  return (
    <div className="section section--projects">
      <header className="section__header">
        <h1 className="section__title">PROJECTS · BOSS LIST</h1>
        <button type="button" className="section__back" onClick={back}>
          [ ESC · BACK ]
        </button>
      </header>

      <div className="section__columns">
        <div className="section__main">
          <DialogBox
            speaker={character.epithet}
            text={`"${character.greeting}"\n\nNow — challenge a boss to learn more.`}
            reduceMotion={reduceMotion}
          />

          <ul className="projects-list" role="menu">
            {PROJECTS.map((p, i) => {
              const isActive = i === cursor;
              const Tag = p.url ? 'a' : 'button';
              return (
                <li key={p.id} role="none">
                  <Tag
                    ref={(el: HTMLAnchorElement | HTMLButtonElement | null) => {
                      refs.current[i] = el;
                    }}
                    role="menuitem"
                    type={p.url ? undefined : 'button'}
                    href={p.url}
                    target={p.url ? '_blank' : undefined}
                    rel={p.url ? 'noopener noreferrer' : undefined}
                    className={`boss-card ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                    onMouseEnter={() => {
                      if (!isActive) {
                        dispatch({ type: 'SET_SECTION_CURSOR', cursor: i });
                        play('move');
                      }
                    }}
                    onClick={() => {
                      if (!p.url) {
                        dispatch({ type: 'SET_SECTION_CURSOR', cursor: i });
                      }
                    }}
                  >
                    <div className="boss-card__level">
                      LV
                      <span className="boss-card__level-num">{p.level}</span>
                    </div>
                    <div className="boss-card__main">
                      <div className="boss-card__name">{p.name}</div>
                      <p className="boss-card__tagline">{p.tagline}</p>
                      <div className="boss-card__hp">
                        <span className="boss-card__hp-label">HP</span>
                        <div className="boss-card__hp-bar" aria-hidden="true">
                          <div
                            className="boss-card__hp-fill"
                            style={{ width: `${p.hp}%` }}
                          />
                        </div>
                      </div>
                      <div className="boss-card__techniques" aria-hidden="true">
                        {p.techniques.map((t) => (
                          <span key={t} className="boss-card__tech">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div
                      className={`boss-card__status boss-card__status--${p.status}`}
                    >
                      {p.status.replace('-', ' ')}
                    </div>
                  </Tag>
                </li>
              );
            })}
          </ul>
        </div>

        <aside className="section__aside">
          <CharacterPortrait character="sukuna" />
          {active ? (
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                color: 'var(--fg-muted)',
                marginTop: 12,
                textAlign: 'center',
              }}
            >
              Selected: <strong style={{ color: 'var(--fg)' }}>{active.name}</strong>
            </p>
          ) : null}
        </aside>
      </div>

      <DPad
        onUp={() => move(-1)}
        onDown={() => move(1)}
        onConfirm={confirm}
        onBack={back}
      />
    </div>
  );
}
