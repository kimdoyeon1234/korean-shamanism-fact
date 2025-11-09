"use client";

import { useState } from "react";
// motion과 AnimatePresence를 import
import { motion, AnimatePresence } from "framer-motion"; 
import { IntroSplash } from "./components/IntroSplash";
import { MainNavigation } from "./components/MainNavigation";
import { HomeSection } from "./components/sections/HomeSection";
import { AboutSection } from "./components/sections/AboutSection";
import { FactCheckSection } from "./components/sections/FactCheckSection";
import { CultureSection } from "./components/sections/CultureSection";
import { ExpertsSection } from "./components/sections/ExpertsSection";
import { HanjiTexture } from "./components/HanjiTexture";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeTab, setActiveTab] = useState("home");

  // 인트로가 사라질 때 호출될 핸들러
  const handleEnter = () => {
    setShowIntro(false);
  };

  return (
    <>
      {/* AnimatePresence로 IntroSplash를 감싸 Exit 애니메이션 활성화 */}
      <AnimatePresence mode="wait">
        {showIntro && (
          // key prop을 반드시 추가해야 AnimatePresence가 컴포넌트 언마운트 감지
          <IntroSplash onEnter={handleEnter} key="intro-splash" /> 
        )}
      </AnimatePresence>

      {/* showIntro가 false일 때 메인 콘텐츠를 motion.div로 감싸서 등장 애니메이션 추가 */}
      {!showIntro && (
        <motion.div 
            className="min-h-screen bg-white relative"
            initial={{ opacity: 0 }} // 인트로 종료 후 메인 콘텐츠의 부드러운 등장
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }} // IntroSplash의 exit 애니메이션(1초) 후에 등장하도록 딜레이 조정 가능
        >
          {/* 한지 텍스처 - 조금 더 강하게 */}
          <div className="fixed inset-0 opacity-40 pointer-events-none z-0">
            <HanjiTexture />
          </div>
          
          {/* 전체 배경에 은은한 수묵화 느낌 */}
          <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 via-transparent to-gray-100/50" />
          </div>
          
          {/* 상단 네비게이션 */}
          <MainNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          
          {/* 메인 콘텐츠 */}
          <main className="relative">
            {activeTab === "home" && <HomeSection onTabChange={function (tab: string): void {
              throw new Error("Function not implemented.");
            } } />}
            {activeTab === "about" && <AboutSection />}
            {activeTab === "factcheck" && <FactCheckSection />}
            {activeTab === "culture" && <CultureSection />}
            {activeTab === "experts" && <ExpertsSection />}
          </main>

          {/* Footer */}
          <footer className="relative py-16 px-6 border-t border-black/10 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-3 gap-12 mb-12">
                <div>
                  <h3 className="mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-black" />
                    <span className="text-xl">한국 샤머니즘</span>
                  </h3>
                  <p className="text-black/60 text-sm leading-relaxed">
                    미디어 속 오해를 바로잡고,<br />
                    한국 전통 무속신앙의 진실된 가치를 전합니다.
                  </p>
                </div>
                
                <div>
                  <h4 className="mb-4">빠른 링크</h4>
                  <ul className="space-y-2 text-sm text-black/70">
                    <li><button onClick={() => setActiveTab("about")} className="hover:text-black">무(巫)의 본질</button></li>
                    <li><button onClick={() => setActiveTab("factcheck")} className="hover:text-black text-[#C8384A]">Fact Check</button></li>
                    <li><button onClick={() => setActiveTab("culture")} className="hover:text-black">K-컬처의 근간</button></li>
                    <li><button onClick={() => setActiveTab("experts")} className="hover:text-black">학술적 검증</button></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="mb-4">참고 기관</h4>
                  <ul className="space-y-2 text-sm text-black/70">
                    <li>국립민속박물관</li>
                    <li>한국콘텐츠진흥원</li>
                    <li>문화재청</li>
                    <li>한국학중앙연구원</li>
                  </ul>
                </div>
              </div>
              
              <div className="pt-8 border-t border-black/10 flex items-center justify-between">
                <p className="text-sm text-black/40">
                  © 2025 Korean Shamanism Truth. 진실을 마주하다.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#C8384A]" title="오해" />
                  <div className="w-3 h-3 bg-[#2E5C8A]" title="진실" />
                </div>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </>
  );
}