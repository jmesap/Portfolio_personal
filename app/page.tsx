
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import EducationSection from '../components/EducationSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
