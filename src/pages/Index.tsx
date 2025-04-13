
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
  }, []);

  return (
    <div className="bg-cyberpunk-black text-white min-h-screen">
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
  );
};

export default Index;
