
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    // Simulating form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    });
    
    // Reset form
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
      
      // Reset status after some time
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: '',
        });
      }, 5000);
    }, 1000);
  };

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">Get in Touch</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Have questions about our AI solutions? Ready to start your digital transformation journey? We're here to help.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Details and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-10">
              <div className="glass-card p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-white/80">A-HUB, AU North Campus, Andhra University, Visakhapatnam, AP - 530003</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span className="text-white/80">+91 63035 02335</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <a href="mailto:team@datai2i.com" className="text-white/80 hover:text-secondary transition-colors">team@datai2i.com</a>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
                  <div className="space-y-2">
                    {workingHours.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-1 border-b border-white/10">
                        <span className="text-white/70">{item.day}</span>
                        <span className="text-white font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://twitter.com" aria-label="Twitter" className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="https://linkedin.com" aria-label="LinkedIn" className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="https://facebook.com" aria-label="Facebook" className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="glass-card p-0 overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.9211783748585!2d83.3403332722908!3d17.78163047826175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431fa6eddbeb%3A0xacab05b927d5bb10!2sAndhra%20University!5e0!3m2!1sen!2sin!4v1684680120658!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DATAi2i Location"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="glass-card p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              {formStatus.submitted ? (
                <div className={`p-4 rounded-lg mb-6 ${formStatus.success ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
                  {formStatus.message}
                </div>
              ) : null}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white/80 mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-white/80 mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-white/80 mb-2">Interested In</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white focus:outline-none focus:border-secondary"
                  >
                    <option value="" className="bg-dark">Select a service</option>
                    <option value="genai" className="bg-dark">GenAI Innovation</option>
                    <option value="assistants" className="bg-dark">AI Assistants</option>
                    <option value="custom" className="bg-dark">Custom AI Development</option>
                    <option value="iot" className="bg-dark">Intelligent Industrial IoT</option>
                    <option value="other" className="bg-dark">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary resize-none"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="glow-button w-full"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gradient text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-3">How long does it take to implement an AI solution?</h3>
                <p className="text-white/70">
                  Implementation timelines vary depending on the complexity of the solution and specific requirements. Simple AI assistants can be deployed in a few weeks, while more complex custom solutions may take 2-3 months. During our initial consultation, we'll provide a detailed timeline based on your needs.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-3">Do you offer ongoing support after implementation?</h3>
                <p className="text-white/70">
                  Yes, we provide comprehensive support and maintenance packages for all our AI solutions. These include regular updates, performance monitoring, and continuous improvement based on user feedback and new data. We're committed to ensuring the long-term success of your AI implementation.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-3">How do you ensure the security of our data?</h3>
                <p className="text-white/70">
                  Data security is our top priority. We implement industry-leading encryption protocols, secure data handling practices, and regular security audits. All our solutions comply with global data protection regulations, and we're happy to sign custom NDAs and data processing agreements as needed.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-3">Can your AI solutions integrate with our existing systems?</h3>
                <p className="text-white/70">
                  Absolutely. Our AI solutions are designed for seamless integration with your existing technology stack. We have experience integrating with various ERP systems, CRMs, manufacturing systems, and custom software. Our team will work closely with your IT department to ensure a smooth integration process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
