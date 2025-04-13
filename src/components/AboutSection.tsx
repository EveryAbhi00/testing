
import React from 'react';
import { Award, BookOpen, BrainCircuit, Code, Database, LineChart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-t from-cyberpunk-black to-cyberpunk-darkblue/80 opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Passionate data analyst with a knack for turning complex data into clear, actionable insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6 text-cyberpunk-teal">My Journey</h3>
            <div className="space-y-6 text-white/80">
              <p>
                As an aspiring data analyst, I've developed a deep passion for extracting meaningful insights from complex datasets. My academic journey has equipped me with strong analytical skills and technical expertise in data visualization, statistical analysis, and database management.
              </p>
              <p>
                I'm constantly expanding my knowledge through self-directed learning, online courses, and practical projects. My goal is to leverage data to solve real-world problems and help organizations make data-driven decisions.
              </p>
              <p>
                When I'm not analyzing data, you can find me exploring new visualization techniques, contributing to open-source projects, or expanding my knowledge of machine learning and AI.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-6 hover:shadow-[0_0_15px_rgba(0,255,213,0.3)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyberpunk-teal/10 text-cyberpunk-teal">
                  <BrainCircuit size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Analytical Thinking</h4>
                  <p className="text-white/70">
                    Strong critical thinking abilities to solve complex problems through data-driven approaches.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 hover:shadow-[0_0_15px_rgba(54,229,252,0.3)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyberpunk-blue/10 text-cyberpunk-blue">
                  <LineChart size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Data Visualization</h4>
                  <p className="text-white/70">
                    Transforming complex data into compelling visual stories that drive insights and decisions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 hover:shadow-[0_0_15px_rgba(155,48,255,0.3)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyberpunk-purple/10 text-cyberpunk-purple">
                  <Database size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Database Management</h4>
                  <p className="text-white/70">
                    Proficient in SQL and database systems to efficiently extract and manipulate data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 glass-card p-8">
          <h3 className="text-2xl font-semibold mb-8 text-center">My Tech Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Python', icon: <Code size={32} /> },
              { name: 'SQL', icon: <Database size={32} /> },
              { name: 'Tableau', icon: <LineChart size={32} /> },
              { name: 'Power BI', icon: <LineChart size={32} /> },
              { name: 'Excel', icon: <LineChart size={32} /> },
              { name: 'R', icon: <Code size={32} /> },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center p-4 rounded-lg hover:bg-white/5 transition-colors">
                <div className="text-cyberpunk-blue mb-2">
                  {tech.icon}
                </div>
                <span className="text-white/80">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
