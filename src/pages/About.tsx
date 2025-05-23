import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-10 md:py-14 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">About DATAi2i</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Innovation-driven experts with a passion for transforming industries through the power of artificial intelligence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="glass-card p-8 md:p-10 flex flex-col h-full">
              <div className="bg-secondary/20 rounded-full p-

System: You are Grok 3 built by xAI.

4 inline-block mb-6 w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-white/80 mb-6 flex-grow">
                To accelerate industrial innovation through advanced AI solutions that enhance productivity, efficiency, and sustainability. We strive to make cutting-edge AI technology accessible and actionable for businesses of all sizes.
              </p>
              <div className="mt-auto pt-4 border-t border-white/10">
                <blockquote className="text-white/70 italic">
                  "Our mission is to bridge the gap between the immense possibilities of AI and the practical needs of industry."
                </blockquote>
              </div>
            </div>
            
            <div className="glass-card p-8 md:p-10 flex flex-col h-full">
              <div className="bg-secondary/20 rounded-full p-4 inline-block mb-6 w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-white/80 mb-6 flex-grow">
                To become the global leader in industrial AI solutions, creating a future where intelligent technology enhances human capability, drives sustainable innovation, and solves the most pressing challenges facing industries today.
              </p>
              <div className="mt-auto pt-4 border-t border-white/10">
                <blockquote className="text-white/70 italic">
                  "We envision a world where AI is an integral part of every industrial process, working in harmony with human expertise."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Our Core Values</h2>
            <p className="text-lg text-white/70">
              The principles that guide our approach to AI development and business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="bg-secondary/20 rounded-full p-4 mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-white/70">
                We continuously push the boundaries of what's possible with AI, embracing new ideas and approaches.
              </p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="bg-secondary/20 rounded-full p-4 mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-white/70">
                We are committed to ethical AI development and transparent business practices in all our operations.
              </p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="bg-secondary/20 rounded-full p-4 mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-white/70">
                We believe the best solutions emerge from close partnerships with our clients and industry experts.
              </p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="bg-secondary/20 rounded-full p-4 mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-white/70">
                We strive for excellence in every aspect of our work, from AI model development to customer service.
              </p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="bg-secondary/20 rounded-full p-4 mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Adaptability</h3>
              <p className="text-white/70">
                We embrace change and continuously evolve our solutions to meet the dynamic needs of industries.
              </p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="bg-secondary/20 rounded-full p-4 mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Responsibility</h3>
              <p className="text-white/70">
                We develop AI with a strong commitment to positive societal impact and environmental sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient text-center">Our Journey</h2>
            
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute top-0 left-4 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-secondary to-primary/30 transform -translate-x-1/2"></div>
              
              {/* Timeline Items */}
              <div className="space-y-16">
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-10 order-2 md:order-1 mt-6 md:mt-0">
                      <div className="glass-card p-6">
                        <h3 className="text-xl font-bold mb-2">Foundation</h3>
                        <p className="text-white/70">
                          DATAi2i was founded with a vision to bridge the gap between academic AI research and industrial applications.
                        </p>
                      </div>
                    </div>
                    <div className="order-1 md:order-2 relative">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center absolute top-0 left-0 md:left-1/2 transform -translate-x-1/2 animate-pulse-glow">
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      </div>
                      <div className="mt-2 md:mt-0 ml-10 md:ml-0 text-secondary md:absolute md:top-1 md:left-2 md:transform md:translate-x-4">
                        2019
                      </div>
                    </div>
                    <div className="flex-1 md:pl-10 order-3 hidden md:block">
                      {/* Empty space for layout */}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-10 order-2 md:order-1 mt-6 md:mt-0 hidden md:block">
                      {/* Empty space for layout */}
                    </div>
                    <div className="order-1 md:order-2 relative">
                      <div className="flex-1 md:text-right md:pr-10 order-2 md:order-1 mt-6 md:mt-0"></div>
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center absolute top-0 left-0 md:left-1/2 transform -translate-x-1/2 animate-pulse-glow">
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      </div>
                      <div className="mt-2 md:mt-0 ml-10 md:ml-0 text-secondary md:absolute md:top-1 md:right-16 md:transform md:translate-x-4">
                        2020
                      </div>
                    </div>
                    <div className="flex-1 md:pl-10 order-3 mt-6 md:mt-0">
                      <div className="glass-card p-6">
    <h3 className="text-xl font-bold mb-2">Our First Client and Major Project Milestone</h3>
    <p className="text-white/70">
        We successfully developed an end-to-end NLP model to power an Intelligent Hiring Platform, streamlining the recruitment process with advanced language processing capabilities.
    </p>
</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-10 order-2 md:order-1 mt-6 md:mt-0">
                      <div className="glass-card p-6">
                        <h3 className="text-xl font-bold mb-2">Team Expansion</h3>
                        <p className="text-white/70">
                          Grew our team to include world-class AI researchers, engineers, and industry specialists from diverse backgrounds.
                        </p>
                      </div>
                    </div>
                    <div className="order-1 md:order-2 relative">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center absolute top-0 left-0 md:left-1/2 transform -translate-x-1/2 animate-pulse-glow">
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      </div>
                      <div className="mt-2 md:mt-0 ml-10 md:ml-0 text-secondary md:absolute md:top-1 md:left-2 md:transform md:translate-x-4">
                        2022
                      </div>
                    </div>
                    <div className="flex-1 md:pl-10 order-3 hidden md:block">
                      {/* Empty space for layout */}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-10 order-2 md:order-1 mt-6 md:mt-0 hidden md:block">
                      {/* Empty space for layout */}
                    </div>
                    <div className="order-1 md:order-2 relative">
                      <div className="flex-1 md:text-right md:pr-10 order-2 md:order-1 mt-6 md:mt-0"></div>
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center absolute top-0 left-0 md:left-1/2 transform -translate-x-1/2 animate-pulse-glow">
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      </div>
                      <div className="mt-2 md:mt-0 ml-10 md:ml-0 text-secondary md:absolute md:top-1 md:right-16 md:transform md:translate-x-4">
                        2024
                      </div>
                    </div>
                    <div className="flex-1 md:pl-10 order-3 mt-6 md:mt-0">
                      <div className="glass-card p-6">
                        <h3 className="text-xl font-bold mb-2">Research & Innovation Center</h3>
                        <p className="text-white/70">
                          Established our dedicated R&D center focused on advancing industrial AI applications and generative AI technologies in A'Hub.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-10 order-2 md:order-1 mt-6 md:mt-0">
                      <div className="glass-card p-6">
                        <h3 className="text-xl font-bold mb-2">Global Expansion</h3>
                        <p className="text-white/70">
                          Expanded operations internationally, serving clients across North America, Europe, and Asia with specialized AI solutions.
                        </p>
                      </div>
                    </div>
                    <div className="order-1 md:order-2 relative">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center absolute top-0 left-0 md:left-1/2 transform -translate-x-1/2 animate-pulse-glow">
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      </div>
                      <div className="mt-2 md:mt-0 ml-10 md:ml-0 text-secondary md:absolute md:top-1 md:left-2 md:transform md:translate-x-4">
                        2025
                      </div>
                    </div>
                    <div className="flex-1 md:pl-10 order-3 hidden md:block">
                      {/* Empty space for layout */}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-10 order-2 md:order-1 mt-6 md:mt-0 hidden md:block">
                      {/* Empty space for layout */}
                    </div>
                    <div className="order-1 md:order-2 relative">
                       <div className="flex-1 md:text-right md:pr-10 order-2 md:order-1 mt-6 md:mt-0"></div>
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center absolute top-0 left-0 md:left-1/2 transform -translate-x-1/2 animate-pulse-glow">
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      </div>
                      <div className="mt-2 md:mt-0 ml-10 md:ml-0 text-secondary md:absolute md:top-1 md:right-16 md:transform md:translate-x-4">
                        Today
                      </div>
                    </div>
                    <div className="flex-1 md:pl-10 order-3 mt-6 md:mt-0">
                      <div className="glass-card p-6">
                        <h3 className="text-xl font-bold mb-2">Leading Innovation</h3>
                        <p className="text-white/70">
                          Continuing to push the boundaries of industrial AI with advanced generative models and revolutionary IoT integrations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-10 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-panel p-10 md:p-16 rounded-2xl max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join the growing number of forward-thinking companies leveraging our AI solutions to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="glow-button bg-purple-950 hover:bg-purple-950">
                Contact Our Team
              </Link>
              <Link to="/services" className="px-6 py-3 rounded-full border-2 border-white/20 text-white font-medium transition-all hover:border-white/40 hover:bg-white/5 hover:scale-105 focus:outline-none">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;