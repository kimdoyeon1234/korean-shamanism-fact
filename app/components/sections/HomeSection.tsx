import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// Image 컴포넌트 대신 표준 <img> 태그를 사용합니다.
// import Image from 'next/image'; 

const inkMountain = "/inkMountain.png"; 
const shamanDance = "/shamanDance.png";

// Decoration 컴포넌트는 같은 경로의 InkDecorations.jsx 파일에서 import 합니다.
import { BambooDecoration, PlumBlossomDecoration } from "../decorations/InkDecorations";
// CircularChart 함수 정의는 HomeSection 위에서 이루어지도록 유지


// [데이터 1] 설문조사 기반 통계 데이터
const surveyStats = {
  irrationalPercentage: "77.9%",
  horrorPercentage: "62.6%",
  stimulusPercentage: "61.7%",
};

// 원형 그래프 데이터 (CircularChart 컴포넌트가 이 데이터를 사용)
const chartData = [
  { title: "가치 인식", value: 77.9, label: "비합리적", sublabel: "무속신앙" },
  { title: "미디어 속 묘사 방식", value: 62.6, label: "공포/퇴마 중심 소재", sublabel: "미디어/드라마/영화" },
  { title: "대중의 반응", value: 61.7, label: "자극적으로 소비되고만 여겨", sublabel: "부정적/편견" },
];

// [데이터 3] 샤머니즘의 민속적 가치 4가지
const culturalValuesData = [
  { 
    title: "굿의 종합 예술성", 
    content: "화려한 의상, 역동적인 춤, 장단이 어우러진 종합 예술이자 민속 문화의 정수.",
    color: "#2E5C8A" // 청
  },
  { 
    title: "한(恨)의 서사", 
    content: "억울한 영혼을 달래는 해원굿은 한국인의 집단적 정서를 대변하는 정신적 치유 기능.",
    color: "#C8384A" // 적
  },
  { 
    title: "다원성과 유연성", 
    content: "불교, 유교를 포용하여 K-컬처가 다양한 소재를 융합하는 문화적 토대가 됨.",
    color: "#E8B44F" // 황
  },
  { 
    title: "토착 자연관", 
    content: "산신, 용왕 등 모든 자연물에 신이 깃든다고 믿는 생동감 넘치는 동양적 신비의 근본.",
    color: "#1A1A1A" // 흑
  },
];

// 🛑 CircularChart 함수 정의 (SVG/Motion 기반으로 복구)
function CircularChart({ data, index }: { data: typeof chartData[0], index: number }) {
  const percentage = data.value;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference; 
  
  const COLORS = ["#C8384A", "#E5E5E5"];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <h4 className="text-lg mb-4 text-black/80 text-center font-semibold">{data.title}</h4>
      <div className="relative w-40 h-40">
        
        {/* SVG 기반 원형 차트 시뮬레이션 */}
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
          {/* 배경 원 (E5E5E5) */}
          <circle
            cx="50" cy="50" r={radius} fill="none" stroke={COLORS[1]} strokeWidth="20"
          />
          {/* 데이터 원 (C8384A) */}
          <motion.circle
            cx="50" cy="50" r={radius} fill="none" stroke={COLORS[0]} strokeWidth="20"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>

        {/* 중앙 퍼센티지 텍스트 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl text-[#C8384A] mb-1 font-bold">{data.value}%</div>
          </div>
        </div>
      </div>
      
      {/* 하단 라벨 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-[#C8384A] mb-1 font-bold">{data.label}</p>
        <p className="text-xs text-black/50">{data.sublabel}</p>
      </div>
    </motion.div>
  );
}


// HomeSection 컴포넌트 정의
interface HomeSectionProps {
    onTabChange: (tab: string) => void;
}

export function HomeSection({ onTabChange }: HomeSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // [데이터 2] 오해 vs 진실 슬라이드 데이터
  const slides = [
    { 
      myth: "미디어: 무당이 악귀를 돕거나 살을 날려 해를 끼치는 '흑마법'을 행한다. (곡성/방법)", 
      truth: "진실: 굿은 질병과 불행을 물리치고 공동체의 안녕을 기원하는 치유와 축복의 의례이다.",
      mythColor: "#C8384A",
      truthColor: "#2E5C8A"
    },
    { 
      myth: "드라마: 무당은 왕실 암투나 비리에 결탁하는 '정치적 도구'로 활용된다. (해를 품은 달/미남당)", 
      truth: "진실: 무(巫)는 신령의 뜻을 전하고 복을 비는 영매이자 중재자이며, 고유한 직업 윤리를 갖는다.",
      mythColor: "#C8384A",
      truthColor: "#2E5C8A"
    },
    { 
      myth: "대중 인식: 샤머니즘은 미신이며 공포/오락 소재일 뿐이다. (설문 77.9%의 비합리적 인식)", 
      truth: "진실: 샤머니즘은 한국인의 정신적 뿌리이며 굿은 역사적 서사를 담은 민속 예술이다.",
      mythColor: "#C8384A",
      truthColor: "#2E5C8A"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="min-h-screen relative pt-24 pb-16 overflow-hidden">
      {/* 수묵화 산 배경 및 장식 */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={inkMountain}
          alt="수묵화 산"
          className="object-cover absolute w-full h-full"
          onError={(e) => (e.currentTarget.src = 'https://placehold.co/1920x1080/ffffff/333?text=Ink+Mountain+Placeholder')}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80" />
      <BambooDecoration className="absolute left-0 top-32 w-32 h-96 opacity-15" />
      <PlumBlossomDecoration className="absolute right-8 top-20 w-64 h-64 opacity-15" />
      <motion.div
        className="absolute right-0 bottom-0 w-80 h-80 opacity-10"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={shamanDance} alt="무당" className="object-contain absolute w-full h-full" onError={(e) => (e.currentTarget.src = 'https://placehold.co/320x320/000000/fff?text=Shaman+Placeholder')} />
      </motion.div>
      
      

      <div className="container mx-auto px-6 relative z-10">

        {/* 1. 메인 헤드라인 및 문제 인식 선언 (설문 데이터 기반) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 pt-12"
        >
          <div className="inline-block mb-4">
            {/* 🛑 폰트 크기 조정 및 whitespace-nowrap 추가, 공백 제거 */}
            <h1 className="text-5xl font-extrabold tracking-tight text-black leading-snug whitespace-nowrap">
                미디어가 만든 오해, {surveyStats.irrationalPercentage}의 인식이 왜곡되었습니다.
            </h1>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-24 h-px bg-black" />
            <div className="w-2 h-2 bg-black rotate-45" />
            <div className="w-24 h-px bg-black" />
          </div>
          
          {/* 설문조사 결과 요약 강조 */}
          <p className="text-xl md:text-2xl text-black/90 font-semibold max-w-4xl mx-auto mb-6 bg-[#C8384A]/5 p-4 border border-[#C8384A]/30 rounded-md leading-relaxed">
            설문 참여자 중 <strong className="text-[#C8384A]">{surveyStats.irrationalPercentage}</strong>가 무속신앙을 비합리적으로 인식하며, 미디어 묘사의 <strong className="text-[#C8384A]">{surveyStats.horrorPercentage}</strong>가 공포/퇴마 중심 소재에 편중되어 있습니다.
          </p>
          <p className="text-lg text-black/60 max-w-3xl mx-auto leading-relaxed">
            이러한 미디어의 왜곡은 샤머니즘의 고유한 역할과 문화적 가치를 훼손하고 있습니다.
          </p>
        </motion.div>
        

        {/* 🛑 설문조사 통계 강조 섹션 - 원형 차트 (SVG 기반) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-6xl mx-auto mb-24"
        >
          <div className="border-2 border-black bg-white p-10 md:p-16 relative overflow-hidden shadow-xl rounded-lg">
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-[#C8384A] flex items-center justify-center text-white font-bold text-xl rounded-full">
                  📊
                </div>
                <h3 className="text-3xl text-black font-semibold">설문조사 기반 문제 인식 심화</h3>
              </div>

              {/* 🛑 원형 차트 영역: items-start 추가로 세로 정렬 문제 해결 */}
              <div className="grid md:grid-cols-3 gap-10 items-center">
                {chartData.map((data, index) => (
                <CircularChart key={index} data={data} index={index} />
                ))}
              </div>

              
              {/* 🛑 결과 요약: 줄바꿈 문제를 해결하기 위해 flex 및 whitespace-nowrap 적용 */}
              <div className="mt-12 pt-8 border-t border-black/10">
                <div className="bg-[#E8B44F]/10 p-6 border-l-4 border-[#E8B44F] rounded-md text-center">
                  <p className="text-lg text-black/80 leading-relaxed">
                  <strong className="text-[#C8384A]">Result:</strong> 설문 참여자 중 78%가 무속신앙이 비합리적이며, 
                        샤머니즘을 미신, 공포, 오락 위주의 콘텐츠 소재로써 인식하며, 
                        미디어 속에서 자극적으로 표현된다고 느낍니다.
                  </p>
                </div>
            </div>

            </div>
          </div>
        </motion.div>


        {/* 2. 오해 vs 진실 슬라이드 */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="max-w-6xl mx-auto mb-20"
>
  <h2 className="text-3xl font-bold mb-10 text-center text-black">
    미디어 오해의 실체 vs. 샤머니즘의 민속적 진실
  </h2>

  {/* 오해 vs 진실 박스 */}
  <div className="grid md:grid-cols-2 border-2 border-black shadow-2xl rounded-lg overflow-hidden">
    
    {/* 왼쪽 - 오해 */}
    <motion.div
      key={`myth-${currentSlide}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#C8384A]/5 flex flex-col items-center justify-center p-10 text-center border-r border-black/10"
    >
      <div className="mb-6">
        <div className="w-12 h-12 bg-[#C8384A] flex items-center justify-center text-white text-3xl font-light rounded-full shadow-md mx-auto">
          ✕
        </div>
      </div>
      <h3 className="text-sm tracking-widest text-[#C8384A] mb-3 font-bold">미디어 속 오해</h3>
      <p className="text-xl leading-relaxed text-black/90 font-serif max-w-md">
        {slides[currentSlide].myth}
      </p>
    </motion.div>

    {/* 오른쪽 - 진실 */}
    <motion.div
      key={`truth-${currentSlide}`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#2E5C8A]/5 flex flex-col items-center justify-center p-10 text-center"
    >
      <div className="mb-6">
        <div className="w-12 h-12 bg-[#2E5C8A] flex items-center justify-center text-white text-3xl font-light rounded-full shadow-md mx-auto">
          ✓
        </div>
      </div>
      <h3 className="text-sm tracking-widest text-[#2E5C8A] mb-3 font-bold">민속적 진실</h3>
      <p className="text-xl leading-relaxed text-black/90 font-serif max-w-md">
        {slides[currentSlide].truth}
      </p>
    </motion.div>

  </div>

  {/* 슬라이드 인디케이터 */}
  <div className="flex justify-center gap-3 mt-8">
    {slides.map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrentSlide(i)}
        className={`w-12 h-1 transition-all ${
          i === currentSlide ? 'bg-black' : 'bg-black/20'
        }`}
      />
    ))}
  </div>
</motion.div>

        


        {/* 3. 🇰🇷 샤머니즘의 민속적 가치 (4대 요소) */}
        <div className="mb-20">
            <h2 className="text-4xl font-extrabold mb-10 text-center text-black">🇰🇷 한국 샤머니즘의 고유한 문화적 가치</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {culturalValuesData.map((value, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ delay: 0.2 + index * 0.1 }} 
                        className="p-6 bg-gray-50 border-t-4 border-[#2E5C8A] shadow-lg hover:shadow-xl transition-shadow rounded-md"
                    >
                        {/* 색상 포인트와 번호 */}
                        <div 
                          className="inline-flex items-center justify-center w-10 h-10 mb-4 text-white font-bold text-xl rounded-full"
                          style={{ backgroundColor: value.color }}
                        >
                          {index + 1}
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 text-black">{value.title}</h3>
                        <p className="text-sm text-black/70 leading-relaxed">{value.content}</p>
                    </motion.div>
                ))}
            </div>
        </div>


        {/* CTA - Fact Check로 이동 */}
        
      </div>
    </section>
  );
}