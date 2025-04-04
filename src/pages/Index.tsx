
import Navbar from '@/components/Navbar';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import InterestsSection from '@/components/InterestsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-gradient-to-b from-portfolio-primary to-portfolio-dark min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <SkillsSection />
        <AboutSection />
        <EducationSection />
        <InterestsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
