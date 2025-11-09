"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ImageWithFallback } from "../decorations/ImageWithFallback";
import { BambooDecoration, PlumBlossomDecoration } from "../decorations/InkDecorations";
import Image from "next/image";

const shamanDance = "/shamanDance.png";

export function CultureSection() {
  const cautionCards = [
    {
      title: "종교적/문화적 맥락의 희석",
      front:
        "샤머니즘은 단순한 미신이나 오락이 아니라, 한국인의 정신적 근간과 세계관을 형성해 온 토착 종교 체계입니다.",
      back:
        "샤머니즘을 공동체의 안녕·치유가 아닌 개인의 욕망, 오컬트 공포의 도구로 사용하지 않았는지 확인하세요.",
      color: "from-[#2E5C8A]/10 to-white",
    },
    {
      title: "선악 이분법적 왜곡",
      front:
        "전통 샤머니즘은 선/악의 단순 구분보다 인간의 욕망과 영적 존재의 관계 속 복합적 긴장과 화합을 다룹니다.",
      back:
        "무당이 단순 ‘사리사욕’이나 ‘악행’의 인물로만 그려지지 않았는지 점검하세요.",
      color: "from-[#C8384A]/10 to-white",
    },
    {
      title: "서구적 프레임 혼용",
      front:
        "서양의 엑소시즘·마녀·악마숭배와 혼동되는 묘사는 고유한 문화 정체성을 훼손합니다.",
      back:
        "퇴마 장면이 서양식 구마 의식에 종속되어 보조적·열등하게 그려지지 않았는지 확인하세요.",
      color: "from-gray-100 to-white",
    },
    {
      title: "역사적/사회적 역할의 간과",
      front:
        "무속은 재난·질병 속 공동체의 심리적 안정을 돌보고, 여성 주체성의 한 축을 상징해 왔습니다.",
      back:
        "콘텐츠가 샤머니즘의 공동체 치유와 연대의 기능을 보여주었는지 살펴보세요.",
      color: "from-[#2E5C8A]/10 to-white",
    },
    {
      title: "굿의 자극적 소비",
      front:
        "굿은 음악·춤·서사가 결합된 정교한 종교 의례이자 종합 예술입니다.",
      back:
        "피/공포효과 등 자극만 강조해 의례의 미학·맥락을 훼손하지 않았는지 점검하세요.",
      color: "from-[#C8384A]/10 to-white",
    },
  ];

  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const flip = (i: number) => setFlippedIndex(flippedIndex === i ? null : i);

  return (
    <section className="min-h-screen relative py-32 px-6 overflow-hidden font-serif">
      {/* 배경 */}
      <div className="absolute inset-0 opacity-15">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1757825715704-1f2bf22d5f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="전통 회화"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/75 to-white/85" />

      {/* 장식 */}
      <PlumBlossomDecoration className="absolute right-8 top-32 w-72 h-72 opacity-12" />
      <BambooDecoration className="absolute left-8 bottom-20 w-36 h-[400px] opacity-12" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-16 bg-black" />
            <div>
              <h2 className="text-5xl md:text-6xl text-black">
                K-컬처의 근간으로서 샤머니즘
              </h2>
              <p className="text-xl text-black/60 mt-2">예술과 감정의 뿌리</p>
            </div>
          </div>
        </motion.div>

        {/* ✅ 1️⃣ 주의 요소 (2줄 카드형) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-3xl mb-12 text-black flex items-center gap-3">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">
              1
            </span>
            K-컬처 이해를 위한 주의 요소
          </h3>

          {/* 👉 3x2 반응형 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {cautionCards.map((item, i) => {
              const isFlipped = flippedIndex === i;
              return (
                <div
                  key={i}
                  onClick={() => flip(i)}
                  className={`relative h-[300px] rounded-2xl border border-black/10 shadow-md bg-gradient-to-b ${item.color} cursor-pointer`}
                  style={{ perspective: "1000px" }}
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="relative w-full h-full"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* 앞면 */}
                    <div
                      className="absolute inset-0 bg-white/85 backdrop-blur-sm p-8 rounded-2xl flex flex-col justify-center text-center"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <h4 className="text-2xl font-semibold text-black mb-3">
                        {item.title}
                      </h4>
                      <p className="text-black/70 leading-relaxed whitespace-pre-line">
                        {item.front}
                      </p>
                      <p className="text-xs text-gray-400 mt-4">
                        (클릭해서 분석 포인트 보기)
                      </p>
                    </div>

                    {/* 뒷면 */}
                    <div
                      className="absolute inset-0 bg-black text-white rounded-2xl p-8 flex flex-col justify-center text-center"
                      style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <h4 className="text-2xl font-semibold mb-3">
                        분석 시 주의할 포인트
                      </h4>
                      <p className="text-white/90 leading-relaxed">{item.back}</p>
                      <p className="text-xs text-gray-400 mt-4">
                        (다시 클릭하면 원래 내용으로 돌아갑니다)
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ✅ 2) 한국인의 ‘한(恨)’ 서사 — 기존 그대로 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32 border-t border-black/10 pt-24"
        >
          <h3 className="text-3xl mb-12 text-black flex items-center gap-3">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">
              2
            </span>
            한국인의 ‘한(恨)’ 서사
          </h3>

          <div className="border-l-4 border-black pl-12 bg-white">
            <p className="text-2xl leading-relaxed text-black/90 mb-8">
              <strong>해원굿(解寃굿)</strong>의 정신은 현대 콘텐츠 속 복수극과 치유 서사의 핵심 정서로 이어집니다.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-black/10 bg-white">
                <h4 className="text-xl mb-4 font-medium">전통 해원굿</h4>
                <p className="text-black/70 leading-relaxed mb-4">
                  억울하게 죽은 영혼의 원한을 풀어주는 의례로, 개인을 넘어 공동체의 정의와 치유를 추구합니다.
                </p>
                <div className="pt-4 border-t border-black/10">
                  <span className="text-sm text-black/50">목적: 해원(解寃) · 치유 · 화해</span>
                </div>
              </div>

              <div className="p-8 border border-black/10 bg-gray-50">
                <h4 className="text-xl mb-4 font-medium">현대 콘텐츠</h4>
                <p className="text-black/70 leading-relaxed mb-4">
                  ‘더 글로리’, ‘호텔 델루나’ 등 복수 서사는 한(恨)과 해원의 정서를 K-콘텐츠의 감정 구조로 계승합니다.
                </p>
                <div className="pt-4 border-t border-black/10">
                  <span className="text-sm text-black/50">예시: 더 글로리, 부활, 도깨비</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ✅ 3) 굿, 종합 예술의 원형 — 기존 그대로 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32 border-t border-black/10 pt-24"
        >
          <h3 className="text-3xl mb-12 text-black flex items-center gap-3">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">
              3
            </span>
            굿, 종합 예술의 원형
          </h3>

          <div className="bg-gradient-to-br from-gray-50 to-white border border-black/10 p-12 rounded-xl">
            <blockquote className="text-2xl leading-loose text-black/90 mb-12 border-l-4 border-[#2E5C8A] pl-8">
              “굿은 음악, 춤, 의상, 연희가 결합된 종합 예술이며
              <br />
              오늘날 K-컬처의 미학적 원천입니다.”
            </blockquote>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "🎵", element: "음악", desc: "시나위, 산조, 장단" },
                { icon: "💃", element: "춤", desc: "살풀이, 승무의 기원" },
                { icon: "👘", element: "의상", desc: "오방색 복식과 신성미" },
                { icon: "🎭", element: "연희", desc: "재담, 즉흥, 극적 구성" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 border border-black/10 rounded-lg text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="mb-2 font-medium">{item.element}</h4>
                  <p className="text-sm text-black/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ✅ 4) 현대적 재조명 — 기존 그대로 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl mb-12 text-black flex items-center gap-3">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">
              4
            </span>
            현대적 재조명: ‘파묘’ 효과
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-black p-10 bg-white rounded-xl">
              <h4 className="text-2xl mb-6 font-medium">MZ세대의 무속 소비</h4>
              <ul className="space-y-4 text-black/70">
                <li>• 심리 상담의 대안으로 굿을 찾는 젊은층 증가</li>
                <li>• ‘힙’하고 영적인 경험으로 재해석</li>
                <li>• SNS를 통한 무속 문화 확산</li>
              </ul>
            </div>

            <div className="border-2 border-[#2E5C8A] p-10 bg-[#2E5C8A]/5 rounded-xl">
              <h4 className="text-2xl mb-6 font-medium">영화 ‘파묘’의 긍정적 영향</h4>
              <p className="text-black/80 leading-relaxed mb-6">
                ‘파묘’는 무속을 전문가적이고 고증된 문화로 재조명했습니다. 공포물이 아닌
                <strong> 의례적 전문성</strong>과 <strong>신앙의 맥락</strong>을 보여주며 긍정적 인식을 확산시켰습니다.
              </p>
              <div className="pt-6 border-t border-[#2E5C8A]/20">
                <span className="text-sm text-[#2E5C8A]">조사 결과: 무속인에 대한 긍정적 인식 30% 증가 (2024)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 마무리 메시지 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center border-2 border-black p-12 bg-black text-white rounded-xl"
        >
          <p className="text-3xl leading-relaxed mb-6">
            샤머니즘은 K-컬처의 보이지 않는 근간입니다.
          </p>
          <p className="text-lg opacity-80">
            음악, 춤, 서사, 감정 — 우리가 사랑하는 한류의 중심에는
            <br />
            천년의 무속 예술이 흐르고 있습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
