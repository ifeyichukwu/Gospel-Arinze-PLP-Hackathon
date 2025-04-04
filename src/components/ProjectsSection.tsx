
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link: string;
  imageSrc?: string;
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
      link: "https://drive.google.com/drive/folders/1thUya0X9Dm90eWhi_ZxHi961dpHixXLV?usp=sharing",
      imageSrc: "/lovable-uploads/5b816c24-f7d2-44cd-9212-5e6bf4bc35e4.png"
    },
    {
      title: "The Autonomous Water Pump",
      description: "The IOT based project enhances reduces wastage of energy and water.",
      link: "https://drive.google.com/drive/folders/15j3OUQ-WA5eKgHVbXey1e9aVPSj6M3Qb?usp=sharing",
      imageSrc: "/lovable-uploads/af55577e-0949-46a7-94d1-92eade836704.png"
    },
    {
      title: "UDEMY LANDING PAGE",
      description: "The Final HTML/CSS project in the Stutern Academy.",
      link: "https://github.com/ifeyichukwu/udemy_landing_page",
      imageSrc: "/lovable-uploads/22e3f4fb-8f4a-40aa-901b-f045c31e8e23.png"
    }
  ];
  
  return (
    <section id="projects" className="section-container">
      <h2>Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`group relative bg-gradient-to-br from-portfolio-dark to-portfolio-primary/70 rounded-xl overflow-hidden shadow-lg flex flex-col transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Project Image */}
            <div className="h-48 overflow-hidden">
              <img 
                src={project.imageSrc} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            {/* Project Info */}
            <div className="p-6 border border-white/10 border-t-0 flex flex-col justify-between flex-grow">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
