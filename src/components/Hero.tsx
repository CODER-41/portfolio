import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

/**
 * Hero Component
 * Full-screen landing section with introduction and CTA
 * Features:
 * - Background image with overlay
 * - Animated text elements
 * - Social media links
 * - Scroll indicator
 */
const Hero = () => {
  // Social media links configuration
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "#contact", label: "Email" },
  ];

  // Smooth scroll to next section
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading with Animation */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in">
          Hi, I'm{" "}
          <span className="text-primary inline-block hover:scale-110 transition-transform">
            Ronny Mboya
          </span>
        </h1>

        {/* Subheading with Delayed Animation */}
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 sm:mb-8 animate-fade-in-up [animation-delay:200ms]">
          Fullstack Software Engineer
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-12 animate-fade-in-up [animation-delay:400ms]">
          Passionate about building scalable web applications and solving complex
          problems through code. Currently sharpening my skills at Moringa School, Kenya.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 animate-fade-in-up [animation-delay:600ms]">
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-6 text-lg"
            onClick={() => {
              const projectsSection = document.querySelector("#projects");
              projectsSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
            onClick={() => {
              const contactSection = document.querySelector("#contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-6 justify-center mb-16 animate-fade-in-up [animation-delay:800ms]">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              <social.icon size={28} />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce hover:text-accent transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
