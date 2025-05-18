import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source
              src="/public/ai.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* translucent overlays */}
          <div className="absolute inset-0 bg-dark/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/30 to-dark"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gradient">
              Where AI Meets <br className="hidden md:block" /> Industrial Innovation
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Transforming industries with cutting-edge AI solutions that drive efficiency,
              innovation, and growth in the digital era.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link to="/services" className="glow-button animate-pulse-glow">
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full border-2 border-white/20 text-white font-medium transition-all hover:border-white/40 hover:bg-white/5 hover:scale-105 focus:outline-none"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Pushing the Boundaries of AI
            </h2>
            <p className="text-lg text-white/70">
              At DATAi2i, we blend cutting-edge AI technology with industrial expertise to solve
              complex challenges and drive innovation across sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Card 1 */}
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="bg-secondary/20 rounded-full p-4 mb-6">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovative Solutions</h3>
              <p className="text-white/70">
                Developing AI solutions that adapt to your unique business challenges and
                opportunities.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="bg-secondary/20 rounded-full p-4 mb-6">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Research Driven</h3>
              <p className="text-white/70">
                Continuously advancing our AI capabilities through rigorous research and
                development.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="bg-secondary/20 rounded-full p-4 mb-6">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Integration</h3>
              <p className="text-white/70">
                Seamlessly integrating AI capabilities into existing industrial processes and
                systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-dark/60">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Our Core Services
            </h2>
            <p className="text-lg text-white/70">
              Transformative AI solutions designed to address industry-specific challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Service 1 */}
            <div className="glass-card p-6 hover:-translate-y-2">
              <div className="mb-4 text-secondary">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">GenAI Innovation</h3>
              <p className="text-white/70 mb-4">
                Cutting-edge generative AI models customized for your business needs.
              </p>
              <Link
                to="/services"
                className="text-secondary font-medium hover:text-secondary/80 transition-colors inline-flex items-center"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="glass-card p-6 hover:-translate-y-2">
              <div className="mb-4 text-secondary">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Assistants</h3>
              <p className="text-white/70 mb-4">
                Intelligent virtual assistants that enhance customer experience and operational
                efficiency.
              </p>
              <Link
                to="/services"
                className="text-secondary font-medium hover:text-secondary/80 transition-colors inline-flex items-center"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="glass-card p-6 hover:-translate-y-2">
              <div className="mb-4 text-secondary">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom AI Development</h3>
              <p className="text-white/70 mb-4">
                Tailored AI solutions developed to address your specific business requirements.
              </p>
              <Link
                to="/services"
                className="text-secondary font-medium hover:text-secondary/80 transition-colors inline-flex items-center"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 4 */}
            <div className="glass-card p-6 hover:-translate-y-2">
              <div className="mb-4 text-secondary">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Intelligent Industrial IoT</h3>
              <p className="text-white/70 mb-4">
                Smart IoT solutions that leverage AI for predictive maintenance and optimization.
              </p>
              <Link
                to="/services"
                className="text-secondary font-medium hover:text-secondary/80 transition-colors inline-flex items-center"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="glow-button">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-panel p-10 md:p-16 rounded-2xl max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Partner with us to leverage the power of AI and drive your business into the future of
              technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="glow-button">
                Contact Us Today
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 rounded-full border-2 border-white/20 text-white font-medium transition-all hover:border-white/40 hover:bg-white/5 hover:scale-105 focus:outline-none"
              >
                About Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
