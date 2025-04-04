
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const navLinks = [
    { href: "#programming_languages", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#educational_background", label: "Education" },
    { href: "#interests", label: "Interests" },
    { href: "#projects", label: "Projects" },
    { href: "#contact_info", label: "Contact" }
  ];

  return (
    <footer className="bg-portfolio-dark py-10 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <button 
            onClick={scrollToTop}
            className="bg-portfolio-accent/20 hover:bg-portfolio-accent/30 p-3 rounded-full transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="text-sm md:text-base text-portfolio-light px-3 py-2 rounded-md transition-all hover:bg-white/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="text-center text-sm text-gray-400">
          <p>Designed & Developed with ❤️ by Gospel Ifeyichukwu Arinze</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
