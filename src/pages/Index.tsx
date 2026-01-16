/**
 * Index Page - Main Portfolio Page
 * 
 * This is the main landing page that combines all portfolio components
 * in a single-page layout with smooth scrolling between sections.
 * 
 * Components included:
 * - Navigation: Fixed header with smooth scroll navigation
 * - Hero: Landing section with introduction and CTA
 * - About: Personal introduction and key attributes
 * - Skills: Technical skills organized by category
 * - Projects: Portfolio of featured projects
 * - Experience: Education and work experience timeline
 * - Contact: Contact form and information
 * - Footer: Social links and copyright
 */

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Navigation Bar */}
      <Navigation />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section - Full screen landing */}
        <Hero />

        {/* About Section - Personal introduction */}
        <About />

        {/* Skills Section - Technical skills showcase */}
        <Skills />

        {/* Projects Section - Portfolio showcase */}
        <Projects />

        {/* Experience Section - Education and work history */}
        <Experience />

        {/* Contact Section - Contact form and info */}
        <Contact />
      </main>

      {/* Footer - Social links and copyright */}
      <Footer />
    </div>
  );
};

export default Index;
