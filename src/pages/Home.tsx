import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
    setIsMounted(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="/ai.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-purple-800/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark to-dark"></div>
        </div>
        <div className="relative z-10 container mx-auto px-2 md:px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gradient">
              Where AI Meets <br className="hidden md:block" /> Industrial Innovation
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Transforming industries with cutting-edge AI solutions that drive efficiency,
              innovation, and growth in the digital era.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link to="/services" className="glow-button animate-pulse-glow bg-purple-900 hover:bg-purple-950">
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
      <section className="py-16 md:py-24 w-full bg-white border-t border-purple-200">
        <div className="container mx-auto px-2 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-purple-950 px-4 py-2 rounded-md inline-block">
              Pushing the Boundaries of AI
            </h2>
            <p className="text-lg text-purple-900 font-bold">
              At DATAi2i, we blend cutting-edge AI technology with industrial expertise to solve
              complex challenges and drive innovation across sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            <div className="glass-card p-6 flex flex-col items-center text-center border-2 border-purple-950">
              <div className="bg-[#2D1247]/20 rounded-full p-4 mb-6">
                <svg
                  className="w-8 h-8 text-[#2D1247]"
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
              <h3 className="text-xl font-bold text-[#2D1247]">Innovative Solutions</h3>
              <p className="text-[#2D1247] font-bold">
                Developing AI solutions that adapt to your unique business challenges and
                opportunities.
              </p>
            </div>
            <div className="glass-card p-6 flex flex-col items-center text-center border-2 border-purple-950">
              <div className="bg-[#2D1247]/20 rounded-full p-4 mb-6">
                <svg
                  className="w-8 h-8 text-[#2D1247]"
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
              <h3 className="text-xl font-bold text-[#2D1247]">Research Driven</h3>
              <p className="text-[#2D1247] font-bold">
                Continuously advancing our AI capabilities through rigorous research and
                development.
              </p>
            </div>
            <div className="glass-card p-6 flex flex-col items-center text-center border-2 border-purple-950">
              <div className="bg-[#2D1247]/20 rounded-full p-4 mb-6">
                <svg
                  className="w-8 h-8 text-[#2D1247]"
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
              <h3 className="text-xl font-bold text-[#2D1247]">Industry Integration</h3>
              <p className="text-[#2D1247] font-bold">
                Seamlessly integrating AI capabilities into existing industrial processes and
                systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Services Preview */}
      <section className="py-16 bg-dark/60 w-full">
        <div className="container mx-auto px-2 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Our Core Services
            </h2>
            <p className="text-lg text-white/70">
              Transformative AI solutions designed to address industry-specific challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
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
      {/* Our Clients Section */}
      <section className="py-16 w-full bg-white border-t border-purple-950">
        <style>
          {`
            .marquee-content {
              display: flex;
              animation: marquee 20s linear infinite;
            }
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            @media (prefers-reduced-motion: reduce) {
              .marquee-content {
                animation: none;
                transform: translateX(0);
              }
            }
          `}
        </style>
        <div className="container mx-auto px-1 md:px-1">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-purple-950 px-2 py-2 rounded-md inline-block">
              Our Clients
            </h2>
            <p className="text-lg text-purple-900 font-bold">
              We’re proud to partner with industry leaders who trust our AI solutions to drive their success.
            </p>
          </div>
          <div className="overflow-hidden whitespace-nowrap">
            <div className={`flex gap-7 min-w-[200%] ${isMounted ? 'marquee-content' : ''}`}>
              {Array(10).fill(0).map((_, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center justify-center border-2 border-purple-950 transition-transform hover:-translate-y-2"
                >
                  <img
                    src="/datai2i.png"
                    alt="Client Logo"
                    className="h-35 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 w-full bg-dark border-white">
        <div className="container mx-auto px-2 md:px-6">
          <div className="glass-panel p-10 md:p-16 rounded-2xl max-w-4xl mx-auto text-center border-2 border-purple-950">
            <h2 className="text-3xl md:text-4xl font-black text-white/70 px-4 py-2 rounded-md inline-block">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white font-bold mb-8 max-w-2xl mx-auto">
              Partner with us to leverage the power of AI and drive your business into the future of
              technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full glow-button bg-purple-950 hover:bg-purple-950 text-white font-bold transition-all hover:scale-105 focus:outline-none shadow-glow animate-pulse-glow"
              >
                Contact Us Today
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 rounded-full border-2 border-purple-950 bg-purple-200 text-purple-950 font-bold transition-all hover:bg-purple-300 hover:scale-105 focus:outline-none"
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