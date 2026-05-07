import { useMemo, type CSSProperties } from 'react';

const GLYPHS = ['✦', '❋', '◆', '✧', '✺', '✶'];

type Seed = {
  glyph: string;
  left: number;
  size: number;
  dur: number;
  delay: number;
  sway: number;
};

function seedFor(themeKey: string, count: number): Seed[] {
  let h = 2166136261;
  for (let i = 0; i < themeKey.length; i++) {
    h ^= themeKey.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const rand = () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return ((h >>> 0) % 10000) / 10000;
  };
  return Array.from({ length: count }).map((_, i) => ({
    glyph: GLYPHS[i % GLYPHS.length],
    left: rand() * 100,
    size: 12 + Math.floor(rand() * 18),
    dur: 14 + rand() * 12,
    delay: -rand() * 26,
    sway: (rand() - 0.5) * 80,
  }));
}

export function EnergyParticles({ themeKey, count = 8 }: { themeKey: string; count?: number }) {
  const seeds = useMemo(() => seedFor(themeKey, count), [themeKey, count]);
  return (
    <div className="energy-particles" aria-hidden="true">
      {seeds.map((s, i) => (
        <span
          key={`${themeKey}-${i}`}
          className="energy-particle"
          style={
            {
              left: `${s.left}%`,
              fontSize: `${s.size}px`,
              ['--dur' as string]: `${s.dur}s`,
              ['--delay' as string]: `${s.delay}s`,
              ['--sway' as string]: `${s.sway}px`,
            } as CSSProperties
          }
        >
          {s.glyph}
        </span>
      ))}
    </div>
  );
}
