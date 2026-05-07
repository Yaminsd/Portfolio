import { useEffect, type CSSProperties } from 'react';
import { FullBodyStriker } from './FullBodyStriker';
import type { CharacterId } from '../lib/characters';

export type StrikeRequest = {
  id: string;
  /** screen-space rect of the button being struck */
  rect: { left: number; top: number; width: number; height: number };
  character: CharacterId;
};

type Props = {
  request: StrikeRequest | null;
};

const SPRITE_W = 220;
const SPRITE_H = 330;
const LINE_COUNT = 14;

/* Per-character staging — sprite top-left = (target.right + dx, target.centerY + dy).
 * Each character stages BESIDE the button so their technique can reach across.
 * Megumi stands further right; his shadow pool/wolf does the work AT the button. */
const STRIKER_STAGE: Record<CharacterId, { dx: number; dy: number }> = {
  gojo: { dx: 60, dy: -110 },
  sukuna: { dx: 20, dy: -120 },
  megumi: { dx: 140, dy: -110 },
  yuji: { dx: 40, dy: -100 },
  system: { dx: 0, dy: -150 },
};

export function CharacterStrike({ request }: Props) {
  useEffect(() => {
    if (!request) return;
    document.body.classList.add('is-striking');
    return () => {
      document.body.classList.remove('is-striking');
    };
  }, [request]);

  if (!request) return null;

  const targetX = request.rect.left + request.rect.width / 2;
  const targetY = request.rect.top + request.rect.height / 2;
  const targetRight = request.rect.left + request.rect.width;
  const stage = STRIKER_STAGE[request.character];

  /* Mirror staging to the LEFT of the button when the right side would clip
   * off-screen. Sprite still faces left, so this looks fine for viewers. */
  const wouldClipRight = targetRight + stage.dx + SPRITE_W > window.innerWidth;
  const spriteLeft = wouldClipRight
    ? request.rect.left - stage.dx - SPRITE_W
    : targetRight + stage.dx;
  const spriteTop = targetY + stage.dy;

  /* Distance from sprite-fist (sprite left edge mid-arm) to strike target.
   * Used by Gojo's beam keyframe to project across that span. */
  const beamLength = wouldClipRight
    ? targetX - (spriteLeft + SPRITE_W) // sprite is to left of target
    : spriteLeft - targetX; // sprite to right; beam fires left

  const wrapperStyle: CSSProperties = {
    ['--strike-x' as string]: `${targetX}px`,
    ['--strike-y' as string]: `${targetY}px`,
    ['--beam-length' as string]: `${Math.abs(beamLength)}px`,
  };
  const spriteStyle: CSSProperties = {
    left: `${spriteLeft}px`,
    top: `${spriteTop}px`,
    width: `${SPRITE_W}px`,
    height: `${SPRITE_H}px`,
    transform: wouldClipRight ? 'scaleX(-1)' : undefined,
  };

  return (
    <div
      key={request.id}
      className="strike"
      style={wrapperStyle}
      data-character={request.character}
      aria-hidden="true"
    >
      <div className="strike__sprite" style={spriteStyle}>
        <FullBodyStriker character={request.character} />
      </div>

      <TechniqueExtras character={request.character} />

      <div className="strike__impact">
        {Array.from({ length: LINE_COUNT }).map((_, i) => (
          <span
            key={i}
            className="strike__line"
            style={{ ['--angle' as string]: `${(360 / LINE_COUNT) * i}deg` } as CSSProperties}
          />
        ))}
      </div>
      <div className="strike__shockwave" />
      <div className="strike__flash" />
    </div>
  );
}

/* Per-character extras anchored at the strike point (--strike-x / --strike-y). */
function TechniqueExtras({ character }: { character: CharacterId }) {
  switch (character) {
    case 'gojo':
      return <div className="strike__technique strike__technique--gojo" />;
    case 'sukuna':
      return (
        <div className="strike__technique strike__technique--sukuna">
          <span className="sukuna__slash sukuna__slash--1" />
          <span className="sukuna__slash sukuna__slash--2" />
          <span className="sukuna__slash sukuna__slash--3" />
          <span className="sukuna__slash sukuna__slash--4" />
        </div>
      );
    case 'megumi':
      return (
        <div className="strike__technique strike__technique--megumi">
          <span className="megumi__pool" />
          <svg
            className="megumi__wolf"
            viewBox="0 0 32 24"
            shapeRendering="crispEdges"
            aria-hidden="true"
          >
            <rect x="0" y="6" width="32" height="14" fill="#0a0a1f" />
            <rect x="4" y="2" width="6" height="6" fill="#0a0a1f" />
            <rect x="22" y="2" width="6" height="6" fill="#0a0a1f" />
            <rect x="6" y="10" width="3" height="3" fill="#7678ed" />
            <rect x="23" y="10" width="3" height="3" fill="#7678ed" />
            <rect x="4" y="16" width="3" height="6" fill="#fbf7ff" />
            <rect x="10" y="16" width="3" height="6" fill="#fbf7ff" />
            <rect x="19" y="16" width="3" height="6" fill="#fbf7ff" />
            <rect x="25" y="16" width="3" height="6" fill="#fbf7ff" />
          </svg>
        </div>
      );
    case 'yuji':
      return (
        <div className="strike__technique strike__technique--yuji">
          <span className="yuji__flash-burst" />
          <span className="yuji__flash-ring" />
        </div>
      );
    default:
      return null;
  }
}
