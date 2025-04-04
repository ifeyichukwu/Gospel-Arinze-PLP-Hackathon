
import { useEffect, useState } from 'react';
import { Briefcase, GraduationCap, School } from 'lucide-react';

interface Education {
  id: string;
  title: string;
  institution: string;
  url: string;
  years: string;
  degree: string;
  icon: React.ReactNode;
}

const EducationSection = () => {
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
    
    const element = document.getElementById('educational_background');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const education: Education[] = [
    {
      id: "tertiary",
      title: "Tertiary Education",
      institution: "Lagos State University",
      url: "https://lasu.edu.ng/",
      years: "2022 - Present",
      degree: "Electronics and Computer Engineering",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      id: "secondary",
      title: "Secondary Education",
      institution: "King's College Lagos",
      url: "https://kingscollegelagos.sch.ng/home",
      years: "2016 - 2022",
      degree: "Senior School Certificate",
      icon: <School className="w-6 h-6" />
    },
    {
      id: "primary",
      title: "Primary Education",
      institution: "CEDEC Int'l Schools",
      url: "https://cedecinternationalschools.org/",
      years: "2007 - 2016",
      degree: "First School Leaving Certificate",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];
  
  return (
    <section id="educational_background" className="section-container">
      <h2>Educational Background</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {education.map((edu, index) => (
          <div 
            key={edu.id}
            className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg transition-all duration-500 hover:transform hover:translate-y-[-5px] hover:shadow-xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-portfolio-accent/20 p-3 rounded-full">
                {edu.icon}
              </div>
              <h3 className="text-xl font-bold">{edu.title}</h3>
            </div>
            
            <ul className="space-y-4 text-center">
              <li className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                <a 
                  href={edu.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-portfolio-light hover:text-portfolio-accent transition-colors"
                >
                  {edu.institution}
                </a>
              </li>
              <li className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                {edu.years}
              </li>
              <li className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                {edu.degree}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
