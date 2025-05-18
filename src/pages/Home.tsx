"use client";

import { useRef, useEffect } from "react";

const ArrowIcon = () => (
  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
);

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const tryPlay = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn("Autoplay failed, trying again...");
            setTimeout(() => {
              video.play().catch((err) => console.error("Retry failed:", err));
            }, 1000);
          });
        }
      };

      const timeout = setTimeout(tryPlay, 300);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <main className="relative">
      {/* Video Background */}
      <section className="relative h-screen overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          aria-label="Futuristic AI background animation"
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/ai-brain.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Building Tomorrow&apos;s Intelligence
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We leverage the power of artificial intelligence to solve real-world challenges and empower your business for the future.
            </p>
            <a
              href="#about"
              className="glow-button animate-pulse-glow px-6 py-3 rounded-full text-white font-medium transition-shadow"
            >
              Discover More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6 md:px-16 bg-background">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our mission is to revolutionize industries with cutting-edge AI solutions that drive efficiency, innovation, and growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovative Solutions",
              desc: "Harness the latest advancements in AI to solve complex problems.",
            },
            {
              title: "Expert Team",
              desc: "Work with leading experts in AI, ML, and data science.",
            },
            {
              title: "Client Focused",
              desc: "Tailored strategies to meet your specific business needs.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card p-6 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-4 text-secondary group-hover:text-accent transition-colors">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="py-20 px-6 md:px-16 bg-background">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the wide range of AI services we offer to help your business thrive in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Consulting",
              desc: "Strategic advice to integrate AI into your business operations.",
            },
            {
              title: "Custom AI Solutions",
              desc: "Tailored machine learning models and tools for your use case.",
            },
            {
              title: "Data Strategy",
              desc: "Organize and leverage data for intelligent decision-making.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="glass-card p-6 group hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.desc}</p>
              <a href="/services" className="text-accent font-medium inline-flex items-center group-hover:underline">
                Learn More <ArrowIcon />
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
