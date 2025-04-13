
import React, { useState } from 'react';
import { Github, ExternalLink, Tag } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Sales Dashboard',
    description: 'Interactive dashboard analyzing sales data, customer behavior, and product performance for an e-commerce platform.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    tags: ['Power BI', 'SQL', 'DAX', 'Data Cleaning'],
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/username/project1'
  },
  {
    title: 'Customer Segmentation Analysis',
    description: 'Segmentation analysis using clustering algorithms to identify distinct customer groups for targeted marketing campaigns.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    tags: ['Python', 'Scikit-learn', 'K-means', 'Pandas'],
    demoLink: 'https://example.com/demo2',
    codeLink: 'https://github.com/username/project2'
  },
  {
    title: 'Financial Data Visualization',
    description: 'Interactive financial data visualization tool displaying market trends, stock performance, and investment opportunities.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    tags: ['Tableau', 'SQL', 'Financial Analysis'],
    demoLink: 'https://example.com/demo3',
    codeLink: 'https://github.com/username/project3'
  },
  {
    title: 'Predictive Sales Forecasting',
    description: 'Time series forecasting model predicting future sales based on historical data and seasonal patterns.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    tags: ['Python', 'Time Series', 'ARIMA', 'Forecasting'],
    demoLink: 'https://example.com/demo4',
    codeLink: 'https://github.com/username/project4'
  }
];

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-t from-cyberpunk-darkblue/80 to-cyberpunk-black opacity-90"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-cyberpunk-blue/10 filter blur-[80px]"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-cyberpunk-purple/10 filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyberpunk-teal to-cyberpunk-blue bg-clip-text text-transparent">
              Projects & Case Studies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyberpunk-teal to-cyberpunk-blue mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Showcasing my data analysis, visualization, and problem-solving capabilities through real-world projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyberpunk-black to-transparent opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyberpunk-teal transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-cyberpunk-blue"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/70">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-white/70 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-cyberpunk-teal transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-cyberpunk-teal transition-colors"
                    >
                      <Github size={18} className="mr-1" />
                      <span>Code</span>
                    </a>
                  </div>
                  
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-cyberpunk-blue transition-colors">
                    <Tag size={18} className="text-white group-hover:text-cyberpunk-blue transition-colors" />
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

export default ProjectsSection;
