import { Briefcase, GraduationCap, LucideIcon } from "lucide-react";

/**
 * Experience Component
 * Displays education and work experience in a timeline format
 * Features:
 * - Visual timeline design
 * - Education and experience sections
 * - Icon-based differentiation
 * - Responsive layout
 */
const Experience = () => {
  // Education data
  const education = [
    {
      institution: "Moringa School",
      degree: "Software Engineering Bootcamp",
      location: "Nairobi, Kenya",
      period: "2024 - Present",
      description:
        "Intensive fullstack software engineering program covering modern web technologies, data structures, algorithms, and best practices in software development.",
      highlights: [
        "Fullstack web development",
        "Data structures & algorithms",
        "Agile methodologies",
        "Team collaboration",
      ],
    },
  ];

  // Work experience data
  const experience = [
    {
      company: "Freelance Developer",
      position: "Fullstack Developer",
      location: "Remote",
      period: "2023 - Present",
      description:
        "Developing custom web applications for clients, focusing on responsive design and modern tech stacks.",
      highlights: [
        "Built 10+ client projects",
        "React & Node.js expertise",
        "Client satisfaction rate: 100%",
      ],
    },
    {
      company: "Tech Community Kenya",
      position: "Developer Mentor",
      location: "Nairobi, Kenya",
      period: "2023 - Present",
      description:
        "Mentoring aspiring developers in web development fundamentals and best practices.",
      highlights: [
        "Mentored 20+ students",
        "Conducted workshops",
        "Community building",
      ],
    },
  ];

  // Timeline Item Component for reusability
  const TimelineItem = ({
    icon: Icon,
    title,
    subtitle,
    location,
    period,
    description,
    highlights,
    isLast,
  }: {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    location: string;
    period: string;
    description: string;
    highlights: string[];
    isLast?: boolean;
  }) => (
    <div className="relative pl-8 sm:pl-12 pb-12">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-3 sm:left-5 top-8 bottom-0 w-0.5 bg-border" />
      )}

      {/* Icon circle */}
      <div className="absolute left-0 sm:left-2 top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center">
        <Icon size={16} className="text-primary-foreground" />
      </div>

      {/* Content card */}
      <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-primary font-medium mb-1">{subtitle}</p>
            <p className="text-sm text-foreground/60">{location}</p>
          </div>
          <span className="text-sm font-medium text-accent mt-2 sm:mt-0 bg-accent/10 px-3 py-1 rounded-full self-start">
            {period}
          </span>
        </div>
        <p className="text-foreground/70 mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start text-sm text-foreground/70">
              <span className="text-primary mr-2 mt-1">▹</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            My journey in software development and continuous learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 flex items-center text-foreground">
              <GraduationCap className="mr-3 text-primary" size={28} />
              Education
            </h3>
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                icon={GraduationCap}
                title={edu.institution}
                subtitle={edu.degree}
                location={edu.location}
                period={edu.period}
                description={edu.description}
                highlights={edu.highlights}
                isLast={index === education.length - 1}
              />
            ))}
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center text-foreground">
              <Briefcase className="mr-3 text-primary" size={28} />
              Work Experience
            </h3>
            {experience.map((exp, index) => (
              <TimelineItem
                key={index}
                icon={Briefcase}
                title={exp.company}
                subtitle={exp.position}
                location={exp.location}
                period={exp.period}
                description={exp.description}
                highlights={exp.highlights}
                isLast={index === experience.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;