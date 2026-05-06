import { useEffect, useRef } from 'react';
import { useGame } from '../game/GameContext';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { CharacterPortrait } from '../components/CharacterPortrait';
import { DialogBox } from '../components/DialogBox';
import { DPad } from '../components/DPad';
import { CHARACTERS } from '../lib/characters';
import { CONTACT_LINKS } from '../data/contact';

export function ContactScreen() {
  const { state, dispatch, play, settings } = useGame();
  const cursor = state.sectionCursor % CONTACT_LINKS.length;
  const refs = useRef<Array<HTMLAnchorElement | null>>([]);

  const back = () => dispatch({ type: 'BACK' });
  const move = (delta: -1 | 1) => {
    dispatch({ type: 'MOVE_SECTION', delta, itemCount: CONTACT_LINKS.length });
    play('move');
  };
  const confirm = () => {
    const link = CONTACT_LINKS[cursor];
    if (link) {
      play('confirm');
      window.open(link.href, link.id === 'email' ? '_self' : '_blank', 'noopener');
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

  const character = CHARACTERS.yuji;

  return (
    <div className="section section--contact">
      <header className="section__header">
        <h1 className="section__title">PARTY · CONTACT</h1>
        <button type="button" className="section__back" onClick={back}>
          [ ESC · BACK ]
        </button>
      </header>

      <div className="section__columns">
        <div className="section__main">
          <DialogBox
            speaker={character.epithet}
            text={`"${character.greeting}"\n\nPick a channel — let's talk.`}
            reduceMotion={settings.reduceMotion}
          />

          <ul className="contact-list" role="menu">
            {CONTACT_LINKS.map((c, i) => {
              const isActive = i === cursor;
              return (
                <li key={c.id} role="none">
                  <a
                    ref={(el) => {
                      refs.current[i] = el;
                    }}
                    role="menuitem"
                    href={c.href}
                    target={c.id === 'email' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className={`contact-card ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                    onMouseEnter={() => {
                      if (!isActive) {
                        dispatch({ type: 'SET_SECTION_CURSOR', cursor: i });
                        play('move');
                      }
                    }}
                    onClick={() => play('confirm')}
                  >
                    <span className="contact-card__glyph" aria-hidden="true">
                      {c.glyph}
                    </span>
                    <span>
                      <span className="contact-card__label">{c.label}</span>
                      <br />
                      <span className="contact-card__value">{c.value}</span>
                    </span>
                    <span className="contact-card__arrow" aria-hidden="true">
                      ▶
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <aside className="section__aside">
          <CharacterPortrait character="yuji" />
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
