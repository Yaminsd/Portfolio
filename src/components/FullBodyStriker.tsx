import type { CharacterId } from '../lib/characters';

/* Full-body pixel-art strikers — facing LEFT, staging beside the button.
 * Each animatable body part is wrapped in a named <g> so CSS keyframes
 * (scoped via .strike[data-character='X']) can move it independently.
 * Technique-specific extras rendered AT THE STRIKE POINT (slashes, shadow
 * pool, wolf, beam, flash burst) live in CharacterStrike.tsx, not here.
 */

type Props = { character: CharacterId };

const VB = '0 0 64 96';

export function FullBodyStriker({ character }: Props) {
  switch (character) {
    case 'gojo':
      return <GojoStriker />;
    case 'sukuna':
      return <SukunaStriker />;
    case 'megumi':
      return <MegumiStriker />;
    case 'yuji':
      return <YujiStriker />;
    default:
      return <SystemStriker />;
  }
}

/* ─────────────────────────────────── Gojo — Hollow Purple */
function GojoStriker() {
  return (
    <svg viewBox={VB} shapeRendering="crispEdges" className="striker striker--gojo" overflow="visible">
      <defs>
        <radialGradient id="gojo-strike-aura" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#9ec5ff" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#3a86ff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0c1330" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gojo-orb-blue" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8f3ff" stopOpacity="1" />
          <stop offset="60%" stopColor="#3a86ff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#1a3a8a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gojo-orb-red" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff0e0" stopOpacity="1" />
          <stop offset="60%" stopColor="#ef476f" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#5a0d1a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gojo-orb-purple" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f4d6ff" stopOpacity="1" />
          <stop offset="55%" stopColor="#9d4edd" stopOpacity="1" />
          <stop offset="100%" stopColor="#240046" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse className="striker__aura" cx="32" cy="40" rx="34" ry="40" fill="url(#gojo-strike-aura)" />

      {/* HEAD */}
      <g className="striker-part gojo__head">
        <rect x="20" y="6" width="20" height="6" fill="#f5fbff" />
        <rect x="18" y="8" width="2" height="8" fill="#f5fbff" />
        <rect x="40" y="8" width="2" height="8" fill="#f5fbff" />
        <rect x="22" y="2" width="4" height="4" fill="#f5fbff" />
        <rect x="28" y="0" width="4" height="6" fill="#f5fbff" />
        <rect x="34" y="2" width="4" height="4" fill="#f5fbff" />
        <rect x="20" y="12" width="20" height="12" fill="#fbe5cd" />
        <rect x="19" y="14" width="22" height="4" fill="#0a0a14" />
        <rect x="28" y="14" width="2" height="4" fill="#3a86ff" opacity="0.6" />
        <rect x="34" y="15" width="2" height="2" fill="#3a86ff" opacity="0.6" />
        <rect x="28" y="20" width="4" height="1" fill="#a87060" />
      </g>

      {/* NECK + TORSO */}
      <g className="striker-part gojo__torso">
        <rect x="28" y="24" width="6" height="3" fill="#f7d4b8" />
        <rect x="20" y="27" width="22" height="22" fill="#0a0a14" />
        <rect x="22" y="27" width="18" height="2" fill="#1a1a30" />
        <rect x="28" y="27" width="6" height="22" fill="#3a86ff" opacity="0.35" />
        <rect x="20" y="49" width="22" height="4" fill="#1a1a30" />
      </g>

      {/* BACK ARM — right side, comes forward to meet front arm */}
      <g className="striker-part gojo__arm-back">
        <rect x="42" y="30" width="10" height="6" fill="#0a0a14" />
        <rect x="50" y="34" width="8" height="6" fill="#fbe5cd" />
      </g>

      {/* FRONT ARM — extended LEFT, fist at sprite's left edge.
          Group includes the fist + the orbs that spawn around it. */}
      <g className="striker-part gojo__arm-front">
        <rect x="14" y="28" width="8" height="6" fill="#0a0a14" />
        <rect x="6" y="29" width="10" height="6" fill="#0a0a14" />
        <rect x="0" y="26" width="8" height="10" fill="#fbe5cd" />
        <rect x="0" y="26" width="2" height="10" fill="#e8c8a8" />
        <rect x="0" y="32" width="8" height="1" fill="#3a86ff" opacity="0.6" />

        {/* Orbs anchor at the fist (cx=4, cy=31). Hidden until cast phase. */}
        <circle className="gojo__orb gojo__orb--blue" cx="4" cy="31" r="0" fill="url(#gojo-orb-blue)" />
        <circle className="gojo__orb gojo__orb--red" cx="4" cy="31" r="0" fill="url(#gojo-orb-red)" />
        <circle className="gojo__orb gojo__orb--purple" cx="4" cy="31" r="0" fill="url(#gojo-orb-purple)" />
      </g>

      {/* LEGS */}
      <g className="striker-part gojo__legs">
        <rect x="22" y="53" width="8" height="20" fill="#0a0a14" />
        <rect x="32" y="53" width="8" height="14" fill="#0a0a14" />
        <rect x="36" y="65" width="8" height="14" fill="#0a0a14" />
        <rect x="20" y="73" width="12" height="4" fill="#1a1a30" />
        <rect x="34" y="79" width="12" height="4" fill="#1a1a30" />
      </g>

      {/* burst dust under feet */}
      <rect x="14" y="84" width="36" height="2" fill="#3a86ff" opacity="0.7" />
      <rect x="20" y="87" width="26" height="2" fill="#9ec5ff" opacity="0.5" />
    </svg>
  );
}

/* ─────────────────────────────────── Sukuna — 4-arm Dismantle */
function SukunaStriker() {
  return (
    <svg viewBox={VB} shapeRendering="crispEdges" className="striker striker--sukuna" overflow="visible">
      <defs>
        <radialGradient id="sukuna-strike-aura" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ffb703" stopOpacity="0.8" />
          <stop offset="55%" stopColor="#c1121f" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#150505" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse className="striker__aura" cx="32" cy="40" rx="36" ry="42" fill="url(#sukuna-strike-aura)" />

      {/* HEAD */}
      <g className="striker-part sukuna__head">
        <rect x="20" y="6" width="20" height="6" fill="#f7d4b8" />
        <rect x="22" y="2" width="4" height="4" fill="#f7d4b8" />
        <rect x="28" y="0" width="4" height="6" fill="#f7d4b8" />
        <rect x="34" y="2" width="4" height="4" fill="#f7d4b8" />
        <rect x="20" y="12" width="20" height="14" fill="#f7e9d0" />
        <rect x="20" y="16" width="4" height="2" fill="#c1121f" />
        <rect x="36" y="16" width="4" height="2" fill="#c1121f" />
        <rect x="22" y="22" width="3" height="1" fill="#c1121f" />
        <rect x="35" y="22" width="3" height="1" fill="#c1121f" />
        <rect x="22" y="18" width="5" height="3" fill="#c1121f" />
        <rect x="33" y="18" width="5" height="3" fill="#c1121f" />
        <rect x="23" y="19" width="2" height="1" fill="#ffb703" />
        <rect x="34" y="19" width="2" height="1" fill="#ffb703" />
        <rect x="24" y="25" width="12" height="1" fill="#3a0808" />
      </g>

      {/* TORSO */}
      <g className="striker-part sukuna__torso">
        <rect x="28" y="26" width="6" height="3" fill="#f7e9d0" />
        <rect x="18" y="29" width="26" height="22" fill="#f7e9d0" />
        <rect x="18" y="29" width="2" height="22" fill="#ffb703" />
        <rect x="42" y="29" width="2" height="22" fill="#ffb703" />
        <rect x="22" y="34" width="18" height="1" fill="#c1121f" />
        <rect x="24" y="40" width="14" height="1" fill="#c1121f" />
        <rect x="26" y="46" width="10" height="1" fill="#c1121f" />
        <rect x="18" y="51" width="26" height="3" fill="#3a0808" />
        <rect x="18" y="51" width="26" height="1" fill="#ffb703" />
      </g>

      {/* FRONT-UPPER ARM — extends LEFT, fist at sprite's left edge */}
      <g className="striker-part sukuna__arm-fu">
        <rect x="12" y="28" width="8" height="6" fill="#f7e9d0" />
        <rect x="4" y="28" width="10" height="6" fill="#f7e9d0" />
        <rect x="0" y="25" width="8" height="10" fill="#f7e9d0" />
        <rect x="0" y="25" width="2" height="10" fill="#e3cfaf" />
        <rect x="0" y="30" width="8" height="1" fill="#c1121f" />
      </g>

      {/* FRONT-LOWER ARM — across chest, fist at sprite's left edge lower */}
      <g className="striker-part sukuna__arm-fl">
        <rect x="14" y="40" width="14" height="5" fill="#f7e9d0" />
        <rect x="6" y="40" width="10" height="5" fill="#f7e9d0" />
        <rect x="0" y="39" width="8" height="7" fill="#f7e9d0" />
        <rect x="0" y="42" width="8" height="1" fill="#c1121f" />
      </g>

      {/* BACK-UPPER ARM — pulled back to right */}
      <g className="striker-part sukuna__arm-bu">
        <rect x="44" y="30" width="12" height="6" fill="#f7e9d0" />
        <rect x="54" y="34" width="8" height="6" fill="#f7e9d0" />
      </g>

      {/* BACK-LOWER ARM — also back */}
      <g className="striker-part sukuna__arm-bl">
        <rect x="42" y="44" width="14" height="5" fill="#f7e9d0" />
        <rect x="54" y="48" width="6" height="5" fill="#f7e9d0" />
      </g>

      {/* LEGS */}
      <g className="striker-part sukuna__legs">
        <rect x="20" y="54" width="10" height="20" fill="#f7e9d0" />
        <rect x="32" y="54" width="10" height="14" fill="#f7e9d0" />
        <rect x="36" y="66" width="10" height="14" fill="#f7e9d0" />
        <rect x="22" y="60" width="6" height="1" fill="#c1121f" />
        <rect x="38" y="72" width="6" height="1" fill="#c1121f" />
        <rect x="18" y="74" width="14" height="4" fill="#3a0808" />
        <rect x="34" y="80" width="14" height="4" fill="#3a0808" />
      </g>

      <rect x="12" y="86" width="40" height="2" fill="#c1121f" opacity="0.6" />
      <rect x="20" y="89" width="26" height="2" fill="#ffb703" opacity="0.5" />
    </svg>
  );
}

/* ─────────────────────────────────── Megumi — Divine Dog summon
   Wolf and shadow pool render at the strike point (in CharacterStrike.tsx). */
function MegumiStriker() {
  return (
    <svg viewBox={VB} shapeRendering="crispEdges" className="striker striker--megumi" overflow="visible">
      <defs>
        <radialGradient id="megumi-strike-aura" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#7678ed" stopOpacity="0.75" />
          <stop offset="60%" stopColor="#3d348b" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0a0a1f" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse className="striker__aura" cx="32" cy="40" rx="34" ry="40" fill="url(#megumi-strike-aura)" />

      <g className="striker-part megumi__head">
        <rect x="18" y="6" width="24" height="8" fill="#151522" />
        <rect x="20" y="2" width="4" height="4" fill="#151522" />
        <rect x="26" y="0" width="4" height="6" fill="#151522" />
        <rect x="32" y="2" width="4" height="4" fill="#151522" />
        <rect x="38" y="4" width="4" height="2" fill="#151522" />
        <rect x="20" y="14" width="20" height="12" fill="#fbe5cd" />
        <rect x="22" y="18" width="6" height="1" fill="#1a1a2e" />
        <rect x="32" y="18" width="6" height="1" fill="#1a1a2e" />
        <rect x="23" y="20" width="4" height="2" fill="#fbf7ff" />
        <rect x="33" y="20" width="4" height="2" fill="#fbf7ff" />
        <rect x="25" y="20" width="2" height="2" fill="#3d348b" />
        <rect x="35" y="20" width="2" height="2" fill="#3d348b" />
        <rect x="28" y="24" width="4" height="1" fill="#7a5a4a" />
      </g>

      <g className="striker-part megumi__torso">
        <rect x="28" y="26" width="6" height="3" fill="#fbe5cd" />
        <rect x="20" y="29" width="22" height="22" fill="#1a1a2e" />
        <rect x="30" y="29" width="2" height="22" fill="#3d348b" />
        <rect x="20" y="51" width="22" height="4" fill="#23233a" />
      </g>

      {/* SUMMONING HAND — front arm, palm extended LEFT toward strike point */}
      <g className="striker-part megumi__hand-summon">
        <rect x="14" y="32" width="8" height="6" fill="#1a1a2e" />
        <rect x="6" y="32" width="10" height="6" fill="#1a1a2e" />
        <rect x="0" y="30" width="8" height="10" fill="#fbe5cd" />
        <rect x="0" y="30" width="2" height="2" fill="#fbe5cd" />
        <rect x="2" y="28" width="2" height="2" fill="#fbe5cd" />
        <rect x="4" y="30" width="2" height="2" fill="#fbe5cd" />
        {/* glowing palm rune */}
        <rect className="megumi__palm-glow" x="1" y="32" width="6" height="6" fill="#7678ed" opacity="0" />
      </g>

      {/* BACK ARM */}
      <g className="striker-part megumi__arm-back">
        <rect x="42" y="32" width="10" height="6" fill="#1a1a2e" />
        <rect x="50" y="36" width="8" height="6" fill="#fbe5cd" />
      </g>

      {/* LEGS */}
      <g className="striker-part megumi__legs">
        <rect x="22" y="55" width="8" height="20" fill="#1a1a2e" />
        <rect x="32" y="55" width="8" height="14" fill="#1a1a2e" />
        <rect x="36" y="67" width="8" height="14" fill="#1a1a2e" />
        <rect x="20" y="75" width="12" height="4" fill="#0a0a1f" />
        <rect x="34" y="81" width="12" height="4" fill="#0a0a1f" />
      </g>

      <rect x="10" y="86" width="44" height="2" fill="#3d348b" opacity="0.7" />
      <rect x="18" y="89" width="30" height="2" fill="#7678ed" opacity="0.5" />
    </svg>
  );
}

/* ─────────────────────────────────── Yuji — Black Flash punch */
function YujiStriker() {
  return (
    <svg viewBox={VB} shapeRendering="crispEdges" className="striker striker--yuji" overflow="visible">
      <defs>
        <radialGradient id="yuji-strike-aura" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fff3b0" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#ef476f" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#2a1421" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse className="striker__aura" cx="32" cy="40" rx="36" ry="42" fill="url(#yuji-strike-aura)" />

      {/* charging sparks — converge on the drawn-back fist during wind-up */}
      <g className="striker-part yuji__sparks">
        <rect className="yuji__spark yuji__spark--1" x="50" y="22" width="4" height="4" fill="#fff3b0" />
        <rect className="yuji__spark yuji__spark--2" x="58" y="34" width="3" height="3" fill="#fff3b0" />
        <rect className="yuji__spark yuji__spark--3" x="48" y="44" width="3" height="3" fill="#fff3b0" />
        <rect className="yuji__spark yuji__spark--4" x="56" y="48" width="2" height="2" fill="#fff3b0" />
      </g>

      <g className="striker-part yuji__head">
        <rect x="20" y="6" width="20" height="8" fill="#ef476f" />
        <rect x="22" y="2" width="2" height="4" fill="#ef476f" />
        <rect x="26" y="0" width="4" height="6" fill="#ef476f" />
        <rect x="32" y="2" width="4" height="4" fill="#ef476f" />
        <rect x="38" y="4" width="2" height="4" fill="#ef476f" />
        <rect x="24" y="10" width="3" height="2" fill="#ffd166" opacity="0.6" />
        <rect x="34" y="10" width="3" height="2" fill="#ffd166" opacity="0.6" />
        <rect x="20" y="14" width="20" height="14" fill="#f7d4b8" />
        <rect x="22" y="18" width="5" height="1" fill="#3a1a14" />
        <rect x="33" y="18" width="5" height="1" fill="#3a1a14" />
        <rect x="22" y="20" width="5" height="3" fill="#ffffff" />
        <rect x="33" y="20" width="5" height="3" fill="#ffffff" />
        <rect x="24" y="20" width="2" height="3" fill="#3a1a14" />
        <rect x="35" y="20" width="2" height="3" fill="#3a1a14" />
        <rect x="24" y="25" width="12" height="2" fill="#3a1a14" />
        <rect x="25" y="25" width="10" height="1" fill="#ffffff" />
      </g>

      {/* TORSO — rotates with the punch */}
      <g className="striker-part yuji__torso">
        <rect x="28" y="28" width="6" height="3" fill="#f7d4b8" />
        <rect x="18" y="31" width="26" height="20" fill="#f5f2e7" />
        <rect x="16" y="31" width="6" height="20" fill="#1a1a1a" />
        <rect x="42" y="31" width="6" height="20" fill="#1a1a1a" />
        <rect x="16" y="31" width="2" height="20" fill="#ef476f" />
        <rect x="46" y="31" width="2" height="20" fill="#ef476f" />
        <rect x="28" y="31" width="6" height="20" fill="#1a1a1a" />
        <rect x="20" y="51" width="22" height="4" fill="#1a1a1a" />
      </g>

      {/* FRONT ARM — punching arm. Starts drawn-back, thrusts to fist-at-x=0 on impact. */}
      <g className="striker-part yuji__arm-front">
        <rect x="12" y="30" width="10" height="6" fill="#1a1a1a" />
        <rect x="4" y="30" width="10" height="6" fill="#f7d4b8" />
        <rect x="0" y="26" width="8" height="12" fill="#f7d4b8" />
        <rect x="0" y="26" width="2" height="12" fill="#e3bb9c" />
        <rect x="0" y="32" width="8" height="1" fill="#fff3b0" />
        <rect x="0" y="24" width="8" height="2" fill="#ffd166" opacity="0.7" />
      </g>

      {/* BACK ARM — supporting/balance arm */}
      <g className="striker-part yuji__arm-back">
        <rect x="46" y="32" width="12" height="6" fill="#1a1a1a" />
        <rect x="54" y="36" width="8" height="6" fill="#f7d4b8" />
      </g>

      {/* LEGS */}
      <g className="striker-part yuji__legs">
        <rect x="22" y="55" width="8" height="20" fill="#1a1a1a" />
        <rect x="32" y="55" width="8" height="14" fill="#1a1a1a" />
        <rect x="36" y="67" width="8" height="14" fill="#1a1a1a" />
        <rect x="20" y="75" width="12" height="4" fill="#ef476f" />
        <rect x="34" y="81" width="12" height="4" fill="#ef476f" />
      </g>

      <rect x="12" y="86" width="40" height="2" fill="#ef476f" opacity="0.7" />
      <rect x="20" y="89" width="26" height="2" fill="#ffd166" opacity="0.6" />
    </svg>
  );
}

/* ─────────────────────────────────── System fallback */
function SystemStriker() {
  return (
    <svg viewBox={VB} shapeRendering="crispEdges" className="striker striker--system">
      <ellipse cx="32" cy="40" rx="30" ry="36" fill="#9aa0b4" opacity="0.3" />
      <rect x="20" y="20" width="24" height="44" fill="#9aa0b4" opacity="0.7" />
      <rect x="0" y="32" width="20" height="6" fill="#9aa0b4" opacity="0.9" />
    </svg>
  );
}
