
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#programming_languages", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#educational_background", label: "Education" },
    { href: "#interests", label: "Interests" },
    { href: "#projects", label: "Projects" },
    { href: "#contact_info", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-portfolio-dark/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-portfolio-light text-xl md:text-2xl font-bold">
            Gospel<span className="text-portfolio-accent">Arinze</span>
          </a>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <li key={index} className="px-1">
                <a 
                  href={link.href} 
                  className="text-portfolio-light px-4 py-2 rounded-full transition-all hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Navigation Icon */}
          <button 
            className="md:hidden text-portfolio-light p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-portfolio-dark/95 backdrop-blur-md shadow-lg animate-fade-in">
            <ul className="py-4 px-4 space-y-3">
              {navLinks.map((link, index) => (
                <li key={index} className="border-b border-white/10 pb-2">
                  <a 
                    href={link.href} 
                    className="block text-portfolio-light py-2 px-4 rounded-md transition-all hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
