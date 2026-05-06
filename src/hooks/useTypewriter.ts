import { useEffect, useState } from 'react';

export function useTypewriter(text: string, speedMs: number = 25, enabled: boolean = true) {
  const [shown, setShown] = useState(enabled ? '' : text);
  const [done, setDone] = useState(!enabled);

  useEffect(() => {
    if (!enabled) {
      setShown(text);
      setDone(true);
      return;
    }
    setShown('');
    setDone(false);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      if (i >= text.length) {
        setShown(text);
        setDone(true);
        window.clearInterval(id);
      } else {
        setShown(text.slice(0, i));
      }
    }, speedMs);
    return () => window.clearInterval(id);
  }, [text, speedMs, enabled]);

  const skip = () => {
    setShown(text);
    setDone(true);
  };

  return { shown, done, skip };
}
