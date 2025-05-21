
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const Services = () => {
  const [activeService, setActiveService] = useState<number>(1);
  
  const services: Service[] = [
    {
      id: 1,
      title: "GenAI Innovation",
      description: "Our generative AI solutions harness the power of the latest advancements in artificial intelligence to create content, generate insights, and solve complex problems autonomously.",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      features: [
        "Custom large language models for specific industry needs",
        "Generative image and design AI for creative applications",
        "Text-to-speech and speech-to-text advanced neural models",
        "Predictive content generation for marketing and communications",
        "Synthetic data generation for training and testing"
      ]
    },
    {
      id: 2,
      title: "AI Assistants",
      description: "Our AI assistants are designed to enhance productivity, streamline customer interactions, and provide intelligent support across various business functions.",
      icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
      features: [
        "Natural language processing for human-like interactions",
        "Multi-language support for global operations",
        "Domain-specific knowledge integration",
        "Continuous learning and improvement from interactions",
        "Seamless integration with existing communication channels"
      ]
    },
    {
      id: 3,
      title: "Custom AI Development",
      description: "We create bespoke AI solutions tailored to your specific business challenges, ensuring that technology serves your unique objectives and workflows.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      features: [
        "End-to-end AI solution architecture and design",
        "Custom machine learning model development",
        "Integration with existing enterprise systems",
        "AI strategy consulting and roadmap planning",
        "Performance monitoring and continuous optimization"
      ]
    },
    {
      id: 4,
      title: "Intelligent Industrial IoT",
      description: "Combining AI with IoT technology, we create smart industrial systems that enhance operational efficiency, enable predictive maintenance, and optimize resource utilization.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      features: [
        "Sensor data analytics and real-time monitoring",
        "Predictive maintenance to minimize downtime",
        "Energy consumption optimization",
        "Supply chain and inventory management",
        "Manufacturing process optimization and quality control"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-8 md:py-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">AI-Powered Services</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Transformative solutions that harness the power of artificial intelligence to address complex business challenges and drive innovation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Service Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Our Services</h2>
                <div className="space-y-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service.id)}
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        activeService === service.id
                          ? 'bg-secondary/20 border-l-4 border-secondary'
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center">
                        <svg className={`w-5 h-5 mr-3 ${activeService === service.id ? 'text-secondary' : 'text-white/60'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path>
                        </svg>
                        <span className={`font-medium ${activeService === service.id ? 'text-white' : 'text-white/70'}`}>
                          {service.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="mt-8 p-6 glass-card">
                  <h3 className="text-xl font-semibold mb-4">Need a Custom Solution?</h3>
                  <p className="text-white/70 mb-4">
                    We can tailor our services to meet your specific business requirements.
                  </p>
                  <Link to="/contact" className="glow-button inline-block w-full text-center">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Service Details */}
            <div className="lg:col-span-2">
              {services
                .filter(service => service.id === activeService)
                .map(service => (
                  <div key={service.id} className="animate-fade-in">
                    <div className="bg-secondary/20 rounded-full p-4 inline-block mb-6">
                      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path>
                      </svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                    <div className="mb-8 text-lg text-white/80">{service.description}</div>
                    
                    <div className="glass-card p-6 md:p-8 mb-10">
                      <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                      <div className="space-y-4">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-secondary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="glass-card p-6 md:p-8">
                      <h3 className="text-xl font-semibold mb-4">How We Deliver</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 text-secondary mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                          </div>
                          <h4 className="font-medium mb-2">Analyze</h4>
                          <p className="text-white/70 text-sm">We analyze your needs and design a tailored solution approach.</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 text-secondary mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                            </svg>
                          </div>
                          <h4 className="font-medium mb-2">Implement</h4>
                          <p className="text-white/70 text-sm">Our experts deploy the AI solution with minimal disruption.</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 text-secondary mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                          </div>
                          <h4 className="font-medium mb-2">Optimize</h4>
                          <p className="text-white/70 text-sm">We continuously monitor and refine performance for optimal results.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-12 text-center">
                      <Link to="/contact" className="glow-button">
                        Request a Demo
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-panel p-10 md:p-16 rounded-2xl max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can help you achieve your business goals. Schedule a consultation today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="glow-button">
                Schedule a Consultation
              </Link>
              <Link to="/blogs" className="px-6 py-3 rounded-full border-2 border-white/20 text-white font-medium transition-all hover:border-white/40 hover:bg-white/5 hover:scale-105 focus:outline-none">
                Read Our Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
