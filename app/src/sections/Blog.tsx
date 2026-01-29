import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '如何通过YouTube视频提升英语口语',
    excerpt: '利用碎片化时间，通过精选的YouTube内容，在轻松愉快的氛围中提升英语口语能力。本文将分享最有效的学习方法...',
    image: '/blog-1.jpg',
    date: '2024-01-15',
    readTime: '5分钟',
    featured: true,
  },
  {
    id: 2,
    title: '掌握英语口语的10个步骤',
    excerpt: '从泛听到精听，从词汇到表达，系统化提升您的英语能力...',
    image: '/blog-2.jpg',
    date: '2024-01-10',
    readTime: '8分钟',
  },
  {
    id: 3,
    title: '通过视频学习地道英语表达',
    excerpt: '了解如何在真实语境中学习地道的英语表达，避免中式英语...',
    image: '/blog-3.jpg',
    date: '2024-01-05',
    readTime: '6分钟',
  },
];

const Blog = () => {
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

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div 
          className={`flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <span className="inline-block px-4 py-1 bg-[#4a90e2]/10 text-[#4a90e2] rounded-full text-sm font-medium mb-4">
              学习博客
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              学习技巧与<span className="text-gradient">洞察</span>
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-[#ff6a6a] font-medium hover:gap-3 transition-all duration-300"
          >
            查看全部文章
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Blog Grid */}
        <div 
          className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Featured Post */}
          {featuredPost && (
            <div className="group cursor-pointer">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#ff6a6a] text-white text-xs px-3 py-1 rounded-full">
                    精选文章
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#ff6a6a] transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {featuredPost.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#ff6a6a] font-medium group/link"
                  >
                    阅读更多
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts */}
          <div className="space-y-6">
            {regularPosts.map((post, index) => (
              <div
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-40 h-48 sm:h-auto relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#ff6a6a] transition-colors line-clamp-1">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-sm text-[#ff6a6a] font-medium group/link"
                    >
                      阅读更多
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
