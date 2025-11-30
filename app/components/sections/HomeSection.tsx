import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// Image 컴포넌트 대신 표준 <img> 태그를 사용합니다.
// import Image from 'next/image'; 

const inkMountain = "/inkMountain.png"; 
const shamanDance = "/shamanDance.png";

// Decoration 컴포넌트는 같은 경로의 InkDecorations.jsx 파일에서 import 합니다.
import { BambooDecoration, PlumBlossomDecoration } from "../decorations/InkDecorations";

// [데이터 1] 설문조사 기반 통계 데이터
const surveyStats = {
  irrationalPercentage: "77.9%",
  horrorPercentage: "62.6%",
  stimulusPercentage: "61.7%",
};

// 원형 그래프 데이터 (CircularChart 컴포넌트가 이 데이터를 사용)
const chartData = [
  { title: "가치 인식", value: 77.9, label: "비합리적", sublabel: "무속신앙에 대한 인식" },
  { title: "미디어 묘사", value: 62.6, label: "공포/퇴마 중심", sublabel: "드라마/영화 속 소재" },
  { title: "대중 반응", value: 61.7, label: "자극적 소비", sublabel: "부정적 편견 강화" },
];

const previewCases = [
  { id: 1, img: "/img1.png", title: "파묘", desc: "굿을 단순한 퇴마 행위로만 묘사하여, 금기를 푸는 '해원'과 '상생'의 본질을 축소함." },
  { id: 2, img: "/img2.png", title: "도깨비", desc: "한국 토속 신인 삼신할매의 유래를 불교나 도교 등 타 종교 신화와 혼동하여 묘사함." },
  { id: 3, img: "/img3.png", title: "킹덤", desc: "한국적 배경에 서구적 좀비 설정을 섞으며, 무속적 요소를 단순한 공포와 기이함의 도구로 소비함." },
  { id: 4, img: "/img4.png", title: "미남당", desc: "무당을 사기꾼이나 범죄 조력자로 묘사하여 '무속인=비리 집단'이라는 부정적 편견을 강화함." },
  { id: 5, img: "/img5.png", title: "곡성", desc: "굿을 섬뜩하고 폭력적인 저주로 연출하여, 무당을 악귀를 돕는 '악의 화신'으로 공포화함." },
  { id: 6, img: "/img6.png", title: "케이팝 데몬 헌터스", desc: "고증된 전통 장군 복식 대신, 미디어가 만든 '검은 갓과 정장' 이미지를 차용해 가짜 전통을 확산함." },
];

// CircularChart 함수 정의 (디자인 개선됨)
function CircularChart({ data, index }: { data: typeof chartData[0], index: number }) {
  const percentage = data.value;
  const radius = 35; // 크기 살짝 조정
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference; 
  
  const COLORS = ["#C8384A", "#E5E5E5"];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-6 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md transition-shadow"
    >
      <div className="relative w-32 h-32 mb-4">
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
          {/* 배경 원 */}
          <circle cx="50" cy="50" r={radius} fill="none" stroke={COLORS[1]} strokeWidth="8" strokeLinecap="round" opacity={0.3} />
          {/* 데이터 원 */}
          <motion.circle
            cx="50" cy="50" r={radius} fill="none" stroke={COLORS[0]} strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-black">{data.value}%</span>
        </div>
      </div>
      
      <h4 className="text-md font-bold text-gray-900 mb-1">{data.title}</h4>
      <p className="text-sm font-medium text-[#C8384A]">{data.label}</p>
      <p className="text-xs text-gray-400 mt-1">{data.sublabel}</p>
    </motion.div>
  );
}


// HomeSection 컴포넌트 정의
interface HomeSectionProps {
    onTabChange: (tab: string) => void;
}

export function HomeSection({ onTabChange }: HomeSectionProps) {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(bannerTimer);
  }, []);

  const handleCardClick = (id: number) => {
    sessionStorage.setItem("scrollTarget", `case-${id}`);
    onTabChange("about");
  };

  return (
    <section className="min-h-screen relative pt-24 pb-24 overflow-hidden bg-[#FAFAFA]">
      {/* 수묵화 배경 요소 */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img src={inkMountain} alt="배경" className="object-cover w-full h-full" onError={(e) => (e.currentTarget.src = 'https://placehold.co/1920x1080/ffffff/333?text=Ink+Bg')} />
      </div>
      <BambooDecoration className="absolute -left-10 top-40 w-48 h-auto opacity-10 pointer-events-none" />
      <PlumBlossomDecoration className="absolute -right-10 top-20 w-64 h-auto opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* 1. 메인 배너 (기존 유지) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full mb-24 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="relative h-[400px] md:h-[500px]">
            <div className="flex h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${bannerIndex * 100}%)` }}>
              {["/banner1.png", "/banner2.png", "/banner3.png"].map((src, i) => (
                 <img key={i} src={src} className="w-full h-full object-cover flex-shrink-0" alt={`배너${i}`} />
              ))}
            </div>
            {/* 인디케이터 */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setBannerIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${bannerIndex === i ? "bg-white w-8" : "bg-white/50"}`}
                />
              ))}
            </div>
          </div>
        </motion.div>


        {/* 2. 통계 및 문제 인식 (✨ 리뉴얼된 부분) */}
        {/* 전체를 아우르는 섹션 컨테이너 */}
        <div className="mb-32">
            <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
                
                {/* [왼쪽] 텍스트 영역: 강렬한 문제 제기 */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex flex-col justify-center"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider">Survey Report</span>
                        <div className="h-px w-12 bg-black/20"></div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-[1.2] mb-8 word-keep-all">
                        미디어가 만든 오해,<br/>
                        <span className="text-[#C8384A]">{surveyStats.irrationalPercentage}</span>의 인식이<br/>
                        왜곡되었습니다.
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed mb-10 border-l-4 border-[#C8384A] pl-6">
                        설문 참여자 대다수가 무속신앙을 <b>비합리적인 미신</b>으로 인식하며, 
                        미디어 속에서 <b>공포와 퇴마의 도구</b>로만 소비된다고 응답했습니다.
                        <br/><br/>
                        이러한 편향된 묘사는 샤머니즘이 가진 치유와 상생의 본질을 가리고 있습니다.
                    </p>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <p className="font-serif text-xl italic text-gray-800">
                            "우리는 보이는 것만을 믿게 됩니다.<br/>
                            하지만 우리가 보는 것이 <span className="underline decoration-[#C8384A] decoration-2 underline-offset-4">진짜</span>일까요?"
                        </p>
                    </div>
                </motion.div>

                {/* [오른쪽] 차트 영역: 그리드 형태 */}
                <motion.div 
                    className="flex-1"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-full">
                        <div className="flex items-center justify-between mb-8">
                             <h3 className="text-xl font-bold text-gray-900">📊 설문조사 상세 분석</h3>
                             <span className="text-xs text-gray-400">N = 200 (대학생 대상)</span>
                        </div>
                        
                        {/* 차트 그리드 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* 첫 번째 차트는 크게 강조하거나, 그냥 3개 나열 */}
                            {chartData.map((data, index) => (
                                <div key={index} className={index === 2 ? "sm:col-span-2 sm:w-1/2 sm:mx-auto" : ""}>
                                    <CircularChart data={data} index={index} />
                                </div>
                            ))}
                        </div>

                        {/* 하단 요약 멘트 */}
                        <div className="mt-8 text-center">
                            <p className="text-sm text-gray-500">
                                * 미디어의 자극적 소재 활용이<br/>부정적 편견 강화의 주 원인으로 지목됨
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>


        {/* 3. 왜곡 사례 프리뷰 (카드 섹션) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
             <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-2">미디어 속 왜곡 사례</h2>
                <p className="text-gray-500">우리가 무심코 지나쳤던 드라마와 영화 속 설정들</p>
             </div>
             <div className="hidden md:block h-px flex-1 bg-gray-200 mx-8 mb-2"></div>
             <span className="text-sm text-[#C8384A] font-semibold cursor-pointer hover:underline" onClick={()=>onTabChange("about")}>
                전체 보기 →
             </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewCases.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => handleCardClick(item.id)}
                whileHover={{ y: -8 }}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg border border-transparent hover:border-[#C8384A]/30 hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-56 overflow-hidden relative">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                   <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 relative">
                    <div className="absolute -top-8 right-6 w-12 h-12 bg-[#C8384A] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md group-hover:bg-black transition-colors">
                        +
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C8384A] transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}