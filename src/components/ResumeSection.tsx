
import React from 'react';
import { Download, Eye, FileText } from 'lucide-react';

const ResumeSection = () => {
  // This would be your actual resume file path
  const resumeUrl = "#"; // Replace with actual PDF URL when available
  
  return (
    <section id="resume" className="py-20 relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-t from-cyberpunk-black to-cyberpunk-darkblue/80 opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-blue bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-blue mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Download my resume to learn more about my experience, education, and skills.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-10">
          <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <div className="p-4 rounded-full bg-cyberpunk-purple/10 text-cyberpunk-purple mr-4">
                <FileText size={32} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Prakhar Singhal - Resume</h3>
                <p className="text-white/60">Updated April 2023</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href={resumeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-button flex items-center"
              >
                <Eye size={20} className="mr-2" />
                View Resume
              </a>
              <a 
                href={resumeUrl} 
                download="Prakhar_Singhal_Resume.pdf"
                className="cyber-button flex items-center bg-cyberpunk-purple/80 hover:bg-cyberpunk-purple/90"
              >
                <Download size={20} className="mr-2" />
                Download
              </a>
            </div>
          </div>
          
          <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden border border-white/10">
            <div className="absolute inset-0 flex items-center justify-center bg-cyberpunk-darkblue/30 backdrop-blur-sm">
              {/* Here you would normally embed the PDF viewer */}
              <div className="text-center p-8">
                <FileText size={80} className="mx-auto mb-4 text-cyberpunk-blue opacity-50" />
                <h4 className="text-2xl font-bold mb-2 text-white">Resume Preview</h4>
                <p className="text-white/70 mb-6">Click the buttons above to view or download the full resume.</p>
                <div className="w-full max-w-md mx-auto h-1 bg-gradient-to-r from-cyberpunk-purple via-cyberpunk-blue to-cyberpunk-teal animate-bg-pan"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
