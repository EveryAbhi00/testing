import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-grid overflow-visible"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyberpunk-black to-cyberpunk-darkblue opacity-80 z-0"></div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyberpunk-purple/20 filter blur-[100px] animate-pulse-glow z-0" />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cyberpunk-blue/20 filter blur-[120px] animate-pulse-glow z-0"
        style={{ animationDelay: '1s' }}
      />

      {/* Content container */}
      <div className="w-full px-4 sm:px-8 lg:px-16 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="order-2 md:order-1 text-center md:text-left overflow-visible">
            <div className="inline-block px-4 py-1 mb-6 rounded-full border border-white/10 backdrop-blur-sm bg-white/5 text-cyberpunk-teal text-lg">
              Aspiring Data Analyst
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.2] overflow-visible">
              <span className="block">Hi, I'm</span>
              <span
                className="block bg-gradient-to-r from-cyberpunk-blue via-cyberpunk-purple to-cyberpunk-teal bg-clip-text text-transparent leading-[1.75] overflow-visible"
              >
                Prakhar Singhal
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              I analyze data, craft insights, and build stories.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mb-8">
              <a href="#projects" className="cyber-button group w-full md:w-auto">
                See My Projects
                <span className="ml-2 transition-transform duration-300 inline-block group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#resume"
                className="cyber-button w-full md:w-auto bg-transparent hover:bg-white/5"
              >
                Download Resume
              </a>
            </div>

            {/* Social icons */}
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://www.linkedin.com/in/prakhar-singhal-638007356/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyberpunk-blue transition-colors duration-300"
              >
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
          </div>

          {/* Floating profile image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 relative animate-float max-w-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-cyberpunk-purple/30 to-cyberpunk-blue/30 blur-xl animate-pulse-glow z-0"></div>
              <div className="absolute inset-0 rounded-full border border-white/20 backdrop-blur-sm bg-gradient-to-b from-white/10 to-white/5 overflow-hidden flex items-center justify-center z-10">
                <img
                  src="image/1741673344964 (1).jpg"
                  alt="Prakhar Singhal"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-70 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <a
            href="#about"
            className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
