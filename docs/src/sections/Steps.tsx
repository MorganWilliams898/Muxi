import { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Headphones, 
  Subtitles, 
  BookOpen, 
  MessageCircle, 
  FileText, 
  Languages, 
  Volume2, 
  Volume1, 
  PenTool,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: '无字幕视频播放',
    description: '先观看无字幕视频，训练您的听力理解能力，培养语感',
    icon: Play,
    color: '#ff6a6a',
  },
  {
    id: 2,
    title: '音频精听',
    description: '无画面音频精准理解，把握片段内容，提升听力水平',
    icon: Headphones,
    color: '#7b5cff',
  },
  {
    id: 3,
    title: '中英双语字幕',
    description: '对照中英文字幕视频，学习整体内容，理解每一句话',
    icon: Subtitles,
    color: '#4a90e2',
  },
  {
    id: 4,
    title: '重点词汇',
    description: '重点词汇学习，积累词汇库，扩展您的词汇量',
    icon: BookOpen,
    color: '#50c878',
  },
  {
    id: 5,
    title: '句式表达',
    description: '连词成句，地道表达模仿学习，培养英语思维',
    icon: MessageCircle,
    color: '#ff6a6a',
  },
  {
    id: 6,
    title: '中英文本',
    description: '对照中英文本，逐句朗读复习，提升口语表达能力',
    icon: FileText,
    color: '#7b5cff',
  },
  {
    id: 7,
    title: '纯英文本',
    description: '纯英文文本，反复练习，强化阅读理解',
    icon: Languages,
    color: '#4a90e2',
  },
  {
    id: 8,
    title: '0.8倍速音频',
    description: '慢速音频练习，仔细听清每个单词的发音',
    icon: Volume2,
    color: '#50c878',
  },
  {
    id: 9,
    title: '0.6倍速音频',
    description: '更慢速度，精准捕捉语音细节，纠正发音',
    icon: Volume1,
    color: '#ff6a6a',
  },
  {
    id: 10,
    title: '听写填空',
    description: '重点词听写填空，巩固记忆，检验学习成果',
    icon: PenTool,
    color: '#7b5cff',
  },
];

const Steps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section
      id="steps"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6a6a]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7b5cff]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[#ff6a6a]/10 text-[#ff6a6a] rounded-full text-sm font-medium mb-4">
            科学学习法
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            掌握英语口语的<span className="text-gradient">10个步骤</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            从泛听到精听，从词汇到表达，系统化提升您的英语能力
          </p>
        </div>

        {/* Steps Display */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-500">
                步骤 {activeStep + 1} / {steps.length}
              </span>
              <span className="text-sm font-medium text-[#ff6a6a]">
                {Math.round(((activeStep + 1) / steps.length) * 100)}%
              </span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#ff6a6a] to-[#7b5cff] rounded-full transition-all duration-500"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Main Step Card */}
          <div className="relative">
            <div 
              className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100 transition-all duration-500"
              key={activeStep}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left - Icon & Number */}
                <div className="text-center md:text-left">
                  <div 
                    className="inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-6"
                    style={{ backgroundColor: `${steps[activeStep].color}15` }}
                  >
                    {(() => {
                      const IconComponent = steps[activeStep].icon;
                      return <IconComponent className="w-12 h-12" style={{ color: steps[activeStep].color }} />;
                    })()}
                  </div>
                  <div 
                    className="text-8xl font-bold opacity-10"
                    style={{ color: steps[activeStep].color }}
                  >
                    {String(steps[activeStep].id).padStart(2, '0')}
                  </div>
                </div>

                {/* Right - Content */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {steps[activeStep].description}
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={prevStep}
                      className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 hover:border-[#ff6a6a] hover:text-[#ff6a6a] transition-all duration-300"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      上一步
                    </button>
                    <button
                      onClick={nextStep}
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff6a6a] text-white hover:bg-[#ff5252] transition-all duration-300"
                    >
                      下一步
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step Thumbnails */}
          <div className="mt-8 grid grid-cols-5 sm:grid-cols-10 gap-2">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`relative p-3 rounded-xl transition-all duration-300 ${
                  index === activeStep
                    ? 'bg-[#ff6a6a] text-white scale-110 shadow-lg'
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                }`}
              >
                {(() => {
                  const IconComponent = step.icon;
                  return <IconComponent className="w-5 h-5 mx-auto" />;
                })()}
                {index === activeStep && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className={`mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { icon: Play, title: '视频学习', desc: '精选YouTube优质内容', color: '#ff6a6a' },
            { icon: Headphones, title: '音频训练', desc: '多倍速精听练习', color: '#7b5cff' },
            { icon: BookOpen, title: '词汇积累', desc: '重点词汇深度学习', color: '#4a90e2' },
            { icon: PenTool, title: '听写巩固', desc: '检验学习成果', color: '#50c878' },
          ].map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
