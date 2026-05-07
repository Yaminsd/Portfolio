import type { ReactNode } from 'react';
import { Typewriter } from './Typewriter';

type Props = {
  speaker?: string;
  text: string;
  reduceMotion: boolean;
  children?: ReactNode;
};

export function DialogBox({ speaker, text, reduceMotion, children }: Props) {
  return (
    <div className={`dialog-box${speaker ? '' : ' dialog-box--plain'}`}>
      {speaker ? <div className="dialog-box__speaker">{speaker}</div> : null}
      <p className="dialog-box__text">
        <Typewriter text={text} enabled={!reduceMotion} />
      </p>
      {children}
    </div>
  );
}
