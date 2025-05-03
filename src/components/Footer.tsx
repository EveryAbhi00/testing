
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="py-12 relative overflow-hidden bg-cyberpunk-black">
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center">
          <button 
            onClick={scrollToTop}
            className="mb-8 p-3 rounded-full bg-cyberpunk-purple/10 border border-white/10 text-white hover:bg-cyberpunk-purple/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
          
          <div className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyberpunk-blue via-cyberpunk-purple to-cyberpunk-teal bg-clip-text text-transparent">
            Prakhar Singhal
          </div>
          
          <p className="text-white/60 max-w-md text-center mb-8">
            Data Analyst crafting meaningful insights from complex datasets.
          </p>
          
          <div className="flex items-center space-x-6 mb-10">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-cyberpunk-blue transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-cyberpunk-purple transition-colors">
              <Linkedin size={24} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abhimanu9616@gmail.com&su=Let's+Connect&body=Hi+Prakhar%2C%0A%0AI+saw+your+portfolio..."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyberpunk-blue transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
          
          <div className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Prakhar Singhal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
