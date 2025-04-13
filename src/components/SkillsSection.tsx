
import React from 'react';
import { Database, LineChart, Code, Brain, MessageSquare, Server } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming & Tools',
      icon: <Code size={24} />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'R Programming', level: 85 },
        { name: 'SQL', level: 90 },
        { name: 'Excel/VBA', level: 95 },
        { name: 'Git', level: 80 }
      ]
    },
    {
      title: 'Data Visualization',
      icon: <LineChart size={24} />,
      skills: [
        { name: 'Tableau', level: 85 },
        { name: 'Power BI', level: 90 },
        { name: 'D3.js', level: 70 },
        { name: 'Matplotlib/Seaborn', level: 85 },
        { name: 'ggplot2', level: 80 }
      ]
    },
    {
      title: 'Data Management',
      icon: <Database size={24} />,
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'ETL Processes', level: 80 },
        { name: 'Data Cleaning', level: 95 }
      ]
    },
    {
      title: 'Machine Learning',
      icon: <Brain size={24} />,
      skills: [
        { name: 'Regression', level: 85 },
        { name: 'Classification', level: 80 },
        { name: 'Clustering', level: 75 },
        { name: 'Time Series Analysis', level: 70 },
        { name: 'NLP Basics', level: 65 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: <MessageSquare size={24} />,
      skills: [
        { name: 'Data Storytelling', level: 95 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Business Acumen', level: 85 },
        { name: 'Project Management', level: 80 },
        { name: 'Presentation', level: 90 }
      ]
    },
    {
      title: 'Cloud/Deployment',
      icon: <Server size={24} />,
      skills: [
        { name: 'AWS Basics', level: 70 },
        { name: 'Google Data Studio', level: 80 },
        { name: 'Databricks', level: 65 },
        { name: 'Heroku', level: 75 },
        { name: 'Docker Basics', level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-cyberpunk-black to-cyberpunk-darkblue/80 opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyberpunk-blue via-cyberpunk-purple to-cyberpunk-teal bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyberpunk-blue via-cyberpunk-purple to-cyberpunk-teal mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            My technical toolkit for analyzing, visualizing, and extracting insights from data.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-card"
            >
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-3 ${
                  index % 3 === 0 ? 'bg-cyberpunk-blue/10 text-cyberpunk-blue' :
                  index % 3 === 1 ? 'bg-cyberpunk-purple/10 text-cyberpunk-purple' :
                  'bg-cyberpunk-teal/10 text-cyberpunk-teal'
                }`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white/80">{skill.name}</span>
                      <span className="text-xs text-white/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          index % 3 === 0 ? 'bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple' :
                          index % 3 === 1 ? 'bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-teal' :
                          'bg-gradient-to-r from-cyberpunk-teal to-cyberpunk-blue'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
