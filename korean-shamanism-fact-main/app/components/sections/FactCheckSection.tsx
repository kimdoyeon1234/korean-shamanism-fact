import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const factCheckData = [
  {
    question: "영화 ‘파묘’의 파묘 장면은 단순한 흉‧수지길점 행위다.",
    answer: "O",
    explanation:
      "‘파묘’는 무속 신앙의 주술적 상징을 담은 의례로, 단순한 무덤 훼손이 아니라 영혼의 안식과 인간의 두려움을 표현하는 문화적 장면입니다.",
  },
  {
    question: "드라마 ‘도깨비’와 ‘호텔 델루나’ 속 저승사자와 귀신은 서양 판타지 설정이다.",
    answer: "X",
    explanation:
      "이 설정들은 한국 샤머니즘의 사후 세계관을 기반으로 하며, 죽음 이후의 세계를 전통 신앙의 시각으로 재해석한 것입니다.",
  },
  {
    question: "영화 ‘사바하’는 기독교적 악마를 다룬 종교 스릴러다.",
    answer: "X",
    explanation:
      "‘사바하’는 기독교, 불교, 토속신앙이 혼합된 종교적 세계관을 보여주며, 신앙 간 경계와 인간의 믿음의 본질을 탐구합니다.",
  },
  {
    question: "무당의 칼춤은 드라마적 연출일 뿐 실제로는 존재하지 않는다.",
    answer: "X",
    explanation:
      "작두굿은 실제로 존재하는 무속 의례이며, 신과 인간의 소통을 위한 신성한 주술 행위입니다.",
  },
];

export function FactCheckSection() {
  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // 자동 슬라이드 (10초 간격)
  useEffect(() => {
    if (showAll) return;
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev + 1 === factCheckData.length) {
          setShowAll(true);
          return prev;
        }
        return prev + 1;
      });
    }, 10000); // 10초
    return () => clearInterval(interval);
  }, [showAll]);

  const current = factCheckData[index];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#f8f9fa] px-6 pt-32 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-10"
      >
        🧠 OX 퀴즈 정답 확인
      </motion.h1>

      {/* 모든 정답 보기 화면 */}
      {showAll ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl w-full bg-white rounded-3xl shadow-lg p-10"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center text-gray-900">
            ✅ 모든 정답 요약
          </h2>
          <div className="space-y-6">
            {factCheckData.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-sm transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800">
                    {i + 1}. {item.question}
                  </h3>
                  {item.answer === "O" ? (
                    <span className="text-blue-600 font-bold text-xl">O</span>
                  ) : (
                    <span className="text-red-600 font-bold text-xl">X</span>
                  )}
                </div>
                <p className="text-gray-700 text-sm">{item.explanation}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={() => {
                setShowAll(false);
                setIndex(0);
              }}
              className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all"
            >
              ↩ 다시 풀기
            </button>
          </div>
        </motion.div>
      ) : (
        <>
          {/* 슬라이드 영역 */}
          <div className="relative w-full max-w-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -150 }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-3xl shadow-lg p-10 text-center"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-8">
                  {current.question}
                </h2>

                {/* OX 버튼 */}
                <div className="flex items-center justify-center gap-8 mb-8">
                  {/* O */}
                  <div
                    className={`flex flex-col items-center justify-center rounded-2xl border-2 px-6 py-4 w-28 h-28 transition-all duration-500 ${
                      current.answer === "O"
                        ? "border-blue-500 bg-blue-50 text-blue-600 shadow-md scale-105"
                        : "border-gray-200 bg-gray-100 text-gray-400"
                    }`}
                  >
                    <CheckCircle
                      className={`w-8 h-8 mb-2 ${
                        current.answer === "O"
                          ? "text-blue-500"
                          : "text-gray-300"
                      }`}
                    />
                    <span className="font-bold text-xl">O</span>
                    <span className="text-sm mt-1">
                      {current.answer === "O" ? "맞음" : ""}
                    </span>
                  </div>

                  {/* X */}
                  <div
                    className={`flex flex-col items-center justify-center rounded-2xl border-2 px-6 py-4 w-28 h-28 transition-all duration-500 ${
                      current.answer === "X"
                        ? "border-red-500 bg-red-50 text-red-600 shadow-md scale-105"
                        : "border-gray-200 bg-gray-100 text-gray-400"
                    }`}
                  >
                    <XCircle
                      className={`w-8 h-8 mb-2 ${
                        current.answer === "X"
                          ? "text-red-500"
                          : "text-gray-300"
                      }`}
                    />
                    <span className="font-bold text-xl">X</span>
                    <span className="text-sm mt-1">
                      {current.answer === "X" ? "틀림" : ""}
                    </span>
                  </div>
                </div>

                {/* 해설 */}
                <motion.p
                  key={current.question}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-700 text-base leading-relaxed border-t border-gray-200 pt-4"
                >
                  {current.explanation}
                </motion.p>

                {/* 문제 진행 표시 */}
                <div className="text-sm text-gray-400 mt-6">
                  {index + 1} / {factCheckData.length} 문제
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 수동 버튼 */}
          <div className="flex gap-4 mt-10">
            <button
              onClick={() =>
                setIndex((prev) =>
                  prev === 0 ? factCheckData.length - 1 : prev - 1
                )
              }
              className="px-6 py-3 rounded-xl bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all"
            >
              ← 이전
            </button>
            <button
              onClick={() => {
                if (index + 1 === factCheckData.length) setShowAll(true);
                else setIndex((prev) => (prev + 1) % factCheckData.length);
              }}
              className="px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all"
            >
              다음 →
            </button>
          </div>
        </>
      )}
    </section>
  );
}
