
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link: string;
}

const ProjectsSection = () => {
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
    
    const element = document.getElementById('projects');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects: Project[] = [
    {
      title: "The Hydro-Water Wheel Project",
      description: "A sustainable approach to generate electricity by the turning force of flowing water.",
      link: "https://drive.google.com/drive/folders/1thUya0X9Dm90eWhi_ZxHi961dpHixXLV?usp=sharing"
    },
    {
      title: "The Autonomous Water Pump",
      description: "The IOT based project enhances reduces wastage of energy and water.",
      link: "https://drive.google.com/drive/folders/15j3OUQ-WA5eKgHVbXey1e9aVPSj6M3Qb?usp=sharing"
    },
    {
      title: "UDEMY LANDING PAGE",
      description: "The Final HTML/CSS project in the Stutern Academy.",
      link: "https://github.com/ifeyichukwu/udemy_landing_page"
    }
  ];
  
  return (
    <section id="projects" className="section-container">
      <h2>Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`group relative bg-gradient-to-br from-portfolio-dark to-portfolio-primary/70 rounded-xl p-6 min-h-[250px] border border-white/10 shadow-lg flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-portfolio-accent/20 rounded-bl-full rounded-tr-xl -z-10"></div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-200 mb-6">{project.description}</p>
            </div>
            
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-portfolio-light bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg transition-all duration-300 self-start group-hover:bg-portfolio-accent/30"
            >
              <span>View Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
