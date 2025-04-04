
import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Twitter, Send, MapPin, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('contact_info');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out, I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gospel-arinze-55590424a/",
      icon: <Linkedin className="w-5 h-5" />,
      hoverColor: "hover:bg-blue-500"
    },
    {
      name: "GitHub",
      url: "https://github.com/ifeyichukwu",
      icon: <Github className="w-5 h-5" />,
      hoverColor: "hover:bg-gray-700"
    },
    {
      name: "X",
      url: "https://x.com/gospel8089?t=B3ZC2KXPTgHytNVMucumyw&s=09",
      icon: <Twitter className="w-5 h-5" />,
      hoverColor: "hover:bg-black"
    }
  ];

  return (
    <section id="contact_info" className="section-container">
      <h2>Contact Me</h2>
      
      <div className={`flex flex-col md:flex-row gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-bold mb-6 text-center">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-accent/50"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-accent/50"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-accent/50 resize-none"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-portfolio-accent to-portfolio-secondary text-white font-medium py-3 px-6 rounded-lg transition-all hover:opacity-90 disabled:opacity-70"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-bold mb-6 text-center">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-portfolio-accent/20 p-2 rounded-full">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Address</h4>
                <p className="text-sm text-gray-200">11 Raphael Edeh Close, Amuwo-Odoffin, Lagos.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-portfolio-accent/20 p-2 rounded-full">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <a 
                  href="mailto:gospelarinzestuff@gmail.com" 
                  className="text-sm text-gray-200 hover:text-portfolio-accent transition-colors"
                >
                  gospelarinzestuff@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-portfolio-accent/20 p-2 rounded-full">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Phone</h4>
                <a 
                  href="tel:+234 808317090" 
                  className="text-sm text-gray-200 hover:text-portfolio-accent transition-colors"
                >
                  +234 808317090
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-4 text-center">Follow Me</h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/10 rounded-full transition-all duration-300 ${link.hoverColor} hover:text-white`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-white/10 text-center text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Gospel Ifeyichukwu Arinze. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
