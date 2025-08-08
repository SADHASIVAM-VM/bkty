import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 580); // change threshold if needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <header
      
      className={` top-0 left-0 right-0 z-50   transition-all duration-300  bg-black text-white ${
        scrolled && 'fixed transition-all w-full duration-300'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="w-6" />
            <span className="font-semibold text-sm tracking-tight">Brackety</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium px-2 py-1 transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-white'
                    : scrolled ? 'text-white/80' : 'text-white hover:text-gray-300'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.span
                    layoutId="activeLink"
                    className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-sm hover:bg-gray-100 transition"
            >
              <Phone className="w-4 h-4" />
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors
           stext-white hover:text-gray-300`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'fit-content' : 0 }}
          className="overflow-hidden lg:hidden transition-all  backdrop-blur-md rounded-md m-3 shadow-md "
        >
          <div className="px-4 py-4  space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition ${
                  location.pathname === item.path
                    ? 'text-black bg-blue-50'
                    : 'text-gray-300 hover:text-black/70 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex justify-center items-center bg-white/80 text-black px-4 py-2 rounded-full font-medium mt-4"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
