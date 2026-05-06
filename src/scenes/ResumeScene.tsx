/** Moonlit forest with shadow shikigami — Resume / Megumi. */
export function ResumeScene() {
  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid slice"
      shapeRendering="crispEdges"
      className="scene-svg"
    >
      <defs>
        <linearGradient id="forest-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a3a" />
          <stop offset="50%" stopColor="#10102a" />
          <stop offset="100%" stopColor="#050518" />
        </linearGradient>
        <radialGradient id="forest-moon-glow">
          <stop offset="0%" stopColor="#dce5ff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#7678ed" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* sky */}
      <rect width="320" height="180" fill="url(#forest-sky)" />

      {/* moon (large, top center) */}
      <circle cx="160" cy="44" r="32" fill="url(#forest-moon-glow)" />
      <circle cx="160" cy="44" r="14" fill="#eef0ff" />
      <rect x="154" y="40" width="3" height="3" fill="#c8c8d8" opacity="0.6" />
      <rect x="162" y="46" width="2" height="2" fill="#c8c8d8" opacity="0.6" />
      <rect x="158" y="34" width="2" height="2" fill="#c8c8d8" opacity="0.5" />

      {/* stars */}
      <rect x="30" y="20" width="2" height="2" fill="#ffffff" className="scene-star" style={{ animationDuration: '3s' }} />
      <rect x="80" y="16" width="2" height="2" fill="#ffffff" className="scene-star" style={{ animationDuration: '4s', animationDelay: '-1s' }} />
      <rect x="220" y="22" width="2" height="2" fill="#ffffff" className="scene-star" style={{ animationDuration: '2.6s', animationDelay: '-1.6s' }} />
      <rect x="260" y="14" width="2" height="2" fill="#ffffff" className="scene-star" style={{ animationDuration: '3.4s', animationDelay: '-0.8s' }} />
      <rect x="290" y="30" width="2" height="2" fill="#ffffff" className="scene-star" style={{ animationDuration: '4.4s', animationDelay: '-2.2s' }} />
      <rect x="120" y="30" width="2" height="2" fill="#9ec5ff" className="scene-star" style={{ animationDuration: '3.2s', animationDelay: '-1.4s' }} />
      <rect x="200" y="40" width="2" height="2" fill="#9ec5ff" className="scene-star" style={{ animationDuration: '4s', animationDelay: '-2.8s' }} />

      {/* far tree silhouette ridge */}
      <polygon
        points="0,110 20,86 35,98 60,80 85,94 105,82 130,96 155,84 180,98 210,82 235,94 260,84 285,98 305,86 320,100 320,150 0,150"
        fill="#0a0a1a"
      />

      {/* mid tree row */}
      <g fill="#15152a">
        <polygon points="0,150 10,118 20,150" />
        <polygon points="22,150 32,108 42,150" />
        <polygon points="48,150 60,114 72,150" />
        <polygon points="80,150 90,104 100,150" />
        <polygon points="110,150 122,116 134,150" />
        <polygon points="190,150 200,110 210,150" />
        <polygon points="220,150 232,118 244,150" />
        <polygon points="250,150 260,104 270,150" />
        <polygon points="280,150 292,114 304,150" />
        <polygon points="306,150 318,122 320,150" />
      </g>

      {/* tree trunks */}
      <g fill="#080814">
        <rect x="14" y="140" width="2" height="10" />
        <rect x="36" y="140" width="2" height="10" />
        <rect x="64" y="140" width="2" height="10" />
        <rect x="94" y="140" width="2" height="10" />
        <rect x="126" y="140" width="2" height="10" />
        <rect x="204" y="140" width="2" height="10" />
        <rect x="236" y="140" width="2" height="10" />
        <rect x="264" y="140" width="2" height="10" />
        <rect x="296" y="140" width="2" height="10" />
      </g>

      {/* mist on forest floor */}
      <g className="scene-mist" opacity="0.35">
        <rect x="0" y="138" width="320" height="2" fill="#7678ed" opacity="0.4" />
        <rect x="40" y="142" width="120" height="2" fill="#7678ed" opacity="0.3" />
        <rect x="180" y="140" width="100" height="2" fill="#7678ed" opacity="0.3" />
      </g>

      {/* mossy ground */}
      <rect x="0" y="150" width="320" height="30" fill="#1a2520" />
      <rect x="0" y="150" width="320" height="2" fill="#2a3a30" />
      <rect x="20" y="158" width="3" height="2" fill="#2a3a30" />
      <rect x="80" y="166" width="3" height="2" fill="#2a3a30" />
      <rect x="160" y="160" width="3" height="2" fill="#2a3a30" />
      <rect x="240" y="170" width="3" height="2" fill="#2a3a30" />
      <rect x="290" y="162" width="3" height="2" fill="#2a3a30" />

      {/* shadow shikigami (left — wolf head) */}
      <g transform="translate(40, 138)" opacity="0.85">
        <g className="glyph__shadows">
          {/* wolf head silhouette */}
          <rect x="0" y="6" width="14" height="6" fill="#0a0a1a" />
          <rect x="0" y="2" width="6" height="6" fill="#0a0a1a" />
          <rect x="2" y="0" width="2" height="3" fill="#0a0a1a" />
          {/* ears */}
          <rect x="-2" y="4" width="2" height="3" fill="#0a0a1a" />
          {/* eyes (glowing) */}
          <rect x="2" y="6" width="1" height="1" fill="#7678ed" />
          <rect x="6" y="6" width="1" height="1" fill="#7678ed" />
        </g>
      </g>

      {/* shadow shikigami (right — frog) */}
      <g transform="translate(258, 152)" opacity="0.85">
        <g className="glyph__shadows" style={{ animationDelay: '-0.8s' }}>
          <rect x="0" y="4" width="16" height="6" fill="#0a0a1a" />
          <rect x="2" y="2" width="4" height="2" fill="#0a0a1a" />
          <rect x="10" y="2" width="4" height="2" fill="#0a0a1a" />
          {/* eyes */}
          <rect x="3" y="2" width="1" height="1" fill="#7678ed" />
          <rect x="11" y="2" width="1" height="1" fill="#7678ed" />
        </g>
      </g>

      {/* fireflies orbiting */}
      <g transform="translate(80, 80)">
        <g className="scene-firefly">
          <g className="scene-firefly__glow">
            <circle r="3" fill="#fff3b0" opacity="0.4" />
            <rect x="-1" y="-1" width="2" height="2" fill="#ffd166" />
          </g>
        </g>
      </g>
      <g transform="translate(180, 100)">
        <g
          className="scene-firefly"
          style={{ animationDelay: '-1.2s', animationDuration: '5s' }}
        >
          <g className="scene-firefly__glow" style={{ animationDelay: '-0.4s' }}>
            <circle r="3" fill="#fff3b0" opacity="0.4" />
            <rect x="-1" y="-1" width="2" height="2" fill="#ffd166" />
          </g>
        </g>
      </g>
      <g transform="translate(260, 70)">
        <g
          className="scene-firefly"
          style={{ animationDelay: '-2.4s', animationDuration: '6s' }}
        >
          <g className="scene-firefly__glow" style={{ animationDelay: '-1.2s' }}>
            <circle r="3" fill="#fff3b0" opacity="0.4" />
            <rect x="-1" y="-1" width="2" height="2" fill="#ffd166" />
          </g>
        </g>
      </g>
      <g transform="translate(110, 120)">
        <g
          className="scene-firefly"
          style={{ animationDelay: '-3.6s', animationDuration: '7s' }}
        >
          <g className="scene-firefly__glow" style={{ animationDelay: '-2s' }}>
            <circle r="2" fill="#fff3b0" opacity="0.4" />
            <rect x="0" y="0" width="1" height="1" fill="#ffd166" />
          </g>
        </g>
      </g>
    </svg>
  );
}
