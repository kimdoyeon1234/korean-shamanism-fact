import { motion } from "framer-motion";
import { BambooDecoration } from "../decorations/BambooDecoration";
import { PlumBlossomDecoration } from "../decorations/PlumBlossomDecoration";
import { ImageWithFallback } from "../decorations/ImageWithFallback";

export function AboutSection() {
  const termCorrections = [
    {
      wrong: "흑마법",
      right: "굿은 치유와 기원",
      explanation: "굿은 액운을 풀고 복을 비는 긍정적 의례입니다. 해를 끼치는 주술이 아닙니다."
    },
    {
      wrong: "악마 소환",
      right: "무당은 영매/중재자",
      explanation: "무당은 신령과 인간 사이를 잇는 매개자로, 악령을 소환하지 않습니다."
    },
    {
      wrong: "점쟁이",
      right: "무당은 영적 지도자",
      explanation: "무당은 단순한 점술가가 아니라 공동체의 치유와 안녕을 책임지는 종교인입니다."
    },
    {
      wrong: "신병 = 귀신 들림",
      right: "신병은 통과의례",
      explanation: "신병은 무당이 되기 위한 영적 각성 과정으로, 병리적 현상이 아닙니다."
    },
  ];

  return (
    <section className="min-h-screen relative py-32 px-6 overflow-hidden">
      {/* 은은한 수묵화 배경 */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1698124073563-419bdb559e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmslMjB3YXNoJTIwbW91bnRhaW58ZW58MXx8fHwxNzYwMjgwNzY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="수묵화"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90" />

      {/* 대나무 / 매화 장식 */}
      <BambooDecoration className="absolute left-0 top-40 w-40 h-[500px] opacity-10" />
      <PlumBlossomDecoration className="absolute right-0 bottom-40 w-72 h-72 opacity-10" />

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
              <h2 className="text-5xl md:text-6xl text-black">무(巫)의 본질</h2>
              <p className="text-xl text-black mt-2">정의와 역할</p>
            </div>
          </div>
        </motion.div>

        {/* 용어 바로잡기 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl mb-12 text-black flex items-center gap-3">
            <span className="w-8 h-8 bg-[#C8384A] text-white flex items-center justify-center text-sm">1</span>
            용어 바로잡기
          </h3>

          <div className="space-y-6">
            {termCorrections.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-3 gap-6 border border-black/10 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* 오해 */}
                <div className="bg-[#C8384A]/5 p-8 border-r border-black/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-[#C8384A] text-white flex items-center justify-center text-xs">
                      ✕
                    </div>
                    <span className="text-xs tracking-widest text-[#C8384A]">오해된 용어</span>
                  </div>
                  <p className="text-2xl text-black">{item.wrong}</p>
                </div>

                {/* 올바른 용어 */}
                <div className="bg-[#2E5C8A]/5 p-8 border-r border-black/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-[#2E5C8A] text-white flex items-center justify-center text-xs">
                      ✓
                    </div>
                    <span className="text-xs tracking-widest text-[#2E5C8A]">올바른 용어</span>
                  </div>
                  <p className="text-2xl text-black">{item.right}</p>
                </div>

                {/* 설명 */}
                <div className="bg-white p-8 flex items-center">
                  <p className="text-black leading-relaxed">{item.explanation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 한국 샤머니즘의 본질 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl mb-12 text-black flex items-center gap-3">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">2</span>
            한국 샤머니즘의 정의
          </h3>

          <div className="border-2 border-black p-12 bg-white">
            <p className="text-2xl leading-relaxed text-black mb-8">
              한국 샤머니즘은 <strong>무당(샤먼)</strong>을 매개로 하여 
              <strong className="text-[#2E5C8A]"> 신령과 인간 세계를 연결</strong>하는 
              종교적·문화적 현상입니다.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-black/10">
              <div>
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center mb-4 text-xl">
                  巫
                </div>
                <h4 className="text-xl mb-3 text-black">무(巫)</h4>
                <p className="text-black">신령과 소통하는 영적 매개자</p>
              </div>
              
              <div>
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center mb-4 text-xl">
                  神
                </div>
                <h4 className="text-xl mb-3 text-black">신(神)</h4>
                <p className="text-black">자연신, 조상신, 지역신 등 다양한 영적 존재</p>
              </div>
              
              <div>
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center mb-4 text-xl">
                  祭
                </div>
                <h4 className="text-xl mb-3 text-black">제의(祭儀)</h4>
                <p className="text-black">굿을 통한 의례적 실천</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 굿의 본질 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl mb-12 text-black flex items-center gap-3">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">3</span>
            굿(Gut)의 이해
          </h3>

          <div className="bg-gradient-to-br from-gray-50 to-white border border-black/10 p-12">
            <blockquote className="text-3xl leading-relaxed text-black mb-8 border-l-4 border-[#2E5C8A] pl-8">
              "굿의 본질은 인간의 길흉화복을 빌고<br />
              공동체의 안녕을 기원하는<br />
              <strong className="text-[#2E5C8A]">치유와 축복의 의례</strong>입니다."
            </blockquote>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 border border-black/10">
                <h4 className="mb-3 text-black">다원성</h4>
                <p className="text-sm text-black">
                  불교, 도교, 유교를 포용하며 발전한 유연한 신앙체계
                </p>
              </div>
              <div className="bg-white p-6 border border-black/10">
                <h4 className="mb-3 text-black">토착성</h4>
                <p className="text-sm text-black">
                  한국인의 자연관과 우주관이 근간을 이루는 고유 전통
                </p>
              </div>
              <div className="bg-white p-6 border border-black/10">
                <h4 className="mb-3 text-black">공동체성</h4>
                <p className="text-sm text-black">
                  개인이 아닌 공동체의 치유와 화합을 추구
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
