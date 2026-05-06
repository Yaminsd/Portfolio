/** Training yard with mountains — About / Gojo. Bright daytime. */
export function AboutScene() {
  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid slice"
      shapeRendering="crispEdges"
      className="scene-svg"
    >
      <defs>
        <linearGradient id="about-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a86ff" />
          <stop offset="60%" stopColor="#9ec5ff" />
          <stop offset="100%" stopColor="#dfeeff" />
        </linearGradient>
        <radialGradient id="about-sun-glow">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* sky */}
      <rect width="320" height="180" fill="url(#about-sky)" />

      {/* sun + rays */}
      <g transform="translate(258, 50)">
        <circle r="34" fill="url(#about-sun-glow)" />
        <g className="scene-sun-rays">
          <rect x="-1" y="-26" width="2" height="6" fill="#ffffff" opacity="0.8" />
          <rect x="-1" y="20" width="2" height="6" fill="#ffffff" opacity="0.8" />
          <rect x="-26" y="-1" width="6" height="2" fill="#ffffff" opacity="0.8" />
          <rect x="20" y="-1" width="6" height="2" fill="#ffffff" opacity="0.8" />
          <rect x="-19" y="-19" width="3" height="3" fill="#ffffff" opacity="0.6" />
          <rect x="16" y="-19" width="3" height="3" fill="#ffffff" opacity="0.6" />
          <rect x="-19" y="16" width="3" height="3" fill="#ffffff" opacity="0.6" />
          <rect x="16" y="16" width="3" height="3" fill="#ffffff" opacity="0.6" />
        </g>
        <circle r="12" fill="#fffce0" />
      </g>

      {/* far Fuji-shape mountain */}
      <polygon
        points="80,120 150,50 220,120"
        fill="#7ea5d0"
      />
      {/* snow cap */}
      <polygon
        points="142,70 150,50 158,70 156,72 144,72"
        fill="#ffffff"
      />
      <polygon
        points="146,76 150,72 154,76 152,80 148,80"
        fill="#ffffff"
        opacity="0.7"
      />
      {/* shadow side */}
      <polygon
        points="150,50 220,120 168,120"
        fill="#5e84a8"
        opacity="0.5"
      />

      {/* secondary mountains */}
      <polygon
        points="0,130 50,90 110,118 180,100 240,128 320,112 320,150 0,150"
        fill="#4a6e92"
      />
      <polygon
        points="0,150 80,118 160,142 240,118 320,140 320,180 0,180"
        fill="#3a5275"
      />

      {/* clouds (multiple, faster than hub) */}
      <g transform="translate(0, 30)">
        <g
          className="scene-cloud scene-cloud--mid"
          style={{ animationDelay: '-8s' }}
        >
          <rect x="0" y="0" width="44" height="6" fill="#ffffff" />
          <rect x="4" y="-3" width="36" height="3" fill="#ffffff" />
          <rect x="8" y="6" width="28" height="3" fill="#ffffff" opacity="0.7" />
        </g>
      </g>
      <g transform="translate(0, 60)">
        <g
          className="scene-cloud scene-cloud--fast"
          style={{ animationDelay: '-25s' }}
        >
          <rect x="40" y="0" width="32" height="5" fill="#ffffff" />
          <rect x="44" y="-3" width="24" height="3" fill="#ffffff" />
        </g>
      </g>
      <g transform="translate(0, 18)">
        <g
          className="scene-cloud scene-cloud--slow"
          style={{ animationDelay: '-40s' }}
        >
          <rect x="160" y="0" width="50" height="5" fill="#ffffff" />
          <rect x="166" y="-3" width="40" height="3" fill="#ffffff" />
        </g>
      </g>

      {/* distant cherry trees row */}
      <g>
        <rect x="30" y="118" width="2" height="14" fill="#3a1f0a" />
        <rect x="22" y="108" width="18" height="12" fill="#ff8fa8" />
        <rect x="60" y="118" width="2" height="14" fill="#3a1f0a" />
        <rect x="52" y="108" width="18" height="12" fill="#ffb3c1" />
        <rect x="240" y="118" width="2" height="14" fill="#3a1f0a" />
        <rect x="232" y="108" width="18" height="12" fill="#ff8fa8" />
        <rect x="268" y="118" width="2" height="14" fill="#3a1f0a" />
        <rect x="260" y="108" width="18" height="12" fill="#ffb3c1" />
      </g>

      {/* training ground / sand */}
      <rect x="0" y="132" width="320" height="48" fill="#d4b683" />
      <rect x="0" y="132" width="320" height="2" fill="#b89868" />
      <rect x="0" y="178" width="320" height="2" fill="#b89868" />
      {/* sand texture dots */}
      <rect x="20" y="148" width="2" height="2" fill="#b89868" />
      <rect x="60" y="158" width="2" height="2" fill="#b89868" />
      <rect x="100" y="170" width="2" height="2" fill="#b89868" />
      <rect x="140" y="160" width="2" height="2" fill="#b89868" />
      <rect x="180" y="150" width="2" height="2" fill="#b89868" />
      <rect x="220" y="170" width="2" height="2" fill="#b89868" />

      {/* training dummies / wooden posts (right foreground) */}
      <g>
        {/* post 1 */}
        <rect x="200" y="120" width="6" height="44" fill="#5a3318" />
        <rect x="202" y="120" width="2" height="44" fill="#7a4a26" />
        <rect x="195" y="120" width="16" height="3" fill="#3a1f0a" />
        {/* post 2 */}
        <rect x="220" y="124" width="6" height="40" fill="#5a3318" />
        <rect x="222" y="124" width="2" height="40" fill="#7a4a26" />
        <rect x="215" y="124" width="16" height="3" fill="#3a1f0a" />
        {/* dummy / target */}
        <g>
          <rect x="280" y="118" width="14" height="48" fill="#5a3318" />
          <rect x="282" y="118" width="2" height="48" fill="#7a4a26" />
          {/* concentric target */}
          <circle cx="287" cy="138" r="6" fill="#ffffff" />
          <circle cx="287" cy="138" r="4" fill="#c1121f" />
          <circle cx="287" cy="138" r="2" fill="#ffffff" />
        </g>
      </g>

      {/* foreground grass blades */}
      <rect x="2" y="170" width="2" height="4" fill="#5a8a4e" />
      <rect x="14" y="172" width="2" height="3" fill="#5a8a4e" />
      <rect x="50" y="170" width="2" height="4" fill="#5a8a4e" />
      <rect x="90" y="174" width="2" height="3" fill="#5a8a4e" />
      <rect x="170" y="172" width="2" height="3" fill="#5a8a4e" />
      <rect x="320" y="172" width="2" height="3" fill="#5a8a4e" />
    </svg>
  );
}
