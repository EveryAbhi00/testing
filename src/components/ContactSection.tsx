
import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-cyberpunk-darkblue/80 to-cyberpunk-black opacity-90"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-cyberpunk-purple/10 filter blur-[100px]"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-cyberpunk-blue/10 filter blur-[80px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyberpunk-teal to-cyberpunk-purple bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyberpunk-teal to-cyberpunk-purple mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-cyberpunk-teal">Send a Message</h3>
            
            {submitted ? (
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyberpunk-teal/20 text-cyberpunk-teal mb-4">
                  <MessageSquare size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-white/70">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white/80 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyberpunk-blue/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyberpunk-blue/50 transition-all"
                    placeholder="Your email address"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-white/80 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyberpunk-blue/50 transition-all"
                    placeholder="Subject"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyberpunk-blue/50 transition-all"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`cyber-button w-full flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          <div className="flex flex-col">
            <div className="glass-card p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-cyberpunk-blue">Connect With Me</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-cyberpunk-blue/10 text-cyberpunk-blue mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a 
                      href="mailto:contact@example.com" 
                      className="text-white/70 hover:text-cyberpunk-blue transition-colors"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-cyberpunk-purple/10 text-cyberpunk-purple mr-4">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/username" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-cyberpunk-purple transition-colors"
                    >
                      linkedin.com/in/prakharsinghal
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-cyberpunk-teal/10 text-cyberpunk-teal mr-4">
                    <Github size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/username" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-cyberpunk-teal transition-colors"
                    >
                      github.com/prakharsinghal
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 flex-1">
              <h3 className="text-2xl font-bold mb-4 text-cyberpunk-purple">Location</h3>
              <p className="text-white/70 mb-4">
                Based in Mumbai, India
              </p>
              <div className="h-36 sm:h-48 rounded-lg bg-cyberpunk-darkblue/50 border border-white/10 flex items-center justify-center text-white/30">
                Map Widget Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
