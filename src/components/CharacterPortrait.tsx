import { CHARACTERS, type CharacterId } from '../lib/characters';

type Props = {
  character: CharacterId;
  size?: 'sm' | 'md' | 'lg';
};

export function CharacterPortrait({ character, size = 'md' }: Props) {
  const c = CHARACTERS[character];
  return (
    <div className={`portrait portrait--${size}`} data-character={character}>
      <div className="portrait__sprite" aria-hidden="true">
        <CharacterGlyph id={character} />
      </div>
      <div className="portrait__plate">
        <div className="portrait__epithet">{c.epithet}</div>
        <div className="portrait__name">{c.realName.toUpperCase()}</div>
        <div className="portrait__motif">{c.motif}</div>
      </div>
    </div>
  );
}

/**
 * Placeholder pixel-art portraits drawn purely with CSS gradients +
 * positioned divs. Swap to <img> with real .png sprites in v2.
 */
function CharacterGlyph({ id }: { id: CharacterId }) {
  switch (id) {
    case 'gojo':
      return (
        <svg viewBox="0 0 32 40" shapeRendering="crispEdges" className="glyph">
          <rect width="32" height="40" fill="#0c1330" />
          <rect x="8" y="4" width="16" height="14" fill="#f5fbff" />
          <rect x="8" y="14" width="16" height="4" fill="#3a86ff" />
          <rect x="6" y="14" width="20" height="4" fill="#3a86ff" />
          <rect x="10" y="20" width="12" height="2" fill="#f5fbff" />
          <rect x="6" y="22" width="20" height="14" fill="#0c1330" />
          <rect x="6" y="22" width="2" height="14" fill="#f5fbff" />
          <rect x="24" y="22" width="2" height="14" fill="#f5fbff" />
        </svg>
      );
    case 'sukuna':
      return (
        <svg viewBox="0 0 32 40" shapeRendering="crispEdges" className="glyph">
          <rect width="32" height="40" fill="#150505" />
          <rect x="8" y="4" width="16" height="16" fill="#f7e9d0" />
          <rect x="10" y="9" width="3" height="2" fill="#c1121f" />
          <rect x="19" y="9" width="3" height="2" fill="#c1121f" />
          <rect x="8" y="14" width="16" height="2" fill="#c1121f" />
          <rect x="11" y="17" width="2" height="1" fill="#c1121f" />
          <rect x="19" y="17" width="2" height="1" fill="#c1121f" />
          <rect x="6" y="22" width="20" height="14" fill="#2a0a0a" />
          <rect x="14" y="24" width="4" height="10" fill="#ffb703" />
        </svg>
      );
    case 'megumi':
      return (
        <svg viewBox="0 0 32 40" shapeRendering="crispEdges" className="glyph">
          <rect width="32" height="40" fill="#181833" />
          <rect x="8" y="4" width="16" height="14" fill="#f5edd1" />
          <rect x="6" y="2" width="20" height="6" fill="#1a1a2e" />
          <rect x="10" y="11" width="3" height="2" fill="#1a1a2e" />
          <rect x="19" y="11" width="3" height="2" fill="#1a1a2e" />
          <rect x="6" y="22" width="20" height="14" fill="#3d348b" />
          <rect x="14" y="22" width="4" height="14" fill="#1a1a2e" />
        </svg>
      );
    case 'yuji':
      return (
        <svg viewBox="0 0 32 40" shapeRendering="crispEdges" className="glyph">
          <rect width="32" height="40" fill="#2a1421" />
          <rect x="8" y="4" width="16" height="14" fill="#f7d4b8" />
          <rect x="8" y="2" width="16" height="6" fill="#ef476f" />
          <rect x="10" y="11" width="3" height="2" fill="#1a1a1a" />
          <rect x="19" y="11" width="3" height="2" fill="#1a1a1a" />
          <rect x="11" y="15" width="10" height="2" fill="#1a1a1a" />
          <rect x="6" y="22" width="20" height="14" fill="#ffd166" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 32 40" shapeRendering="crispEdges" className="glyph">
          <rect width="32" height="40" fill="#14141f" />
          <rect x="6" y="6" width="20" height="28" fill="none" stroke="#9aa0b4" strokeWidth="2" />
          <text x="16" y="24" fontFamily="monospace" fontSize="10" fill="#9aa0b4" textAnchor="middle">
            SYS
          </text>
        </svg>
      );
  }
}
