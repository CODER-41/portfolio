import { Code2, Heart, Rocket, Users } from "lucide-react";

/**
 * About Component
 * Introduces Ronny Mboya with positive attributes
 * Features:
 * - Personal introduction
 * - Key attributes with icons
 * - Responsive grid layout
 */
const About = () => {
  // Key attributes with icons and descriptions
  const attributes = [
    {
      icon: Code2,
      title: "Problem Solver",
      description:
        "Passionate about tackling complex challenges with elegant, efficient solutions that make a real impact.",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description:
        "Quick to adapt to new technologies and frameworks, constantly expanding my skill set to stay ahead.",
    },
    {
      icon: Users,
      title: "Team Player",
      description:
        "Excellent collaborator who thrives in team environments and values clear communication.",
    },
    {
      icon: Heart,
      title: "Dedicated",
      description:
        "Committed to writing clean, maintainable code and delivering high-quality work that exceeds expectations.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Introduction */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Hi, I'm Ronny Mboya
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              I'm a passionate fullstack software engineer currently studying at Moringa
              School in Kenya. My journey in tech is driven by a deep curiosity about how
              things work and a desire to build solutions that make a difference.
            </p>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              With a strong foundation in both frontend and backend development, I enjoy
              creating seamless user experiences backed by robust server-side logic. Every
              project is an opportunity to learn something new and push my boundaries.
            </p>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or helping fellow developers in the community. I
              believe in the power of collaboration and continuous learning.
            </p>
          </div>

          {/* Right Column - Attributes Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {attributes.map((attribute, index) => {
              const Icon = attribute.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  {/* Title */}
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    {attribute.title}
                  </h4>
                  {/* Description */}
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {attribute.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;