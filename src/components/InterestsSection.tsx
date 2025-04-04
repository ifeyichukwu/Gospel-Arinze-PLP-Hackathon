
import { useEffect, useState } from 'react';
import { Code, Database, Brain } from 'lucide-react';

interface Interest {
  title: string;
  icon: React.ReactNode;
  imageSrc: string; 
}

const InterestsSection = () => {
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
    
    const element = document.getElementById('interests');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const interests: Interest[] = [
    {
      title: "Software Development",
      icon: <Code className="w-8 h-8" />,
      imageSrc: "/software-placeholder.jpg"
    },
    {
      title: "Data Analysis",
      icon: <Database className="w-8 h-8" />,
      imageSrc: "/data-placeholder.jpg"
    },
    {
      title: "Artificial Intelligence",
      icon: <Brain className="w-8 h-8" />,
      imageSrc: "/ai-placeholder.jpg"
    }
  ];
  
  return (
    <section id="interests" className="section-container">
      <h2>Interests</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {interests.map((interest, index) => (
          <div 
            key={index}
            className={`group relative overflow-hidden rounded-xl aspect-video bg-portfolio-dark border border-white/10 transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 bg-portfolio-primary/30 group-hover:bg-portfolio-primary/10 transition-all duration-500">
              <img 
                src={interest.imageSrc}
                alt={interest.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 transform group-hover:scale-110"
              />
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-t from-portfolio-dark/90 to-transparent">
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-full mb-4 transform transition-all duration-500 group-hover:scale-110">
                {interest.icon}
              </div>
              <h3 className="text-2xl font-bold text-white text-center m-0">
                {interest.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;
