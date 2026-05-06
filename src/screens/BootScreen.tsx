import { useEffect } from 'react';
import { useGame } from '../game/GameContext';
import { useKeyboardNav } from '../hooks/useKeyboardNav';

export function BootScreen() {
  const { dispatch, play, settings } = useGame();
  const reduceMotion = settings.reduceMotion;

  useEffect(() => {
    play('boot');
    const id = window.setTimeout(
      () => dispatch({ type: 'BOOT_DONE' }),
      reduceMotion ? 200 : 1700,
    );
    return () => window.clearTimeout(id);
  }, [dispatch, play, reduceMotion]);

  useKeyboardNav({
    onConfirm: () => dispatch({ type: 'BOOT_DONE' }),
    onBack: () => dispatch({ type: 'BOOT_DONE' }),
  });

  return (
    <div className="boot-screen">
      <div className="boot-screen__bracket">▌</div>
      <h1 className="boot-screen__logo">YAZAN.exe</h1>
      <div className="boot-screen__sub">DOMAIN EXPANSION : PORTFOLIO</div>
      <div className="boot-screen__lines">
        <p>&gt; loading cursed energy...</p>
        <p>&gt; verifying six eyes integrity...</p>
        <p>&gt; press [ENTER] to continue</p>
      </div>
    </div>
  );
}
