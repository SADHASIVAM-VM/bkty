import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Filter,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "software", label: "Software" },
    { id: "web", label: "Web Apps" },
    { id: "marketing", label: "Marketing" },
    { id: "mobile", label: "Mobile Apps" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      client: "RetailMax Inc.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Complete e-commerce solution with inventory management, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      results: [
        { metric: "Sales Increase", value: "300%" },
        { metric: "Page Load Speed", value: "2.1s" },
        { metric: "Conversion Rate", value: "8.5%" },
      ],
      duration: "4 months",
      teamSize: "6 developers",
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "software",
      client: "MedCare Solutions",
      image:
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Comprehensive patient management system with appointment scheduling, medical records, and billing.",
      technologies: ["Angular", "Java Spring", "PostgreSQL", "AWS"],
      results: [
        { metric: "Efficiency Gain", value: "250%" },
        { metric: "Patient Satisfaction", value: "95%" },
        { metric: "Cost Reduction", value: "40%" },
      ],
      duration: "8 months",
      teamSize: "8 developers",
    },
    {
      id: 3,
      title: "Digital Marketing Campaign",
      category: "marketing",
      client: "TechStart Innovations",
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Multi-channel digital marketing campaign including SEO, PPC, social media, and content marketing.",
      technologies: ["Google Ads", "Facebook Ads", "SEMrush", "HubSpot"],
      results: [
        { metric: "Lead Generation", value: "400%" },
        { metric: "Brand Awareness", value: "180%" },
        { metric: "ROI", value: "320%" },
      ],
      duration: "6 months",
      teamSize: "4 marketers",
    },
    {
      id: 4,
      title: "Mobile Banking App",
      category: "mobile",
      client: "SecureBank Corp",
      image:
        "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Secure mobile banking application with biometric authentication and real-time transactions.",
      technologies: ["React Native", "Node.js", "MongoDB", "Blockchain"],
      results: [
        { metric: "User Adoption", value: "85%" },
        { metric: "Security Score", value: "99.9%" },
        { metric: "Transaction Speed", value: "0.5s" },
      ],
      duration: "10 months",
      teamSize: "10 developers",
    },
    {
      id: 5,
      title: "Restaurant Management Portal",
      category: "web",
      client: "FoodChain Masters",
      image:
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Complete restaurant management system with POS, inventory, staff scheduling, and analytics.",
      technologies: ["Vue.js", "Python Django", "MySQL", "Redis"],
      results: [
        { metric: "Order Processing", value: "200%" },
        { metric: "Inventory Accuracy", value: "98%" },
        { metric: "Staff Efficiency", value: "150%" },
      ],
      duration: "5 months",
      teamSize: "5 developers",
    },
    {
      id: 6,
      title: "AI-Powered Analytics Platform",
      category: "software",
      client: "DataInsights Pro",
      image:
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Machine learning platform for predictive analytics and business intelligence with real-time dashboards.",
      technologies: ["Python", "TensorFlow", "React", "Docker"],
      results: [
        { metric: "Prediction Accuracy", value: "94%" },
        { metric: "Processing Speed", value: "10x" },
        { metric: "Data Insights", value: "500%" },
      ],
      duration: "12 months",
      teamSize: "12 developers",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <section className="portfolio-section">
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
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className=" text-4xl font-bold lg:text-6xl  text-white mb-6">
              From Idea to <span className="text-orange-400">Reality</span>
            </h1>
            <p className="text-[16px] md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Innovation is not just a buzzword for us; it’s the cornerstone of
              our organization. Explore our portfolio of groundbreaking software
              development solutions, crafted by our passionate minds.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Filter Section */} 
      <section className="py-12 bg-white border-b border-gray-200">
         
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
          <div className="flex flex-wrap justify-center gap-4">
             
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-xs md:text-sm ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
                }`}
              >
                 
                {filter.label} 
              </button>
            ))} 
          </div> 
        </div> 
      </section> 
      {/* Projects Grid */} 

      <section className="py-20">
         
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className=" bg-white rounded-3xl overflow-hidden  border border-gray-200 p-5"
              >
                 
                <div className="relative h-52 overflow-hidden">
                   
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform rounded-3xl duration-300 hover:scale-110 overflow-hidden "
                  /> 
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/50 to-transparent" /> 
                  <div className="absolute bottom-4 left-4 right-4 ">
                     
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium ">
                       
                      {project.client} 
                    </span> 
                  </div> 
                </div> 
                <div className="py-5 px-2">
                   
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3> 
                  <p className="text-sm md:text-[16px] text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p> 
                  {/* Technologies */} 
                  <div className="mb-6">
                     
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Technologies Used
                    </h4> 
                    <div className="flex flex-wrap gap-2">
                       
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3  py-1 bg-blue-100 text-blue-800 border border-blue-200 rounded-full text-[10px] md:text-xs font-medium"
                        >
                           
                          {tech} 
                        </span>
                      ))} 
                    </div> 
                  </div> 
                  {/* Results */} 
                  <div className="mb-6">
                     
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Key Results
                    </h4> 
                    <div className="grid grid-cols-3 gap-4">
                       
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                           
                          <div className="text-2xl font-bold text-gradient mb-1">
                            {result.value}
                          </div> 
                          <div className="text-xs text-gray-600">
                            {result.metric}
                          </div> 
                        </div>
                      ))} 
                    </div> 
                  </div> 
                </div> 
              </motion.div>
            ))} 
          </div> 
        </div> 
      </section> 
      {/* Stats Section */} 
      <section className="py-24 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
         
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
             
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
               
              Portfolio <span className="bg-orange-400 px-2 rounded-xl font-bold">Highlights </span>
            </h2> 
            <p className="text-[16px] md:text-lg max-w-2xl mx-auto leading-relaxed">
               
              Our track record speaks for itself - delivering exceptional
              results across industries 
            </p> 
          </motion.div> 
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
              <div className="text-blue-200 text-sm md:text-md">Projects Completed</div> 
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
              <div className="text-blue-200 text-sm md:text-md">Client Satisfaction</div> 
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
              <div className="text-blue-200 text-sm md:text-md">Industries Served</div> 
            </motion.div> 
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
               
              <div className="text-4xl lg:text-5xl font-bold mb-2">5+</div> 
              <div className="text-blue-200 text-sm md:text-md">Years Experience</div> 
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
    </motion.div>
  );
};

export default Portfolio;
