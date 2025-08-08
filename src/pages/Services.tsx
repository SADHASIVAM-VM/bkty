import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle,
} from 'lucide-react';
import { additionalServices, mservices, Ourmethod } from '../data/CommonData';

const Services = () => {



  return (
    <div
      
      className="mt-[-14px]"
    >
      {/* Hero Section */}
      <section className="text-2xl flex items-center h-[350px] md:h-[550px] overflow-hidden relative md:text-4xl lg:text-5xl py-24 bg-black">
      
  

       <div className="max-w-7xl content mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="max-w-4xl text-4xl mx-auto  bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text sm:text-5xl lg:text-6xl font-[900] mb-6 md:leading-relaxed">
              Discover Our Capabilities. <br />The Full List.
            </h1>
            <p className="text-[16px] md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              
              Our approach involves a seamless transition between the phases of Strategy, Design, and Development in every project delivery.
            </p>
          </motion.div>
        </div>
      </section>


{/* our method */}


 <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Our Approach Method
          </h2>
          <p className="text-[16px] md:text-md text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Through clear communication and a focus on efficiency, our approach method aims to deliver high-quality solutions that meet or exceed expectations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="w-full">
            <img
              src="/apporch.avif"
              alt="Approach Method Diagram"
              className="w-full rounded-xl object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8 md:space-y-16">
            {Ourmethod.map((service, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start gap-4">
                {/* Icon with shadow */}
                <div className="bg-white p-3 rounded-lg shadow-md border-white/50 border">
                  <service.icon/>
                </div>
                {/* Text */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{service.title}</h4>
                  <p className="text-sm md:text-md text-gray-600 mt-1">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>







      {/* Main Services */}
     <section className="bg-white py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
   {mservices.map((service, index) => (
  <motion.div
    key={service.title}
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="bg-white rounded-3xl border border-gray-200 p-6 md:p-10 shadow-md"
  >
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
        index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
      }`}
    >
      {/* LEFT SIDE: Main Content */}
      <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 shadow-lg`}
        >
          <service.icon className="w-7 h-7 text-white" />
        </div>

        {/* Title + Description */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          {service.description}
        </p>

        {/* CTA Button */}
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-gray-800 transition">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* RIGHT SIDE: Features + Process */}
      <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
        <div className="rounded-2xl bg-gray-100 border border-gray-200 p-6 md:p-8 shadow-inner space-y-6">
          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Key Features
            </h3>
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Process Steps */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Our Process
            </h3>
            <ul className="space-y-2">
              {service.process.map((step, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                  <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-semibold">
                    {i + 1}
                  </div>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
))}

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
                className="hover:shadow-md bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
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
    </div>
  );
};

export default Services;