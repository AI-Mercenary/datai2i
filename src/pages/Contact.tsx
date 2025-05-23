import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulating form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    });

    // Reset form
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      // Reset status
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: "",
        });
      }, 5000);
    }, 1000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-8 md:py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-gradient">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-4">
              Have questions about our AI solutions? Ready to start your digital
              transformation journey? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details and Form */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="glass-card bg-purple-950 p-4 text-white hover:bg-purple-950 md:p-6">
                <h2 className="text-2xl font-bold mb-3">Contact Information</h2>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-white mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-white">
                      A-HUB, AU North Campus, Andhra University, Visakhapatnam,
                      AP - 530003
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-white mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:team@datai2i.com"
                      className="text-white hover:text-purple-500 transition-colors"
                      onClick={(e) => {
                        // Ensure the mailto link opens the default email client
                        window.location.href = "mailto:team@datai2i.com";
                      }}
                    >
                      team@datai2i.com
                    </a>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
                  <div className="flex space-x-2">
                    <a
                      href="https://x.com"
                      aria-label="Twitter"
                      className="bg-black hover:bg-purple-400 p-2 rounded-full text-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/datai2i/"
                      aria-label="LinkedIn"
                      className="bg-blue-950 hover:bg-blue-700/20 p-2 rounded-full text-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://discord.com"
                      aria-label="Discord"
                      className="bg-purple-600 hover:bg-slate-400 p-2 rounded-full text-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.078.037 13.808 13.808 0 00-.651 1.34 18.736 18.736 0 00-5.588 0 13.33 13.33 0 00-.662-1.34.077.077 0 00-.078-.037 19.736 19.736 0 00-4.885 1.515.07.07 0 00-.032.027C1.81 9.039.905 13.579 1.305 18.057a.082.082 0 00.031.055 19.998 19.998 0 005.995 3.058.077.077 0 00.084-.027 14.157 14.157 0 001.192-1.937.074.074 0 00-.041-.103 13.128 13.128 0 01-1.885-.905.077.077 0 01-.008-.128c.127-.094.254-.19.38-.287a.074.074 0 01.077-.01c3.927 1.798 8.18 1.798 12.061 0a.074.074 0 01.078.009c.127.097.254.193.381.288a.077.077 0 01-.006.127 12.577 12.577 0 01-1.886.905.074.074 0 00-.04.104 15.163 15.163 0 001.19 1.936.076.076 0 00.084.028 19.941 19.941 0 006.002-3.058.078.078 0 00.03-.055c.5-5.177-.838-9.663-3.548-13.661a.062.062 0 00-.03-.027zM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.174 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419zm7.974 0c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.174 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="glass-card p-0 overflow-hidden flex flex-row h-64">
                <div className="w-1/2 h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.5416269115927!2d83.3186785!3d17.7321504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394345edcc4fb7%3A0x84e06fa1a732211f!2z4LmAIGh1YjogQVVJQyAtIE5vcnRoIENhbXB1cw!5e0!3m2!1sen!2sin!4v1716194184310!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DATAi2i Location (AUIC North Campus)"
                  />
                </div>
                <div className="w-1/2 h-full">
                  <img
                    src="/a.hub.jpeg"
                    alt="A Hub Image"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-4 md:p-6">
              <h2 className="text-2xl font-bold mb-3">Send Us a Message</h2>
              {formStatus.submitted ? (
                <div
                  className={`p-3 rounded-lg mb-3 ${
                    formStatus.success
                      ? "bg-green-500/20 text-green-200"
                      : "bg-red-500/20 text-red-200"
                  }`}
                >
                  {formStatus.message}
                </div>
              ) : null}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="phone" className="block text-white/80 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-white/80 mb-1"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-white/80 mb-1">
                    Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white focus:outline-none focus:border-secondary"
                  >
                    <option value="" className="bg-dark">
                      Select a service
                    </option>
                    <option value="genai" className="bg-dark">
                      GenAI Innovation
                    </option>
                    <option value="assistants" className="bg-dark">
                      AI Assistants
                    </option>
                    <option value="custom" className="bg-dark">
                      Custom AI Development
                    </option>
                    <option value="iot" className="bg-dark">
                      Intelligent Industrial IoT
                    </option>
                    <option value="other" className="bg-dark">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/80 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary resize-none"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div>
                  <button type="submit" className="glow-button w-full">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;