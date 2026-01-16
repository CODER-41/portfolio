import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
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

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Reduced gradient overlay opacity for more image visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/30 to-accent/10" />
        {/* Reduced dark overlay from 90% to 50% for better image visibility */}
        <div className="absolute inset-0 bg-background/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-float">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
            Hi, I&apos;m{" "}
            <span className="text-primary inline-block hover:scale-110 transition-transform duration-300 cursor-default drop-shadow-lg">
              Ronny Mboya
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 sm:mb-8 animate-slide-in-right drop-shadow-lg">
            Fullstack Software Engineer
          </p>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto mb-8 sm:mb-12 animate-fade-in-up animation-delay-400 drop-shadow-md">
          Passionate about building scalable web applications and solving complex
          problems through code. Currently sharpening my skills at Moringa School, Kenya.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 animate-fade-in-up animation-delay-600">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
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
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg transition-all hover:scale-105 bg-background/80 backdrop-blur-sm"
            onClick={() => {
              const contactSection = document.querySelector("#contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex gap-6 justify-center mb-16 animate-fade-in-up animation-delay-800">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 drop-shadow-lg"
              aria-label={social.label}
            >
              <social.icon size={28} />
            </a>
          ))}
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce hover:text-accent transition-colors duration-300 cursor-pointer drop-shadow-lg"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;