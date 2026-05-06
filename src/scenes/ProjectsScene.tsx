/** Shrine + red lanterns at night — Projects / Sukuna. */
export function ProjectsScene() {
  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid slice"
      shapeRendering="crispEdges"
      className="scene-svg"
    >
      <defs>
        <linearGradient id="shrine-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a0420" />
          <stop offset="50%" stopColor="#2e0a30" />
          <stop offset="100%" stopColor="#1a0508" />
        </linearGradient>
        <radialGradient id="shrine-moon-glow">
          <stop offset="0%" stopColor="#ffd166" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffd166" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="shrine-lantern-glow">
          <stop offset="0%" stopColor="#ffb703" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffb703" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* sky */}
      <rect width="320" height="180" fill="url(#shrine-sky)" />

      {/* faint red runes in sky (Malevolent Shrine vibe) */}
      <g opacity="0.18">
        <rect x="40" y="20" width="14" height="2" fill="#c1121f" />
        <rect x="46" y="14" width="2" height="14" fill="#c1121f" />
        <rect x="38" y="30" width="3" height="3" fill="#c1121f" />
        <rect x="240" y="14" width="14" height="2" fill="#c1121f" />
        <rect x="246" y="8" width="2" height="14" fill="#c1121f" />
        <rect x="252" y="24" width="3" height="3" fill="#c1121f" />
        <rect x="170" y="36" width="10" height="2" fill="#c1121f" />
        <rect x="174" y="32" width="2" height="10" fill="#c1121f" />
      </g>

      {/* moon */}
      <circle cx="92" cy="42" r="22" fill="url(#shrine-moon-glow)" />
      <circle cx="92" cy="42" r="10" fill="#ffe9a8" />
      <rect x="86" y="38" width="3" height="3" fill="#e0c290" opacity="0.6" />
      <rect x="94" y="44" width="2" height="2" fill="#e0c290" opacity="0.6" />

      {/* stars */}
      <rect x="20" y="14" width="2" height="2" fill="#ffffff" className="scene-star" style={{ animationDuration: '2.4s', animationDelay: '0s' }} />
      <rect x="60" y="22" width="2" height="2" fill="#ffffff" className="scene-star" style={{ animationDuration: '3.4s', animationDelay: '-0.5s' }} />
      <rect x="140" y="10" width="2" height="2" fill="#ffffff" className="scene-star" style={{ animationDuration: '2.8s', animationDelay: '-1.2s' }} />
      <rect x="200" y="20" width="2" height="2" fill="#ffffff" className="scene-star" style={{ animationDuration: '4s', animationDelay: '-2s' }} />
      <rect x="270" y="32" width="2" height="2" fill="#ffffff" className="scene-star" style={{ animationDuration: '3s', animationDelay: '-0.8s' }} />
      <rect x="300" y="14" width="2" height="2" fill="#ffffff" className="scene-star" style={{ animationDuration: '2.6s', animationDelay: '-1.6s' }} />
      <rect x="120" y="36" width="2" height="2" fill="#ffd166" className="scene-star" style={{ animationDuration: '3.6s', animationDelay: '-2.4s' }} />
      <rect x="240" y="48" width="2" height="2" fill="#ffd166" className="scene-star" style={{ animationDuration: '4.4s', animationDelay: '-3s' }} />

      {/* distant mountain silhouette */}
      <polygon
        points="0,130 60,96 130,118 200,90 270,108 320,100 320,130 0,130"
        fill="#0a0508"
      />

      {/* torii gate (background, large) */}
      <g>
        {/* legs */}
        <rect x="146" y="84" width="6" height="60" fill="#7a1f1f" />
        <rect x="148" y="84" width="2" height="60" fill="#a32a2a" />
        <rect x="166" y="84" width="6" height="60" fill="#7a1f1f" />
        <rect x="168" y="84" width="2" height="60" fill="#a32a2a" />
        {/* top crossbar */}
        <rect x="138" y="76" width="42" height="6" fill="#7a1f1f" />
        <rect x="138" y="76" width="42" height="2" fill="#a32a2a" />
        <rect x="134" y="74" width="50" height="2" fill="#5a1010" />
        {/* lower crossbar */}
        <rect x="142" y="88" width="34" height="3" fill="#7a1f1f" />
        {/* center plaque */}
        <rect x="153" y="78" width="12" height="6" fill="#1a0508" />
        <rect x="155" y="80" width="2" height="2" fill="#ffb703" />
        <rect x="161" y="80" width="2" height="2" fill="#ffb703" />
      </g>

      {/* mist drifting horizontally at midground */}
      <g className="scene-mist" opacity="0.4">
        <rect x="0" y="120" width="320" height="3" fill="#ffffff" opacity="0.15" />
        <rect x="40" y="124" width="80" height="2" fill="#ffffff" opacity="0.2" />
        <rect x="180" y="122" width="100" height="2" fill="#ffffff" opacity="0.18" />
      </g>

      {/* stone steps leading up */}
      <rect x="120" y="144" width="80" height="36" fill="#3a3a4a" />
      <rect x="120" y="144" width="80" height="2" fill="#5a5a6a" />
      <rect x="118" y="152" width="84" height="2" fill="#5a5a6a" />
      <rect x="116" y="160" width="88" height="2" fill="#5a5a6a" />
      <rect x="114" y="168" width="92" height="2" fill="#5a5a6a" />
      <rect x="120" y="148" width="80" height="2" fill="#252535" />
      <rect x="118" y="156" width="84" height="2" fill="#252535" />
      <rect x="116" y="164" width="88" height="2" fill="#252535" />

      {/* foreground ground (stone path) */}
      <rect x="0" y="160" width="320" height="20" fill="#2a2030" />
      <rect x="0" y="160" width="320" height="2" fill="#3a2840" />

      {/* lanterns left and right */}
      <g transform="translate(36, 100)">
        <g className="scene-lantern">
          {/* halo */}
          <circle cx="6" cy="14" r="20" fill="url(#shrine-lantern-glow)" />
          {/* hanging string */}
          <rect x="6" y="0" width="1" height="6" fill="#5a3318" />
          {/* top cap */}
          <rect x="0" y="6" width="14" height="3" fill="#1a1a1a" />
          {/* lantern body */}
          <rect x="0" y="9" width="14" height="20" fill="#c1121f" />
          <rect x="0" y="9" width="2" height="20" fill="#7a0e16" />
          <rect x="12" y="9" width="2" height="20" fill="#7a0e16" />
          <rect x="3" y="14" width="8" height="3" fill="#ffd166" opacity="0.8" />
          <rect x="3" y="20" width="8" height="3" fill="#ffd166" opacity="0.8" />
          {/* bottom cap */}
          <rect x="0" y="29" width="14" height="3" fill="#1a1a1a" />
          {/* tassel */}
          <rect x="6" y="32" width="1" height="3" fill="#ffb703" />
        </g>
      </g>
      <g transform="translate(264, 110)">
        <g className="scene-lantern" style={{ animationDelay: '-0.7s' }}>
          <circle cx="6" cy="14" r="20" fill="url(#shrine-lantern-glow)" />
          <rect x="6" y="0" width="1" height="6" fill="#5a3318" />
          <rect x="0" y="6" width="14" height="3" fill="#1a1a1a" />
          <rect x="0" y="9" width="14" height="20" fill="#c1121f" />
          <rect x="0" y="9" width="2" height="20" fill="#7a0e16" />
          <rect x="12" y="9" width="2" height="20" fill="#7a0e16" />
          <rect x="3" y="14" width="8" height="3" fill="#ffd166" opacity="0.8" />
          <rect x="3" y="20" width="8" height="3" fill="#ffd166" opacity="0.8" />
          <rect x="0" y="29" width="14" height="3" fill="#1a1a1a" />
          <rect x="6" y="32" width="1" height="3" fill="#ffb703" />
        </g>
      </g>

      {/* shrine bell (foreground left, small) */}
      <g transform="translate(80, 130)">
        <rect x="0" y="0" width="6" height="8" fill="#7a6b3a" />
        <rect x="2" y="0" width="2" height="8" fill="#a08e4a" />
        <rect x="-1" y="8" width="8" height="2" fill="#5a4628" />
      </g>
    </svg>
  );
}
