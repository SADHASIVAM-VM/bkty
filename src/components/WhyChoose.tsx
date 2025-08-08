import { motion } from "framer-motion";
import { User, BarChart, Settings } from "lucide-react"; // Replace with your icons or SVGs
import { advantages } from "../data/CommonData";
// import why from '../assets/why.jpg'
const ApproachSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            Through clear communication and a focus on efficiency, our approach method aims to deliver high-quality solutions that meet or exceed expectations.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Venn Diagram */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-[320px] h-[320px]">
             
             {/* <img src={"https://www.trywebtec.com/wp-content/uploads/2023/03/businessman-ride-on-rocket-1-1024x1024.png"} className="w-full h-fit" alt="" /> */}
             <img src={"https://almasrahepayam.com/Tema/media/images/WhyUs01.png"} className="w-full h-auto" alt="" />
            </div>
          </motion.div>

          {/* Text Columns */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
          {
            advantages.map((e)=>(
                <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-lg shadow-md border-white/50 border">
                  <e.icon/>
                </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {e.title}
                </h3>
                <p className="text-gray-600 text-sm">
                {e.description}</p>
              </div>
            </div>

            ))
          }
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
