import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // If using React Router

const InternshipSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-transpraent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Student Internship Program
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-500 max-w-md mx-auto text-sm md:text-base"
        >
          Join our hands-on internship program and gain real-world experience in software development, UI/UX design, digital marketing, and more — mentored by industry professionals.
        </motion.p>

        {/* Apply Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10"
        >
          <Link
            to="/apply-internship" // Change this to your form or route
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full text-base font-medium hover:bg-gray-900 transition"
          >
            Apply Now
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipSection;
