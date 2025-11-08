import { motion } from "framer-motion";
import { ImageWithFallback } from "../decorations/ImageWithFallback";
import { BambooDecoration, PlumBlossomDecoration } from "../decorations/InkDecorations";

const shamanDance = "/shamanDance.png";

import Image from 'next/image';

export function CultureSection() {
  return (
    <section className="min-h-screen relative py-32 px-6 overflow-hidden">
      {/* 수묵화 배경 */}
      <div className="absolute inset-0 opacity-15">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1757825715704-1f2bf22d5f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB0cmFkaXRpb25hbCUyMHBhaW50aW5nfGVufDF8fHx8MTc2MDI4MDc2OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="전통 회화"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/75 to-white/85" />
      
      {/* 무당 이미지 - 왼쪽 */}
      <motion.div
        className="absolute left-0 top-1/3 w-64 h-64 opacity-10"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
      <Image // 👈 'img' 대신 'Image' 컴포넌트 사용 (상단에 import 필수!)
      src={shamanDance}
        alt="무당"
        fill // 👈 부모 요소의 크기(w-full h-full)에 맞춰 채우도록 설정
        className="object-contain" // 👈 object-fit 속성을 className으로 사용
        unoptimized // 👈 개발 환경에서 빠르게 로딩하기 위해 임시로 추가
/>
      </motion.div>
      
      {/* 장식 */}
      <PlumBlossomDecoration className="absolute right-8 top-32 w-72 h-72 opacity-12" />
      <BambooDecoration className="absolute left-8 bottom-20 w-36 h-[400px] opacity-12" />
      
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
              <h2 className="text-5xl md:text-6xl text-black">K-컬처의 근간으로서 샤머니즘</h2>
              <p className="text-xl text-black/60 mt-2">예술과 문화의 뿌리</p>
            </div>
          </div>
        </motion.div>

        {/* 한(恨)의 서사 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl mb-12 text-black flex items-center gap-3">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">1</span>
            한국인의 '한(恨)' 서사
          </h3>

          <div className="border-l-4 border-black pl-12 bg-white">
            <p className="text-2xl leading-relaxed text-black/90 mb-8">
              <strong>해원굿(解寃굿)</strong>의 역할이 현대 콘텐츠의 복수극, 시대극 서사를 이끄는 핵심 정서입니다.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-black/10">
                <h4 className="text-xl mb-4">전통 해원굿</h4>
                <p className="text-black/70 leading-relaxed mb-4">
                  억울하게 죽은 영혼의 원한을 풀어주는 의례. 단순한 위로를 넘어 
                  집단적 치유와 사회적 정의 회복을 추구합니다.
                </p>
                <div className="pt-4 border-t border-black/10">
                  <span className="text-sm text-black/50">목적: 해원(解寃) · 치유 · 화해</span>
                </div>
              </div>

              <div className="p-8 border border-black/10 bg-gray-50">
                <h4 className="text-xl mb-4">현대 콘텐츠</h4>
                <p className="text-black/70 leading-relaxed mb-4">
                  '더 글로리', '아직 끝나지 않았다' 등 복수 서사의 핵심은 
                  한(恨)의 감정과 해원의 구조입니다. 이는 한국 특유의 정서적 DNA입니다.
                </p>
                <div className="pt-4 border-t border-black/10">
                  <span className="text-sm text-black/50">작품: 더 글로리, 부활, 펜트하우스</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 의례의 예술성 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl mb-12 text-black flex items-center gap-3">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">2</span>
            굿, 종합 예술의 원형
          </h3>

          <div className="bg-gradient-to-br from-gray-50 to-white border border-black/10 p-12">
            <blockquote className="text-2xl leading-relaxed text-black/90 mb-12 border-l-4 border-black pl-8">
              "굿은 춤, 음악, 재담, 의상이 어우러진 종합 예술이며,<br />
              K-컬처의 독창적인 미장센을 제공하는 원천입니다."
            </blockquote>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { element: "음악", desc: "시나위, 산조, 장구 장단", icon: "🎵" },
                { element: "춤", desc: "살풀이춤, 승무의 기원", icon: "💃" },
                { element: "의상", desc: "오방색 한복, 신성한 복식", icon: "👘" },
                { element: "연희", desc: "즉흥적 재담과 극적 구성", icon: "🎭" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 border border-black/10 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="mb-3">{item.element}</h4>
                  <p className="text-sm text-black/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 현대적 소비 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl mb-12 text-black flex items-center gap-3">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">3</span>
            현대적 재조명: '파묘' 효과
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-black p-10 bg-white">
              <h4 className="text-2xl mb-6">MZ세대의 무속 소비</h4>
              <ul className="space-y-4 text-black/70">
                <li className="flex items-start gap-3">
                  <span className="text-[#2E5C8A] mt-1">•</span>
                  <span>심리 상담의 대안으로 굿을 찾는 젊은층 증가</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2E5C8A] mt-1">•</span>
                  <span>'힙'하고 '영적인' 경험으로 재해석</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2E5C8A] mt-1">•</span>
                  <span>SNS를 통한 무속 문화 확산</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-[#2E5C8A] p-10 bg-[#2E5C8A]/5">
              <h4 className="text-2xl mb-6">영화 '파묘'의 긍정적 영향</h4>
              <p className="text-black/80 leading-relaxed mb-6">
                2024년 천만 관객을 돌파한 '파묘'는 무속을 <strong>전문가적 이미지</strong>로 
                재조명했습니다. 단순한 공포 소재가 아닌, <strong>고증된 의례</strong>와 
                <strong>전문성</strong>을 통해 무속의 가치를 복원했습니다.
              </p>
              <div className="pt-6 border-t border-[#2E5C8A]/20">
                <span className="text-sm text-[#2E5C8A]">
                  결과: 무속인에 대한 긍정적 인식 30% 증가 (2024 조사)
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 마무리 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center border-2 border-black p-12 bg-black text-white"
        >
          <p className="text-3xl leading-relaxed mb-6">
            샤머니즘은 한국 문화의 DNA입니다.
          </p>
          <p className="text-lg opacity-80">
            음악, 춤, 의상, 서사 — 우리가 사랑하는 K-컬처의 근간에는<br />
            천년의 무속 전통이 흐르고 있습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
