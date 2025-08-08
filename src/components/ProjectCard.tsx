import { ArrowRight, Briefcase } from 'lucide-react'
import { motion } from "framer-motion";
import React from 'react'


interface Project {
  id: any;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const ProjectCard = ({project}:{project:Project}) => {
  return (
      <motion.div  initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay:0.1 * project.id }}
                className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white rounded-3xl shadow-sm border border-gray-200 p-6"
              >
                {/* Text Content */}
                <div className="w-full  lg:w-1/2 space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 text-sm">{project.description}</p>
    
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project?.technologies.map((tech:any, i:any) => (
                      <span
                        key={i}
                        className="text-xs border border-gray-300 rounded-full px-3 py-1 text-gray-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
    
                  {/* CTA Button */}
                  <button className="inline-flex items-center mt-6 text-sm font-medium border border-black rounded-full px-5 py-2 hover:bg-black hover:text-white transition">
                    View Portfolio
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
    
                {/* Image Content */}
                <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-64 sm:h-80 "
                  />
                </div>
    </motion.div>

  )
}

export default ProjectCard
