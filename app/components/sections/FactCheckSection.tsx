
import { useState } from "react";
import { AlertCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../decorations/ImageWithFallback";
import { BambooDecoration, PlumBlossomDecoration } from "../decorations/InkDecorations";


const factCheckData = [
  {
    id: "horror",
    title: "공포/악마화",
    icon: "👿",
    color: "#C8384A",
    myths: [
      {
        claim: "굿은 '살인 주술'이다",
        reality: "굿은 '해원(解寃)'과 '안녕'이 목적",
        detail: "영화 '곡성', '방법' 등에서 굿이 살인이나 저주의 수단으로 묘사되지만, 실제 굿은 원한을 풀고 평안을 기원하는 치유 의례입니다.",
        examples: "작품: 곡성, 방법, 검은 사제들"
      },
      {
        claim: "무당은 '악의 하수인'이다",
        reality: "무당은 공동체의 치유자",
        detail: "미디어에서 무당이 악령과 결탁하는 것처럼 그려지지만, 실제로는 신령과 인간을 잇는 중재자이며 공동체의 안녕을 책임집니다.",
        examples: "작품: 여곡성, 사바하"
      }
    ]
  },
  {
    id: "distortion",
    title: "문화/역사 왜곡",
    icon: "🎭",
    color: "#E8B44F",
    myths: [
      {
        claim: "한중일 무속이 구분되지 않는다",
        reality: "한국 고유의 복식과 의례가 존재",
        detail: "'조선구마사'에서 일본식 의상이 등장하고, '곡성'에서 일본 신도 요소가 혼재되는 등 문화적 정체성이 혼란스럽게 묘사됩니다.",
        examples: "작품: 조선구마사, 곡성"
      },
      {
        claim: "무복과 의례가 고증 없이 창작된다",
        reality: "조선 무복은 엄격한 체계가 있음",
        detail: "실제 무당의 의복과 의례 도구는 지역과 신령에 따라 엄격한 규칙이 있으나, 드라마에서는 임의로 혼합하거나 왜곡합니다.",
        examples: "문제: 한국 고유 무복 vs 왜곡된 드라마 의상"
      }
    ]
  },
  {
    id: "mockery",
    title: "희화화/상업화",
    icon: "🎪",
    color: "#2E5C8A",
    myths: [
      {
        claim: "무당은 '웃음거리' 캐릭터다",
        reality: "무속인의 71%가 부정적 인식 호소",
        detail: "'혼술남녀', '미남당' 등에서 무당이 코믹한 조연으로 소비되며, 실제 무속인들이 직업적 차별과 편견에 시달리고 있습니다.",
        examples: "통계: 무속인 설문조사 (2023)"
      },
      {
        claim: "무속은 '돈벌이 수단'이다",
        reality: "무속은 평생의 소명이자 희생",
        detail: "신병을 앓고 무당이 되는 과정은 고통스러운 영적 각성이며, 이를 단순히 사기나 상술로 묘사하는 것은 왜곡입니다.",
        examples: "작품: 각종 예능 프로그램"
      }
    ]
  },
  {
    id: "hybrid",
    title: "개념 혼종/판타지",
    icon: "🌀",
    color: "#1A1A1A",
    myths: [
      {
        claim: "불교/도교/무속이 뒤섞인다",
        reality: "각 신앙은 명확한 체계가 있음",
        detail: "'신과 함께'에서 저승 개념이 불교와 무속이 혼재되어 본래의 의미가 모호해집니다.",
        examples: "작품: 신과 함께, 저승사자"
      },
      {
        claim: "샤머니즘은 그냥 '초자연 판타지'다",
        reality: "샤머니즘은 역사적 신앙 체계",
        detail: "'불가살' 등에서 무속이 단순한 괴물 퇴치 도구로 전락하며, 신앙적 의미가 완전히 희석됩니다.",
        examples: "작품: 불가살, 킹덤 시즌2"
      }
    ]
  }
];

export function FactCheckSection() {
  const [selectedCategory, setSelectedCategory] = useState("horror");
  const currentData = factCheckData.find(d => d.id === selectedCategory)!;

  return (
    <section className="min-h-screen relative py-32 px-6 bg-white overflow-hidden">
      {/* 수묵화 배경 - 매우 연하게 */}
      <div className="absolute inset-0 opacity-5">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1732536494840-f8c7a8532a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBtaXN0JTIwbmF0dXJlfGVufDF8fHx8MTc2MDI4MDc2OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="대나무"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* 먹물 번짐 효과 */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-black/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-radial from-[#C8384A]/5 to-transparent rounded-full blur-3xl" />
      
      {/* 장식 요소 */}
      <PlumBlossomDecoration className="absolute top-40 left-8 w-64 h-64 opacity-8" />
      <BambooDecoration className="absolute bottom-20 right-8 w-32 h-96 opacity-8" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-block mb-8">
            <div className="px-8 py-3 bg-[#C8384A] text-white tracking-widest">
              FACT CHECK
            </div>
          </div>
          <h2 className="text-6xl md:text-7xl text-black mb-6">
            오해와 진실
          </h2>
          <p className="text-2xl text-black/70">미디어 속 한국 샤머니즘 팩트체크</p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-32 h-px bg-black" />
            <div className="w-2 h-2 bg-black rotate-45" />
            <div className="w-32 h-px bg-black" />
          </div>
        </motion.div>

        {/* 카테고리 선택 */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {factCheckData.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-6 border-2 transition-all text-left ${
                selectedCategory === category.id
                  ? 'border-black bg-black text-white'
                  : 'border-black/20 hover:border-black bg-white text-black'
              }`}
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-lg mb-1">{category.title}</h3>
              <div 
                className={`w-12 h-1 mt-3 ${
                  selectedCategory === category.id ? 'bg-white' : 'bg-black/20'
                }`}
              />
            </button>
          ))}
        </div>

        {/* 선택된 카테고리의 오해들 */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {currentData.myths.map((myth, i) => (
            <div
              key={i}
              className="border-2 border-black overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="grid md:grid-cols-2 divide-x-2 divide-black">
                {/* 왼쪽 - 오해 */}
                <div className="bg-[#C8384A]/5 p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <AlertCircle className="w-8 h-8 text-[#C8384A] shrink-0 mt-1" />
                    <div>
                      <span className="text-xs tracking-widest text-[#C8384A] block mb-2">
                        미디어 속 오해
                      </span>
                      <h4 className="text-3xl text-black leading-tight">
                        {myth.claim}
                      </h4>
                    </div>
                  </div>
                  <p className="text-black/60 text-sm mb-4 pl-12">{myth.examples}</p>
                </div>

                {/* 오른쪽 - 진실 */}
                <div className="bg-[#2E5C8A]/5 p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <CheckCircle className="w-8 h-8 text-[#2E5C8A] shrink-0 mt-1" />
                    <div>
                      <span className="text-xs tracking-widest text-[#2E5C8A] block mb-2">
                        진실
                      </span>
                      <h4 className="text-3xl text-black leading-tight">
                        {myth.reality}
                      </h4>
                    </div>
                  </div>
                  <p className="text-black/70 leading-relaxed pl-12">
                    {myth.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* 통계 강조 */}
        {selectedCategory === "mockery" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 border-2 border-black p-12 bg-gray-50"
          >
            <h3 className="text-3xl mb-8 text-black">실제 무속인들의 목소리</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4" style={{ color: '#C8384A' }}>71%</div>
                <p className="text-black/70">부정적 사회 인식을 경험</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4" style={{ color: '#C8384A' }}>85%</div>
                <p className="text-black/70">미디어 왜곡에 문제 제기</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4" style={{ color: '#2E5C8A' }}>92%</div>
                <p className="text-black/70">전통의 가치 보존 희망</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
