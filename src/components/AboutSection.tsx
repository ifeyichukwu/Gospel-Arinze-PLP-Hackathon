
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
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
    
    const element = document.getElementById('about');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="about" className="section-container">
      <h2>Meet Gospel Ifeyichukwu Arinze</h2>
      
      <div className={`flex flex-col lg:flex-row gap-8 items-center justify-between bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent to-portfolio-secondary rounded-2xl blur-md opacity-30 transform -rotate-3 scale-105"></div>
            <img 
              src="/lovable-uploads/8c82f56d-a3f3-4901-9926-e956e2e830b1.png" 
              alt="Gospel Ifeyichukwu Arinze" 
              className="relative w-64 h-80 md:w-80 md:h-96 object-cover rounded-2xl border-4 border-white/20 shadow-xl"
            />
          </div>
        </div>
        
        <div className="w-full lg:w-2/3 text-portfolio-light">
          <p className="mb-4 leading-relaxed">
            Gospel is a passionate software engineer and AI enthusiast with a background in Electronics and Computer Engineering. He is driven by a desire to build intelligent systems that solve real-world problems, with interests in machine learning, automation, and impactful tech innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
