import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Chrome, 
  Zap, 
  Clock, 
  Search, 
  Shield, 
  Sparkles, 
  Star,
  ChevronDown,
  Github,
  Mail,
  Menu,
  X,
  Globe,
  Play
} from 'lucide-react';

function App() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [language, setLanguage] = useState('zh');
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    zh: {
      nav: {
        features: "功能",
        guide: "指南", 
        download: "下载",
        useNow: "立即使用"
      },
      hero: {
        badge: "全新发布 - 免费使用",
        title1: "Bolt 提示词",
        title2: "历史记录助手",
        description: "永不丢失您珍贵的Bolt对话记录。智能保存、快速搜索、完全免费的Chrome插件，让您的AI创作之旅更加高效便捷。",
        downloadBtn: "免费下载插件",
        demoBtn: "查看演示",
        trusted: "已被 10,000+ 开发者信赖"
      },
      features: {
        title: "为什么选择",
        subtitle: "专为Bolt.new用户设计的强大插件，让您的AI创作体验更上一层楼",
        items: [
          {
            title: "智能历史记录",
            description: "自动保存每一次Bolt对话，永不丢失重要的提示词和回答",
            details: ["自动备份所有对话", "本地安全存储", "一键恢复历史"]
          },
          {
            title: "快速搜索",
            description: "强大的搜索功能，快速找到之前的提示词和解决方案",
            details: ["关键词搜索", "标签分类", "时间筛选"]
          },
          {
            title: "隐私保护",
            description: "所有数据本地存储，完全保护您的隐私和数据安全",
            details: ["本地存储", "无服务器依赖", "完全离线"]
          },
          {
            title: "智能分析",
            description: "分析您的使用习惯，提供个性化的提示词建议",
            details: ["使用统计", "智能推荐", "效率提升"]
          }
        ]
      },
      guide: {
        title1: "简单四步",
        title2: "开始使用",
        subtitle: "无需复杂配置，安装后即可自动工作",
        steps: [
          {
            step: "01",
            title: "下载插件",
            description: "点击下载按钮获取Bolt历史记录插件安装包"
          },
          {
            step: "02", 
            title: "安装启用",
            description: "解压文件并在Chrome扩展程序中加载插件"
          },
          {
            step: "03",
            title: "自动保存",
            description: "打开Bolt.new，插件会自动开始保存您的对话历史"
          },
          {
            step: "04",
            title: "随时查看",
            description: "点击插件图标即可查看和搜索所有历史记录"
          }
        ]
      },
      download: {
        title1: "准备好提升您的",
        title2: "Bolt 体验了吗？",
        subtitle: "加入数万名开发者，让AI创作变得更加高效和便捷",
        downloadBtn: "立即下载插件",
        sourceBtn: "查看源码",
        features: "完全免费 • 隐私安全 • 开源项目"
      },
      footer: {
        copyright: "版权归Kennan所有。"
      }
    },
    en: {
      nav: {
        features: "Features",
        guide: "Guide", 
        download: "Download",
        useNow: "Use Now"
      },
      hero: {
        badge: "New Release - Free to Use",
        title1: "Bolt Prompt",
        title2: "History Assistant",
        description: "Never lose your precious Bolt conversation records. Smart saving, quick search, completely free Chrome extension to make your AI creation journey more efficient and convenient.",
        downloadBtn: "Free Download",
        demoBtn: "View Demo",
        trusted: "Trusted by 10,000+ developers"
      },
      features: {
        title: "Why Choose",
        subtitle: "Powerful extension designed specifically for Bolt.new users to enhance your AI creation experience",
        items: [
          {
            title: "Smart History",
            description: "Automatically save every Bolt conversation, never lose important prompts and answers",
            details: ["Auto backup all conversations", "Local secure storage", "One-click history recovery"]
          },
          {
            title: "Quick Search",
            description: "Powerful search functionality to quickly find previous prompts and solutions",
            details: ["Keyword search", "Tag categorization", "Time filtering"]
          },
          {
            title: "Privacy Protection",
            description: "All data stored locally, completely protecting your privacy and data security",
            details: ["Local storage", "No server dependency", "Completely offline"]
          },
          {
            title: "Smart Analysis",
            description: "Analyze your usage habits and provide personalized prompt suggestions",
            details: ["Usage statistics", "Smart recommendations", "Efficiency improvement"]
          }
        ]
      },
      guide: {
        title1: "Simple Four Steps",
        title2: "Get Started",
        subtitle: "No complex configuration required, works automatically after installation",
        steps: [
          {
            step: "01",
            title: "Download Plugin",
            description: "Click download button to get Bolt history plugin installation package"
          },
          {
            step: "02", 
            title: "Install & Enable",
            description: "Extract files and load the plugin in Chrome extensions"
          },
          {
            step: "03",
            title: "Auto Save",
            description: "Open Bolt.new, the plugin will automatically start saving your conversation history"
          },
          {
            step: "04",
            title: "View Anytime",
            description: "Click the plugin icon to view and search all history records"
          }
        ]
      },
      download: {
        title1: "Ready to Enhance Your",
        title2: "Bolt Experience?",
        subtitle: "Join tens of thousands of developers to make AI creation more efficient and convenient",
        downloadBtn: "Download Now",
        sourceBtn: "View Source",
        features: "Completely Free • Privacy Secure • Open Source"
      },
      footer: {
        copyright: "Copyright © Kennan. All rights reserved."
      }
    }
  };

  const currentContent = content[language];

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      ...currentContent.features.items[0]
    },
    {
      icon: <Search className="w-8 h-8" />,
      ...currentContent.features.items[1]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      ...currentContent.features.items[2]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      ...currentContent.features.items[3]
    }
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/bolt_helper.zip';
    link.download = 'bolt_helper.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSourceCode = () => {
    window.open('https://github.com/KennanYang/bolt-helper', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/20 backdrop-blur-md border-b border-white/10' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Bolt Helper</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">{currentContent.nav.features}</a>
              <a href="#guide" className="text-gray-300 hover:text-white transition-colors">{currentContent.nav.guide}</a>
              <a href="#download" className="text-gray-300 hover:text-white transition-colors">{currentContent.nav.download}</a>
              
              <button 
                onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
                className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'zh' ? 'EN' : '中文'}</span>
              </button>
              
              <button 
                onClick={handleDownload}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                {currentContent.nav.useNow}
              </button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-300 hover:text-white transition-colors">{currentContent.nav.features}</a>
              <a href="#guide" className="block text-gray-300 hover:text-white transition-colors">{currentContent.nav.guide}</a>
              <a href="#download" className="block text-gray-300 hover:text-white transition-colors">{currentContent.nav.download}</a>
              <button 
                onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                {language === 'zh' ? 'English' : '中文'}
              </button>
              <button 
                onClick={handleDownload}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg"
              >
                {currentContent.nav.useNow}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-white mb-8 border border-white/20">
              <Star className="w-4 h-4 mr-2" />
              {currentContent.hero.badge}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {currentContent.hero.title1}
              </span>
              <br />
              <span className="text-white">{currentContent.hero.title2}</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {currentContent.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={handleDownload}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center"
              >
                <Download className="w-6 h-6 mr-3" />
                {currentContent.hero.downloadBtn}
                <div className="ml-2 group-hover:translate-x-1 transition-transform">
                  <Download className="w-5 h-5" />
                </div>
              </button>
              
              <button 
                onClick={() => setShowVideo(true)}
                className="text-white px-8 py-4 rounded-xl text-lg font-semibold border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                {currentContent.hero.demoBtn}
              </button>
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-400 text-sm mb-4">{currentContent.hero.trusted}</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-white ml-2">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-black rounded-2xl overflow-hidden">
              <video 
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                controls
                preload="metadata"
              >
                <source src="/bolt_helper.mp4" type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {currentContent.features.title} <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Bolt Helper</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {currentContent.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group p-8 rounded-2xl border transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                  activeFeature === index 
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/50 shadow-2xl shadow-blue-500/10' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`inline-flex p-3 rounded-xl mb-6 transition-all duration-300 ${
                  activeFeature === index 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                    : 'bg-white/10 text-gray-300 group-hover:bg-white/20'
                }`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section id="guide" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{currentContent.guide.title1}</span>
              <br />
              {currentContent.guide.title2}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {currentContent.guide.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.guide.steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  {index < currentContent.guide.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {currentContent.download.title1}
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {currentContent.download.title2}
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              {currentContent.download.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleDownload}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-5 rounded-xl text-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Download className="w-7 h-7 mr-3" />
                {currentContent.download.downloadBtn}
                <div className="ml-3 group-hover:translate-x-1 transition-transform">
                  <Download className="w-6 h-6" />
                </div>
              </button>
              
              <button 
                onClick={handleSourceCode}
                className="text-white px-10 py-5 rounded-xl text-xl font-semibold border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <Github className="w-6 h-6 mr-3" />
                {currentContent.download.sourceBtn}
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              {currentContent.download.features}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Bolt Helper</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <button 
                onClick={handleSourceCode}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>{currentContent.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;