

export function BambooDecoration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 400" fill="none">
      <g opacity="0.4">
        {/* 대나무 줄기 */}
        <path d="M100 0 Q 95 100, 100 200 Q 105 300, 100 400" stroke="#1A1A1A" strokeWidth="8" fill="none"/>
        <path d="M100 80 L 60 85" stroke="#1A1A1A" strokeWidth="3"/>
        <path d="M100 80 L 140 82" stroke="#1A1A1A" strokeWidth="3"/>
        <path d="M100 200 L 55 195" stroke="#1A1A1A" strokeWidth="3"/>
        <path d="M100 200 L 145 198" stroke="#1A1A1A" strokeWidth="3"/>
        <path d="M100 320 L 58 322" stroke="#1A1A1A" strokeWidth="3"/>
        <path d="M100 320 L 142 325" stroke="#1A1A1A" strokeWidth="3"/>
        
        {/* 대나무 잎 */}
        <ellipse cx="50" cy="60" rx="30" ry="8" fill="#2E5C8A" opacity="0.6" transform="rotate(-45 50 60)"/>
        <ellipse cx="150" cy="65" rx="35" ry="9" fill="#2E5C8A" opacity="0.6" transform="rotate(45 150 65)"/>
        <ellipse cx="45" cy="180" rx="32" ry="8" fill="#2E5C8A" opacity="0.6" transform="rotate(-50 45 180)"/>
        <ellipse cx="155" cy="185" rx="30" ry="8" fill="#2E5C8A" opacity="0.6" transform="rotate(40 155 185)"/>
      </g>
    </svg>
  );
}

export function PlumBlossomDecoration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 300" fill="none">
      <g opacity="0.5">
        {/* 매화 가지 */}
        <path 
          d="M20 250 Q 80 200, 150 180 Q 220 160, 280 140" 
          stroke="#1A1A1A" 
          strokeWidth="6" 
          fill="none"
          strokeLinecap="round"
        />
        
        {/* 매화 꽃들 */}
        {[
          { x: 100, y: 200 },
          { x: 160, y: 175 },
          { x: 220, y: 155 },
          { x: 130, y: 190 },
          { x: 190, y: 165 },
        ].map((pos, i) => (
          <g key={i}>
            <circle cx={pos.x} cy={pos.y} r="12" fill="#C8384A" opacity="0.8"/>
            <circle cx={pos.x} cy={pos.y} r="8" fill="#E8B44F" opacity="0.6"/>
            <circle cx={pos.x - 3} cy={pos.y - 3} r="2" fill="#fff" opacity="0.8"/>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function InkMountain({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 400" fill="none" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1A1A1A" stopOpacity="0.1"/>
          <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0.4"/>
        </linearGradient>
      </defs>
      
      {/* 뒷산 - 흐릿하게 */}
      <path 
        d="M0 300 Q 200 150, 400 200 Q 600 120, 800 180 Q 1000 140, 1200 220 L 1200 400 L 0 400 Z" 
        fill="url(#mountainGrad)" 
        opacity="0.3"
      />
      
      {/* 중간산 */}
      <path 
        d="M0 350 Q 150 200, 350 260 Q 550 180, 750 240 Q 950 200, 1200 280 L 1200 400 L 0 400 Z" 
        fill="url(#mountainGrad)" 
        opacity="0.5"
      />
      
      {/* 앞산 */}
      <path 
        d="M0 380 Q 100 280, 250 320 Q 400 260, 600 300 Q 800 270, 1000 320 Q 1100 300, 1200 340 L 1200 400 L 0 400 Z" 
        fill="#1A1A1A" 
        opacity="0.25"
      />
    </svg>
  );
}

export function FloatingColorDot({ 
  color, 
  size = 60, 
  delay = 0, 
  className = "" 
}: { 
  color: string; 
  size?: number; 
  delay?: number; 
  className?: string;
}) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animation: `float ${3 + Math.random() * 2}s ease-in-out ${delay}s infinite`,
      }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${color}60, ${color}40)`,
          boxShadow: `0 4px 20px ${color}30`,
        }}
      />
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </div>
  );
}
