// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Code, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                 <Code className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-2xl font-bold">Brackety</span>
//             </div>
//             <p className="text-gray-300 leading-relaxed">
//               Transforming businesses into digital powerhouses through custom software, 
//               web applications, and comprehensive digital marketing solutions.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 <Twitter className="w-5 h-5" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 <Linkedin className="w-5 h-5" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 <Instagram className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
//               <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
//               <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
//               <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
//               <li><Link to="/internship" className="text-gray-300 hover:text-white transition-colors">Internship</Link></li>
//               <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Services</h3>
//             <ul className="space-y-2">
//               <li><span className="text-gray-300">Custom Software Development</span></li>
//               <li><span className="text-gray-300">Web Applications</span></li>
//               <li><span className="text-gray-300">Digital Marketing</span></li>
//               <li><span className="text-gray-300">Social Media Management</span></li>
//               <li><span className="text-gray-300">Business Consulting</span></li>
//               <li><span className="text-gray-300">Internship Programs</span></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-3">
//                 <Mail className="w-5 h-5 text-blue-400" />
//                 <span className="text-gray-300">info@brackety.com</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="w-5 h-5 text-blue-400" />
//                 <span className="text-gray-300">+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <MapPin className="w-5 h-5 text-blue-400" />
//                 <span className="text-gray-300">123 Tech Street, Digital City, DC 12345</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-sm">
//               © 2024 Brackety. All rights reserved.
//             </p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
//               <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
//               <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { Github, Twitter, Linkedin, Mail, MapPin, Code2 } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  const footerLinks = {
    Solutions: ["Cloud Infrastructure", "AI Analytics", "Data Management", "Security"],
    Company: ["About Us", "Our Vision", "Careers", "Press"],
    Resources: ["Documentation", "API Reference", "Help Center", "Community"],
    Legal: ["Privacy Policy", "Terms of Service", "Security", "Compliance"]
  };

  return (
    <footer className="gradient-surface text-white">
      {/* Main Footer */}
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="">
          {/* Brand Column */}

          <div className="grid lg:grid-cols-3 space-y-6 gap-6 ">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-3 sp-y-4">
              <div className="w-10 h-10  rounded-lg flex items-center justify-center">
            <img src="/logo.png" className="w-12" alt="" />
            </div>
            <span className="text-white font-bold text-sm ">Brackety</span> </div>
            
            <p className="text-white/70 leading-relaxed text-[16px] md:text-xl max-w-md">
              Empowering organizations with next-generation technology solutions that drive innovation and accelerate growth.
            </p>
            
            <div className="flex items-center space-x-2 text-white/60">
              <MapPin size={16} />
              <span>Bengaluru, india</span>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>

            </div>

             {/* Newsletter */}
            <div className="mt-8 ">
          <div className="max-w-md mx-auto md:text-center lg:text-left lg:mx-0">
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <p className="text-white/60  text-sm  mb-6">
              Get the latest updates on technology trends and product innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="max-w-full md:flex-1 px-4 py-3 glass-effect border-0 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button  className="px-6  gradient-primary rounded-xl py-3 ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
          </div>

  {/* Links Columns */}
         <div className="grid grid-cols-2 md:grid-cols-4 mt-8 gap-6">
           {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white/60 text-sm md:text-md hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
         </div>

        

 
        </div>

     
      
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 Brackety. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;