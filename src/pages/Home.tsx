import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Code, 
  Globe, 
  Megaphone, 
  Users, 
  CheckCircle, 
  Star,
  TrendingUp,
  Award,
  Target,
  Zap,
  Sparkles,
  Quote
} from 'lucide-react';

import line from '../assets/underline.png'
import BrandSection from '../components/Partners';

const Home = () => {
  const [counters, setCounters] = useState({
    businesses: 0,
    satisfaction: 0,
    students: 0,
    years: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { businesses: 250, satisfaction: 98, students: 200, years: 5 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          businesses: Math.floor(targets.businesses * progress),
          satisfaction: Math.floor(targets.satisfaction * progress),
          students: Math.floor(targets.students * progress),
          years: Math.floor(targets.years * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepTime);
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions that perfectly fit your business needs and scale with your growth.',
      color: 'from-blue-500 to-blue-700',
      bg:"bg-red-200/40"
    },
    {
      icon: Globe,
      title: 'Web Development & Applications',
      description: 'Modern, responsive websites and web applications that deliver exceptional user experiences.',
      color: 'from-purple-500 to-purple-700',
       bg:"bg-green-200/40"
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing & Social Media',
      description: 'Comprehensive digital marketing strategies that boost your online presence and drive results.',
      color: 'from-cyan-500 to-cyan-700',
       bg:"bg-yellow-200/40"
    },
    {
      icon: Users,
      title: 'Internship Programs',
      description: 'Training the next generation of tech talent while providing fresh perspectives to your projects.',
      color: 'from-emerald-500 to-emerald-700',
       bg:"bg-blue-200/40"
    }
  ];

  const advantages = [
    {
      icon: Target,
      title: 'End-to-End Solutions',
      description: 'Unlike others, we handle everything from software development to marketing in one place.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: 'Over 500 successful business transformations with measurable ROI and client retention.'
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Always using the latest technologies and trends to keep you ahead of the competition.'
    },
    {
      icon: Award,
      title: 'Talent Development',
      description: 'Our unique internship program creates industry-ready professionals while serving clients.'
    }
  ];

const testimonials = [
  {
    name: "Nina Morales",
    role: "Marketing Director",
    company: "PixelGrowth Agency",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop&crop=face",
    content: "Brackerty’s AI ad optimization reduced our CPC by 40% and increased our ROAS significantly across campaigns. Real-time targeting was a game changer.",
    rating: 5
  },
  {
    name: "Jason Li",
    role: "CEO",
    company: "ClarityCloud",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face",
    content: "Their AI chatbot integration helped cut support tickets by 60%. We’ve freed up hours of agent time while improving customer satisfaction.",
    rating: 5
  },
  {
    name: "Amira Khalid",
    role: "Head of Content",
    company: "Viral Nest Media",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=100&h=100&fit=crop&crop=face",
    content: "The SEO audits and backlink strategy were spot-on. Organic traffic went up 120% in three months, and we ranked #1 for three major keywords.",
    rating: 5
  },
  {
    name: "James O'Connor",
    role: "Director of IT",
    company: "SafeNet Solutions",
    image: "https://images.unsplash.com/photo-1614284354644-3e67b8b1b3e9?w=100&h=100&fit=crop&crop=face",
    content: "Their security team helped us meet SOC 2 compliance in record time. Their vulnerability testing tools identified risks we’d missed for years.",
    rating: 5
  },
  {
    name: "Lara Bennett",
    role: "Creative Lead",
    company: "StudioNorth",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=100&h=100&fit=crop&crop=face",
    content: "We loved how intuitive the new website CMS was. Our internal teams can now update content without needing developers involved.",
    rating: 5
  },
  {
    name: "Musa Diallo",
    role: "Business Development Manager",
    company: "TradeWave Logistics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Their B2B lead generation strategy brought in 30 qualified prospects within two weeks. Great ROI and very easy to work with.",
    rating: 5
  },
  {
    name: "Sofia Ivanova",
    role: "CFO",
    company: "MetaMinds AI",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    content: "Data management used to be our weakest point. Brackerty’s cloud-based DWH solution gave us daily reporting that used to take weeks.",
    rating: 5
  },
  {
    name: "Ricardo Alvarez",
    role: "Social Media Manager",
    company: "BuzzTrend Digital",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328bcd4b?w=100&h=100&fit=crop&crop=face",
    content: "We now manage 15+ accounts through a unified dashboard with AI scheduling. Our post engagement doubled within 6 weeks.",
    rating: 5
  },
  {
    name: "Emily Harper",
    role: "Product Owner",
    company: "NextPath Software",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    content: "Brackerty built our custom inventory system from scratch. It syncs in real time with suppliers and reduced order errors by 90%.",
    rating: 5
  },
  {
    name: "Mohammed Reza",
    role: "Founder",
    company: "EcomSmart",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face",
    content: "From page speed to conversion optimization, our Shopify store is now 3x faster and converts 60% better. Couldn’t be happier.",
    rating: 5
  },
  {
    name: "Chloe Kim",
    role: "Operations Director",
    company: "UrbanShift",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face",
    content: "Their data visualization dashboards turned complex KPIs into actionable insights. Our executive reports now take 15 minutes, not hours.",
    rating: 5
  },
  {
    name: "Leo Tanaka",
    role: "CTO",
    company: "NovaIoT Systems",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face",
    content: "We asked for a custom IoT control panel, and they delivered beyond expectations. Secure, scalable, and blazing fast.",
    rating: 5
  },
  {
    name: "Gabrielle Thomas",
    role: "Head of SEO",
    company: "ClickRank Media",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=100&h=100&fit=crop&crop=face",
    content: "Their technical SEO audit revealed major crawl issues. After fixes, we saw a 3x boost in search visibility within one quarter.",
    rating: 5
  },
  {
    name: "Yusuf Al-Mansoor",
    role: "Project Manager",
    company: "TeraLink Global",
    image: "https://images.unsplash.com/photo-1590080876084-1e7c0a54c4ce?w=100&h=100&fit=crop&crop=face",
    content: "Project deadlines were always met. Their Agile software team felt like an extension of our own, and communication was seamless.",
    rating: 5
  },
  {
    name: "Hannah Williams",
    role: "Digital Marketing Lead",
    company: "BrandElevate",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",
    content: "They revamped our paid media strategy and cut CPA in half. Their creative assets were spot-on and conversion-focused.",
    rating: 5
  },
  {
    name: "Carlos Mendes",
    role: "E-commerce Manager",
    company: "Shopfinity",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face",
    content: "Their abandoned cart automation added $48k in recovered revenue in the first 30 days. Seamless Klaviyo integration too.",
    rating: 5
  },
  {
    name: "Isabella Ricci",
    role: "UX Research Lead",
    company: "FlowForm Design",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop&crop=face",
    content: "Their heatmap & A/B testing tools helped us pinpoint friction points. After two weeks, bounce rate dropped by 27%.",
    rating: 5
  },
  {
    name: "Tyler Green",
    role: "Security Analyst",
    company: "HexWall Defense",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
    content: "Pen testing uncovered five critical flaws in our architecture. Their patch recommendations were fast and effective.",
    rating: 5
  },
  {
    name: "Fatima Noor",
    role: "Program Manager",
    company: "EduVerse",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    content: "Our new LMS platform was built from scratch and delivered early. It's student-friendly, secure, and fully mobile responsive.",
    rating: 5
  },
  {
    name: "Nick Fischer",
    role: "VP of Sales",
    company: "LeadCore AI",
    image: "https://images.unsplash.com/photo-1573497019410-3c89ac37d0ca?w=100&h=100&fit=crop&crop=face",
    content: "Brackerty’s AI-powered lead scoring tool has made our outreach 2x more efficient. Sales velocity has jumped by 35%.",
    rating: 5
  },
  {
    name: "Mei Lin",
    role: "Brand Strategist",
    company: "EchoNest",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
    content: "Their brand refresh and responsive website helped us land two major clients. We’ve never looked more professional online.",
    rating: 5
  }
];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-12"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-black justify-center overflow-hidden">
       
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-4 py-2 mb-6">
                <Sparkles size={16} className="text-yellow-400 animate-pulse" />
                <span className="text-white/90 font-medium text-[10px] md:text-sm ">Next-Gen Technology</span>
              </div>
              
              <motion.h1 transition={{ ease: "easeOut", duration: 1 }} initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }} className="text-4xl text-white sm:text-5xl lg:text-7xl font-bold leading-tight">
                Technology that{" "}
                <span className="text-gradient">transforms</span>⚡your{" "}
                <span className="relative">
                  business
                  <motion.img transition={{ ease: "easeOut", duration: 1, delay:1 }} initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }} src={line} className="right-0 absolute -bottom-4" alt="" />
                </span>
              </motion.h1>
              
              <motion.p transition={{ ease: "easeOut", duration: 1, delay:1}} initial={{ opacity: 0, y:100 }}   animate={{ opacity: 1, y:0 }}
               className="text-[16px] md:text-xl text-white/90 lg:text-2xl text leading-relaxed max-w-3xl mx-auto">
               We build custom software, stunning websites, and powerful marketing strategies 
              that turn traditional businesses into industry leaders
            </motion.p>
            </div>

            <motion.div transition={{ ease: "easeOut", duration: 1, delay:1}} initial={{ opacity: 0, y:100 }}  animate={{ opacity: 1, y:0 }} className="flex text-sm  justify-center">
             <a href='/portfolio'>
              <button  className="group gradient-primary text-white px-4 py-3 rounded-xl flex items-center gap-2
              ">
                Explore Solutions
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform " />
              </button>
             </a>
             
            </motion.div>

        
          </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            </p>
            
           
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-20 md:py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
                {counters.businesses}+
              </div>
              <div className="text-gray-300">Businesses Transformed</div>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {counters.satisfaction}%
              </div>
              <div className="text-gray-300">Client Satisfaction</div>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {counters.students}+
              </div>
              <div className="text-gray-300">Students Certified</div>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {counters.years}+
              </div>
              <div className="text-gray-300">Years of Excellence</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-[16px] md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions that transform your business from traditional to exceptional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${service.bg}  rounded-2xl p-8  border border-gray-100 `}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color}  flex items-center justify-center mb-6`}>
                  <service.icon className="w-6 text-white" />
                </div>
                <h3 className="text-[16px] md:text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-md lg:text-xl  leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Brackety Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-gradient">Brackety</span>
            </h2>
            <p className="text-[16px] md:text-2xl text-gray-600 max-w-3xl mx-auto">
              We don't just deliver projects - we build long-term partnerships that drive continuous growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{y:50 , opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <advantage.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[16px] md:text-xl 
 font-bold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm md:text-md xl:text-xl  leading-relaxed">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
       <section id="testimonials" className="py-10 md:py-20 bg-gradient-to-br from-muted/20 to-background">
      <svg width="100%" height="200" viewBox="0 0 2000 206" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_2492_2104)"> <rect width="2000" height="206" fill="white" className="hand-united-1"></rect> <path d="M884.046 105.848L911.795 57.4417C915.472 51.0262 911.472 42.9296 904.142 41.9523V41.9523C899.846 41.3794 895.644 43.5302 893.596 47.3507L866.705 97.5173C865.846 99.1195 864.625 100.511 863.024 101.372C853.172 106.678 833.661 110.909 818.427 92.9968C797.705 68.6323 837.123 67.829 831.551 83.8936C825.979 99.9581 823.608 118.7 798.741 105.848C773.875 92.9968 747.973 80.6806 731.396 99.9581C721.648 111.293 723.244 119.176 726.969 123.586C729.251 126.288 733.519 126.19 735.654 123.37C739.494 118.295 739.191 109.808 720.344 99.9581C689.607 83.8935 673.374 116.826 651.617 116.826C629.859 116.826 635.039 102.1 620.879 92.9968C609.551 85.7142 571.953 89.9624 554.57 92.9968C547.924 94.0891 534.076 98.3291 531.843 106.55C529.052 116.826 548.19 116.583 547.791 109.225C547.411 102.219 506.538 116.519 485.767 98.7657C483.731 97.0253 481.52 95.5623 479.197 96.8967C470.277 102.021 446.797 119.17 431.552 116.826C419.963 114.346 396.546 82.7155 383.598 92.9968C367.414 105.848 322.457 87.9278 323.656 77.8717C324.854 67.8155 314.074 79.7834 308.679 95.8479C303.427 111.49 262.363 87.6048 233.646 95.6192C232.115 96.0465 229.927 98.2887 229.419 96.7825C228.298 93.4601 237.509 72.0074 248.728 71.3352C265.512 70.3296 252.343 94.9572 250.545 90.432C248.864 86.2015 206.844 83.2893 195.01 71.8361C193.492 70.3663 192.018 68.7708 190.067 67.9561C180.456 63.9412 162.153 59.9997 146.539 68.713C145.844 69.1007 145.119 69.4322 144.379 69.7238C139.503 71.6454 131.63 76.4724 132 83.5C132.5 92.9968 147 97.3639 149 90.432C151 83.5 144.5 99.1955 121 87.3238C100.681 77.059 93.0711 58.224 75.546 62.5798C70.1011 63.9331 69.6886 73.7382 64.1418 72.8945C60.6265 72.3598 55.1652 70.5321 50 71.3352C37 73.3562 21.5 76.3352 15 71.3352C8.5 66.3352 6.04886 55.6358 2 69.3141C-6 96.3406 -3.83333 83.5 -6 83.5" stroke="#FF8A0A" stroke-width="2" className="hand-united-2"></path> <path d="M1099.5 107.816L1075.21 61.1357C1072.63 56.1635 1074.51 50.0355 1079.45 47.3771V47.3771C1084.44 44.6858 1090.67 46.5633 1093.35 51.5662L1117.7 97.0769C1118.55 98.6679 1119.76 100.047 1121.35 100.898C1131.87 106.524 1156.54 112.906 1171.6 95.0363C1192.01 70.8078 1153.18 70.009 1158.67 85.9839C1164.16 101.959 1166.49 120.596 1190.99 107.816C1215.48 95.0363 1241 82.7889 1257.33 101.959C1266.87 113.153 1265.38 120.962 1261.77 125.364C1259.5 128.121 1255.18 128.023 1253.07 125.148C1249.36 120.091 1249.76 111.695 1268.22 101.959C1298.5 85.9839 1314.49 118.732 1335.92 118.732C1357.35 118.732 1352.25 104.089 1366.2 95.0363C1377.36 87.7944 1414.4 92.0188 1431.52 95.0363C1438.07 96.1226 1451.71 100.339 1453.91 108.514C1456.66 118.732 1437.81 118.491 1438.2 111.174C1438.59 103.858 1487.27 117.071 1506.51 95.0363C1509.49 91.8097 1531.52 96.4733 1549.61 95.7247C1554.11 95.5384 1557.5 91.8449 1560.61 88.5832C1564.8 84.1925 1572.83 81.0867 1586.56 85.9839C1599.47 90.5845 1607.81 97.335 1612.69 103.026C1616.29 107.236 1614.19 113.154 1609 115.101C1598.63 118.989 1586.56 120.992 1586.56 111.174C1586.56 95.0363 1604.87 76.0151 1635.57 80.9995C1666.28 85.9839 1683.4 113.674 1706.43 107.816C1729.46 101.959 1714.7 70.009 1712.93 85.9839C1711.16 101.959 1714.7 108.881 1747.18 101.959C1772.26 96.6121 1790.92 103.512 1797.85 108.038C1798.33 108.347 1798.74 108.723 1799.2 109.054C1801.65 110.82 1807.88 113.098 1818 111.174C1832 108.514 1841.5 100.486 1848.5 104.5C1855.5 108.514 1855.5 119 1848.5 117.5C1841.5 116 1831.5 96 1846.5 96.5C1861.5 97 1871 107.041 1887 104.5C1903 101.959 1909 97 1915 94C1921 91 1924 101.959 1940 101.959C1949.64 101.959 1958.18 95.9211 1963.45 90.6648C1966.17 87.947 1966.99 83.3775 1964.04 80.9022C1961.61 78.8635 1958.48 78.9846 1955.5 85.9839C1949.5 100.081 1954 98.1324 1972 107.816C1990 117.5 1997 112.527 2000.5 108.514C2003.3 105.303 2016 115.833 2022 121.5" stroke="#A761EB" stroke-width="2" className="hand-united-3"></path> <path d="M989.409 177.974L1006.18 188.623C1011.6 188.18 1021.31 184.843 1016.83 175.045L1001.12 160.135L1016.03 175.045C1021.98 176.82 1034.88 178.666 1038.93 171.85C1043.99 163.33 1030.94 150.55 1016.03 145.225L1051.18 163.862C1056.33 163.685 1065.77 160.614 1062.36 149.751L1029.08 128.185C1041.5 135.374 1067.69 149.751 1073.01 149.751C1079.67 149.751 1084.46 138.303 1076.74 131.646C1070.56 126.322 1032.1 106.53 1013.64 97.3005C1013.37 93.6618 1010.5 85.8519 1001.12 83.7219C989.409 81.0594 954.797 89.8456 954.797 73.072C954.797 59.6531 973.079 56.2984 982.22 56.2984C986.835 55.6771 997.077 53.5827 1001.12 50.1747C1006.18 45.9147 1027.22 39.5248 1042.66 56.2984C1046.74 57.8959 1056.4 59.6533 1062.36 53.9024L1091.91 112.743L1075.67 129.783" stroke="#4F4F4F" stroke-width="2" className="hand-united-4"></path> <path d="M995.534 51.5062C991.096 46.5362 976.79 38.0873 955.064 44.0513C951.514 47.9563 940.953 54.1689 927.108 47.7789L897.555 107.685C900.927 108.838 907.832 112.424 908.471 117.536C909.11 122.648 918.145 130.848 921.251 133.244" stroke="#4F4F4F" stroke-width="2" className="hand-united-5"></path> <path d="M923.647 129.7C926.399 124.861 932.553 123.17 937.393 125.922C942.232 128.674 943.924 134.828 941.171 139.668L936.52 147.846C933.768 152.685 927.613 154.377 922.774 151.624C917.935 148.872 916.243 142.718 918.996 137.878L923.647 129.7Z" stroke="#4F4F4F" stroke-width="2" className="hand-united-6"></path> <path d="M976.372 160.119C979.125 155.28 985.279 153.588 990.118 156.341C994.957 159.093 996.649 165.247 993.897 170.086L989.245 178.264C986.493 183.104 980.339 184.795 975.5 182.043C970.66 179.291 968.969 173.136 971.721 168.297L976.372 160.119Z" stroke="#4F4F4F" stroke-width="2" className="hand-united-7"></path> <path d="M943.078 135.506C945.884 130.571 952.159 128.846 957.094 131.653C962.028 134.459 963.753 140.735 960.947 145.669L952.297 160.876C949.491 165.811 943.216 167.536 938.281 164.729C933.347 161.923 931.622 155.647 934.428 150.713L943.078 135.506Z" stroke="#4F4F4F" stroke-width="2" className="hand-united-8"></path> <path d="M960.996 145.645C963.803 140.71 970.078 138.985 975.012 141.792C979.947 144.599 981.672 150.874 978.865 155.808L970.216 171.015C967.41 175.95 961.134 177.675 956.2 174.868C951.265 172.062 949.54 165.787 952.347 160.852L960.996 145.645Z" stroke="#4F4F4F" stroke-width="2" className="hand-united-9"></path> </g> <defs> <clipPath id="clip0_2492_2104"> <rect width="2000" height="206" fill="white" className="hand-united-10"></rect> </clipPath> </defs> </svg>
      <div className="container mx-auto px-4">
        <motion.div 
        
        transition={{ease:"linear" }}
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="md:text-center mb-6 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-[16px]  md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from organizations that trust Brackerty with their critical operations
          </p>
          </motion.div>
      

        <div className="relative overflow-hidden min-h-[300px] flex items-center">
          {/* Testimonials */}
          <div className="flex absolute   animate-scroll  gap-3 ">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative  flex-shrink-0 w-[250px] md:w-[400px] ml-5 border p-6 rounded-2xl   transition-all duration-300 hover:scale-105"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                  <Quote size={16} className="text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic text-[12px] md:text-sm md:text-[1rem]">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-sm md:text-[1rem]">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-xs md:text-md text-blue-400 font-medium">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground md:text-md ">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
             {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative  flex-shrink-0 w-[250px]  md:w-[400px] ml-5 border p-6 rounded-2xl   transition-all duration-300 hover:scale-105"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                  <Quote size={16} className="text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground text-[12px] md:text-sm leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
               <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-sm md:text-[1rem]">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-xs md:text-md text-blue-400 font-medium">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground md:text-md ">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

<div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from from-white via-white/90 opacity-50 to-transparent">
</div>
<div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from from-white via-white/90 opacity-50 to-transparent">
</div>
       
        </div>

          <div className="relative overflow-hidden min-h-[320px] flex items-center">
          {/* Testimonials */}
          <div className="flex absolute  animate-backed_scroll   gap-3 ">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative  flex-shrink-0 w-[250px]  md:w-[400px] ml-5 border p-6 rounded-2xl   transition-all duration-300 hover:scale-105"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                  <Quote size={16} className="text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 " />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground text-[12px] md:text-sm leading-relaxed mb-6 italic ">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                 <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-sm md:text-[1rem]">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-xs md:text-md text-blue-400 font-medium">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground md:text-md ">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}

             {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative  flex-shrink-0 w-[250px]  md:w-[400px] ml-5 border p-6 rounded-2xl   transition-all duration-300 hover:scale-105"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                  <Quote size={16} className="text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground text-[12px] md:text-sm leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-blue-400 font-medium">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

<div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from from-white via-white/90 opacity-50 to-transparent">
</div>
<div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from from-white via-white/90 opacity-50 to-transparent">
</div>
       
        </div>

      </div>
    </section>


<BrandSection/>


      {/* CTA Section */}
      <section className="pb-14 md:py-24 bg-gradient-to-b from-black via-black/90 to-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your <span className='text-orange-400'>Business?</span>
            </h2>
            <p className="text-[16px] md:text-2xl mx-auto max-w-4xl leading-relaxed">
              Join hundreds of successful businesses that have already made the digital transformation. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-blue-800 px-8 py-4 rounded-full font-semibold text-sm lg:text-lg hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <span>Start Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-sm lg:text-lg hover:bg-white hover:text-blue-800 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;