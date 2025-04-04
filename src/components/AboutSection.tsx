
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
              src="/lovable-uploads/63f0f8a9-8588-42e5-8536-2724bf654e12.png" 
              alt="Gospel Ifeyichukwu Arinze" 
              className="relative w-64 h-80 md:w-80 md:h-96 object-cover rounded-2xl border-4 border-white/20 shadow-xl"
            />
          </div>
        </div>
        
        <div className="w-full lg:w-2/3 text-portfolio-light">
          <p className="mb-4 leading-relaxed">
            Gospel is a passionate innovator, problem solver, and tech enthusiast
            with a background in Electronics and Computer Engineering. He has a
            strong interest in robotics, artificial intelligence, and software
            development, constantly exploring ways to apply technology to
            real-world challenges.
          </p>
          <p className="mb-4 leading-relaxed">
            His passion for sustainability and energy innovation drives his work
            on projects like real-time energy monitoring, smart home automation,
            and prepaid metering systems. Beyond tech, he is deeply committed to
            youth empowerment, leadership, and community engagement, actively
            contributing to organizations like SPE LASU and RAIN-INN LASU to drive
            impact.
          </p>
          <p className="mb-4 leading-relaxed">
            Gospel thrives on collaboration, continuous learning, and building
            solutions that make a difference.
          </p>
          <p className="leading-relaxed">
            His motivation comes from a desire to empower people, optimize
            systems, and shape the future of technology in Africa and beyond. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
