type Props = { enabled: boolean };

export function ScanlineOverlay({ enabled }: Props) {
  if (!enabled) return null;
  return <div className="crt-overlay crt-flicker" aria-hidden="true" />;
}
