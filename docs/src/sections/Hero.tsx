import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Triangle, Circle, Square } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animate title characters
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.char');
      chars.forEach((char, index) => {
        (char as HTMLElement).style.animationDelay = `${index * 30}ms`;
      });
    }
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Split text into characters
  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="char inline-block opacity-0 translate-y-20 animate-slide-up"
        style={{ animationFillMode: 'forwards' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
    >
      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Triangle */}
        <div className="absolute top-20 left-[10%] animate-float-1">
          <Triangle className="w-8 h-8 text-[#ff6a6a] fill-[#ff6a6a]/20" />
        </div>
        {/* Circle */}
        <div className="absolute top-40 right-[15%] animate-float-2">
          <Circle className="w-6 h-6 text-[#7b5cff] fill-[#7b5cff]/20" />
        </div>
        {/* Square */}
        <div className="absolute bottom-40 left-[20%] animate-float-3">
          <Square className="w-7 h-7 text-[#4a90e2] fill-[#4a90e2]/20" />
        </div>
        {/* Small dots */}
        <div className="absolute top-1/3 left-[5%] w-3 h-3 rounded-full bg-[#ff6a6a]/30 animate-float-2" />
        <div className="absolute bottom-1/3 right-[10%] w-4 h-4 rounded-full bg-[#7b5cff]/30 animate-float-1" />
        <div className="absolute top-2/3 right-[25%] w-2 h-2 rounded-full bg-[#4a90e2]/30 animate-float-3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 space-y-8">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg opacity-0 animate-fade-in"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#50c878] animate-pulse" />
              <span className="text-sm font-medium text-gray-700">已有 50,000+ 学员加入</span>
            </div>

            {/* Title */}
            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              <span className="block">{splitText('YouTube')}</span>
              <span className="block mt-2">
                {splitText('学英语口语')}
              </span>
            </h1>

            {/* Description */}
            <p 
              className="text-lg sm:text-xl text-gray-600 max-w-lg opacity-0 animate-slide-up"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              通过沉浸式YouTube内容，将您的英语口语提升至新高度。
              跟随热门创作者学习，掌握地道表达。
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap gap-4 opacity-0 animate-slide-up"
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
            >
              <Button
                size="lg"
                className="bg-[#ff6a6a] hover:bg-[#ff5252] text-white px-8 py-6 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ff6a6a]/30 group"
                onClick={() => scrollToSection('#courses')}
              >
                开启您的旅程
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-[#ff6a6a] hover:text-[#ff6a6a] px-8 py-6 rounded-full font-semibold text-lg transition-all duration-300 group"
                onClick={() => scrollToSection('#steps')}
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                观看演示
              </Button>
            </div>

            {/* Stats */}
            <div 
              className="flex gap-8 pt-4 opacity-0 animate-slide-up"
              style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
            >
              <div>
                <div className="text-3xl font-bold text-[#ff6a6a]">280+</div>
                <div className="text-sm text-gray-500">精品课程</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#7b5cff]">50k+</div>
                <div className="text-sm text-gray-500">满意学员</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#4a90e2]">98%</div>
                <div className="text-sm text-gray-500">成功率</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Image */}
          <div 
            className="relative lg:pl-8 opacity-0 animate-scale-in"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6a6a]/20 to-[#7b5cff]/20 rounded-3xl blur-3xl transform scale-110" />
              
              {/* Phone Image */}
              <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="/hero-phone.jpg"
                  alt="YouTube英语学习应用"
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
                
                {/* Floating Cards */}
                <div className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-4 animate-float-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#50c878]/20 flex items-center justify-center">
                      <Play className="w-5 h-5 text-[#50c878]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">正在学习</div>
                      <div className="text-xs text-gray-500">Daily Conversations</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 animate-float-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a6a]/20 flex items-center justify-center">
                      <span className="text-lg">🔥</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">学习 streak</div>
                      <div className="text-xs text-gray-500">连续 15 天</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
