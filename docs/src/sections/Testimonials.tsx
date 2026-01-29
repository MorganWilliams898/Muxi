import { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  content: string;
  rating: number;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: '张小明',
    avatar: '/avatar-1.jpg',
    content: '这个课程彻底改变了我的英语口语。视频内容让学习变得愉快，我不再觉得学英语是一件枯燥的事情。每天都能坚持学习，进步很明显！',
    rating: 5,
    role: '大学生',
  },
  {
    id: 2,
    name: '李芳',
    avatar: '/avatar-2.jpg',
    content: '我尝试过很多方法，但这是第一个让我保持参与的。10步学习法非常科学，从泛听到精听，每一步都有明确的目标，效果特别好。',
    rating: 5,
    role: '职场新人',
  },
  {
    id: 3,
    name: '王华',
    avatar: '/avatar-3.jpg',
    content: '我的自信飙升了。我现在可以毫不畏惧地与母语者交谈。感谢这个平台，让我找到了学习英语的正确方法！',
    rating: 5,
    role: '自由职业者',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Quote */}
      <div className="absolute top-20 left-10 opacity-5">
        <Quote className="w-48 h-48 text-[#ff6a6a]" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 transform rotate-180">
        <Quote className="w-48 h-48 text-[#7b5cff]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1 bg-[#50c878]/10 text-[#50c878] rounded-full text-sm font-medium mb-4">
            学员评价
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            学员怎么<span className="text-gradient">说</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            听听他们的学习故事和成功经验
          </p>
        </div>

        {/* Testimonial Card */}
        <div 
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative">
            {/* Main Card */}
            <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 relative">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 bg-[#ff6a6a] rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="pt-4">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonials[activeIndex].name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonials[activeIndex].role}
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#ff6a6a] hover:text-[#ff6a6a] transition-all duration-300"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#ff6a6a] hover:text-[#ff6a6a] transition-all duration-300"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Avatar Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative transition-all duration-300 ${
                    index === activeIndex ? 'scale-110' : 'scale-90 opacity-50 grayscale'
                  }`}
                >
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className={`w-12 h-12 rounded-full object-cover border-2 transition-all duration-300 ${
                      index === activeIndex ? 'border-[#ff6a6a]' : 'border-transparent'
                    }`}
                  />
                  {index === activeIndex && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#ff6a6a] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-[#ff6a6a]'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
