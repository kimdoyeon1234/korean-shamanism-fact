import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image'; 
const shamanDance = "/shamanDance.png"; 
const inkMountain = "/inkMountain.png";

interface IntroSplashProps {
  onEnter: () => void;
}

export function IntroSplash({ onEnter }: IntroSplashProps) {
  const [showContent, setShowContent] = useState(false);

  // 먹물 번짐 효과 후 콘텐츠 표시
  useState(() => {
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  });

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-hidden">
      {/* 수묵화 산 배경 */}
      <motion.div 
        className="absolute inset-0 opacity-0"
        animate={{ opacity: [0, 0.25, 0.2] }}
        transition={{ duration: 2, delay: 0.5 }}
      >
      <Image   src={inkMountain} 
        alt="수묵화 산"
        fill   className="object-cover"
        unoptimized />
      </motion.div>
      
      {/* 그라디언트 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70" />
      
      {/* 무당 실루엣 - 중앙 뒤쪽 */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-0"
        animate={{ 
          opacity: [0, 0.15, 0.1],
          scale: [0.8, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 3, delay: 0.3 }}
      >
        <Image // 👈 Image 컴포넌트로 변경
        src={shamanDance}
        alt="무당"
        fill // 👈 부모 div 크기를 채우도록 설정
        className="object-contain" // 👈 object-fit을 className으로 사용
        unoptimized // 👈 Next.js가 이미지 최적화 처리를 하지 않도록 (임시)
    />
      </motion.div>

      {/* 먹물 번짐 원 효과 */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.5, 1], opacity: [0, 0.15, 0.08] }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-radial from-black/10 to-transparent blur-3xl" />
      </motion.div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* 상단 - 먹선 */}
        <motion.div
          className="mb-12"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: showContent ? 1 : 0, opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-64 h-1 bg-black" />
        </motion.div>

        {/* 메인 헤드라인 */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl mb-6 tracking-tight text-black">
            신성한 경계,<br />진실을 마주하다
          </h1>
          <div className="w-32 h-px bg-black/30 mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-black/70 leading-relaxed max-w-3xl mx-auto">
            굿은 살인주술이 아닙니다.<br />
            한국 샤머니즘, 치유와 축복의 의례
          </p>
        </motion.div>

        {/* 서브 텍스트 */}
        <motion.p
          className="text-base md:text-lg text-black/60 mb-12 text-center max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          잘못 알려진 주술이 아닌, 전국 산인주술이 아닙니다. 잘못 생각가 치유와<br />
          한국 샤머니즘, 치유와 축복의 의례
        </motion.p>

        {/* CTA 버튼 - 붓터치 스타일 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <button
            onClick={onEnter}
            className="group relative px-16 py-5 bg-black text-white overflow-hidden hover:bg-black/90 transition-all"
          >
            <span className="relative z-10 tracking-widest text-lg">Fact Check</span>
            
            {/* 호버 시 붓 번짐 효과 */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#C8384A]/20 via-transparent to-[#2E5C8A]/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </button>
        </motion.div>

        {/* 하단 - 먹선 */}
        <motion.div
          className="mt-12"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: showContent ? 1 : 0, opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-64 h-1 bg-black" />
        </motion.div>
      </div>

      {/* 코너 장식 - 먹 터치 */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1 }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-black" />
        <div className="absolute top-0 left-0 w-1 h-full bg-black" />
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1 }}
      >
        <div className="absolute bottom-0 right-0 w-full h-1 bg-black" />
        <div className="absolute bottom-0 right-0 w-1 h-full bg-black" />
      </motion.div>
    </div>
  );
}
