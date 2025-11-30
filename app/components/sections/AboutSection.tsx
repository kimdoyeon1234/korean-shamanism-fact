import { motion } from "framer-motion";
import { useEffect } from "react"; 
import { BambooDecoration } from "../decorations/BambooDecoration";
import { PlumBlossomDecoration } from "../decorations/PlumBlossomDecoration";
import { ImageWithFallback } from "../decorations/ImageWithFallback";

export function AboutSection() {

  
  useEffect(() => {
    // 저장된 타겟 ID 가져오기
    const targetId = sessionStorage.getItem("scrollTarget");
    
    if (targetId) {
      // 조금 기다렸다가(화면이 다 그려진 뒤) 이동
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 300); // 0.3초 딜레이
      
      // 이동했으면 기억 지우기
      sessionStorage.removeItem("scrollTarget");
    }
  }, []);

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

  // ✨ [수정됨] 내용 축약 없이 상세하게, 가로형 레이아웃에 맞게 데이터 정의
  const distortionCases = [
    {
      id: 1,
      title: "영화 <파묘>",
      img: "/img1.png", 
      distortion: "영화에서는 굿을 오로지 악령을 퇴치하거나 저주를 막는 긴박하고 공포스러운 '퇴마 의식'으로만 집중적으로 조명했습니다. 이는 대중에게 굿을 무서운 주술로만 각인시킬 위험이 있습니다.",
      truth: "실제 굿의 핵심은 '해원(解寃)'과 '상생'입니다. 산 자와 죽은 자의 맺힌 한을 풀고, 화해하게 하여 공동체의 평화를 되찾는 치유의 과정이 굿의 진짜 본질입니다."
    },
    {
      id: 2,
      title: "드라마 <도깨비>",
      img: "/img2.png",
      distortion: "삼신할매를 포함한 한국의 신들이 서양의 전지전능한 신이나, 불교/도교적 색채가 강하게 섞인 판타지적 존재로 그려져, 고유한 무속 신앙의 정체성이 희석되었습니다.",
      truth: "한국의 '가신신앙'에서 삼신할매는 생명을 점지하고 아이를 수호하는 따뜻한 어머니 신입니다. 이는 특정 종교의 하위 개념이 아닌, 우리 민족 고유의 독자적인 생명 존중 사상입니다."
    },
    {
      id: 3,
      title: "넷플릭스 <킹덤>",
      img: "/img3.png",
      distortion: "생사초와 결합된 무속 행위가 죽은 자를 되살려 괴물(좀비)로 만드는 끔찍한 흑마법이나 저주로 묘사되어, 샤머니즘을 기괴하고 불길한 공포의 대상으로 소비했습니다.",
      truth: "무속에서 죽음은 공포의 대상이 아니라 삶의 연장선입니다. 씻김굿 등을 통해 죽은 이를 위로하고 저승으로 잘 천도하는 것이 무당의 역할이지, 좀비를 만드는 주술이 아닙니다."
    },
    {
      id: 4,
      title: "드라마 <미남당>",
      img: "/img4.png",
      distortion: "드라마에서 일부 정치인이나 검찰을 무당과 결탁하여 악행을 저지르는 '악의 화신'으로 묘사하여 논란이 되었습니다. 이는 '모든 무당은 사기꾼이거나 비리 조력자'라는 오해를 강화합니다.",
      truth: "무당은 신의 말씀을 전하며 타인의 고통을 함께 나누는 영적 조력자입니다. 일부의 일탈을 전체의 모습으로 일반화하는 것은 묵묵히 기도를 올리는 대다수 무속인에 대한 편견입니다."
    },
    {
      id: 5,
      title: "영화 <곡성>",
      img: "/img5.png",
      distortion: "'살'을 날리는 굿 장면과 동물 희생 등을 자극적으로 연출하여, 무당을 악귀와 한패이거나 사람을 해치는 '악의 화신'으로 공포스럽게 그렸습니다.",
      truth: "무당이 행하는 굿은 본래 마을의 수호신을 모시고 주민들의 무병장수와 농사의 풍요를 비는 평화적인 축제(대동굿)였습니다. 누군가를 해치기 위한 저주는 무속의 본령이 아닙니다."
    },
    {
      id: 6,
      title: "케이팝 데몬 헌터스",
      img: "/img6.png",
      distortion: "작품 속 저승사자가 1980년대 방송국이 제작비 절감을 위해 만든 '검은 갓과 검은 정장' 이미지를 그대로 답습했습니다. 이는 해외 팬들에게 가짜 전통을 진짜처럼 오인하게 만듭니다.",
      truth: "실제 불교 회화(시왕도)나 전통 설화 속에 등장하는 저승사자(차사)는 화려한 갑옷과 투구를 쓴 위엄 있는 장군(무사)의 모습입니다. 이것이 진짜 우리의 전통입니다."
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
              <h2 className="text-5xl md:text-6xl font-bold text-black">무(巫)의 본질</h2>
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
          className="mb-20"
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

        {/* ✨ [수정됨] 4. 미디어 속 왜곡 vs 진실 (ID 부여) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl mb-12 text-black flex items-center gap-3">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">4</span>
            미디어 속 왜곡 vs 진실
          </h3>

          <div className="flex flex-col gap-16">
            {distortionCases.map((item) => (
              <motion.div
                key={item.id}
                id={`case-${item.id}`} /* ✨ 중요! 여기에 이름표(ID)를 붙였어: case-1, case-2... */
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-8 items-start bg-white rounded-xl overflow-hidden border-b pb-12 border-black/10 last:border-0"
              >
                {/* 왼쪽: 이미지 */}
                <div className="w-full md:w-5/12 h-64 md:h-auto self-stretch rounded-xl overflow-hidden shadow-md">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* 오른쪽: 텍스트 내용 */}
                <div className="w-full md:w-7/12 flex flex-col gap-6">
                  <h4 className="text-2xl font-bold text-black border-l-4 border-black pl-4">
                    {item.title}
                  </h4>
                  
                  {/* 왜곡 (MEDIA) */}
                  <div className="bg-[#C8384A]/5 p-6 rounded-lg border border-[#C8384A]/20">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-[#C8384A] border border-[#C8384A] px-2 py-0.5 rounded-full bg-white">
                        MEDIA (왜곡)
                      </span>
                    </div>
                    <p className="text-black/80 leading-relaxed word-keep-all text-lg">
                      {item.distortion}
                    </p>
                  </div>

                  {/* 진실 (TRUTH) */}
                  <div className="bg-[#2E5C8A]/5 p-6 rounded-lg border border-[#2E5C8A]/20">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-[#2E5C8A] border border-[#2E5C8A] px-2 py-0.5 rounded-full bg-white">
                        TRUTH (진실)
                      </span>
                    </div>
                    <p className="text-black leading-relaxed word-keep-all text-lg font-medium">
                      {item.truth}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      
      </div>
    </section>
  );
}
