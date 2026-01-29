import { useState, useEffect, useRef } from 'react';
import { Play, Clock, User, ChevronRight, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Course {
  id: number;
  title: string;
  subtitle: string;
  instructor: string;
  duration: string;
  image: string;
  type: 'american' | 'british';
  lessons: number;
}

const courses: Course[] = [
  {
    id: 1,
    title: '准备和几个闺蜜出去玩',
    subtitle: 'Girls\' Day Out Planning',
    instructor: 'Sydney Serena',
    duration: '1:45',
    image: '/course-1.jpg',
    type: 'american',
    lessons: 10,
  },
  {
    id: 2,
    title: '进入医学院的心态准备和挑战',
    subtitle: 'Medical School Preparation',
    instructor: 'Zeliha Akpinar',
    duration: '2:30',
    image: '/course-2.jpg',
    type: 'british',
    lessons: 10,
  },
  {
    id: 3,
    title: '日常购物对话练习',
    subtitle: 'Shopping Conversations',
    instructor: 'Emma Chamberlain',
    duration: '1:20',
    image: '/course-1.jpg',
    type: 'american',
    lessons: 10,
  },
  {
    id: 4,
    title: '职场面试技巧分享',
    subtitle: 'Job Interview Skills',
    instructor: 'Holly Gabrielle',
    duration: '3:15',
    image: '/course-2.jpg',
    type: 'british',
    lessons: 10,
  },
];

const Courses = () => {
  const [activeTab, setActiveTab] = useState<'american' | 'british'>('american');
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

  const filteredCourses = courses.filter((course) => course.type === activeTab);

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#ff6a6a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#7b5cff]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1 bg-[#ff6a6a]/10 text-[#ff6a6a] rounded-full text-sm font-medium mb-4">
            精品课程
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            探索我们的<span className="text-gradient">课程</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            美音与英音课程各占一半，满足不同学习需求
          </p>
        </div>

        {/* Tabs */}
        <div 
          className={`flex justify-center mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-lg">
            <button
              onClick={() => setActiveTab('american')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'american'
                  ? 'bg-[#ff6a6a] text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              美音课程
            </button>
            <button
              onClick={() => setActiveTab('british')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'british'
                  ? 'bg-[#7b5cff] text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              英音课程
            </button>
          </div>
        </div>

        {/* Course Grid */}
        <div 
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-7 h-7 text-[#ff6a6a] fill-[#ff6a6a] ml-1" />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                {/* Type Badge */}
                <div 
                  className={`absolute top-4 left-4 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 ${
                    course.type === 'american' ? 'bg-[#ff6a6a]' : 'bg-[#7b5cff]'
                  }`}
                >
                  <Volume2 className="w-3 h-3" />
                  {course.type === 'american' ? '美音' : '英音'}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-2">{course.subtitle}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ff6a6a] transition-colors">
                  {course.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {course.instructor}
                  </div>
                  <div className="flex items-center gap-1">
                    <Play className="w-4 h-4" />
                    {course.lessons} 个学习步骤
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-between group/btn hover:bg-[#ff6a6a]/5 hover:text-[#ff6a6a]"
                >
                  开始学习
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div 
          className={`text-center mt-12 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            查看全部课程
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
