/** Cherry-blossom path with lampposts at twilight — Contact / Yuji. */
export function ContactScene() {
  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid slice"
      shapeRendering="crispEdges"
      className="scene-svg"
    >
      <defs>
        <linearGradient id="contact-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ef476f" />
          <stop offset="50%" stopColor="#ffd166" />
          <stop offset="100%" stopColor="#fff3b0" />
        </linearGradient>
        <radialGradient id="contact-sun-glow">
          <stop offset="0%" stopColor="#fffce0" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#fffce0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="contact-lamp-glow">
          <stop offset="0%" stopColor="#fff3b0" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#fff3b0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* sky */}
      <rect width="320" height="180" fill="url(#contact-sky)" />

      {/* sun setting low */}
      <circle cx="170" cy="118" r="38" fill="url(#contact-sun-glow)" />
      <circle cx="170" cy="118" r="14" fill="#fff3b0" />
      <rect x="160" y="116" width="20" height="3" fill="#ffd166" opacity="0.6" />

      {/* distant cloud band */}
      <g transform="translate(0, 70)">
        <g
          className="scene-cloud scene-cloud--slow"
          style={{ animationDelay: '-12s' }}
        >
          <rect x="20" y="0" width="50" height="4" fill="#ffe0d0" opacity="0.7" />
          <rect x="26" y="-2" width="40" height="2" fill="#ffe0d0" opacity="0.7" />
        </g>
      </g>
      <g transform="translate(0, 88)">
        <g
          className="scene-cloud scene-cloud--mid"
          style={{ animationDelay: '-30s' }}
        >
          <rect x="190" y="0" width="44" height="3" fill="#ffd6c2" opacity="0.6" />
          <rect x="196" y="-2" width="32" height="2" fill="#ffd6c2" opacity="0.6" />
        </g>
      </g>

      {/* distant rolling hill */}
      <polygon
        points="0,140 80,124 160,138 240,122 320,138 320,150 0,150"
        fill="#c0828c"
      />

      {/* path receding to horizon */}
      <polygon
        points="80,180 144,140 188,140 240,180"
        fill="#a47a52"
      />
      <polygon
        points="80,180 144,140 152,140 100,180"
        fill="#c4946a"
        opacity="0.7"
      />
      {/* stones along path */}
      <rect x="120" y="158" width="3" height="2" fill="#c4946a" />
      <rect x="160" y="170" width="3" height="2" fill="#c4946a" />
      <rect x="190" y="148" width="3" height="2" fill="#c4946a" />

      {/* ground (grass) */}
      <rect x="0" y="148" width="320" height="32" fill="#7da653" />
      <rect x="0" y="148" width="320" height="2" fill="#9ec877" />
      <rect x="0" y="178" width="320" height="2" fill="#5a8038" />
      {/* grass tufts */}
      <rect x="20" y="172" width="2" height="4" fill="#5a8038" />
      <rect x="32" y="174" width="2" height="3" fill="#5a8038" />
      <rect x="50" y="170" width="2" height="4" fill="#5a8038" />
      <rect x="270" y="172" width="2" height="4" fill="#5a8038" />
      <rect x="290" y="174" width="2" height="3" fill="#5a8038" />

      {/* cherry tree row LEFT */}
      <g>
        {/* trunk */}
        <rect x="22" y="120" width="4" height="32" fill="#3a1f0a" />
        <rect x="24" y="120" width="2" height="32" fill="#5a3318" />
        {/* canopy */}
        <g className="scene-branch">
          <rect x="6" y="86" width="36" height="30" fill="#ff8fa8" />
          <rect x="2" y="92" width="44" height="22" fill="#ff8fa8" />
          <rect x="0" y="100" width="48" height="14" fill="#ffb3c1" />
          <rect x="10" y="80" width="28" height="10" fill="#ffb3c1" />
          <rect x="14" y="76" width="20" height="6" fill="#ffd6e0" />
          <rect x="8" y="104" width="6" height="3" fill="#d96586" />
          <rect x="32" y="106" width="6" height="3" fill="#d96586" />
        </g>
      </g>

      {/* cherry tree row RIGHT (smaller, further) */}
      <g>
        <rect x="280" y="124" width="3" height="28" fill="#3a1f0a" />
        <g className="scene-branch" style={{ animationDelay: '-1.5s' }}>
          <rect x="266" y="96" width="32" height="26" fill="#ffb3c1" />
          <rect x="262" y="102" width="40" height="18" fill="#ffb3c1" />
          <rect x="270" y="92" width="22" height="6" fill="#ffd6e0" />
          <rect x="270" y="116" width="6" height="3" fill="#d96586" />
        </g>
      </g>

      {/* secondary distant tree row */}
      <g>
        <rect x="60" y="128" width="2" height="20" fill="#3a1f0a" />
        <rect x="50" y="116" width="22" height="14" fill="#ff8fa8" opacity="0.85" />
        <rect x="240" y="128" width="2" height="20" fill="#3a1f0a" />
        <rect x="232" y="118" width="18" height="12" fill="#ffb3c1" opacity="0.85" />
      </g>

      {/* lamppost (right foreground) */}
      <g transform="translate(254, 96)">
        {/* pole */}
        <rect x="0" y="14" width="3" height="58" fill="#1a1a1a" />
        <rect x="0" y="14" width="1" height="58" fill="#3a3a3a" />
        {/* arm */}
        <rect x="-12" y="14" width="14" height="2" fill="#1a1a1a" />
        {/* lamp head */}
        <rect x="-18" y="6" width="10" height="10" fill="#1a1a1a" />
        <rect x="-16" y="8" width="6" height="6" fill="#fff3b0" />
        <rect x="-19" y="4" width="12" height="3" fill="#1a1a1a" />
        <rect x="-20" y="3" width="14" height="2" fill="#0a0a0a" />
        {/* warm halo */}
        <g className="scene-lamp-halo">
          <circle cx="-13" cy="11" r="22" fill="url(#contact-lamp-glow)" />
        </g>
      </g>

      {/* falling petals (lots of them) */}
      <g transform="translate(40, 0)">
        <g className="scene-petal" style={{ animationDuration: '13s', animationDelay: '0s' }}>
          <rect x="0" y="0" width="2" height="2" fill="#ff8fa8" />
        </g>
      </g>
      <g transform="translate(82, -20)">
        <g className="scene-petal" style={{ animationDuration: '17s', animationDelay: '-3s' }}>
          <rect x="0" y="0" width="2" height="2" fill="#ffb3c1" />
        </g>
      </g>
      <g transform="translate(130, -40)">
        <g className="scene-petal" style={{ animationDuration: '14s', animationDelay: '-6s' }}>
          <rect x="0" y="0" width="2" height="2" fill="#ffd6e0" />
        </g>
      </g>
      <g transform="translate(170, -10)">
        <g className="scene-petal" style={{ animationDuration: '16s', animationDelay: '-2s' }}>
          <rect x="0" y="0" width="2" height="2" fill="#ff8fa8" />
        </g>
      </g>
      <g transform="translate(210, -30)">
        <g className="scene-petal" style={{ animationDuration: '15s', animationDelay: '-8s' }}>
          <rect x="0" y="0" width="2" height="2" fill="#ffb3c1" />
        </g>
      </g>
      <g transform="translate(250, -50)">
        <g className="scene-petal" style={{ animationDuration: '18s', animationDelay: '-5s' }}>
          <rect x="0" y="0" width="2" height="2" fill="#ffd6e0" />
        </g>
      </g>

      {/* bird */}
      <g transform="translate(0, 50)" className="scene-bird" style={{ animationDelay: '14s' }}>
        <rect x="0" y="0" width="2" height="1" fill="#1a1a1a" opacity="0.6" />
        <rect x="2" y="-1" width="2" height="1" fill="#1a1a1a" opacity="0.6" />
        <rect x="4" y="0" width="2" height="1" fill="#1a1a1a" opacity="0.6" />
      </g>
    </svg>
  );
}
