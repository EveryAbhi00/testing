
import React, { useEffect } from 'react';
import Header from '../components/Header';
import ParticleBackground from '../components/ParticleBackground';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ResumeSection from '../components/ResumeSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Prakhar Singhal's Portfolio";
    
    // Smooth scroll function to center sections
    const smoothScrollToCenter = (element: HTMLElement) => {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const windowHeight = window.innerHeight;
      const centerScrollPosition = absoluteElementTop - (windowHeight / 2) + (elementRect.height / 2);
      
      window.scrollTo({
        top: centerScrollPosition,
        behavior: 'smooth'
      });
    };

    // Add click event listeners to navigation links to scroll to center
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          smoothScrollToCenter(targetElement);
        }
      });
    });

    // Cleanup event listeners
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="bg-cyberpunk-black text-white min-h-screen flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <Header />
        <ParticleBackground />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ResumeSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

