import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Hero Component
 * Full-screen landing section with introduction and call-to-action
 * 
 * Features:
 * - Background image with dark overlay for text readability
 * - Animated text elements with staggered animation delays
 * - Interactive social media links with hover effects
 * - Smooth scroll indicator to navigate to next section
 * - Responsive design for all screen sizes
 * - Call-to-action buttons for user engagement
 * 
 * @returns {JSX.Element} Hero section component
 */
const Hero = () => {
  /**
   * Background image path
   * Using direct path for Vite to resolve the asset
   * Replace with your actual background image or use gradient fallback
   */
  const heroBg = "/src/assets/hero-bg.jpg";
  
  /**
   * Social media links configuration
   * Update these URLs with your actual social media profiles
   */
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/yourusername", 
      label: "GitHub" 
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/yourusername", 
      label: "LinkedIn" 
    },
    { 
      icon: Mail, 
      href: "#contact", 
      label: "Email" 
    },
  ];

  /**
   * Smooth scroll to the About section
   * Triggered by the scroll indicator button
   */
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Layer with Gradient Fallback */}
      <div className="absolute inset-0 z-0">
        {/* Background image - will display your hero-bg.jpg */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Gradient overlay as fallback if image doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        {/* Dark overlay - ensures text readability (90% opacity) */}
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Main Content Container - positioned above background */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Heading with fade-in animation */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in">
          Hi, I'm{" "}
          {/* Name highlighted with primary color and hover scale effect */}
          <span className="text-primary inline-block hover:scale-110 transition-transform duration-300 cursor-default">
            Ronny Mboya
          </span>
        </h1>

        {/* Subheading with 200ms animation delay */}
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 sm:mb-8 animate-fade-in-up animation-delay-200">
          Fullstack Software Engineer
        </p>

        {/* Description paragraph with 400ms animation delay */}
        <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-12 animate-fade-in-up animation-delay-400">
          Passionate about building scalable web applications and solving complex
          problems through code. Currently sharpening my skills at Moringa School, Kenya.
        </p>

        {/* Call-to-Action Buttons with 600ms animation delay */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 animate-fade-in-up animation-delay-600">
          
          {/* Primary CTA Button - View My Work */}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => {
              // Smooth scroll to projects section
              const projectsSection = document.querySelector("#projects");
              projectsSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
          </Button>
          
          {/* Secondary CTA Button - Get In Touch */}
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg transition-all hover:scale-105"
            onClick={() => {
              // Smooth scroll to contact section
              const contactSection = document.querySelector("#contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Media Links with 800ms animation delay */}
        <div className="flex gap-6 justify-center mb-16 animate-fade-in-up animation-delay-800">
          {/* Map through social links array */}
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              // Open external links in new tab
              target={social.href.startsWith("http") ? "_blank" : undefined}
              // Security attributes for external links
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              // Hover effects: color change and scale
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              // Accessibility label for screen readers
              aria-label={social.label}
            >
              {/* Render the Lucide icon component */}
              <social.icon size={28} />
            </a>
          ))}
        </div>

        {/* Scroll Indicator - Animated bounce to draw attention */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce hover:text-accent transition-colors duration-300 cursor-pointer"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;