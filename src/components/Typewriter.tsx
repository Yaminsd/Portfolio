import { useTypewriter } from '../hooks/useTypewriter';

type Props = {
  text: string;
  speedMs?: number;
  enabled?: boolean;
  className?: string;
};

export function Typewriter({ text, speedMs = 22, enabled = true, className }: Props) {
  const { shown, done } = useTypewriter(text, speedMs, enabled);
  return (
    <span className={className}>
      {shown}
      {!done && enabled ? <span className="typewriter__caret" aria-hidden="true">▌</span> : null}
    </span>
  );
}
