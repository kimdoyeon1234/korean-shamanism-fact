// src/components/decorations/BambooDecoration.tsx

import React from 'react';

// AboutSection.tsx에서 className을 props로 전달받음
export function BambooDecoration({ className }: { className?: string }) {
  return (
    // <div className={className}>
    //   {/* 여기에 실제 대나무 SVG 코드나 아이콘을 넣을 수 있어 */}
    //   <div className="text-xl text-green-700">대나무 장식</div>
    // </div>
    
    // 단순 더미 DIV로 대체하여 오류를 해결
    <div className={className}>
      <div className="w-full h-full bg-green-500/10" />
    </div>
  );
}