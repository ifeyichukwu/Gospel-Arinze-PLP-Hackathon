
import { useEffect, useState } from 'react';
import { Code, Database, Terminal } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

const SkillsSection = () => {
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
    
    const element = document.getElementById('programming_languages');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skills: Skill[] = [
    { name: "Python", level: 85, icon: <Terminal className="w-5 h-5" /> },
    { name: "C++", level: 75, icon: <Code className="w-5 h-5" /> },
    { name: "HTML/CSS", level: 80, icon: <Code className="w-5 h-5" /> },
    { name: "Data Analysis", level: 70, icon: <Database className="w-5 h-5" /> },
  ];
  
  return (
    <section id="programming_languages" className="section-container">
      <h2 className="mb-12">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:bg-white/15 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-portfolio-accent/20 p-3 rounded-full">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold m-0">{skill.name}</h3>
            </div>
            
            <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-portfolio-accent to-portfolio-secondary rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: isVisible ? `${skill.level}%` : '0%',
                  transitionDelay: `${index * 100 + 300}ms`
                }}
              />
            </div>
            <div className="mt-2 text-right text-sm font-semibold">{skill.level}%</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
