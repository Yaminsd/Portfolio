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

function CharacterGlyph({ id }: { id: CharacterId }) {
  switch (id) {
    case 'gojo':
      return <GojoGlyph />;
    case 'sukuna':
      return <SukunaGlyph />;
    case 'megumi':
      return <MegumiGlyph />;
    case 'yuji':
      return <YujiGlyph />;
    default:
      return <SystemGlyph />;
  }
}

const VB = '0 0 48 64';

/* ──────────────────────────────────────────────────────────── Gojo */
function GojoGlyph() {
  return (
    <svg viewBox={VB} shapeRendering="crispEdges" className="glyph glyph--gojo">
      {/* aura halo */}
      <g className="glyph__aura">
        <circle cx="24" cy="24" r="22" fill="url(#gojo-aura)" opacity="0.55" />
      </g>
      <defs>
        <radialGradient id="gojo-aura">
          <stop offset="0%" stopColor="#9ec5ff" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#3a86ff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0c1330" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* body / uniform */}
      <g className="glyph__body">
        <rect x="12" y="44" width="24" height="20" fill="#0a0a14" />
        <rect x="14" y="44" width="20" height="2" fill="#1a1a30" />
        <rect x="22" y="44" width="4" height="20" fill="#3a86ff" />
        <rect x="14" y="50" width="2" height="14" fill="#1a1a30" />
        <rect x="32" y="50" width="2" height="14" fill="#1a1a30" />
      </g>

      {/* neck */}
      <rect x="22" y="40" width="4" height="4" fill="#f7d4b8" />

      {/* head */}
      <g className="glyph__face">
        <rect x="14" y="14" width="20" height="26" fill="#fbe5cd" />
        <rect x="14" y="14" width="20" height="2" fill="#e8c8a8" />
        <rect x="14" y="38" width="20" height="2" fill="#e8c8a8" />
      </g>

      {/* hair — white, layered */}
      <g className="glyph__hair">
        <rect x="12" y="6" width="24" height="8" fill="#f5fbff" />
        <rect x="10" y="10" width="2" height="8" fill="#f5fbff" />
        <rect x="36" y="10" width="2" height="8" fill="#f5fbff" />
        <rect x="14" y="4" width="4" height="2" fill="#f5fbff" />
        <rect x="20" y="2" width="4" height="2" fill="#f5fbff" />
        <rect x="26" y="4" width="4" height="2" fill="#f5fbff" />
        <rect x="32" y="6" width="2" height="2" fill="#f5fbff" />
        <rect x="14" y="6" width="2" height="2" fill="#f5fbff" />
        <rect x="14" y="12" width="2" height="2" fill="#dce5f5" />
        <rect x="32" y="12" width="2" height="2" fill="#dce5f5" />
        <rect x="20" y="10" width="2" height="2" fill="#dce5f5" />
        <rect x="26" y="10" width="2" height="2" fill="#dce5f5" />
      </g>

      {/* glow leak from beneath blindfold */}
      <g className="glyph__eyes">
        <rect x="16" y="22" width="6" height="1" fill="#9ec5ff" opacity="0.9" />
        <rect x="26" y="22" width="6" height="1" fill="#9ec5ff" opacity="0.9" />
      </g>

      {/* blindfold */}
      <g className="glyph__blindfold">
        <rect x="13" y="18" width="22" height="6" fill="#0a0a14" />
        <rect x="13" y="18" width="22" height="1" fill="#1a1a30" />
        <rect x="13" y="23" width="22" height="1" fill="#1a1a30" />
        <rect x="22" y="18" width="1" height="6" fill="#3a86ff" opacity="0.5" />
        <rect x="33" y="20" width="2" height="2" fill="#1a1a30" />
        <rect x="35" y="22" width="2" height="2" fill="#1a1a30" />
      </g>

      {/* mouth */}
      <rect x="22" y="32" width="4" height="1" fill="#a87060" />
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────── Sukuna */
function SukunaGlyph() {
  return (
    <svg viewBox={VB} shapeRendering="crispEdges" className="glyph glyph--sukuna">
      <g className="glyph__aura">
        <circle cx="24" cy="24" r="22" fill="url(#sukuna-aura)" opacity="0.55" />
      </g>
      <defs>
        <radialGradient id="sukuna-aura">
          <stop offset="0%" stopColor="#ffb703" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#c1121f" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#150505" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* body / bare chest with markings */}
      <g className="glyph__body">
        <rect x="10" y="44" width="28" height="20" fill="#f7e9d0" />
        <rect x="10" y="44" width="28" height="2" fill="#e0cfaf" />
        <rect x="14" y="48" width="20" height="1" fill="#c1121f" />
        <rect x="16" y="52" width="16" height="1" fill="#c1121f" />
        <rect x="18" y="56" width="12" height="1" fill="#c1121f" />
        {/* gold shoulder */}
        <rect x="36" y="44" width="2" height="6" fill="#ffb703" />
        <rect x="10" y="44" width="2" height="6" fill="#ffb703" />
      </g>

      {/* neck */}
      <rect x="22" y="40" width="4" height="4" fill="#f7e9d0" />

      {/* head */}
      <g className="glyph__face">
        <rect x="14" y="12" width="20" height="28" fill="#f7e9d0" />
        {/* face markings (red bands) */}
        <rect x="14" y="20" width="4" height="2" fill="#c1121f" />
        <rect x="30" y="20" width="4" height="2" fill="#c1121f" />
        <rect x="14" y="26" width="3" height="1" fill="#c1121f" />
        <rect x="31" y="26" width="3" height="1" fill="#c1121f" />
        <rect x="20" y="10" width="2" height="2" fill="#c1121f" />
        <rect x="26" y="10" width="2" height="2" fill="#c1121f" />

        {/* upper "cursed" eyes (smaller, decorative) */}
        <rect x="18" y="14" width="3" height="1" fill="#c1121f" />
        <rect x="27" y="14" width="3" height="1" fill="#c1121f" />
      </g>

      {/* hair — pink/peach spiky */}
      <g className="glyph__hair">
        <rect x="12" y="6" width="24" height="6" fill="#f7d4b8" />
        <rect x="14" y="4" width="2" height="2" fill="#f7d4b8" />
        <rect x="18" y="2" width="2" height="2" fill="#f7d4b8" />
        <rect x="22" y="0" width="4" height="2" fill="#f7d4b8" />
        <rect x="28" y="2" width="2" height="2" fill="#f7d4b8" />
        <rect x="32" y="4" width="2" height="2" fill="#f7d4b8" />
        <rect x="14" y="10" width="2" height="2" fill="#e3c0a4" />
        <rect x="32" y="10" width="2" height="2" fill="#e3c0a4" />
      </g>

      {/* main 4 eyes (red) */}
      <g className="glyph__eyes">
        <rect x="17" y="22" width="5" height="3" fill="#c1121f" />
        <rect x="26" y="22" width="5" height="3" fill="#c1121f" />
        <rect x="18" y="23" width="2" height="1" fill="#ffb703" />
        <rect x="27" y="23" width="2" height="1" fill="#ffb703" />
      </g>

      {/* mouth — dual fang grin */}
      <g className="glyph__mouth">
        <rect x="18" y="32" width="12" height="2" fill="#3a0808" />
        <rect x="20" y="33" width="2" height="2" fill="#f7e9d0" />
        <rect x="26" y="33" width="2" height="2" fill="#f7e9d0" />
        <rect x="14" y="36" width="3" height="1" fill="#c1121f" opacity="0.5" />
        <rect x="31" y="36" width="3" height="1" fill="#c1121f" opacity="0.5" />
      </g>
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────── Megumi */
function MegumiGlyph() {
  return (
    <svg viewBox={VB} shapeRendering="crispEdges" className="glyph glyph--megumi">
      <g className="glyph__aura">
        <circle cx="24" cy="24" r="22" fill="url(#megumi-aura)" opacity="0.5" />
      </g>
      <defs>
        <radialGradient id="megumi-aura">
          <stop offset="0%" stopColor="#7678ed" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#3d348b" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0a0a1f" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* shadow shikigami at the feet */}
      <g className="glyph__shadows">
        <rect x="6" y="58" width="6" height="2" fill="#1a1a2e" opacity="0.7" />
        <rect x="36" y="58" width="6" height="2" fill="#1a1a2e" opacity="0.7" />
        <rect x="8" y="56" width="2" height="2" fill="#1a1a2e" opacity="0.5" />
        <rect x="38" y="56" width="2" height="2" fill="#1a1a2e" opacity="0.5" />
      </g>

      {/* body / uniform */}
      <g className="glyph__body">
        <rect x="12" y="44" width="24" height="20" fill="#1a1a2e" />
        <rect x="14" y="44" width="20" height="2" fill="#23233a" />
        {/* hands in pockets — peeking out */}
        <rect x="12" y="52" width="2" height="6" fill="#fbe5cd" />
        <rect x="34" y="52" width="2" height="6" fill="#fbe5cd" />
        {/* zipper */}
        <rect x="23" y="46" width="2" height="18" fill="#3d348b" />
      </g>

      {/* neck */}
      <rect x="22" y="40" width="4" height="4" fill="#fbe5cd" />

      {/* head */}
      <g className="glyph__face">
        <rect x="14" y="14" width="20" height="26" fill="#fbe5cd" />
        <rect x="14" y="38" width="20" height="2" fill="#e8c8a8" />
      </g>

      {/* hair — spiky black */}
      <g className="glyph__hair">
        <rect x="10" y="8" width="28" height="8" fill="#151522" />
        <rect x="12" y="6" width="2" height="2" fill="#151522" />
        <rect x="16" y="4" width="2" height="2" fill="#151522" />
        <rect x="20" y="2" width="2" height="4" fill="#151522" />
        <rect x="24" y="0" width="2" height="6" fill="#151522" />
        <rect x="28" y="4" width="2" height="2" fill="#151522" />
        <rect x="32" y="6" width="2" height="2" fill="#151522" />
        <rect x="34" y="8" width="2" height="4" fill="#151522" />
        <rect x="10" y="14" width="2" height="6" fill="#151522" />
        <rect x="36" y="14" width="2" height="6" fill="#151522" />
      </g>

      {/* eyebrows — serious */}
      <rect x="16" y="20" width="6" height="1" fill="#1a1a2e" />
      <rect x="26" y="20" width="6" height="1" fill="#1a1a2e" />

      {/* eyes — calm, indigo */}
      <g className="glyph__eyes">
        <rect x="17" y="23" width="4" height="2" fill="#fbf7ff" />
        <rect x="27" y="23" width="4" height="2" fill="#fbf7ff" />
        <rect x="19" y="23" width="2" height="2" fill="#3d348b" />
        <rect x="29" y="23" width="2" height="2" fill="#3d348b" />
      </g>

      {/* mouth — flat */}
      <rect x="22" y="32" width="4" height="1" fill="#7a5a4a" />
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────── Yuji */
function YujiGlyph() {
  return (
    <svg viewBox={VB} shapeRendering="crispEdges" className="glyph glyph--yuji">
      <g className="glyph__aura">
        <circle cx="24" cy="24" r="22" fill="url(#yuji-aura)" opacity="0.55" />
      </g>
      <defs>
        <radialGradient id="yuji-aura">
          <stop offset="0%" stopColor="#fff3b0" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#ef476f" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2a1421" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* body — open jacket over white shirt */}
      <g className="glyph__body">
        <rect x="12" y="44" width="24" height="20" fill="#f5f2e7" />
        <rect x="10" y="44" width="6" height="20" fill="#1a1a1a" />
        <rect x="32" y="44" width="6" height="20" fill="#1a1a1a" />
        <rect x="10" y="44" width="2" height="20" fill="#ef476f" />
        <rect x="36" y="44" width="2" height="20" fill="#ef476f" />
        <rect x="22" y="44" width="4" height="20" fill="#1a1a1a" />
      </g>

      {/* neck */}
      <rect x="22" y="40" width="4" height="4" fill="#f7d4b8" />

      {/* head */}
      <g className="glyph__face">
        <rect x="14" y="12" width="20" height="28" fill="#f7d4b8" />
        <rect x="14" y="38" width="20" height="2" fill="#e3bb9c" />
      </g>

      {/* hair — pink spiky */}
      <g className="glyph__hair">
        <rect x="12" y="6" width="24" height="8" fill="#ef476f" />
        <rect x="10" y="10" width="2" height="6" fill="#ef476f" />
        <rect x="36" y="10" width="2" height="6" fill="#ef476f" />
        <rect x="14" y="4" width="2" height="2" fill="#ef476f" />
        <rect x="20" y="2" width="4" height="2" fill="#ef476f" />
        <rect x="26" y="4" width="4" height="2" fill="#ef476f" />
        <rect x="32" y="6" width="2" height="2" fill="#ef476f" />
        {/* pink → peach gradient suggestion */}
        <rect x="18" y="10" width="3" height="2" fill="#ffd166" opacity="0.5" />
        <rect x="27" y="10" width="3" height="2" fill="#ffd166" opacity="0.5" />
      </g>

      {/* eyebrows — friendly raised */}
      <rect x="16" y="18" width="5" height="1" fill="#3a1a14" />
      <rect x="27" y="18" width="5" height="1" fill="#3a1a14" />

      {/* eyes — wide, friendly */}
      <g className="glyph__eyes">
        <rect x="16" y="22" width="5" height="3" fill="#ffffff" />
        <rect x="27" y="22" width="5" height="3" fill="#ffffff" />
        <rect x="18" y="22" width="2" height="3" fill="#3a1a14" />
        <rect x="29" y="22" width="2" height="3" fill="#3a1a14" />
        <rect x="18" y="22" width="1" height="1" fill="#ffffff" />
        <rect x="29" y="22" width="1" height="1" fill="#ffffff" />
      </g>

      {/* big grin */}
      <g className="glyph__mouth">
        <rect x="18" y="30" width="12" height="3" fill="#3a1a14" />
        <rect x="19" y="31" width="10" height="1" fill="#ffffff" />
        <rect x="22" y="33" width="4" height="1" fill="#ef476f" opacity="0.6" />
      </g>
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────── System */
function SystemGlyph() {
  return (
    <svg viewBox={VB} shapeRendering="crispEdges" className="glyph">
      <rect width="48" height="64" fill="#14141f" />
      <rect x="6" y="10" width="36" height="44" fill="none" stroke="#9aa0b4" strokeWidth="2" />
      <text x="24" y="40" fontFamily="monospace" fontSize="14" fill="#9aa0b4" textAnchor="middle">
        SYS
      </text>
    </svg>
  );
}
