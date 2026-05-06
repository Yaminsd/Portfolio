/** Tokyo Jujutsu High courtyard at sunset — main-menu hub. */
export function HubScene() {
  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid slice"
      shapeRendering="crispEdges"
      className="scene-svg"
    >
      <defs>
        <linearGradient id="hub-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff924b" />
          <stop offset="45%" stopColor="#ff5e7a" />
          <stop offset="80%" stopColor="#5e2c5f" />
          <stop offset="100%" stopColor="#2a1530" />
        </linearGradient>
        <radialGradient id="hub-sun-glow">
          <stop offset="0%" stopColor="#ffd166" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#ff924b" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ff924b" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* sky */}
      <rect width="320" height="180" fill="url(#hub-sky)" />

      {/* sun + glow */}
      <circle cx="244" cy="52" r="40" fill="url(#hub-sun-glow)" />
      <circle cx="244" cy="52" r="14" fill="#ffe9a8" />
      <rect x="232" y="50" width="24" height="4" fill="#ffd166" opacity="0.6" />

      {/* far mountain layer */}
      <polygon
        points="0,118 50,82 100,108 150,72 210,102 260,82 320,98 320,140 0,140"
        fill="#3a1f50"
      />
      <polygon
        points="50,82 60,90 70,84"
        fill="#5d2f6e"
      />
      <polygon
        points="150,72 162,82 174,76"
        fill="#5d2f6e"
      />

      {/* mid mountain layer */}
      <polygon
        points="0,140 60,118 130,135 180,108 240,128 320,118 320,180 0,180"
        fill="#52295e"
      />
      <polygon
        points="60,118 72,124 80,120"
        fill="#6d3478"
      />

      {/* clouds */}
      <g transform="translate(0, 30)">
        <g className="scene-cloud scene-cloud--slow">
          <rect x="0" y="0" width="36" height="6" fill="#ffd6c2" />
          <rect x="4" y="-3" width="28" height="3" fill="#ffd6c2" />
          <rect x="8" y="6" width="20" height="3" fill="#ffd6c2" opacity="0.6" />
        </g>
      </g>
      <g transform="translate(0, 56)">
        <g
          className="scene-cloud scene-cloud--fast"
          style={{ animationDelay: '-18s' }}
        >
          <rect x="80" y="0" width="46" height="5" fill="#ffe0d0" />
          <rect x="84" y="-3" width="34" height="3" fill="#ffe0d0" />
          <rect x="88" y="5" width="28" height="2" fill="#ffe0d0" opacity="0.5" />
        </g>
      </g>
      <g transform="translate(0, 22)">
        <g
          className="scene-cloud scene-cloud--mid"
          style={{ animationDelay: '-30s' }}
        >
          <rect x="180" y="0" width="28" height="4" fill="#ffd6c2" opacity="0.7" />
          <rect x="184" y="-2" width="20" height="2" fill="#ffd6c2" opacity="0.7" />
        </g>
      </g>

      {/* bird silhouette dipping across */}
      <g transform="translate(0, 38)" className="scene-bird">
        <rect x="0" y="0" width="2" height="1" fill="#1a1a1a" opacity="0.7" />
        <rect x="2" y="-1" width="2" height="1" fill="#1a1a1a" opacity="0.7" />
        <rect x="4" y="0" width="2" height="1" fill="#1a1a1a" opacity="0.7" />
        <rect x="6" y="-1" width="2" height="1" fill="#1a1a1a" opacity="0.7" />
      </g>

      {/* school building (right) */}
      <g>
        {/* roof */}
        <polygon
          points="232,98 274,76 314,98"
          fill="#1f1208"
        />
        <polygon
          points="234,98 274,80 312,98"
          fill="#3a2316"
        />
        <rect x="232" y="98" width="84" height="4" fill="#1f1208" />
        {/* body */}
        <rect x="240" y="102" width="72" height="50" fill="#4a2c18" />
        <rect x="240" y="102" width="72" height="2" fill="#5e3a22" />
        <rect x="240" y="148" width="72" height="2" fill="#2a160a" />
        {/* windows row 1 */}
        <rect x="248" y="110" width="8" height="10" fill="#ffd166" />
        <rect x="262" y="110" width="8" height="10" fill="#ffd166" />
        <rect x="276" y="110" width="8" height="10" fill="#ff924b" />
        <rect x="290" y="110" width="8" height="10" fill="#ffd166" />
        {/* window crosses */}
        <rect x="251" y="110" width="2" height="10" fill="#3a2316" />
        <rect x="265" y="110" width="2" height="10" fill="#3a2316" />
        <rect x="279" y="110" width="2" height="10" fill="#3a2316" />
        <rect x="293" y="110" width="2" height="10" fill="#3a2316" />
        <rect x="248" y="114" width="50" height="2" fill="#3a2316" />
        {/* door */}
        <rect x="270" y="130" width="14" height="20" fill="#1f1208" />
        <rect x="280" y="138" width="2" height="2" fill="#ffd166" />
        {/* lantern by door */}
        <g className="scene-lantern">
          <rect x="262" y="130" width="4" height="6" fill="#c1121f" />
          <rect x="262" y="129" width="4" height="1" fill="#1a1a1a" />
          <rect x="263" y="132" width="2" height="2" fill="#ffd166" opacity="0.8" />
        </g>
      </g>

      {/* cherry tree foreground (left) */}
      <g>
        {/* trunk */}
        <rect x="30" y="115" width="6" height="38" fill="#3a1f0a" />
        <rect x="32" y="115" width="2" height="38" fill="#5a3318" />
        <rect x="28" y="120" width="2" height="6" fill="#3a1f0a" />
        <rect x="38" y="125" width="2" height="6" fill="#3a1f0a" />
        {/* canopy */}
        <g className="scene-branch">
          <rect x="12" y="84" width="42" height="34" fill="#ff8fa8" />
          <rect x="8" y="92" width="50" height="22" fill="#ff8fa8" />
          <rect x="6" y="98" width="54" height="14" fill="#ffb3c1" />
          <rect x="16" y="78" width="34" height="10" fill="#ffb3c1" />
          <rect x="22" y="74" width="22" height="6" fill="#ffd6e0" />
          {/* darker accents */}
          <rect x="14" y="100" width="6" height="4" fill="#d96586" />
          <rect x="32" y="106" width="8" height="4" fill="#d96586" />
          <rect x="44" y="96" width="6" height="4" fill="#d96586" />
        </g>
      </g>

      {/* ground */}
      <rect x="0" y="150" width="320" height="30" fill="#3d2818" />
      <rect x="0" y="150" width="320" height="2" fill="#5a3a22" />
      {/* path */}
      <polygon
        points="80,180 130,150 200,150 240,180"
        fill="#8a6240"
      />
      <polygon
        points="80,180 130,150 138,150 100,180"
        fill="#a47a52"
        opacity="0.7"
      />
      {/* path stones */}
      <rect x="120" y="160" width="3" height="2" fill="#a47a52" />
      <rect x="155" y="170" width="3" height="2" fill="#a47a52" />
      <rect x="180" y="155" width="3" height="2" fill="#a47a52" />

      {/* falling petals */}
      <g transform="translate(40, 0)">
        <g
          className="scene-petal"
          style={{ animationDuration: '14s', animationDelay: '0s' }}
        >
          <rect x="0" y="0" width="2" height="2" fill="#ffb3c1" />
        </g>
      </g>
      <g transform="translate(76, -30)">
        <g
          className="scene-petal"
          style={{ animationDuration: '18s', animationDelay: '-4s' }}
        >
          <rect x="0" y="0" width="2" height="2" fill="#ffd6e0" />
        </g>
      </g>
      <g transform="translate(140, -60)">
        <g
          className="scene-petal"
          style={{ animationDuration: '12s', animationDelay: '-7s' }}
        >
          <rect x="0" y="0" width="2" height="2" fill="#ff8fa8" />
        </g>
      </g>
      <g transform="translate(220, -10)">
        <g
          className="scene-petal"
          style={{ animationDuration: '16s', animationDelay: '-2s' }}
        >
          <rect x="0" y="0" width="2" height="2" fill="#ffb3c1" />
        </g>
      </g>
    </svg>
  );
}
