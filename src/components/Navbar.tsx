
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
    <nav className={`glass-navbar transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-xl flex items-center">
          <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3L4 7.5V16.5L12 21L20 16.5V7.5L12 3Z" stroke="#896deb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 9L12 15" stroke="#896deb" strokeWidth="2" strokeLinecap="round" />
            <path d="M9 11.5L15 11.5" stroke="#896deb" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-gradient">DATAi2i</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-all duration-300 hover:text-secondary 
              ${location.pathname === item.path ? 'text-secondary' : 'text-white/80'}`}
            >
              {item.name}
            </Link>
          ))}
          <a 
            href="mailto:team@datai2i.com" 
            className="glow-button"
          >
            Get Started
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-white"
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
        <div className="md:hidden glass-panel mt-1 py-4 px-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-secondary py-2
                ${location.pathname === item.path ? 'text-secondary' : 'text-white/80'}`}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="mailto:team@datai2i.com" 
              className="glow-button text-center mt-2"
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
