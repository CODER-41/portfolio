/**
 * Skills Component
 * Displays technical skills organized by category
 * Features:
 * - Categorized skill lists (Frontend, Backend, Database, Tools)
 * - Visual skill badges with hover effects
 * - Responsive grid layout
 * - Color-coded categories for visual distinction
 */
const Skills = () => {
  // Skills organized by category for better presentation
  // Each category has a title, array of skills, and a color theme
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Design",
        "Redux",
      ],
      color: "primary", // Uses primary color theme
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "Django",
        "RESTful APIs",
        "GraphQL",
        "Authentication",
        "Database Design",
      ],
      color: "accent", // Uses accent color theme
    },
    {
      title: "Database",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Firebase",
        "Redis",
        "Database Optimization",
      ],
      color: "primary",
    },
    {
      title: "Tools & Others",
      skills: [
        "Git & GitHub",
        "VS Code",
        "Docker",
        "AWS",
        "Agile/Scrum",
        "Testing (Jest)",
        "CI/CD",
        "Linux",
      ],
      color: "accent",
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Main heading with highlighted "Skills" text */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          {/* Decorative underline bar */}
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          {/* Section description */}
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build
            exceptional digital experiences.
          </p>
        </div>

        {/* Skills Grid - 2 columns on medium+ screens */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map through each skill category */}
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-primary/50 transition-all duration-300"
            >
              {/* Category Title with decorative bar */}
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-foreground flex items-center">
                {/* Vertical accent bar */}
                <span className="w-2 h-8 bg-primary rounded mr-3" />
                {category.title}
              </h3>

              {/* Skills List - flexbox with wrapping */}
              <div className="flex flex-wrap gap-3">
                {/* Map through each skill in the category */}
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      // Apply different colors based on category color
                      category.color === "primary"
                        ? "bg-primary/10 text-primary hover:bg-primary/20"
                        : "bg-accent/10 text-accent hover:bg-accent/20"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info - Footer text */}
        <div className="mt-12 text-center">
          <p className="text-foreground/60 text-sm sm:text-base">
            Always learning and expanding my skill set to stay current with industry trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;