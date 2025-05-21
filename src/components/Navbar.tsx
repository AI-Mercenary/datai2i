import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`glass-navbar bg-purple-800/50 transition-all duration-300 ${scrolled ? 'py-1' : 'py-1'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center ml-0">
          <img
            src="/datai2i.png"
            alt="DATAi2i Logo"
            className="w-30 h-20 object-contain"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`text-base font-medium transition-all duration-300 hover:text-purple-950 
              ${location.pathname === item.path ? 'text-slate-200' : 'text-slate-200'}`}
            >
              {item.name}
            </Link>
          ))}
          <a 
            href="mailto:team@datai2i.com" 
            className="glow-button bg-purple-900 hover:bg-purple-950 text-base"
          >
            Get Started
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-purple-950"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden glass-panel mt-1 py-4 px-4 bg-purple-400/30 backdrop-blur-md ${scrolled ? 'backdrop-blur-lg' : ''}`}>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className={`text-base font-medium transition-all duration-300 hover:text-white py-2
                ${location.pathname === item.path ? 'text-purple-950' : 'text-purple-950'}`}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="mailto:team@datai2i.com" 
              className="glow-button text-center mt-2 text-base"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;