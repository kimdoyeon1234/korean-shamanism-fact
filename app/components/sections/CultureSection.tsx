"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ImageWithFallback } from "../decorations/ImageWithFallback";
import { BambooDecoration, PlumBlossomDecoration } from "../decorations/InkDecorations";

export function CultureSection() {
  /* ------------------------------------------
      1️⃣ 주의 요소 — 전시형 카드
  -------------------------------------------*/

  const cautionCards = [
    {
      title: "샤머니즘의 본뜻이 흐려짐",
      front: "샤머니즘은 미신이 아니라, 한국인의 정신과 세계관을 만든 전통 신앙입니다.",
      back: "콘텐츠가 샤머니즘을 공포·오컬트로 축소하지 않았는지 확인해보세요.",
      color: "from-[#2E5C8A]/10 to-white",
    },
    {
      title: "무당을 단순 ‘선악 캐릭터’로 표현",
      front: "무속은 선악 대립이 아닌, 인간의 복잡한 감정과 갈등을 다루는 세계입니다.",
      back: "무당 캐릭터를 악인·영웅 중 하나로 고정하지 않았는지 점검해보세요.",
      color: "from-[#C8384A]/10 to-white",
    },
    {
      title: "서양식 퇴마물처럼 표현",
      front: "한국 무속은 서양 오컬트와 전혀 다른 기원·의례·상징을 지닙니다.",
      back: "굿이 엑소시즘처럼 표현되지 않았는지, 고유성이 훼손되지 않았는지 확인하세요.",
      color: "from-gray-100 to-white",
    },
    {
      title: "샤머니즘의 실제 역할을 놓침",
      front: "무속은 공동체의 두려움과 슬픔을 달래는 치유 의례였습니다.",
      back: "치유·연대 기능을 보여주지 않고 단순 소재로만 사용되지 않았는지 살펴보세요.",
      color: "from-[#2E5C8A]/10 to-white",
    },
    {
      title: "굿을 자극적으로 소비",
      front: "굿은 음악·춤·이야기가 결합된 종합예술입니다.",
      back: "피·소리·공포 연출만 과장해 의례의 의미를 훼손하지 않았는지 점검해야 합니다.",
      color: "from-[#C8384A]/10 to-white",
    },
  ];

  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const flip = (i: number) => setFlippedIndex(flippedIndex === i ? null : i);

  /* ------------------------------------------
      2️⃣ 한(恨) 서사 카드
  -------------------------------------------*/

  const hanNarrativeCards = [
    {
      title: "〈더 글로리〉(2022, Netflix 시리즈)",
      subtitle: "현대적 해원(解寃) 정서의 재현",
      desc: "억울함을 풀고 정의를 회복하는 과정은 전통 해원굿의 한(恨) 해소 구조와 닮아 있다.",
    },
    {
      title: "〈부활〉(2005, KBS 드라마)",
      subtitle: "기억 회복을 통한 치유와 해원",
      desc: "기억 회복–진실 규명–관계 회복 과정은 한국적 해원 서사를 현대적으로 보여준다.",
    },
    {
      title: "〈도깨비〉(2016, tvN 드라마)",
      subtitle: "미련·기억·감정의 해원 서사",
      desc: "삶과 죽음을 넘나들며 미완의 감정을 정리하는 구조는 정서적 해원의 현대적 재해석이다.",
    },
  ];

  return (
    <section className="min-h-screen relative py-32 px-6 overflow-hidden">

      {/* 배경 */}
      <div className="absolute inset-0 opacity-15">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1757825715704-1f2bf22d5f4c"
          alt="전통 회화"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/85" />

      {/* 장식 */}
      <PlumBlossomDecoration className="absolute right-8 top-32 w-72 h-72 opacity-10" />
      <BambooDecoration className="absolute left-8 bottom-20 w-36 h-[400px] opacity-10" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-16 bg-black" />
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-black">
                K-컬처의 근간으로서 샤머니즘
              </h2>
              <p className="text-xl text-black/60 mt-2">예술과 감정의 뿌리</p>
            </div>
          </div>
        </motion.div>

        {/* ---------------------- */}
        {/* 1️⃣ 주의 요소 카드 */}
        {/* ---------------------- */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-3xl mb-12 text-black flex items-center gap-3">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">1</span>
            K-컬처 이해를 위한 핵심 분석 포인트
          </h3>

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
                      <h4 className="text-2xl font-semibold mb-3">{item.title}</h4>
                      <p className="text-black/70">{item.front}</p>
                      <p className="text-xs text-gray-400 mt-4">(클릭해서 자세히 보기)</p>
                    </div>

                    {/* 뒷면 */}
                    <div
                      className="absolute inset-0 bg-black text-white rounded-2xl p-8 flex flex-col justify-center text-center"
                      style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                    >
                      <h4 className="text-2xl font-semibold mb-3">분석 가이드</h4>
                      <p className="text-white/90">{item.back}</p>
                      <p className="text-xs text-gray-300 mt-4">(다시 클릭하면 돌아갑니다)</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ---------------------- */}
        {/* 2️⃣ 한(恨) 서사 카드 */}
        {/* ---------------------- */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32 border-t border-black/10 pt-24"
        >
          <h3 className="text-3xl mb-12 flex items-center gap-3 text-black">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">2</span>
            한국인의 ‘한(恨)’ 서사
          </h3>

          {/* 설명 박스 */}
          <div className="mb-12 p-6 bg-white/80 border border-black/10 rounded-xl shadow-sm backdrop-blur">
            <h4 className="text-xl font-semibold mb-3 text-black">
              해원굿(解寃굿)과 한(恨)의 서사란?
            </h4>

            <p className="text-black/70 text-sm whitespace-pre-line leading-relaxed">
{`해원굿은 억울함·고통·미완의 감정을 풀어내고 정의와 관계를 회복하는 전통 의례입니다.
이 구조는 드라마·영화에서 복수·기억 회복·감정 치유 등 서사의 핵심 기제로 계승됩니다.`}
            </p>
          </div>

          {/* 카드 3개 */}
          <div className="grid md:grid-cols-3 gap-10">
            {hanNarrativeCards.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-black/10 shadow-sm bg-white hover:shadow-lg transition-shadow p-8 flex flex-col"
              >
                <h4 className="text-lg font-semibold text-black mb-2">{item.title}</h4>


                <p className="text-black/60 text-sm mb-4">{item.subtitle}</p>
                <p className="text-black/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ---------------------- */}
        {/* 3️⃣ 굿, 종합 예술 */}
        {/* ---------------------- */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32 border-t border-black/10 pt-24"
        >
          <h3 className="text-3xl mb-12 flex items-center gap-3 text-black">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">3</span>
            굿, 종합 예술의 원형
          </h3>

          <div className="bg-gradient-to-br from-gray-50 to-white border border-black/10 p-12 rounded-xl">
            <blockquote className="text-2xl leading-loose text-black/90 mb-12 border-l-4 border-[#2E5C8A] pl-8">
              “굿은 음악, 춤, 의상, 연희가 결합된 종합 예술이며<br />
              오늘날 K-컬처의 미학적 원천입니다.”
            </blockquote>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "🎵", element: "음악", desc: "시나위, 산조, 장단" },
                { icon: "💃", element: "춤", desc: "살풀이, 승무의 기원" },
                { icon: "👘", element: "의상", desc: "오방색 복식과 신성미" },
                { icon: "🎭", element: "연희", desc: "재담·즉흥·극적 구성" },
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

        {/* ---------------------- */}
        {/* 4️⃣ 마무리 메시지 */}
        {/* ---------------------- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center border-2 border-black p-12 bg-black text-white rounded-xl"
        >
          <p className="text-3xl leading-relaxed mb-6">
            샤머니즘은 K-컬처의 보이지 않는 근간입니다.
          </p>
          <p className="text-lg opacity-80">
            음악, 춤, 서사, 감정 — 우리가 사랑하는 한류의 중심에는<br />
            천년의 무속 예술이 흐르고 있습니다.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
