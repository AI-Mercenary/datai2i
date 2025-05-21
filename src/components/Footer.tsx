import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-purple-950 backdrop-blur-md border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4 ml-0">
              <img
                src="/datai2i.png"
                alt="DATAi2i Logo"
                className="w-30 h-22 object-contain"
              />
            </Link>
            <p className="text-white mb-4 text-sm">
              Leading the way in AI innovation and industrial transformation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com"
                aria-label="X"
                className="text-white bg-black hover:bg-gray-800 rounded-full p-1 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-blue-800 bg-linkedin hover:bg-white rounded-full p-1 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://discord.gg/your-invite"
                aria-label="Discord"
                className="text-white bg-discord hover:bg-purple-700 rounded-full p-1 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3853-.397-.8748-.6083-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8851 1.515.0699.0699 0 00-.032.0277C.5336 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0775.0105c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6061 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1349-1.0272-2.1349-2.2954s.955-2.2954 2.1349-2.2954c1.18 0 2.1349 1.0272 2.1349 2.2954s-.955 2.2954-2.1349 2.2954zm7.96 0c-1.1825 0-2.1349-1.0272-2.1349-2.2954s.955-2.2954 2.1349-2.2954c1.18 0 2.1349 1.0272 2.1349 2.2954s-.955 2.2954-2.1349 2.2954z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/60 hover:text-secondary transition-colors text-sm">Home</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-secondary transition-colors text-sm">Services</Link></li>
              <li><Link to="/blogs" className="text-white/60 hover:text-secondary transition-colors text-sm">Blogs</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-secondary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-secondary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-white/60 hover:text-secondary transition-colors text-sm">GenAI Innovation</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-secondary transition-colors text-sm">AI Assistants</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-secondary transition-colors text-sm">Custom AI Development</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-secondary transition-colors text-sm">Intelligent Industrial IoT</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-white font-medium mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start text-white/60">
                <svg className="w-6 h-6 mr-2.5 mt-0.5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>A-HUB, AU North Campus, Andhra University, Visakhapatnam, AP - 530003</span>
              </p>
              <p className="flex items-center text-white/60">
                <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+91 63035 02335</span>
              </p>
              <p className="flex items-center text-white/60">
                <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a
                  href="mailto:team@datai2i.com"
                  className="text-white/80 hover:text-secondary transition-colors text-sm"
                >
                  team@datai2i.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 text-center">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} DATAi2i Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;