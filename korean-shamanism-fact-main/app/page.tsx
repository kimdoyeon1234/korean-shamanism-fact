"use client";

import { useState } from "react";
import { IntroSplash } from "./components/IntroSplash";
import { MainNavigation } from "./components/MainNavigation";
import { AboutSection } from "./components/sections/AboutSection";
import { FactCheckSection } from "./components/sections/FactCheckSection";
import { CultureSection } from "./components/sections/CultureSection";
import { ExpertsSection } from "./components/sections/ExpertsSection";
import { HanjiTexture } from "./components/HanjiTexture";

export default function Home() {
  // ✅ 인트로 이후 바로 OX 퀴즈로 시작
  const [showIntro, setShowIntro] = useState(true);
  const [activeTab, setActiveTab] = useState("factcheck"); // ✅ 첫 탭을 OX 퀴즈로 설정

  // 🔹 인트로 화면 유지 (IntroSplash 컴포넌트가 끝나면 본문 노출)
  if (showIntro) {
    return <IntroSplash onEnter={() => setShowIntro(false)} />;
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* ✅ 한지 질감 배경 */}
      <div className="fixed inset-0 opacity-40 pointer-events-none z-0">
        <HanjiTexture />
      </div>

      {/* ✅ 은은한 수묵화 느낌의 그라데이션 */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 via-transparent to-gray-100/50" />
      </div>

      {/* ✅ 상단 네비게이션 바 */}
      <MainNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ✅ 메인 콘텐츠 영역 */}
      <main className="relative">
        {activeTab === "about" && <AboutSection />}
        {activeTab === "factcheck" && <FactCheckSection />} {/* ✅ 첫 화면에 표시 */}
        {activeTab === "culture" && <CultureSection />}
        {activeTab === "experts" && <ExpertsSection />}
      </main>

      {/* ✅ Footer */}
      <footer className="relative py-16 px-6 border-t border-black/10 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* 좌측: 사이트 설명 */}
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

            {/* 중앙: 빠른 링크 */}
            <div>
              <h4 className="mb-4">빠른 링크</h4>
              <ul className="space-y-2 text-sm text-black/70">
                <li>
                  <button
                    onClick={() => setActiveTab("about")}
                    className="hover:text-black"
                  >
                    무(巫)의 본질
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("factcheck")}
                    className="hover:text-black text-[#C8384A]"
                  >
                    OX 퀴즈 {/* ✅ 이름 변경 */}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("culture")}
                    className="hover:text-black"
                  >
                    K-컬처의 근간
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("experts")}
                    className="hover:text-black"
                  >
                    학술적 검증
                  </button>
                </li>
              </ul>
            </div>

            {/* 우측: 참고 기관 */}
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

          {/* 하단 저작권 */}
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
    </div>
  );
}
