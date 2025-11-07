// src/components/sections/HomeSection.tsx

// 1. framer-motion 경로 수정 (motion/react -> framer-motion)
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// 3. 이미지 형식 오류 해결을 위해 Image 컴포넌트 import
import Image from 'next/image';


const inkMountain = "/inkMountain.png"; 
const shamanDance = "/shamanDance.png";



import { BambooDecoration, PlumBlossomDecoration } from "../decorations/InkDecorations";


export function HomeSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      myth: "굿은 살인을 위한 흑마법이다", 
      truth: "굿은 치유와 안녕을 기원하는 의례다",
      mythColor: "#C8384A",
      truthColor: "#2E5C8A"
    },
    { 
      myth: "무당은 악령을 소환하는 사람이다", 
      truth: "무당은 신령과 인간을 잇는 영매자다",
      mythColor: "#C8384A",
      truthColor: "#2E5C8A"
    },
    { 
      myth: "샤머니즘은 미신이다", 
      truth: "샤머니즘은 한국인의 정신과 예술의 뿌리다",
      mythColor: "#C8384A",
      truthColor: "#2E5C8A"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen relative pt-24 pb-16 overflow-hidden">
      {/* 수묵화 산 배경 */}
      <div className="absolute inset-0 opacity-20">
        {/* 3. Image 컴포넌트로 변경 */}
        <Image
          src={inkMountain}
          alt="수묵화 산"
          fill
          className="object-cover"
          unoptimized // 이미지 최적화 이슈 방지 (임시)
        />
      </div>
      
      {/* 그라디언트 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80" />
      
      {/* 대나무 장식 - 왼쪽 */}
      <BambooDecoration className="absolute left-0 top-32 w-32 h-96 opacity-15" />
      
      {/* 매화 장식 - 오른쪽 상단 */}
      <PlumBlossomDecoration className="absolute right-8 top-20 w-64 h-64 opacity-15" />
      
      {/* 무당 실루엣 - 오른쪽 하단 */}
      <motion.div
        className="absolute right-0 bottom-0 w-80 h-80 opacity-10"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* 3. Image 컴포넌트로 변경 */}
        <Image
          src={shamanDance}
          alt="무당"
          fill
          className="object-contain"
          unoptimized // 이미지 최적화 이슈 방지 (임시)
        />
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* 메인 헤드라인 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20 pt-12"
        >
          <div className="inline-block mb-8">
            <div className="w-2 h-2 bg-black rounded-full mb-6 mx-auto" />
          </div>
          
          <h1 className="text-6xl md:text-8xl mb-8 tracking-tight text-black leading-tight">
            굿은 살인 주술이<br />아닙니다
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-24 h-px bg-black" />
            <div className="w-2 h-2 bg-black rotate-45" />
            <div className="w-24 h-px bg-black" />
          </div>
          
          <p className="text-2xl md:text-3xl text-black/80 mb-4">
            한국 샤머니즘, 치유와 축복의 의례
          </p>
          <p className="text-lg text-black/60 max-w-3xl mx-auto leading-relaxed">
            잘못 알려진 미디어의 왜곡을 바로잡고,<br />
            한국 전통 무속신앙의 진실된 가치를 전합니다.
          </p>
        </motion.div>

        {/* 오해 vs 진실 슬라이드 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="grid md:grid-cols-2 gap-0 border-2 border-black overflow-hidden">
            {/* 왼쪽 - 오해 (빨강) */}
            <motion.div
              key={`myth-${currentSlide}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#C8384A]/5 p-12 border-r border-black relative"
            >
              <div className="absolute top-6 left-6">
                <div className="w-12 h-12 bg-[#C8384A] flex items-center justify-center text-white">
                  ✕
                </div>
              </div>
              <div className="pt-16">
                <h3 className="text-sm tracking-widest text-[#C8384A] mb-4">미디어 속 오해</h3>
                <p className="text-3xl leading-tight text-black/90">
                  {slides[currentSlide].myth}
                </p>
              </div>
            </motion.div>

            {/* 오른쪽 - 진실 (파랑) */}
            <motion.div
              key={`truth-${currentSlide}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#2E5C8A]/5 p-12 relative"
            >
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-[#2E5C8A] flex items-center justify-center text-white">
                  ✓
                </div>
              </div>
              <div className="pt-16">
                <h3 className="text-sm tracking-widest text-[#2E5C8A] mb-4">진실</h3>
                <p className="text-3xl leading-tight text-black/90">
                  {slides[currentSlide].truth}
                </p>
              </div>
            </motion.div>
          </div>

          {/* 슬라이드 인디케이터 */}
          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-12 h-1 transition-all ${
                  i === currentSlide ? 'bg-black' : 'bg-black/20'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA - Fact Check로 이동 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <p className="text-lg text-black/70 mb-6">
            더 많은 오해와 진실을 확인하세요
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 px-12 py-4 bg-black text-white hover:bg-black/90 transition-all"
          >
            <span className="tracking-widest">미디어 팩트체크 보기</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}