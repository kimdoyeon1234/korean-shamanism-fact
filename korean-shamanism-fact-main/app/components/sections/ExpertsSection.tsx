
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../decorations/ImageWithFallback";
import { BambooDecoration, PlumBlossomDecoration } from "../decorations/InkDecorations";

export function ExpertsSection() {
  const experts = [
    {
      name: "김헌선 교수",
      title: "경기대학교 국어국문학과",
      specialty: "학술적 정의",
      quote: "굿은 인간의 삶을 풍요롭게 하는 종합예술이자 공동체를 지켜주는 정신적 안녕망입니다.",
      focus: "샤머니즘의 본질과 철학적 가치"
    },
    {
      name: "양종승 박사",
      title: "국립민속박물관",
      specialty: "고증 및 문화적 가치",
      quote: "미디어의 무분별한 왜곡은 한국 고유의 문화적 정체성을 훼손합니다. 정확한 고증이 필요합니다.",
      focus: "무복, 의례 도구의 역사적 고증"
    },
    {
      name: "주철환 교수",
      title: "한국콘텐츠진흥원",
      specialty: "미디어 전략",
      quote: "K-콘텐츠의 세계화를 위해서는 우리 고유 문화에 대한 존중과 이해가 선행되어야 합니다.",
      focus: "콘텐츠 속 샤머니즘의 올바른 재현"
    },
  ];

  const references = [
    {
      institution: "국립민속박물관",
      title: "한국 무속신앙의 이해",
      year: "2023",
      link: "#"
    },
    {
      institution: "한국콘텐츠진흥원",
      title: "미디어 속 전통문화 재현 가이드라인",
      year: "2024",
      link: "#"
    },
    {
      institution: "문화재청",
      title: "중요무형문화재 굿 실태조사",
      year: "2023",
      link: "#"
    },
    {
      institution: "한국학중앙연구원",
      title: "현대 사회의 샤머니즘 연구",
      year: "2024",
      link: "#"
    },
  ];

  return (
    <section className="min-h-screen relative py-32 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* 수묵화 배경 */}
      <div className="absolute inset-0 opacity-8">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1698124073563-419bdb559e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmslMjB3YXNoJTIwbW91bnRhaW58ZW58MXx8fHwxNzYwMjgwNzY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="수묵화"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* 대나무 장식 */}
      <BambooDecoration className="absolute right-0 top-40 w-40 h-[500px] opacity-10" />
      
      {/* 먹물 번짐 */}
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-black/5 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-16 bg-black" />
            <div>
              <h2 className="text-5xl md:text-6xl text-black">학술적 검증</h2>
              <p className="text-xl text-black/60 mt-2">전문가의 목소리</p>
            </div>
          </div>
        </motion.div>

        {/* 전문가 인용구 */}
        <div className="space-y-8 mb-20">
          {experts.map((expert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-l-4 border-black bg-white p-10 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-6">
                <Quote className="w-12 h-12 text-black/20 shrink-0" />
                <div className="flex-1">
                  <blockquote className="text-2xl text-black/90 leading-relaxed mb-6">
                    "{expert.quote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-black/10">
                    <div>
                      <p className="text-lg mb-1">{expert.name}</p>
                      <p className="text-sm text-black/60">{expert.title}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-black/50">전문 분야</p>
                      <p className="text-sm">{expert.specialty}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 참고 문헌 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl mb-12 text-black flex items-center gap-3">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">
              📚
            </span>
            주요 참고 자료
          </h3>

          <div className="bg-white border border-black/10 divide-y divide-black/10">
            {references.map((ref, i) => (
              <div
                key={i}
                className="p-6 hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <div className="flex-1">
                  <p className="mb-2">
                    <span className="text-sm text-black/50">{ref.institution}</span>
                  </p>
                  <p className="text-lg text-black">{ref.title}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-black/60 mb-2">{ref.year}</p>
                  <a 
                    href={ref.link}
                    className="text-sm text-[#2E5C8A] hover:underline"
                  >
                    자세히 보기 →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 신뢰도 강조 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 border-2 border-black p-12 bg-black text-white text-center"
        >
          <h3 className="text-3xl mb-6">이 웹사이트의 모든 정보는</h3>
          <p className="text-xl opacity-90 mb-8">
            국립민속박물관, 한국콘텐츠진흥원 등 공신력 있는 기관의<br />
            학술 자료와 전문가 검증을 거쳤습니다.
          </p>
          <div className="flex items-center justify-center gap-8 pt-8 border-t border-white/20">
            <div>
              <p className="text-sm opacity-70 mb-1">자료 출처</p>
              <p className="text-2xl">4+</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div>
              <p className="text-sm opacity-70 mb-1">전문가 자문</p>
              <p className="text-2xl">3+</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div>
              <p className="text-sm opacity-70 mb-1">검증 기관</p>
              <p className="text-2xl">5+</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
