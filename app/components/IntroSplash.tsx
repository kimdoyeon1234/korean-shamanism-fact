
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


interface IntroSplashProps {
  onEnter: () => void;
}

export function IntroSplash({ onEnter }: IntroSplashProps) {
  const [showContent, setShowContent] = useState(false);
  const [isEntering, setIsEntering] = useState(false); 

  // 1. 콘텐츠 표시 (효과 시작)
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // 2. 3초 후 메인으로 자동 전환
  useEffect(() => {
    if (showContent) {
      const autoEnterTimer = setTimeout(() => {
        setIsEntering(true);
      }, 3000); // 3초 설정

      return () => clearTimeout(autoEnterTimer);
    }
  }, [showContent]);

  // 3. 종료 애니메이션이 끝날 시간을 기다려 onEnter 호출
  useEffect(() => {
    if (isEntering) {
      const finalEnterTimer = setTimeout(onEnter, 1000); // exit 애니메이션 지속 시간 (1초) 후 onEnter 호출
      return () => clearTimeout(finalEnterTimer);
    }
  }, [isEntering, onEnter]);

  // 흰색 먹물 번짐 효과 요소들 (CSS 기반)
  const inkSplashes = [
    { size: 1000, duration: 2.5, delay: 0.1, opacity: [0, 0.5, 0] },
    { size: 800, duration: 3.2, delay: 0.3, opacity: [0, 0.4, 0] },
    { size: 1300, duration: 2.8, delay: 0.6, opacity: [0, 0.3, 0] },
    { size: 600, duration: 3.8, delay: 1.0, opacity: [0, 0.6, 0] },
  ];


  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black overflow-hidden" // 배경 검은색
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: 'blur(10px)',
        transition: { duration: 1, ease: "easeInOut" }
      }}
    >
      
      {/* 🛑 흰 먹물 번짐 효과 요소들 */}
      {inkSplashes.map((splash, index) => (
        <motion.div
          key={index}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: showContent ? [0, 1.5, 1.2] : 0, // 중앙에서 퍼져나감
            opacity: showContent ? splash.opacity : 0, // 투명도 조절
            rotate: [0, index * 8 - 10, 0] // 약간씩 회전하여 다양한 모양 연출
          }}
          transition={{
            duration: splash.duration,
            delay: splash.delay,
            ease: "easeOut"
          }}
        >
          <div
            className={`rounded-full blur-3xl`}
            style={{
              width: `${splash.size}px`,
              height: `${splash.size}px`,
              backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, transparent 60%)',
              transform: `scale(${1 + index * 0.1})` // 크기 변화 추가
            }}
          />
        </motion.div>
      ))}

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* 상단 - 먹선 */}
        <motion.div
          className="mb-8" // 🛑 마진 축소
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: showContent ? 1 : 0, opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-64 h-1 bg-white/70" /> 
        </motion.div>

        {/* 메인 헤드라인 */}
        <motion.div
          className="text-center mb-4" // 🛑 마진 축소
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-7xl mb-4 tracking-tight text-white font-serif font-medium leading-none flex flex-col items-center justify-center"> {/* 🛑 mb-4로 축소 */}
                <span className="whitespace-nowrap">미디어가 만든 악의 클리셰를 파괴하며,</span>
                <span className="whitespace-nowrap">진실을 마주하다</span>
          </h1>
          <div className="w-32 h-px bg-white/40 mx-auto mb-4" /> {/* 🛑 mb-4로 축소 */}
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto font-sans flex flex-col items-center justify-center"> 
            <span className="whitespace-nowrap">오해 속에 가려진 한국인의 정신과 예술의 뿌리.</span>
            <span className="whitespace-nowrap">샤머니즘의 본질적 가치를 재조명합니다.</span>
          </p>
        </motion.div>

       

        {/* 하단 - 먹선 */}
        <motion.div
          className="mt-8" // 🛑 마진 축소
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: showContent ? 1 : 0, opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-64 h-1 bg-white/70" />
        </motion.div>
      </div>

      {/* 코너 장식 - 먹 터치 */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1 }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-white/50" />
        <div className="absolute top-0 left-0 w-1 h-full bg-white/50" />
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1 }}
      >
        <div className="absolute bottom-0 right-0 w-full h-1 bg-white/50" />
        <div className="absolute bottom-0 right-0 w-1 h-full bg-white/50" />
      </motion.div>
    </motion.div>
  );
}