import {projects} from "../data/CommonData"
import { motion } from "framer-motion";
import {
  TrendingUp,
  Briefcase,
} from "lucide-react";
import ProjectCard from "../components/ProjectCard";

const Portfolio = () => {
  // const [activeFilter, setActiveFilter] = useState("all");

  // const filters = [
  //   { id: "all", label: "All Projects" },
  //   { id: "software", label: "Software" },
  //   { id: "web", label: "Web Apps" },
  //   { id: "marketing", label: "Marketing" },
  //   { id: "mobile", label: "Mobile Apps" },
  // ];

 

  return (
    <div
      
      className="mt-[-13px]"
    >
      <section className="portfolio-section min-h-[350px] lg:h-[550px] py-3">
        {/* Video Background */}
        <div className="bg-video">
          <video autoPlay loop muted playsInline>
            <source src="/portfolio.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Black Overlay */}
        <div className="overlay"></div>

        {/* Foreground Content */}
        <div className="max-w-7xl content mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div
            
            className="text-center mb-16"
          >
            <motion.h1 initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }} className=" max-w-4xl text-4xl leading-tight bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text sm:text-5xl lg:text-6xl font-black mb-6">
              Highlighted Client Projects We're Proud of
            </motion.h1>
            <motion.p initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay:0.2 }}  className="text-[16px] md:text-md text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Innovation is not just a buzzword for us; it’s the cornerstone of
              our organization. Explore our portfolio of groundbreaking software
              development solutions, crafted by our passionate minds.
            </motion.p>
          </div>
        </div>
      </section>
      {/* Filter Section */} 
      
      {/* Projects Grid */} 

       <section
            className="py-16 bg-white">
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
        {projects?.map((project) => (
          <ProjectCard key={project.id} project={project}/>
        ))}
      </div>
    </section>

      {/* Stats Section */} 
      <section className="py-24 bg-gradient-to-b from-black via-balck to-black/80 text-white">
         
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
          <div
           
            className="text-center mb-16"
          >
             
            <motion.h2  initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }} className="text-xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight">
               
              Looking for a Business Partner? 
              <br />
Let’s Get Started
            </motion.h2> 
            <motion.p initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay:0.2 }}  className="text-[16px] md:text-lg max-w-2xl mx-auto leading-relaxed">
               
              Our track record speaks for itself - delivering exceptional
              results across industries 
            </motion.p> 
          </div> 

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
             
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
               
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                250+
              </div> 
              <div className="text-gray-200 text-sm md:text-md">Projects Completed</div> 
            </motion.div> 
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
               
              <div className="text-4xl lg:text-5xl font-bold  mb-2">
                98%
              </div> 
              <div className="text-gray-200 text-sm md:text-md">Client Satisfaction</div> 
            </motion.div> 
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
               
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                50+
              </div> 
              <div className="text-gray-200 text-sm md:text-md">Industries Served</div> 
            </motion.div> 
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
               
              <div className="text-4xl lg:text-5xl font-bold mb-2">5+</div> 
              <div className="text-gray-200 text-sm md:text-md">Years Experience</div> 
            </motion.div> 
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
             
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
               
              Ready to Start Your 
              <span className="text-gradient"> Success Story ?</span> 
            </h2> 
            <p className="text-[16px] md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
               
              Join our portfolio of successful clients and let us help you
              achieve your digital transformation goals. 
            </p> 
            <button className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-sm lg:text-lg flex items-center space-x-2 mx-auto ">
               
              <span>
                Start Your Project
              </span> <TrendingUp className="w-5 h-5" /> 
            </button> 
          </motion.div> 
        </div> 
      </section>
    </div>
  );
};

export default Portfolio;
