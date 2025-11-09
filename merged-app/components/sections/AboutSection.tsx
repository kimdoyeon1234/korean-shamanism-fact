import { motion } from "framer-motion";
import { BambooDecoration } from "../decorations/BambooDecoration";
import { PlumBlossomDecoration } from "../decorations/PlumBlossomDecoration";
import { ImageWithFallback } from "../decorations/ImageWithFallback";

export function AboutSection() {
  const termCorrections = [
    {
      wrong: "흑마법 / 악마 소환",
      right: "굿(Gut)",
      explanation:
        "굿은 신령에게 제의를 올리고 기원하는 행위입니다. 치유, 안녕, 풍요를 기원하는 공동체적 의례이며 해를 끼치는 주술이 아닙니다.",
    },
    {
      wrong: "무당 / 점쟁이",
      right: "무(巫), 무당(巫堂)",
      explanation:
        "하늘과 땅, 신령과 인간을 잇는 영매이자 중재자로, 신도들의 정신적 문제를 해결하는 종교적 전문가입니다.",
    },
    {
      wrong: "귀신 들림",
      right: "신병(神病)",
      explanation:
        "무당이 되기 위해 겪는 영적 통과의례로, 병리적 현상이 아니라 신령과의 접속을 통해 각성하는 과정입니다.",
    },
    {
      wrong: "액막이 부적",
      right: "부적(符籍)",
      explanation:
        "부적은 신앙적 상징물로, 길흉화복을 기원하고 재앙을 막기 위한 문화적 표현입니다. 미신이 아닌 신앙과 민속의 결합입니다.",
    },
  ];

  return (
    <section className="min-h-screen relative py-32 px-6 overflow-hidden">
      {/* 수묵화 배경 */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1698124073563-419bdb559e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="수묵화 배경"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90" />

      {/* 장식 */}
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
              <p className="text-xl text-black/60 mt-2">샤머니즘의 정의와 의미</p>
            </div>
          </div>
        </motion.div>

        {/* 🔹 용어 바로잡기 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl mb-12 flex items-center gap-3 text-black">
            <span className="w-8 h-8 bg-[#C8384A] text-white flex items-center justify-center text-sm">
              1
            </span>
            용어 바로잡기
          </h3>

          <div className="space-y-8">
            {termCorrections.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-3 border border-black/10 hover:shadow-lg transition-all bg-white rounded-xl overflow-hidden"
              >
                {/* 오해된 용어 */}
                <div className="bg-[#C8384A]/5 p-8 border-r border-black/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-[#C8384A] text-white flex items-center justify-center text-xs">
                      ✕
                    </div>
                    <span className="text-xs tracking-widest text-[#C8384A]">
                      오해된 용어
                    </span>
                  </div>
                  <p className="text-2xl text-black/90">{item.wrong}</p>
                </div>

                {/* 올바른 용어 */}
                <div className="bg-[#2E5C8A]/5 p-8 border-r border-black/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-[#2E5C8A] text-white flex items-center justify-center text-xs">
                      ✓
                    </div>
                    <span className="text-xs tracking-widest text-[#2E5C8A]">
                      올바른 용어
                    </span>
                  </div>
                  <p className="text-2xl text-black/90">{item.right}</p>
                </div>

                {/* 설명 */}
                <div className="bg-white p-8 flex items-center">
                  <p className="text-black/70 leading-relaxed">{item.explanation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 🔹 한국 샤머니즘의 본질 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl mb-12 flex items-center gap-3 text-black">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">
              2
            </span>
            한국 샤머니즘의 정의
          </h3>

          <div className="border-2 border-black p-12 bg-white rounded-xl">
            <p className="text-2xl leading-relaxed text-black/90 mb-8">
              한국 샤머니즘은 <strong>무당(巫堂)</strong>을 매개로 하여{" "}
              <strong className="text-[#2E5C8A]">
                신령과 인간 세계를 연결하는 종교적·문화적 체계
              </strong>
              입니다.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-black/10">
              <div>
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center mb-4 text-xl">
                  巫
                </div>
                <h4 className="text-xl mb-3 font-medium">무(巫)</h4>
                <p className="text-black/70">신령과 인간을 잇는 영적 매개자</p>
              </div>
              <div>
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center mb-4 text-xl">
                  神
                </div>
                <h4 className="text-xl mb-3 font-medium">신(神)</h4>
                <p className="text-black/70">자연신, 조상신 등 다양한 영적 존재</p>
              </div>
              <div>
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center mb-4 text-xl">
                  祭
                </div>
                <h4 className="text-xl mb-3 font-medium">제의(祭儀)</h4>
                <p className="text-black/70">굿을 통한 공동체적 실천</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🔹 굿의 본질 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl mb-12 flex items-center gap-3 text-black">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">
              3
            </span>
            굿(Gut)의 이해
          </h3>

          <div className="bg-gradient-to-br from-gray-50 to-white border border-black/10 p-12 rounded-xl">
            <blockquote className="text-3xl leading-relaxed text-black/90 mb-8 border-l-4 border-[#2E5C8A] pl-8">
              “굿은 인간의 길흉화복을 빌고 공동체의 안녕을 기원하는{" "}
              <strong className="text-[#2E5C8A]">치유와 축복의 의례</strong>입니다.”
            </blockquote>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 border border-black/10 rounded-lg">
                <h4 className="font-medium mb-3">다원성</h4>
                <p className="text-sm text-black/70">
                  불교, 도교, 유교를 포용하며 발전한 유연한 신앙 체계
                </p>
              </div>
              <div className="bg-white p-6 border border-black/10 rounded-lg">
                <h4 className="font-medium mb-3">토착성</h4>
                <p className="text-sm text-black/70">
                  한국인의 자연관과 우주관이 근간을 이루는 전통 신앙
                </p>
              </div>
              <div className="bg-white p-6 border border-black/10 rounded-lg">
                <h4 className="font-medium mb-3">공동체성</h4>
                <p className="text-sm text-black/70">
                  개인의 복을 넘어 마을과 사회의 화합을 추구하는 신앙 정신
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🎬 미디어 속 샤머니즘 왜곡 사례 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-24 border-t border-black/10"
        >
          <h3 className="text-3xl mb-12 text-black flex items-center gap-3">
            <span className="w-8 h-8 bg-[#C8384A] text-white flex items-center justify-center text-sm">
              🎬
            </span>
            드라마·영화 속 샤머니즘 왜곡 사례
          </h3>

          <p className="text-black/70 mb-12 text-lg leading-relaxed">
            대중 매체는 종종 무속 신앙을 ‘공포’나 ‘미신’의 이미지로 표현합니다.
            본 프로젝트는 이러한 왜곡 사례를 분석하고 올바른 인식을 확립하기 위한 교육적 목적을 가집니다.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "곡성 (2016)",
                summary:
                  "무당 임관의 살풀이 장면을 중심으로 폭력적 주술로 오해받은 사례.",
                mislead:
                  "‘악귀 퇴치’와 ‘해코지’ 이미지가 혼재되어 샤머니즘 전체가 공포와 미신으로 일반화됨.",
              },
              {
                title: "해를 품은 달 (2012)",
                summary:
                  "정치적 음모 속에서 무녀가 주술로 사건을 해결하는 모습.",
                mislead:
                  "‘주술 정치’ 이미지로 인해 무속이 음모적 도구로 오해될 수 있음.",
              },
              {
                title: "미남당 (2022)",
                summary:
                  "샤먼 캐릭터가 코믹하게 소비되며 무속의 종교성이 희화화됨.",
                mislead:
                  "‘사기꾼 무당’ 코드가 신앙보다는 웃음거리로 소비되는 문제 발생.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-black/10 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <h4 className="text-xl font-medium text-black mb-2">
                  {item.title}
                </h4>
                <p className="text-black/70 text-sm mb-3">{item.summary}</p>
                <p className="text-[#C8384A] text-sm font-medium leading-relaxed">
                  {item.mislead}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-black/10 p-8 rounded-xl">
            <h4 className="text-2xl mb-4">🔍 오해의 핵심</h4>
            <ul className="list-disc pl-6 space-y-2 text-black/70">
              <li>공포·미신 중심의 연출은 무속의 본질(치유와 공동체적 의미)을 왜곡합니다.</li>
              <li>무당을 ‘도구적 인물’로만 표현하면 종교적 신앙의 깊이가 사라집니다.</li>
              <li>콘텐츠 제작 시 의례의 맥락과 신앙적 배경을 존중하는 접근이 필요합니다.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
