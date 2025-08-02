import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  TrendingUp,
  Code,
  Palette,
  BarChart3,
  Shield,
  Lightbulb,
  Globe
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering solutions that exceed expectations.'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We build long-term partnerships based on trust and results.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparency, honesty, and ethical practices guide everything we do.'
    }
  ];


  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Winner of "Best Digital Agency 2023" by Tech Innovation Awards'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: '500+ successful projects with 98% client satisfaction rate'
    },
    {
      icon: TrendingUp,
      title: 'Growth Impact',
      description: 'Helped clients achieve average 250% ROI on digital investments'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across 25+ countries and 50+ industries'
    }
  ];
      const workflow=[
         {
        id:1,
        icon:'https://media.calibraint.com/calibraint-wordpress/wp-content/uploads/2022/02/15130648/analytics.png',
        title:"Analysis & Research",
        description:"Strengthening the roots is mandatory! So, we research the market trend to define and design the strategy, which streamlines the product to move in an expected horizon."
    },
        {
        id:2,
        icon:'https://media.calibraint.com/calibraint-wordpress/wp-content/uploads/2022/02/15130721/requirement.png',
        title:"Requirements & Planning",
        description:"In the first place, knowing the requirement and planning accordingly is important. With all the research inputs we gather, the requirement & planning is assessed by our cross-functional team of expert who comes up with the roadmap of the product."
    },
        {
        id:3,
        icon:'https://media.calibraint.com/calibraint-wordpress/wp-content/uploads/2022/02/15130704/design.png',
        title:"Design & Project Execution",
        description:"We impress with our work. Our group of UI/UX team comes up with an eccentric design that our client needs which also competes our competitor. Later, our developers execute and make it responsive using the advance framework and techniques"
    },
        {
        id:4,
        icon:'https://media.calibraint.com/calibraint-wordpress/wp-content/uploads/2022/02/15130719/quality.png',
        title:"Quality Delivery",
        description:"We never fail to deliver an eminence product. Treating every product as an asset that sets the trait to the company. Also, we have the team with eagle eyes to grip the defects and make sure to deliver a quality product."
    },
]

  const expertise = [
    { icon: Code, title: 'Software Development', count: '15+ Technologies' },
    { icon: Palette, title: 'Design & UX', count: '200+ Designs' },
    { icon: BarChart3, title: 'Digital Marketing', count: '50+ Campaigns' },
    { icon: Shield, title: 'Security & Compliance', count: '100% Secure' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 lg:pt-36 px-3"
    >
      {/* Hero Section */}
        {/* About Company */}
      <section className="section max-w-7xl mx-auto md:text-center space-y-4 ">
        <h2 className="text-3xl md:text-5xl  font-semibold leading-tight">About <span className='text-gradient'>Brackety</span></h2>
        <p className='text-xl lg:text-3xl font-semibold text-black/80 leading-relaxed  '>“Our mission is to provide affordable and scalable digital solutions to transform the business of our customers.”</p>
        <p className="text-[16px] lg:text-xl font-medium text-black/40 leading-relaxed  ">
          At <strong className='text-orange-400 '>Brackety</strong>, we empower businesses by transforming traditional operations into modern, digital experiences.
          We work closely with small business owners, startups, and legacy companies to deliver software and smart solutions that thrive in today’s fast-paced technology world.
        </p>
      </section>

      {/* Image Section */}
      <section className="py-16 mt-6 mx-auto bg-black rounded-3xl max-w-7xl">
        <img
          src="/cms.png"
          alt="Brackety Team"
          className=" lg:h-[500px]  mx-auto object-top"
        />
      </section>

      {/* Mission & Vision */}
      <section className="py-10 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-[16px] md:text-lg text-gray-600 leading-relaxed">
                To empower businesses of all sizes to thrive in the digital age by providing 
                innovative software solutions, exceptional web experiences, and strategic digital 
                marketing that drives measurable growth and success.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-[16px] md:text-lg text-gray-600 leading-relaxed">
                To be the leading digital transformation partner that bridges the gap between 
                traditional business practices and modern technology, creating a world where 
                every business can leverage digital innovation to achieve extraordinary results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

 <section className="section bg-white py-16">
        <h2 className="text-4xl lg:text-5xl font-bold leading-tigh mb-5 text-center">Our <span className='text-primary my-6'>Workflow</span></h2>
       

        <div className="grid gap-6 md:grid-cols-2 ">

            {
                workflow.map((e)=>(
                    <div key={e.id} className=
                    {`${e.id == 1 &&"bg-yellow-50 border-yellow-200 -rotate-2"} space-y-3 border rounded-2xl h-56 p-5   `}>
                    <div className={"flex items-center gap-3"}>
                        <img src={e.icon} className='w-8 bg-yellow-200 rounded-full p-1' alt="" />
                        <h2 className='text-xl font-semibold'>{e.title}</h2>
                    </div>

                    <p className='text-gray-500 text-[14px] md:text-[16px]'>{e.description}</p>
                </div>
                ))
                
            }
        </div>


      </section>


      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className=" hover:shadow-sm bg-white rounded-2xl p-8    border border-gray-100 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Achievements */}
      <section className="py-24 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Achievements
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed">
              Recognition and results that demonstrate our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep knowledge across multiple domains to serve all your digital needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className=" hover:shadow-sm bg-white rounded-2xl p-8    border border-gray-100 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-blue-600 font-medium">{item.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Work <span className="text-gradient">Together</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our team can help transform your business and achieve your digital goals.
            </p>
            <button className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-sm lg:text-lg">
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;