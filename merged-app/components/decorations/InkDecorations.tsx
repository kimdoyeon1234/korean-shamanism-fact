// src/components/decorations/InkDecorations.tsx

import React from 'react';

// BambooDecoration 컴포넌트
export function BambooDecoration({ className }: { className?: string }) {
  return (
    // Tailwind CSS 클래스를 받아 투명한 배경 DIV를 표시 (임시)
    <div className={className}>
      <div className="w-full h-full bg-green-500/10" />
    </div>
  );
}

// PlumBlossomDecoration 컴포넌트
export function PlumBlossomDecoration({ className }: { className?: string }) {
  return (
    // Tailwind CSS 클래스를 받아 투명한 원형 배경 DIV를 표시 (임시)
    <div className={className}>
      <div className="w-full h-full bg-pink-500/10 rounded-full" />
    </div>
  );
}

// 이 파일에서 BambooDecoration과 PlumBlossomDecoration을 내보내므로,
// HomeSection.tsx에서 한 번에 불러올 수 있게 돼.