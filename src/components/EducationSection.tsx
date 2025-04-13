
import React from 'react';
import { BookOpen, Award, GraduationCap, Calendar } from 'lucide-react';

const EducationSection = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science in Data Science',
      institution: 'University of Data Analytics',
      duration: '2018 - 2022',
      description: 'Specialized in statistical analysis, machine learning algorithms, and data visualization techniques. Graduated with honors.',
      achievements: ['Dean\'s List: 2020-2022', 'Data Science Award 2021', 'Research Assistant for AI Lab']
    },
    {
      degree: 'Data Analysis Certification',
      institution: 'DataCamp',
      duration: '2022',
      description: 'Comprehensive certification covering data manipulation, visualization, and statistical analysis using Python and R.',
      achievements: ['Completed with 98% score', 'Advanced SQL specialization']
    },
    {
      degree: 'Machine Learning Professional Certificate',
      institution: 'IBM via Coursera',
      duration: '2023',
      description: 'Professional certificate focusing on applied machine learning models, feature engineering, and model deployment.',
      achievements: ['Capstone project on predictive analytics', 'Specialization in Deep Learning']
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-cyberpunk-darkblue/80 to-cyberpunk-black opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-teal bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-teal mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            My academic journey and continuous learning in the field of data analytics.
          </p>
        </div>
        
        <div className="space-y-12">
          {educationData.map((item, index) => (
            <div 
              key={index} 
              className="glass-card p-6 md:p-8 transition-all duration-500 hover:bg-gradient-to-r hover:from-cyberpunk-purple/10 hover:to-transparent"
            >
              <div className="grid md:grid-cols-[1fr_3fr] gap-6">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="p-3 rounded-full bg-cyberpunk-purple/10 text-cyberpunk-purple mb-4">
                    {index === 0 ? (
                      <GraduationCap size={28} />
                    ) : (
                      <BookOpen size={28} />
                    )}
                  </div>
                  
                  <div className="flex items-center text-white/60 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{item.duration}</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {item.institution}
                  </h4>
                </div>
                
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-cyberpunk-teal">
                    {item.degree}
                  </h3>
                  
                  <p className="text-white/80 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="mt-4">
                    <h5 className="font-semibold mb-2 text-white/90 flex items-center">
                      <Award size={18} className="mr-2 text-cyberpunk-blue" />
                      Achievements & Activities
                    </h5>
                    
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyberpunk-blue mr-2"></span>
                          <span className="text-white/70">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
