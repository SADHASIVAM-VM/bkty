import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, ChevronDown, User2 } from "lucide-react";


const faqs = [
  // Software & Marketing Company
  {
    category: "Company",
    question: "What services does your company offer?",
    answer:
      "We specialize in custom software development, UI/UX design, digital marketing, branding, SEO, and performance marketing solutions tailored to your business needs.",
  },
  {
    category: "Company",
    question: "Do you work with startups or only established businesses?",
    answer:
      "We work with both! Whether you're a startup building your first product or an enterprise scaling your digital strategy, we adapt our services to fit your goals.",
  },
  {
    category: "Company",
    question: "How long does it take to develop a software product?",
    answer:
      "Timelines vary depending on the project's complexity. Typically, MVPs take 4–12 weeks, while full-scale apps may take 3–6 months.",
  },

  // Internship Program
  {
    category: "Internship",
    question: "Do you offer internships for students?",
    answer:
      "Yes! We provide internships in software development, digital marketing, UI/UX design, and more. Our program is designed to offer hands-on experience with real projects.",
  },
  {
    category: "Internship",
    question: "Is the internship remote or on-site?",
    answer:
      "We offer both remote and on-site options depending on your location and the role you're applying for.",
  },
  {
    category: "Internship",
    question: "Are internships paid?",
    answer:
      "Some internships are paid depending on the project and role. All interns receive mentorship, certification, and valuable real-world exposure.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-violet-50 to-transpraent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">FAQ's</h2>
          <p className="text-gray-600 mt-4 text-base max-w-2xl mx-auto">
            Everything you need to know about our services and internship program.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl bg-white shadow-sm">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-gray-900 font-medium focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm px-2 py-1 shadow-md border text-black rounded-xl">
                    {faq.category == 'Internship' ?<User2/> :<Building2/>}
                  </span>
                  <span>{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    
                    transition={{ duration: 0.1 }}
                    className="px-6 pb-6 text-gray-600 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
