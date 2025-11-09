"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function ExpertsSection() {
  return (
    <section className="min-h-screen relative py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl space-y-32">

        {/* ===== 공통 헤더 ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-black mb-4">학술적 검증</h2>
          <p className="text-lg text-black/60">
            학자·목회자·평론가가 말하는 샤머니즘의 진실 — 신앙, 문화, 인식의 교차점
          </p>
        </motion.div>

        {/* ===== 1️⃣ 윤석진 교수님 (문화예술적 시각) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg border border-black/10 rounded-2xl p-10 space-y-10"
        >
          {/* 프로필 */}
          <div className="flex items-center gap-6 border-b border-black/10 pb-8">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-black">
              윤
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-black">
                윤석진 교수
              </h3>
              <p className="text-black/60">
                충남대학교 국어국문학과 · 드라마 평론가
              </p>
            </div>
          </div>

          {/* Q1 */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#2E5C8A]">
              Q1. 미디어 속 샤머니즘의 재현은 전통 사회와 어떻게 다르며, 어떤 왜곡이 있습니까?
            </h4>
            <p className="text-black/80 leading-relaxed">
              전통 사회의 샤머니즘이 ‘불안 해소와 행운 기원’의 신앙이었다면,
              현대 미디어 속 샤머니즘은 현실 문제를 해결하기 위한{" "}
              <strong>오컬트적 수단</strong>으로 변형되었습니다.
              드라마나 영화는 이를 자극적 소재로 소비하며, 종교적 의미보다는{" "}
              <em>볼거리 중심</em>으로 재현합니다.
            </p>
            <p className="text-black/80 leading-relaxed">
              특히 영화 <em>파묘</em>나 드라마 <em>악귀</em>처럼 공포를 강조하는 작품은
              무속을 그로테스크하게 재현함으로써{" "}
              <strong>편견을 강화하는 문제점</strong>을 드러냅니다.
            </p>
          </div>

          {/* Q2 */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#2E5C8A]">
              Q2. 샤머니즘은 한국 대중예술에서 어떤 의미를 갖고 있습니까?
            </h4>
            <p className="text-black/80 leading-relaxed">
              샤머니즘은 단순한 종교가 아니라{" "}
              <strong>민족 정신의 뿌리</strong>이며,
              한국 대중예술의 상징 코드로 작용합니다.
              하지만 그 깊이를 이해하지 못한 채 자극적으로 소비된다면
              문화적 왜곡이 일어납니다.
            </p>
            <p className="text-black/80 leading-relaxed">
              한국 대중예술의 뿌리를 인식하려는 노력이 뒷받침될 때,
              <strong>대중적 소비가 곧 문화적 깊이</strong>로 이어질 수 있습니다.
            </p>
          </div>

          {/* Q3 */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#2E5C8A]">
              Q3. 샤머니즘은 앞으로 어떤 방향으로 재해석되어야 할까요?
            </h4>
            <p className="text-black/80 leading-relaxed">
              샤머니즘은 종교가 아닌{" "}
              <strong>문화적 차원</strong>에서 받아들일 때 왜곡이 줄어듭니다.
              그럴 때 비로소 한국의 전통예술은{" "}
              <strong>K-컬처의 에너지</strong>로 성장할 수 있습니다.
            </p>
          </div>

          <div className="border-t border-black/10 pt-8 text-center text-black/70">
            <Quote className="inline-block w-8 h-8 text-[#C8384A] mb-3" />
            <p className="italic text-lg">
              “샤머니즘은 K-Culture의 에너지다.”
            </p>
          </div>
        </motion.div>

        {/* ===== 2️⃣ 이동현 목사님 (기독교 신앙적 시각) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg border border-black/10 rounded-2xl p-10 space-y-10"
        >
          {/* 프로필 */}
          <div className="flex items-center gap-6 border-b border-black/10 pb-8">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-black">
              이
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-black">이동현 목사</h3>
              <p className="text-black/60">안양 대광교회</p>
            </div>
          </div>

          {/* Q1 */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#C8384A]">
              Q1. 미디어 속 무속적 장면이 신앙관에 미치는 영향은?
            </h4>
            <p className="text-black/80 leading-relaxed">
              미디어는 무속을 ‘문화’로 치환하여{" "}
              <strong>종교의 신성성을 약화</strong>시킵니다.
              사람들은 진리를 추구하기보다 흥미 위주의 소비로 전락하고 있습니다.
            </p>
            <p className="text-black/80 leading-relaxed">
              기독교는 이에 대해 <strong>명확한 진리 제시와 구별의 기준</strong>을 세워야 합니다.
            </p>
          </div>

          {/* Q2 */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#C8384A]">
              Q2. 기독교와 샤머니즘은 공존할 수 있을까요?
            </h4>
            <p className="text-black/80 leading-relaxed">
              기독교는 유일신 신앙을 기반으로 하기에 공존은 어렵습니다.
              그러나 <strong>샤머니즘을 믿는 사람들</strong>은 여전히 구원과 평안을 갈망하는 존재입니다.
            </p>
            <p className="text-black/80 leading-relaxed">
              배척보다는 이해로, <strong>복음의 사랑으로 이끌어야</strong> 합니다.
            </p>
          </div>

          {/* Q3 */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#C8384A]">
              Q3. 젊은 세대가 사주·타로로 향하는 이유는 무엇인가요?
            </h4>
            <p className="text-black/80 leading-relaxed">
              현대의 젊은 세대는 불안 속에서{" "}
              <strong>즉각적 해답과 위로</strong>를 찾습니다.
              교회가 그 갈증을 채우지 못한다면, 세속적 신앙이 그 자리를 대신하게 됩니다.
            </p>
            <p className="text-black/80 leading-relaxed">
              그러나 이는 동시에{" "}
              <strong>복음으로 다시 채워갈 기회</strong>가 될 수 있습니다.
            </p>
          </div>

          <div className="border-t border-black/10 pt-8 text-center text-black/70">
            <Quote className="inline-block w-8 h-8 text-[#2E5C8A] mb-3" />
            <p className="italic text-lg">
              “샤머니즘은 진리의 부재로 생겨난 그림자일 뿐이다.”
            </p>
          </div>
        </motion.div>

        {/* ===== 3️⃣ 한승훈 교수님 (종교학적 시각) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg border border-black/10 rounded-2xl p-10 space-y-10"
        >
          {/* 프로필 */}
          <div className="flex items-center gap-6 border-b border-black/10 pb-8">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-black">
              한
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-black">
                한승훈 교수
              </h3>
              <p className="text-black/60">한국학대학원 · 종교학과</p>
            </div>
          </div>

          {/* Q1 */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#2E5C8A]">
              Q1. 미디어 속 샤머니즘 재현에서 가장 우려되는 왜곡은 무엇입니까?
            </h4>
            <p className="text-black/80 leading-relaxed">
              현대 미디어는 무속을{" "}
              <strong>기이한 오컬트 현상</strong>으로 단순화합니다.
              그러나 이는 전통 사회에서도 존재하던 인식입니다.
              차이는 오늘날 <em>영적 능력에 대한 신뢰의 약화</em>와
              오락화 경향의 강화입니다.
            </p>
            <p className="text-black/80 leading-relaxed">
              무속은 생활신앙의 일부로 존재했지만,
              미디어는 그것을 <strong>악마화 혹은 신비화</strong>하며 본질을 왜곡합니다.
            </p>
          </div>

          {/* Q2 */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#2E5C8A]">
              Q2. 샤머니즘은 다른 종교들과 어떤 상호작용을 거쳤습니까?
            </h4>
            <p className="text-black/80 leading-relaxed">
              조선시대 초 무당은 국가 의례에 참여했으나,
              이후 유교 중심 사회에서 배제되었습니다.
              근대 이후 ‘미신 타파’ 운동은 무속을 더욱 주변화시켰습니다.
            </p>
            <p className="text-black/80 leading-relaxed">
              그러나 무속은 여전히 <strong>민간의 정신적 토대</strong>로 기능하며,
              <em>종교 통제의 역사 속에서도 끈질기게 생존한 신앙</em>입니다.
            </p>
          </div>

          {/* Q3 */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#2E5C8A]">
              Q3. 현대 사회에서 샤머니즘의 존재 의미는 무엇입니까?
            </h4>
            <p className="text-black/80 leading-relaxed">
              현대인의 불확실성과 불안을 달래주는{" "}
              <strong>직관적 신앙 체계</strong>로서 기능합니다.
              이는 미신이 아니라, 제도 종교가 채우지 못한{" "}
              <strong>실존적 욕구의 표현</strong>입니다.
            </p>
            <p className="text-black/80 leading-relaxed">
              샤머니즘을 이해하는 일은 곧{" "}
              <strong>타인의 신앙과 문화를 존중하는 사회적 성숙</strong>의 지표입니다.
            </p>
          </div>

          <div className="border-t border-black/10 pt-8 text-center text-black/70">
            <Quote className="inline-block w-8 h-8 text-[#C8384A] mb-3" />
            <p className="italic text-lg">
              “샤머니즘은 신비가 아닌, 인간의 삶 속에서 이어진 종교적 언어다.”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
