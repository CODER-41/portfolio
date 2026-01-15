import { Github, Linkedin, Mail, Heart } from "lucide-react";

/**
 * Footer Component
 * Website footer with social links and copyright
 * Features:
 * - Social media icons
 * - Copyright information
 * - Back to top functionality
 * - Responsive layout
 */
const Footer = () => {
  // Social media links array
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "#contact", label: "Email" },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Name */}
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold text-primary hover:text-accent transition-colors cursor-pointer"
          >
            Ronny Mboya
          </button>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-border" />

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-foreground/60 text-sm flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-primary" /> by Ronny Mboya
            </p>
            <p className="text-foreground/40 text-xs">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="text-sm text-primary hover:text-accent transition-colors font-medium"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
