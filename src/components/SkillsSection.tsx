import React from 'react';
import { Database, LineChart, Code, Brain, MessageSquare, Server } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming & Tools',
      icon: <Code size={24} />,
      skills: ['Python', 'R Programming', 'SQL', 'Excel/VBA', 'Git']
    },
    {
      title: 'Data Visualization',
      icon: <LineChart size={24} />,
      skills: ['Tableau', 'Power BI', 'D3.js', 'Matplotlib/Seaborn', 'ggplot2']
    },
    {
      title: 'Data Management',
      icon: <Database size={24} />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'ETL Processes', 'Data Cleaning']
    },
    {
      title: 'Machine Learning',
      icon: <Brain size={24} />,
      skills: ['Regression', 'Classification', 'Clustering', 'Time Series Analysis', 'NLP Basics']
    },
    {
      title: 'Soft Skills',
      icon: <MessageSquare size={24} />,
      skills: ['Data Storytelling', 'Problem Solving', 'Business Acumen', 'Project Management', 'Presentation']
    },
    {
      title: 'Cloud/Deployment',
      icon: <Server size={24} />,
      skills: ['AWS Basics', 'Google Data Studio', 'Databricks', 'Heroku', 'Docker Basics']
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
            <div key={index} className="skill-card">
              <div className="flex items-center mb-4">
                <div
                  className={`p-2 rounded-lg mr-3 ${
                    index % 3 === 0
                      ? 'bg-cyberpunk-blue/10 text-cyberpunk-blue'
                      : index % 3 === 1
                      ? 'bg-cyberpunk-purple/10 text-cyberpunk-purple'
                      : 'bg-cyberpunk-teal/10 text-cyberpunk-teal'
                  }`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <ul className="list-disc pl-5 space-y-1 text-white/80">
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
