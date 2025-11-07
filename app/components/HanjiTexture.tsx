export function HanjiTexture() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-30">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hanji" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
            <rect width="400" height="400" fill="#F5F0E8"/>
            {/* 한지 섬유질 텍스처 */}
            {Array.from({ length: 200 }).map((_, i) => (
              <line
                key={i}
                x1={Math.random() * 400}
                y1={Math.random() * 400}
                x2={Math.random() * 400}
                y2={Math.random() * 400}
                stroke="#D4C5AA"
                strokeWidth="0.5"
                opacity={Math.random() * 0.3}
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hanji)"/>
      </svg>
    </div>
  );
}
