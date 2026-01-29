import { useState } from 'react';
import { Play, Send, MessageCircle, BookOpen, Video, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: '首页', href: '#hero' },
    { name: '学习步骤', href: '#steps' },
    { name: '课程', href: '#courses' },
    { name: '关于我们', href: '#about' },
    { name: '博客', href: '#blog' },
  ];

  const socialLinks = [
    { name: '微信', icon: MessageCircle },
    { name: '微博', icon: BookOpen },
    { name: '抖音', icon: Video },
    { name: '小红书', icon: Instagram },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a1a2e] text-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#1a1a2e] to-[#2d2d44]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6a6a]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7b5cff]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-coral flex items-center justify-center">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="font-bold text-xl">
                YouTube<span className="text-[#ff6a6a]">英语</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6">
              通过引人入胜的YouTube内容，掌握地道英语口语。让学习变得轻松愉快。
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6a6a] transition-all duration-300 group"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">快速链接</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-[#ff6a6a] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">联系我们</h4>
            <ul className="space-y-3 text-gray-400">
              <li>邮箱: hello@youtubeenglish.com</li>
              <li>微信: YouTubeEnglish</li>
              <li>小红书: @漂亮小羊爱英语</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-6">保持更新</h4>
            <p className="text-gray-400 mb-4">
              订阅我们的通讯，获取最新课程和学习技巧
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="输入您的邮箱"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 pr-12 focus:border-[#ff6a6a] focus:ring-[#ff6a6a]"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#ff6a6a] hover:bg-[#ff5252] rounded-lg p-2"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              {isSubscribed && (
                <p className="text-sm text-[#50c878]">感谢订阅！</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 YouTube学英语口语. 保留所有权利.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-[#ff6a6a] transition-colors">
                隐私政策
              </a>
              <a href="#" className="hover:text-[#ff6a6a] transition-colors">
                服务条款
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
