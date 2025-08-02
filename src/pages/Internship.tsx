import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code, 
  Megaphone, 
  Award, 
  Users, 
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  BookOpen,
  Target,
  TrendingUp
} from 'lucide-react';

const Internship = () => {
  const [activeTrack, setActiveTrack] = useState('software');

  const tracks = [
    {
      id: 'software',
      title: 'Software',
      icon: Code,
      duration: '6 months',
      description: 'Comprehensive training in modern software development technologies and practices.',
      skills: [
        'Frontend Development (React, Vue.js, Angular)',
        'Backend Development (Node.js, Python, Java)',
        'Database Management (SQL, NoSQL)',
        'Cloud Technologies (AWS, Azure, GCP)',
        'DevOps & CI/CD',
        'Mobile App Development',
        'API Design & Integration',
        'Software Testing & Quality Assurance'
      ],
      projects: [
        'E-commerce Web Application',
        'Mobile App with Backend API',
        'Cloud-based Microservices',
        'Real-time Chat Application'
      ],
      certification: 'Certified',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 'marketing',
      title: 'Digital Marketing ',
      icon: Megaphone,
      duration: '4 months',
      description: 'Master digital marketing strategies and tools to drive business growth.',
      skills: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click Advertising (PPC)',
        'Social Media Marketing',
        'Content Marketing Strategy',
        'Email Marketing Automation',
        'Analytics & Data Interpretation',
        'Brand Strategy & Management',
        'Conversion Rate Optimization'
      ],
      projects: [
        'Complete SEO Campaign',
        'Multi-channel PPC Strategy',
        'Social Media Brand Building',
        'Content Marketing Portfolio'
      ],
      certification: 'Certified',
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: 'Hands-on Learning',
      description: 'Work on real client projects and gain practical experience with industry-standard tools.'
    },
    {
      icon: Users,
      title: 'Mentorship Program',
      description: 'Get guidance from experienced professionals who are passionate about your growth.'
    },
    {
      icon: Award,
      title: 'Industry Certification',
      description: 'Earn recognized certifications that boost your career prospects and credibility.'
    },
  
  ];

  const successStories = [
    {
      name: 'Jessica Martinez',
      track: 'Software Development',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
      company: 'TechCorp Solutions',
      role: 'Junior Full-Stack Developer',
      salary: '$65,000',
      testimonial: 'The internship program gave me the skills and confidence to land my dream job. The mentorship was incredible!'
    },
    {
      name: 'David Chen',
      track: 'Digital Marketing',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=200',
      company: 'Growth Marketing Inc.',
      role: 'Digital Marketing Specialist',
      salary: '$55,000',
      testimonial: 'I went from zero marketing knowledge to running successful campaigns for major brands. Amazing program!'
    },
    {
      name: 'Sarah Johnson',
      track: 'Software Development',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=200',
      company: 'StartupXYZ',
      role: 'Frontend Developer',
      salary: '$60,000',
      testimonial: 'The real-world projects and mentorship prepared me perfectly for the tech industry. Highly recommended!'
    }
  ];

  const requirements = [
    'Basic computer literacy and problem-solving skills',
    'Strong motivation to learn and grow in tech',
    'Commitment to complete the full program duration',
    'Ability to work collaboratively in team environments',
    'No prior experience required - we teach everything!'
  ];

  const applicationProcess = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Fill out our online application form with your background and interests.'
    },
    {
      step: 2,
      title: 'Initial Interview',
      description: 'Phone or video interview to discuss your goals and program fit.'
    },
    {
      step: 3,
      title: 'Skills Assessment',
      description: 'Complete a basic assessment to help us tailor your learning path.'
    },
    {
      step: 4,
      title: 'Program Onboarding',
      description: 'Welcome session, mentor assignment, and program kickoff.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 lg:pt-20"
    >
      {/* Hero Section */}
      <section className="py-24 bg-[url('/career.webp')] bg-center bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-gray-900 to-purple-600 flex items-center justify-center mx-auto mb-8">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold inline mb-3 bg-orange-400 text-white rounded-xl px-4">
            Careers
            </h1>
            <p className="text-[16px] md:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
              Join our comprehensive internship program and transform from beginner to industry-ready professional 
              in software development or digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-sm lg:text-lg flex items-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Tracks */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-gradient">Track</span>
            </h2>
            <p className="text-[16px] md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Two specialized tracks designed to prepare you for high-demand careers in tech
            </p>
          </motion.div>

          {/* Track Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-full p-2">
              {tracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => setActiveTrack(track.id)}
                  className={`px-6 py-3 text-sm rounded-full font-medium transition-all duration-300 ${
                    activeTrack === track.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {track.title}
                </button>
              ))}
            </div>
          </div>

          {/* Track Details */}
          {tracks.map((track) => (
            activeTrack === track.id && (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-t from-zinc-500 via-stone-600 to-zinc-900 rounded-3xl p-8 lg:p-16 shadow-lg border text-white border-gray-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className=' '>
                    <div className="flex items-center gap-4">
                      <div className={`w-18 p-2  rounded-2xl bg-gradient-to-r ${track.color} flex  items-center justify-center `}>
                      <track.icon className="w-10 h-10 text-white" />
                        </div>
                      <div className="">
                         <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{track.title}</h3>
                    <p className="text-[14px] md:text-md lg:text-xl text-white mb-6">{track.description}</p>
                    
                    <div className="flex items-center  mb-8">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-blue-300" />
                        <span className="text-white  text-[12px] md:text-md ">{track.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-purple-300" />
                        <span className="text-white text-[12px] md:text-md ">{track.certification}</span>
                      </div>
                    </div>

                      </div>
                    </div>
                  
                   
                    <h4 className="text-xl font-bold text-white mb-4">Key Projects</h4>
                    <div className="space-y-2">
                      {track.projects.map((project, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-white text-sm md:text-md ">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-6">Skills You'll Master</h4>
                    <div className="space-y-3">
                      {track.skills.map((skill, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex-shrink-0" />
                          <span className="text-white text-sm md:text-md ">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:text-center mb-6 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Program <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-[16px] md:text-lg text-gray-600 max-w-2xl mx-auto">
              More than just learning - we provide comprehensive support for your career success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white rounded-2xl p-8 border border-gray-200 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-md ">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

 
      {/* Requirements & Process */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Requirements */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Program <span className="text-gradient">Requirements</span>
              </h2>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-md leading-relaxed">{requirement}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Application Process */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Application <span className="text-gradient">Process</span>
              </h2>
              <div className="space-y-6">
                {applicationProcess.map((step, index) => (
                  <div key={step.step} className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-md md:text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-md">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
              Applications are now open for our next cohort. Don't miss this opportunity to 
              transform your career and join the tech industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-800 px-8 py-4 rounded-full font-semibold text-sm md:text-lg hover:bg-gray-100 transition-colors flex items-center space-x-2">
                <span>Apply for Internship</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-sm md:text-lg hover:bg-white hover:text-blue-800 transition-colors">
                Schedule Info Session
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Internship;