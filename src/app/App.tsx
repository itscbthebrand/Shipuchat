import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  Zap, 
  Shield, 
  TrendingUp, 
  X,
  Sparkles,
  Globe,
  Clock,
  Palette,
  Star,
  Rocket,
  Crown
} from 'lucide-react';

export default function App() {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Slider images
  const topSliderImages = [
    'https://images.unsplash.com/photo-1573164713988-3385a4d1aec5?w=600&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
  ];

  const bottomSliderImages = [
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=600&q=80',
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80',
    'https://images.unsplash.com/photo-1559136555-9303aea8ebd?w=600&q=80',
  ];

  // Testimonials data
  const testimonials = [
    { 
      name: 'Rahul Sharma', 
      role: 'CEO, TechCorp', 
      text: 'ShiPu Ai has transformed how we handle customer support. The response time is incredible!' 
    },
    { 
      name: 'Priya Singh', 
      role: 'Product Manager', 
      text: 'The AI understands context perfectly. It\'s like having a super-smart team member.' 
    },
    { 
      name: 'Amit Patel', 
      role: 'Startup Founder', 
      text: 'We\'ve seen 70% faster response times since implementing ShiPu Ai.' 
    },
    { 
      name: 'Neha Gupta', 
      role: 'Customer Success', 
      text: 'Our customers love how natural the conversations feel. Highly recommended!' 
    },
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Bot,
      title: 'AI-Powered',
      description: 'Advanced natural language processing for human-like conversations',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Lightning-fast answers to customer queries 24/7',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and data protection',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Analytics',
      description: 'Deep insights into customer interactions',
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  const whyChoose = [
    {
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
      title: 'Seamless Integration',
      description: 'Connect with your existing tools in minutes',
      icon: Sparkles,
      color: 'cyan'
    },
    {
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
      title: '24/7 Availability',
      description: 'Never miss a customer query again',
      icon: Clock,
      color: 'blue'
    },
    {
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
      title: 'Multi-language Support',
      description: 'Communicate in 50+ languages',
      icon: Globe,
      color: 'purple'
    },
    {
      image: 'https://images.unsplash.com/photo-1559136555-9303aea8ebd?w=600&q=80',
      title: 'Custom Branding',
      description: 'White-label solution for your brand',
      icon: Palette,
      color: 'pink'
    }
  ];

  // Floating particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] overflow-x-hidden relative">
      {/* Cursor glow effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-50"
        animate={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.15), transparent 80%)`
        }}
      />

      {/* Animated background with particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
        
        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-cyan-400/30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
        
        {/* Animated gradient orbs - More vibrant */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/3 -left-1/3 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/40 via-blue-500/20 to-transparent rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-1/3 -right-1/3 w-[700px] h-[700px] bg-gradient-radial from-purple-500/40 via-pink-500/20 to-transparent rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.65, 0.35],
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-indigo-500/40 via-cyan-500/20 to-transparent rounded-full blur-3xl"
        />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      {/* Header with premium badge */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 px-6 py-5 md:px-12 flex items-center justify-between"
      >
        <motion.div 
          whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse-slow" />
          <div className="relative w-16 h-16 bg-white/95 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-2xl border border-cyan-400/30">
            <img 
              src="https://shipu.c0m.in/logo.png" 
              alt="ShiPu Ai Logo" 
              className="w-full h-full object-contain p-2 rounded-xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = '<span class="text-cyan-500 font-bold text-xl">ShiPu</span>';
                }
              }}
            />
          </div>
        </motion.div>

        {/* Premium badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl rounded-full border border-yellow-400/30"
        >
          <Crown className="w-5 h-5 text-yellow-400" />
          <span className="text-yellow-400 font-medium tracking-wide">Premium AI Platform</span>
        </motion.div>
      </motion.header>

      {/* Hero Section - More dramatic */}
      <motion.section 
        style={{ opacity }}
        className="relative z-10 min-h-[90vh] flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto text-center space-y-10">
          {/* Floating stars around title */}
          <div className="relative">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                <Star className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 relative">
                <motion.span 
                  className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255,255,255,0.5)",
                      "0 0 40px rgba(34,211,238,0.8)",
                      "0 0 20px rgba(255,255,255,0.5)",
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ShiPu
                </motion.span>
                <motion.span 
                  className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent font-light relative"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Ai
                </motion.span>
                
                {/* Sparkle effect */}
                <motion.div
                  className="absolute -right-8 -top-8"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles className="w-12 h-12 text-yellow-400 fill-yellow-400" />
                </motion.div>
              </h1>
            </motion.div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light max-w-4xl mx-auto leading-relaxed tracking-wide"
          >
            <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Next-generation AI conversation platform
            </span>
            <br />
            <span className="text-white/80">
              for modern businesses
            </span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.button
              onClick={() => setIsHelpOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 text-xl font-semibold text-white overflow-hidden rounded-full"
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                style={{ backgroundSize: "200% 200%" }}
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <span className="relative z-10 flex items-center gap-3 tracking-wider uppercase">
                <Rocket className="w-6 h-6" />
                Start Free Trial
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-12 py-6 text-xl font-semibold bg-white/10 backdrop-blur-xl text-white border-2 border-cyan-400/50 rounded-full hover:bg-white/20 hover:border-cyan-400 transition-all duration-300 tracking-wider uppercase"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-6 justify-center pt-12"
          >
            {[
              { label: 'Active Users', value: '10K+' },
              { label: 'Response Time', value: '<1s' },
              { label: 'Accuracy', value: '99%' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-cyan-400/30"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-cyan-200/70 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section - Bento Grid Style */}
      <section className="relative z-10 px-6 py-32 md:py-40">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-24"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -15, rotateY: 5 }}
                className="group relative"
                style={{ perspective: "1000px" }}
              >
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-white/40">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon with animated background */}
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="relative mb-6"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center`}>
                      <feature.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4 tracking-wide">
                    {feature.title}
                  </h3>
                  
                  <p className="text-cyan-100/70 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Slider Section - Enhanced */}
      <section className="relative z-10 py-32 md:py-40 overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20 px-6"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </span>
        </motion.h2>
        
        {/* Top Slider */}
        <div className="relative mb-8">
          <div className="flex gap-6 animate-scroll-left">
            {[...topSliderImages, ...topSliderImages].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 5, zIndex: 10 }}
                className="relative flex-shrink-0 w-96 h-56 rounded-3xl overflow-hidden group"
                style={{ perspective: "1000px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 group-hover:from-cyan-400/40 group-hover:to-blue-500/40 transition-all duration-500" />
                <img 
                  src={img} 
                  alt="Team" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 border-2 border-cyan-400/40 group-hover:border-cyan-300/60 rounded-3xl transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Bottom Slider */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll-right">
            {[...bottomSliderImages, ...bottomSliderImages].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: -5, zIndex: 10 }}
                className="relative flex-shrink-0 w-96 h-56 rounded-3xl overflow-hidden group"
                style={{ perspective: "1000px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-600/30 group-hover:from-purple-400/40 group-hover:to-pink-500/40 transition-all duration-500" />
                <img 
                  src={img} 
                  alt="Team" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 border-2 border-purple-400/40 group-hover:border-purple-300/60 rounded-3xl transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section - Premium Cards */}
      <section className="relative z-10 px-6 py-32 md:py-40">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-24"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose ShiPu Ai
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateX: 5 }}
                className="group relative overflow-hidden rounded-[2.5rem]"
                style={{ perspective: "1000px" }}
              >
                {/* Glowing border */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-[2.5rem] blur opacity-0 group-hover:opacity-75 transition duration-500`} />
                
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] overflow-hidden group-hover:border-white/40 transition-all duration-500">
                  {/* Image section */}
                  <div className="relative h-72 overflow-hidden">
                    <motion.img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.7 }}
                    />
                    
                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-[#000814]/80 to-transparent" />
                    <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Floating icon */}
                    <motion.div 
                      className="absolute top-6 right-6"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br from-${item.color}-400/30 to-${item.color}-600/30 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-${item.color}-400/40 shadow-lg shadow-${item.color}-500/50`}>
                        <item.icon className={`w-8 h-8 text-${item.color}-300`} strokeWidth={1.5} />
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Content section */}
                  <div className="p-10">
                    <h3 className={`text-3xl font-semibold mb-4 tracking-wide bg-gradient-to-r from-${item.color}-400 to-${item.color}-200 bg-clip-text text-transparent`}>
                      {item.title}
                    </h3>
                    <p className="text-cyan-100/70 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - More dramatic */}
      <section className="relative z-10 px-6 py-32 md:py-40">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-24"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </motion.h2>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              transition={{ duration: 0.6 }}
              className="relative"
              style={{ perspective: "1000px" }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-[3rem] blur-2xl opacity-30" />
              
              <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl border-2 border-white/30 rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 text-cyan-400/20 text-8xl font-serif">"</div>
                <div className="absolute bottom-10 right-10 text-cyan-400/20 text-8xl font-serif">"</div>
                
                <p className="relative text-2xl md:text-4xl text-white/95 leading-relaxed mb-12 italic font-light">
                  {testimonials[currentSlide].text}
                </p>
                
                <div className="relative space-y-3">
                  <motion.p 
                    className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                  >
                    {testimonials[currentSlide].name}
                  </motion.p>
                  <p className="text-cyan-300/60 text-lg tracking-wide">
                    {testimonials[currentSlide].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-4 mt-16">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 w-16 shadow-lg shadow-cyan-500/50' 
                    : 'bg-cyan-400/30 hover:bg-cyan-400/50'
                }`} />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Epic */}
      <section className="relative z-10 px-6 py-40 md:py-52 overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          style={{ backgroundSize: "200% 200%" }}
        />
        
        <div className="relative max-w-6xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
              animate={{
                textShadow: [
                  "0 0 20px rgba(34,211,238,0.5)",
                  "0 0 40px rgba(34,211,238,0.8)",
                  "0 0 20px rgba(34,211,238,0.5)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Ready to Transform Your
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Customer Experience?
              </span>
            </motion.h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-cyan-100/80 font-light"
          >
            Join thousands of businesses using ShiPu Ai
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              onClick={() => setIsHelpOpen(true)}
              className="group relative px-16 py-8 text-2xl font-bold overflow-hidden rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Multiple animated layers */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                style={{ backgroundSize: "200% 200%" }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-purple-500 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <span className="relative z-10 text-white tracking-widest uppercase flex items-center gap-3">
                <Rocket className="w-8 h-8" />
                Get Started Now
              </span>
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-8 justify-center pt-12 text-cyan-200/60"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>Setup in 2 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-current" />
              <span>14-day free trial</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Premium */}
      <footer className="relative z-10 border-t border-cyan-500/20 bg-gradient-to-b from-[#000814]/80 to-[#000814] backdrop-blur-xl">
        <div className="px-6 py-12 text-center space-y-4">
          <motion.p 
            className="text-cyan-400/70 text-lg tracking-wide"
            whileHover={{ scale: 1.05 }}
          >
            ©2026 ShiPu Ai
          </motion.p>
          <motion.p 
            className="text-cyan-400/50 tracking-wide"
            whileHover={{ scale: 1.05, color: "rgba(34, 211, 238, 0.8)" }}
          >
            Developed by Chitron Bhattacharjee
          </motion.p>
        </div>
      </footer>

      {/* Modal - Ultra Premium */}
      <AnimatePresence>
        {isHelpOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsHelpOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-2xl"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, y: 50, rotateX: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50, rotateX: 20 }}
              transition={{ type: "spring", duration: 0.7 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl h-[90vh]"
              style={{ perspective: "2000px" }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-[3rem] blur-2xl opacity-50" />
              
              <div className="relative h-full bg-white/98 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white/30">
                <div className="flex items-center justify-between px-10 py-7 bg-gradient-to-r from-[#0A1A2F] via-[#1E3A5F] to-[#0A1A2F] border-b border-cyan-500/30">
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-widest uppercase flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-cyan-400" />
                    Help Center
                  </h3>
                  <motion.button
                    onClick={() => setIsHelpOpen(false)}
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 transition-colors border border-cyan-400/30"
                  >
                    <X className="w-7 h-7 text-cyan-400" />
                  </motion.button>
                </div>
                
                <iframe
                  src="/help"
                  title="Help Center"
                  className="w-full h-[calc(100%-6rem)] border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom animations */}
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
          will-change: transform;
        }
        
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
          will-change: transform;
        }
        
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 12px;
        }
        
        ::-webkit-scrollbar-track {
          background: #000814;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #22d3ee, #3b82f6, #a855f7);
          border-radius: 6px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #06b6d4, #2563eb, #9333ea);
        }
      `}</style>
    </div>
  );
}
