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
  Globe,
  UsersRound
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
    <div
    
      className="mt-[-14px]"
    >
      {/* Hero Section */}
        
       

      <section className=" lg:h-[550px] min-h-[350px] flex-col flex items-center justify-center space-y-4 bg-black">
      <div className="pb-7">
           <div className="flex p-2 justify-self-center">
          <p className=' text-white inline-flex bg-[#2c2c2c] p-1 px-2 justify-self-center items-center gap-2  text-sm rounded-xl border border-[#27282c]'><UsersRound size={16}/> About Us</p>
        </div>

        <motion.h2  initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }} className="max-w-4xl text-center mx-auto text-4xl p-5 leading-tight bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text sm:text-5xl lg:text-6xl font-black mb-6">
          Remote-Native Designers & Developers, Everywhere
        </motion.h2>

        <motion.p  initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }} className="text-[14px] text-center md:text-md text-gray-300 max-w-3xl mx-auto leading-relaxed ">

          We work closely with small business owners, startups, and legacy companies to deliver software and smart solutions that thrive in today’s fast-paced technology world.
        </motion.p>
      </div>
      </section>



 <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-block bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          🚀 Excellence in Delivery
        </div>

        {/* Heading */}
        <h2 className="text-3xl max-w-4xl mx-auto  md:text-4xl font-bold text-gray-900 leading-snug">
          We specialize in custom software and digital marketing services
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-500 max-w-6xl mx-auto  text-base">
          From innovative web apps to result-driven campaigns, we empower
          startups and enterprises with scalable digital solutions tailored to
          their goals.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          <div className="rounded-2xl border border-gray-200 px-6 py-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">5+</h3>
            <p className="text-gray-600 text-sm">Years of Development Expertise</p>
          </div>

          <div className="rounded-2xl border border-gray-200 px-6 py-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
            <p className="text-gray-600 text-sm">Global Marketing Clients</p>
          </div>

          <div className="rounded-2xl border border-gray-200 px-6 py-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">250+</h3>
            <p className="text-gray-600 text-sm">Successful Projects Delivered</p>
          </div>
        </div>
      </div>
    </section>


      {/* Image Section */}
      <section className="py-16 mt-6 mx-auto bg-black md:rounded-3xl max-w-7xl">
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
                <div className="w-16 h-16 rounded-xl shadow-md bg-white flex items-center border border-gray-100 justify-center">
                  <Target className="w-8 h-8 text-gray-700" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="mt-4 text-gray-500 max-w-6xl mx-auto  text-base">
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
                <div className="w-16 h-16 rounded-xl shadow-md bg-white flex items-center border border-gray-100 justify-center">
                  <Eye className="w-8 h-8 text-gray-700" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="mt-4 text-gray-500 max-w-6xl mx-auto  text-base">
                To be the leading digital transformation partner that bridges the gap between 
                traditional business practices and modern technology, creating a world where 
                every business can leverage digital innovation to achieve extraordinary results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

 <section className="section bg-white max-w-7xl mx-auto py-16">
        <h2 className="text-4xl lg:text-5xl font-bold leading-tigh mb-5 text-center">Our <span className='text-primary my-6'>Workflow</span></h2>
       

        <div className="grid gap-6 md:grid-cols-2 ">

            {
                workflow.map((e,index)=>(
                    <motion.div  initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1*index }} key={e.id} className=
                    {`${e.id == 1 &&"bg-yellow-50 border-yellow-200 -rotate-2"} space-y-3 border rounded-2xl h-56 p-5   `}>
                    <div className={"flex items-center gap-3"}>
                        <img src={e.icon} className='w-8 bg-yellow-200 rounded-full p-1' alt="" />
                        <h2 className='text-xl font-semibold'>{e.title}</h2>
                    </div>

                    <p className='mt-4 text-gray-500 max-w-6xl mx-auto   text-base'>{e.description}</p>
                </motion.div>
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
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
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
                <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-md">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Achievements */}
      <section className="py-24 bg-gradient-to-b from-black via-black/90 to-black/80 text-white">
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
            <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
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
                <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">{achievement.description}</p>
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
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
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
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
              Let's discuss how our team can help transform your business and achieve your digital goals.
            </p>
            <button className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-sm ">
              Get In Touch
            </button>
          </motion.div>
          <img src="/map.webp" alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;