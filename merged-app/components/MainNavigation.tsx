interface MainNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function MainNavigation({ activeTab, onTabChange }: MainNavigationProps) {
  const tabs = [
    { id: "factcheck", label: "OX 퀴즈", highlight: true }, // ✅ 맨 앞으로 이동
    { id: "about", label: "무(巫)의 본질" },
    { id: "culture", label: "K-컬처의 근간" },
   { id: "experts", label: "학술적 검증" },
  ];

  
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-black/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          {/* 왼쪽 상단 타이틀 */}
          <div className="flex items-center gap-4">
            <div className="w-1 h-12 bg-black" />
            <div>
              <h1 className="text-2xl tracking-tight text-black">한국 샤머니즘</h1>
              <p className="text-xs text-black/50 tracking-wide">Korean Shamanism Truth</p>
            </div>
          </div>
          
          {/* 중앙 탭 네비게이션 */}
          <div className="hidden lg:flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`
                  relative px-6 py-3 transition-all tracking-wide
                  ${activeTab === tab.id 
                    ? tab.highlight 
                      ? 'text-[#C8384A] font-semibold' 
                      : 'text-black font-medium'
                    : 'text-black/50 hover:text-black'
                  }
                `}
              >
                {tab.label}
                
                {/* 🔻 활성 탭 밑줄 표시 */}
                {activeTab === tab.id && (
                  <div 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 rounded-full transition-all duration-300 ${
                      tab.highlight ? 'bg-[#C8384A]' : 'bg-black'
                    }`} 
                  />
                )}
              </button>
            ))}
          </div>
          
          {/* 오른쪽 색상 인디케이터 */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#C8384A]" title="오해" />
              <div className="w-2 h-2 bg-[#2E5C8A]" title="진실" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
