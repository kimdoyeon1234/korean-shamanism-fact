import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const quizData = [
  {
    id: 1,
    question:
      "넷플릭스 드라마 <킹덤>에서 사람을 되살리는 ‘생사초’는 동양의 강시 전설과 무관하며, 서양의 바이러스 설정일 뿐이다?",
    answer: "X",
    explanation:
      "‘생사초’를 통한 부활은 단순한 서양적 설정이 아니라, 한국적 ‘부활초’ 전설과 샤머니즘의 생명관이 결합된 주술적 상징입니다.",
  },
  {
    id: 2,
    question:
      "드라마 <도깨비>의 ‘삼신할매’는 불교나 도교의 신화 속 존재이며, 한국 무속신앙과는 관련이 없다?",
    answer: "X",
    explanation:
      "‘삼신할매’는 한국 토속 신앙의 대표적 신격으로, 인간의 출생과 운명을 관장합니다. 드라마 속 인물은 이를 현대적으로 재해석한 사례입니다.",
  },
  {
    id: 3,
    question:
      "영화 <파묘>에서 무당이 관을 꺼내기 전 지내는 굿은 악귀를 쫓는 단순한 퇴마 의식일 뿐, 땅의 신에게 기원을 푸는 의식은 아니다?",
    answer: "O",
    explanation:
      "‘파묘’ 속 굿은 악귀를 쫓는 행위가 아니라, 땅의 신에게 허락을 구하며 영혼의 안식을 비는 전통 의례입니다. 샤머니즘의 화해와 공존의 정신을 상징합니다.",
  },
];

export function FactCheckSection() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showAll, setShowAll] = useState(false);

  const current = quizData[index];
  const correctCount = quizData.filter(
    (q) => answers[q.id] === q.answer
  ).length;

  const handleAnswer = (choice: string) => {
    setAnswers((prev) => ({ ...prev, [current.id]: choice }));
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#f8f9fa] px-6 pt-32 pb-20 font-serif">
      {/* 제목 */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 text-center"
      >
        🧿 K-샤머니즘 능력고사
      </motion.h1>

      <p className="text-gray-600 text-lg mb-16 text-center leading-relaxed">
        드라마와 영화 속 샤머니즘의 진짜 의미를 알아보세요.
      </p>

      {/* ✅ 결과 보기 */}
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

          <div className="text-center mb-8 text-lg">
            당신의 점수는{" "}
            <span className="font-bold text-[#2E5C8A]">
              {correctCount} / {quizData.length}
            </span>{" "}
            입니다 🎉
          </div>

          <div className="space-y-6">
            {quizData.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-sm transition bg-gray-50"
              >
                <h3 className="font-semibold text-gray-800 mb-3">
                  Q{i + 1}. {item.question}
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>정답:</strong>{" "}
                  <span
                    className={`font-bold ${
                      item.answer === "O" ? "text-blue-600" : "text-red-600"
                    }`}
                  >
                    {item.answer}
                  </span>
                  {answers[item.id] === item.answer ? (
                    <span className="ml-2 text-green-600 font-medium">
                      (맞음)
                    </span>
                  ) : (
                    <span className="ml-2 text-red-500 font-medium">
                      (틀림)
                    </span>
                  )}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>

          {/* 🔹 설문조사 섹션 */}
          <div className="mt-20 border-t pt-10">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">
              📋 참여자 의견을 들려주세요!
            </h3>
            <p className="text-center text-gray-600 mb-8">
              퀴즈를 풀고 느낀 점이나 프로젝트에 대한 의견을 남겨주세요 💬
            </p>
            <div className="flex justify-center">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdq-UDnwOhWb5UldJ9sVDePD_TbOFXd491xStOcI298-EguzQ/viewform?embedded=true"
                width="640"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full max-w-3xl border rounded-2xl shadow-sm"
              >
                로드 중...
              </iframe>
            </div>
          </div>

          {/* 다시 풀기 버튼 */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() => {
                setShowAll(false);
                setIndex(0);
                setAnswers({});
              }}
              className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all"
            >
              ↩ 다시 풀기
            </button>
          </div>
        </motion.div>
      ) : (
        <>
          {/* 문제 슬라이드 */}
          <div className="relative w-full max-w-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -150 }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-3xl shadow-lg p-10 text-center border border-gray-200"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-6 leading-relaxed">
                  Q{index + 1}. {current.question}
                </h2>

                {/* OX 버튼 */}
                <div className="flex items-center justify-center gap-8 mb-6">
                  <button
                    onClick={() => handleAnswer("O")}
                    className={`w-28 h-28 rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-500 ${
                      answers[current.id] === "O"
                        ? "border-blue-500 bg-blue-50 text-blue-600 shadow-md scale-105"
                        : "border-gray-200 bg-gray-100 text-gray-400"
                    }`}
                  >
                    <CheckCircle
                      className={`w-8 h-8 mb-2 ${
                        answers[current.id] === "O"
                          ? "text-blue-500"
                          : "text-gray-300"
                      }`}
                    />
                    <span className="font-bold text-xl">O</span>
                  </button>

                  <button
                    onClick={() => handleAnswer("X")}
                    className={`w-28 h-28 rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-500 ${
                      answers[current.id] === "X"
                        ? "border-red-500 bg-red-50 text-red-600 shadow-md scale-105"
                        : "border-gray-200 bg-gray-100 text-gray-400"
                    }`}
                  >
                    <XCircle
                      className={`w-8 h-8 mb-2 ${
                        answers[current.id] === "X"
                          ? "text-red-500"
                          : "text-gray-300"
                      }`}
                    />
                    <span className="font-bold text-xl">X</span>
                  </button>
                </div>

                {/* 해설 */}
                {answers[current.id] && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-700 text-base leading-relaxed border-t border-gray-200 pt-4"
                  >
                    ✅ 정답:{" "}
                    <span
                      className={`font-bold ${
                        current.answer === "O"
                          ? "text-blue-600"
                          : "text-red-600"
                      }`}
                    >
                      {current.answer}
                    </span>
                    <br />
                    {current.explanation}
                  </motion.p>
                )}

                {/* 진행 표시 */}
                <div className="text-sm text-gray-400 mt-6">
                  {index + 1} / {quizData.length} 문제
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 이동 버튼 */}
          <div className="flex gap-4 mt-10">
            <button
              onClick={() =>
                setIndex((prev) =>
                  prev === 0 ? quizData.length - 1 : prev - 1
                )
              }
              className="px-6 py-3 rounded-xl bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all"
            >
              ← 이전
            </button>
            <button
              onClick={() => {
                if (index + 1 === quizData.length) setShowAll(true);
                else setIndex((prev) => (prev + 1) % quizData.length);
              }}
              disabled={!answers[current.id]} // ✅ 정답 선택 전 이동 불가
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                answers[current.id]
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              다음 →
            </button>
          </div>
        </>
      )}
    </section>
  );
}
