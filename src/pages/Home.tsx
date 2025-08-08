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
  Quote,
  Rocket,
  Boxes,
  Clock,
  ShieldCheck,
  Briefcase,
  Lightbulb
} from 'lucide-react';


import BrandSection from '../components/Partners';
import ProjectCard from '../components/ProjectCard';
import { advantages, projects, services, testimonials } from '../data/CommonData';
import ApproachSection from '../components/WhyChoose';
import FAQSection from '../components/Faqs';
import InternshipSection from '../components/Internship';

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



  return (
    <div
     
      className="-mt-3"
    >
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-black justify-center overflow-hidden">
       
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8}}
            className="space-y-8"
          >
            <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#28272c] rounded-full px-4 py-2 mb-6">
                <Sparkles size={16} className="text-yellow-400 animate-pulse" />
                <span className="text-white/90 font-medium text-[12px] md:text-sm ">Next-Gen Technology</span>
              </div>
              
              <motion.h1  initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay:.2 }}
      exit={{ opacity: 0 }} className="max-w-6xl text-5xl leading-tight bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text sm:text-5xl lg:text-7xl font-black ">
                Technology that
                transforms<span className='text-white'>⚡</span>your business
            
              </motion.h1>
              
              <motion.p transition={{ duration: 0.8, delay:.4}} initial={{ opacity: 0, y:100 }}   animate={{ opacity: 1, y:0 }}
               className="text-[16px] md:text-md text-gray-400 lg:text-xl text leading-relaxed max-w-3xl mx-auto">
               We build digital products for startups and leading global companies, delivering high-quality and efficiency every step of the way.
            </motion.p>
            </div>

            <motion.div transition={{ ease: "easeOut", duration: 0.8, delay:.6}} initial={{ opacity: 0, y:100 }}  animate={{ opacity: 1, y:0 }} className="flex text-sm  justify-center">
             <a href='/projects'>
              <button  className="group bg-white text-black px-4 py-3 rounded-3xl flex items-center gap-2
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


{/* projects*/}


 <section className="py-16 bg-white">
                   <div className="flex justify-center mb-4">
                      <p className='bg-blue-100 p-2 rounded-xl inline-flex gap-2 text-xs items-center'><span><Briefcase  size={16}/></span> project</p>
                    </div>
              <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-semibold text-black">
                          Discover Our Work
                        </h2>
                        <p className="mt-4 text-gray-500 max-w-md mx-auto text-sm md:text-base">
                       Clients trust us to craft impactful design solutions that drive growth and deliver lasting results. </p>
                      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {projects?.slice(0,4).map((project) => (
          <ProjectCard key={project.id} project={project}/>
        ))}
      </div>
    </section>



      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-transpraent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
          <motion.div initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }} className="">
                    <div className="flex justify-center mb-4">
                        <p className='bg-blue-100 p-2 rounded-xl inline-flex gap-2 text-xs items-center'><span><Lightbulb  size={16}/></span> solutions</p>

                    </div>
                       <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                         Our Design Solutions
                        </h2>
                        <p className="mt-4 text-gray-500 max-w-md mx-auto text-sm md:text-base">
                    We deliver design experiences with various solutions that drive growth and success </p>
                      </div>
                    </motion.div>



        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between"
            >
              {/* Image */}
              {service.image && (
                <img
                  src={service.image}
                  alt={service.title}
                  className={`rounded-xl w-full object-contain mb-6 ${service.center ? "mx-auto" : ""}`}
                />
              )}

              {/* Title + Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                {service.description && <p className="text-gray-600 text-sm mb-4">{service.description}</p>}
              </div>

              {/* Inner Blocks (like sub-features) */}
              {service.blocks.length > 0 && (
                <div className="space-y-4">
                  {service.blocks.map((block, i) => (
                    <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-3 mb-1">
                        <block.icon className="w-4 h-4 text-gray-500" />
                        <h4 className="font-medium text-sm text-gray-900">{block.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{block.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  <ApproachSection/>
<InternshipSection/>
      {/* Testimonials Section */}
       <section id="testimonials" className="py-10 md:py-20 bg-gradient-to-br from-muted/20 to-background">
      <svg width="100%" height="200" viewBox="0 0 2000 206" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_2492_2104)"> <rect width="2000" height="206" fill="white" className="hand-united-1"></rect> <path d="M884.046 105.848L911.795 57.4417C915.472 51.0262 911.472 42.9296 904.142 41.9523V41.9523C899.846 41.3794 895.644 43.5302 893.596 47.3507L866.705 97.5173C865.846 99.1195 864.625 100.511 863.024 101.372C853.172 106.678 833.661 110.909 818.427 92.9968C797.705 68.6323 837.123 67.829 831.551 83.8936C825.979 99.9581 823.608 118.7 798.741 105.848C773.875 92.9968 747.973 80.6806 731.396 99.9581C721.648 111.293 723.244 119.176 726.969 123.586C729.251 126.288 733.519 126.19 735.654 123.37C739.494 118.295 739.191 109.808 720.344 99.9581C689.607 83.8935 673.374 116.826 651.617 116.826C629.859 116.826 635.039 102.1 620.879 92.9968C609.551 85.7142 571.953 89.9624 554.57 92.9968C547.924 94.0891 534.076 98.3291 531.843 106.55C529.052 116.826 548.19 116.583 547.791 109.225C547.411 102.219 506.538 116.519 485.767 98.7657C483.731 97.0253 481.52 95.5623 479.197 96.8967C470.277 102.021 446.797 119.17 431.552 116.826C419.963 114.346 396.546 82.7155 383.598 92.9968C367.414 105.848 322.457 87.9278 323.656 77.8717C324.854 67.8155 314.074 79.7834 308.679 95.8479C303.427 111.49 262.363 87.6048 233.646 95.6192C232.115 96.0465 229.927 98.2887 229.419 96.7825C228.298 93.4601 237.509 72.0074 248.728 71.3352C265.512 70.3296 252.343 94.9572 250.545 90.432C248.864 86.2015 206.844 83.2893 195.01 71.8361C193.492 70.3663 192.018 68.7708 190.067 67.9561C180.456 63.9412 162.153 59.9997 146.539 68.713C145.844 69.1007 145.119 69.4322 144.379 69.7238C139.503 71.6454 131.63 76.4724 132 83.5C132.5 92.9968 147 97.3639 149 90.432C151 83.5 144.5 99.1955 121 87.3238C100.681 77.059 93.0711 58.224 75.546 62.5798C70.1011 63.9331 69.6886 73.7382 64.1418 72.8945C60.6265 72.3598 55.1652 70.5321 50 71.3352C37 73.3562 21.5 76.3352 15 71.3352C8.5 66.3352 6.04886 55.6358 2 69.3141C-6 96.3406 -3.83333 83.5 -6 83.5" stroke="#FF8A0A" stroke-width="2" className="hand-united-2"></path> <path d="M1099.5 107.816L1075.21 61.1357C1072.63 56.1635 1074.51 50.0355 1079.45 47.3771V47.3771C1084.44 44.6858 1090.67 46.5633 1093.35 51.5662L1117.7 97.0769C1118.55 98.6679 1119.76 100.047 1121.35 100.898C1131.87 106.524 1156.54 112.906 1171.6 95.0363C1192.01 70.8078 1153.18 70.009 1158.67 85.9839C1164.16 101.959 1166.49 120.596 1190.99 107.816C1215.48 95.0363 1241 82.7889 1257.33 101.959C1266.87 113.153 1265.38 120.962 1261.77 125.364C1259.5 128.121 1255.18 128.023 1253.07 125.148C1249.36 120.091 1249.76 111.695 1268.22 101.959C1298.5 85.9839 1314.49 118.732 1335.92 118.732C1357.35 118.732 1352.25 104.089 1366.2 95.0363C1377.36 87.7944 1414.4 92.0188 1431.52 95.0363C1438.07 96.1226 1451.71 100.339 1453.91 108.514C1456.66 118.732 1437.81 118.491 1438.2 111.174C1438.59 103.858 1487.27 117.071 1506.51 95.0363C1509.49 91.8097 1531.52 96.4733 1549.61 95.7247C1554.11 95.5384 1557.5 91.8449 1560.61 88.5832C1564.8 84.1925 1572.83 81.0867 1586.56 85.9839C1599.47 90.5845 1607.81 97.335 1612.69 103.026C1616.29 107.236 1614.19 113.154 1609 115.101C1598.63 118.989 1586.56 120.992 1586.56 111.174C1586.56 95.0363 1604.87 76.0151 1635.57 80.9995C1666.28 85.9839 1683.4 113.674 1706.43 107.816C1729.46 101.959 1714.7 70.009 1712.93 85.9839C1711.16 101.959 1714.7 108.881 1747.18 101.959C1772.26 96.6121 1790.92 103.512 1797.85 108.038C1798.33 108.347 1798.74 108.723 1799.2 109.054C1801.65 110.82 1807.88 113.098 1818 111.174C1832 108.514 1841.5 100.486 1848.5 104.5C1855.5 108.514 1855.5 119 1848.5 117.5C1841.5 116 1831.5 96 1846.5 96.5C1861.5 97 1871 107.041 1887 104.5C1903 101.959 1909 97 1915 94C1921 91 1924 101.959 1940 101.959C1949.64 101.959 1958.18 95.9211 1963.45 90.6648C1966.17 87.947 1966.99 83.3775 1964.04 80.9022C1961.61 78.8635 1958.48 78.9846 1955.5 85.9839C1949.5 100.081 1954 98.1324 1972 107.816C1990 117.5 1997 112.527 2000.5 108.514C2003.3 105.303 2016 115.833 2022 121.5" stroke="#A761EB" stroke-width="2" className="hand-united-3"></path> <path d="M989.409 177.974L1006.18 188.623C1011.6 188.18 1021.31 184.843 1016.83 175.045L1001.12 160.135L1016.03 175.045C1021.98 176.82 1034.88 178.666 1038.93 171.85C1043.99 163.33 1030.94 150.55 1016.03 145.225L1051.18 163.862C1056.33 163.685 1065.77 160.614 1062.36 149.751L1029.08 128.185C1041.5 135.374 1067.69 149.751 1073.01 149.751C1079.67 149.751 1084.46 138.303 1076.74 131.646C1070.56 126.322 1032.1 106.53 1013.64 97.3005C1013.37 93.6618 1010.5 85.8519 1001.12 83.7219C989.409 81.0594 954.797 89.8456 954.797 73.072C954.797 59.6531 973.079 56.2984 982.22 56.2984C986.835 55.6771 997.077 53.5827 1001.12 50.1747C1006.18 45.9147 1027.22 39.5248 1042.66 56.2984C1046.74 57.8959 1056.4 59.6533 1062.36 53.9024L1091.91 112.743L1075.67 129.783" stroke="#4F4F4F" stroke-width="2" className="hand-united-4"></path> <path d="M995.534 51.5062C991.096 46.5362 976.79 38.0873 955.064 44.0513C951.514 47.9563 940.953 54.1689 927.108 47.7789L897.555 107.685C900.927 108.838 907.832 112.424 908.471 117.536C909.11 122.648 918.145 130.848 921.251 133.244" stroke="#4F4F4F" stroke-width="2" className="hand-united-5"></path> <path d="M923.647 129.7C926.399 124.861 932.553 123.17 937.393 125.922C942.232 128.674 943.924 134.828 941.171 139.668L936.52 147.846C933.768 152.685 927.613 154.377 922.774 151.624C917.935 148.872 916.243 142.718 918.996 137.878L923.647 129.7Z" stroke="#4F4F4F" stroke-width="2" className="hand-united-6"></path> <path d="M976.372 160.119C979.125 155.28 985.279 153.588 990.118 156.341C994.957 159.093 996.649 165.247 993.897 170.086L989.245 178.264C986.493 183.104 980.339 184.795 975.5 182.043C970.66 179.291 968.969 173.136 971.721 168.297L976.372 160.119Z" stroke="#4F4F4F" stroke-width="2" className="hand-united-7"></path> <path d="M943.078 135.506C945.884 130.571 952.159 128.846 957.094 131.653C962.028 134.459 963.753 140.735 960.947 145.669L952.297 160.876C949.491 165.811 943.216 167.536 938.281 164.729C933.347 161.923 931.622 155.647 934.428 150.713L943.078 135.506Z" stroke="#4F4F4F" stroke-width="2" className="hand-united-8"></path> <path d="M960.996 145.645C963.803 140.71 970.078 138.985 975.012 141.792C979.947 144.599 981.672 150.874 978.865 155.808L970.216 171.015C967.41 175.95 961.134 177.675 956.2 174.868C951.265 172.062 949.54 165.787 952.347 160.852L960.996 145.645Z" stroke="#4F4F4F" stroke-width="2" className="hand-united-9"></path> </g> <defs> <clipPath id="clip0_2492_2104"> <rect width="2000" height="206" fill="white" className="hand-united-10"></rect> </clipPath> </defs> </svg>
      <div className="container mx-auto px-4">
        <motion.div 
        
        transition={{ease:"linear" }}
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-6 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
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
                    <Star key={i}  size={16} className="fill-yellow-400 text-yellow-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6 italic text-[12px] md:text-sm md:text-[1rem]">
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
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-xs md:text-md text-blue-400 font-medium">{testimonial.role}</div>
                    <div className="text-xs text-gray-400 ">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}

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
                    <Star key={i}  size={16} className="fill-yellow-400 text-yellow-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6 italic text-[12px] md:text-sm md:text-[1rem]">
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
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-xs md:text-md text-blue-400 font-medium">{testimonial.role}</div>
                    <div className="text-xs text-gray-400 ">{testimonial.company}</div>
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
                className="relative  flex-shrink-0 w-[250px] md:w-[400px] ml-5 border p-6 rounded-2xl   transition-all duration-300 hover:scale-105"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                  <Quote size={16} className="text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i}  size={16} className="fill-yellow-400 text-yellow-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6 italic text-[12px] md:text-sm md:text-[1rem]">
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
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-xs md:text-md text-blue-400 font-medium">{testimonial.role}</div>
                    <div className="text-xs text-gray-400 ">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}

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
                    <Star key={i}  size={16} className="fill-yellow-400 text-yellow-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6 italic text-[12px] md:text-sm md:text-[1rem]">
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
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-xs md:text-md text-blue-400 font-medium">{testimonial.role}</div>
                    <div className="text-xs text-gray-400 ">{testimonial.company}</div>
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

<FAQSection/>

      {/* CTA Section */}
      <section className="pb-14 md:py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Join hundreds of successful businesses that have already made the digital transformation. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="text-white bg-black px-8 py-4 rounded-full font-semibold text-sm hover:bg-black/70   transition-colors flex items-center space-x-2"
              >
                <span>Start Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className="border border-black text-black px-8 py-4 rounded-full text-sm  hover:bg-white hover:text-gray-700 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;