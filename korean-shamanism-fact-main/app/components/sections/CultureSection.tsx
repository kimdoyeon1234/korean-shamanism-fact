import { motion } from "framer-motion";
import { ImageWithFallback } from "../decorations/ImageWithFallback";
import { BambooDecoration, PlumBlossomDecoration } from "../decorations/InkDecorations";
import Image from "next/image";

const shamanDance = "/shamanDance.png";

export function CultureSection() {
  const coreElements = [
    {
      title: "🌀 이야기 구조",
      content:
        "샤머니즘은 한국 드라마와 영화의 감정적 뼈대를 이루는 서사 구조입니다.\n영혼의 정화와 해원을 중심으로 감정적 카타르시스를 제공합니다.",
      color: "bg-gradient-to-b from-[#2E5C8A]/5 to-white",
    },
    {
      title: "🎨 미적 코드",
      content:
        "굿, 탈, 신단에서 비롯된 색감과 의상, 상징은 K-컬처의 미학적 감각을 형성합니다.\n의례의 시각적 요소가 현대 콘텐츠로 이어집니다.",
      color: "bg-gradient-to-b from-[#C8384A]/5 to-white",
    },
    {
      title: "💧 정서 코드 (한·정·치유)",
      content:
        "‘한(恨)’은 슬픔과 해원의 감정을 함께 품은 정서입니다.\n고통을 치유와 화해로 승화시키는 과정은 K-드라마의 감정 구조로 계승되었습니다.",
      color: "bg-gradient-to-b from-gray-100 to-white",
    },
    {
      title: "🔄 현대적 계승",
      content:
        "무속은 단순한 미신이 아니라 스토리텔링과 미학적 자원으로 재해석됩니다.\n전통을 현대적으로 이어가는 문화적 창조의 원형입니다.",
      color: "bg-gradient-to-b from-[#2E5C8A]/10 to-white",
    },
    {
      title: "⚠️ 주의점",
      content:
        "샤머니즘은 공포나 신비주의로 소비되어선 안 됩니다.\n신앙적 맥락을 존중하며, 문화적 본질을 지키는 균형 있는 콘텐츠 해석이 필요합니다.",
      color: "bg-gradient-to-b from-[#C8384A]/10 to-white",
    },
  ];

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

      {/* 떠 있는 무당 이미지 */}
      <motion.div
        className="absolute left-0 top-1/3 w-64 h-64 opacity-10"
        animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src={shamanDance} alt="무당" fill className="object-contain" unoptimized />
      </motion.div>

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

        {/* 🔹 1. K-컬처의 근간 5가지 핵심 요소 (슬라이드형) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-3xl mb-12 text-black flex items-center gap-3">
            <span className="w-8 h-8 bg-[#2E5C8A] text-white flex items-center justify-center text-sm">
              1
            </span>
            K-컬처의 근간 5가지 핵심 요소
          </h3>

          <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide">
            {coreElements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`min-w-[280px] sm:min-w-[340px] md:min-w-[380px] rounded-2xl shadow-md ${item.color} p-8 snap-start flex flex-col justify-between border border-black/10 hover:shadow-xl transition-all`}
              >
                <div>
                  <h4 className="text-2xl text-black mb-4 font-semibold">{item.title}</h4>
                  <p className="text-black/70 leading-relaxed whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 🔹 2. 한(恨)의 서사 */}
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

        {/* 🔹 3. 굿의 예술성 */}
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
              “굿은 음악, 춤, 의상, 연희가 결합된 종합 예술이며<br />
              오늘날 K-컬처의 미학적 원천입니다.”
            </blockquote>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "🎵", element: "음악", desc: "시나위, 산조, 장단" },
                { icon: "💃", element: "춤", desc: "살풀이, 승무의 기원" },
                { icon: "👘", element: "의상", desc: "오방색 복식과 신성미" },
                { icon: "🎭", element: "연희", desc: "재담, 즉흥, 극적 구성" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 border border-black/10 rounded-lg text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="mb-2 font-medium">{item.element}</h4>
                  <p className="text-sm text-black/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 🔹 4. 현대적 재조명 */}
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
                <span className="text-sm text-[#2E5C8A]">
                  조사 결과: 무속인에 대한 긍정적 인식 30% 증가 (2024)
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 마무리 */}
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
            음악, 춤, 서사, 감정 — 우리가 사랑하는 한류의 중심에는<br />
            천년의 무속 예술이 흐르고 있습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
