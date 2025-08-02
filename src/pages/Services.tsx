import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Megaphone, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Smartphone,
  Database,
  Search,
  BarChart3,
  Palette,
  Shield
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built from the ground up to meet your specific business requirements.',
      features: [
        'Enterprise Applications',
        'API Development & Integration',
        'Database Design & Optimization',
        'Cloud-Native Solutions',
        'Legacy System Modernization',
        'Scalable Architecture Design'
      ],
      process: [
        'Requirements Analysis',
        'System Architecture Design',
        'Development & Testing',
        'Deployment & Integration',
        'Ongoing Support & Maintenance'
      ],
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Globe,
      title: 'Web Development & Applications',
      description: 'Modern, responsive websites and web applications that deliver exceptional user experiences.',
      features: [
        'Responsive Web Design',
        'E-commerce Platforms',
        'Progressive Web Apps (PWA)',
        'Content Management Systems',
        'Single Page Applications',
        'Performance Optimization'
      ],
      process: [
        'UI/UX Design',
        'Frontend Development',
        'Backend Integration',
        'Testing & Quality Assurance',
        'Launch & Optimization'
      ],
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing & Social Media',
      description: 'Comprehensive digital marketing strategies that boost your online presence and drive measurable results.',
      features: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click Advertising (PPC)',
        'Social Media Management',
        'Content Marketing Strategy',
        'Email Marketing Campaigns',
        'Analytics & Reporting'
      ],
      process: [
        'Market Research & Analysis',
        'Strategy Development',
        'Campaign Implementation',
        'Performance Monitoring',
        'Optimization & Scaling'
      ],
      color: 'from-cyan-500 to-cyan-700',
      bgColor: 'bg-cyan-50'
    },
    {
      icon: Users,
      title: 'Business Transformation Consulting',
      description: 'Strategic guidance to help you navigate digital transformation and optimize your business processes.',
      features: [
        'Digital Strategy Planning',
        'Process Automation',
        'Technology Assessment',
        'Change Management',
        'Training & Support',
        'ROI Analysis & Optimization'
      ],
      process: [
        'Business Assessment',
        'Strategy Formulation',
        'Implementation Planning',
        'Execution & Monitoring',
        'Continuous Improvement'
      ],
      color: 'from-emerald-500 to-emerald-700',
      bgColor: 'bg-emerald-50'
    }
  ];

  const additionalServices = [
    { icon: Smartphone, title: 'Mobile App Development', description: 'Native and cross-platform mobile applications' },
    { icon: Database, title: 'Data Analytics', description: 'Business intelligence and data visualization solutions' },
    { icon: Search, title: 'SEO Optimization', description: 'Improve your search engine rankings and visibility' },
    { icon: BarChart3, title: 'Performance Marketing', description: 'ROI-focused marketing campaigns and optimization' },
    { icon: Palette, title: 'UI/UX Design', description: 'User-centered design for digital products and services' },
    { icon: Shield, title: 'Cybersecurity', description: 'Protect your digital assets and customer data' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 lg:pt-20"
    >
      {/* Hero Section */}
      <section className="text-2xl h-[300px] overflow-hidden relative md:text-4xl lg:text-5xl py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      
     <div className="imgss ">
       <img src="/services.jpg" className='object-cover w-full h-full' alt="" />
     </div>

       <div className="max-w-7xl content mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-orange-400">Services</span>
            </h1>
            <p className="text-[16px] md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to transform your business and drive sustainable growth
            </p>
          </motion.div>
        </div>
      </section>


      {/* Main Services */}
      <section className=" md:py-24">
        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`${service.bgColor} rounded-3xl p-8 lg:p-16`}
              >
                <div className={` grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-8`}>
                      <service.icon className="w-8 text-white" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-sm md:text-xl text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <button className="btn-primary text-sm text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="bg-white rounded-2xl md:p-8 p-4 ">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm md:text-md">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-6 mt-8">Our Process</h3>
                      <div className="space-y-3">
                        {service.process.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center space-x-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm flex items-center justify-center flex-shrink-0">
                              {stepIndex + 1}
                            </div>
                            <span className="text-gray-700 text-sm md:text-md">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="md:py-24 py-10` ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Additional <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-[16px] md:text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized services to complement your digital transformation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[16px] md:text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-md">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="md:py-24 py-10 mt-4 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-[16px] md:text-lg max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <button className="bg-white text-sm text-blue-800 px-8 py-4 rounded-full font-semibold  hover:bg-gray-100 transition-colors flex items-center space-x-2 mx-auto">
              <span>Schedule to talk</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;