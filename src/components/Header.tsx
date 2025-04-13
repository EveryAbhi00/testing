
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-cyberpunk-black/80 backdrop-blur-md border-b border-white/10' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyberpunk-blue via-cyberpunk-purple to-cyberpunk-teal bg-clip-text text-transparent">
          Prakhar<span className="text-white">.DEV</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white/70 hover:text-cyberpunk-teal transition-colors py-2 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-cyberpunk-blue after:to-cyberpunk-purple after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Resume Button */}
        <a 
          href="#resume" 
          className="hidden md:flex cyber-button text-sm py-2 px-4"
        >
          Download Resume
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cyberpunk-black/95 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-white/70 hover:text-cyberpunk-teal transition-colors py-2 px-4"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#resume" 
              className="cyber-button text-center mx-4 my-2"
              onClick={() => setIsOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
