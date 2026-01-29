import { useEffect, useRef, useState } from 'react';
import { Check, Users, BookOpen, Award } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ courses: 0, students: 0, success: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasAnimated.current) {
            hasAnimated.current = true;
            animateCounters();
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters({
        courses: Math.round(280 * easeOut),
        students: Math.round(50 * easeOut),
        success: Math.round(98 * easeOut),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);
  };

  const features = [
    '母语者真实对话',
    '情境化词汇习得',
    '模仿地道表达',
    '全面技能培养',
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-[200px] font-bold text-gray-50 whitespace-nowrap pointer-events-none select-none">
        ABOUT US
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div 
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/about-image.jpg"
                  alt="学习英语"
                  className="w-full h-auto"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 animate-float-1">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#ff6a6a]/10 flex items-center justify-center">
                    <Users className="w-7 h-7 text-[#ff6a6a]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50k+</div>
                    <div className="text-sm text-gray-500">活跃学员</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#7b5cff]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 left-1/4 w-32 h-32 bg-[#ff6a6a]/10 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Right - Content */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <span className="inline-block px-4 py-1 bg-[#7b5cff]/10 text-[#7b5cff] rounded-full text-sm font-medium mb-4">
              关于我们
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              通过视频掌握<span className="text-gradient">英语口语</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              我们精选来自热门YouTube创作者的优质内容，将娱乐转化为强大的学习体验。
              我们的方法结合了最新的语言学习理论和实践，帮助您在轻松愉快的氛围中提升英语能力。
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#50c878]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#50c878] transition-colors duration-300">
                    <Check className="w-4 h-4 text-[#50c878] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <BookOpen className="w-6 h-6 text-[#ff6a6a] mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">{counters.courses}+</div>
                <div className="text-sm text-gray-500">学习课程</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <Users className="w-6 h-6 text-[#7b5cff] mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">{counters.students}k+</div>
                <div className="text-sm text-gray-500">满意学员</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <Award className="w-6 h-6 text-[#50c878] mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">{counters.success}%</div>
                <div className="text-sm text-gray-500">成功率</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
