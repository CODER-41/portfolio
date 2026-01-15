import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Projects Component
 * Showcases portfolio projects in a card layout
 * Features:
 * - Project cards with images
 * - Technology tags
 * - Links to live demos and source code
 * - Hover effects
 */
const Projects = () => {
  // Project data array for easy maintenance and scalability
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and secure payment integration using Stripe.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application featuring location-based forecasts, interactive maps, and detailed weather metrics with a beautiful UI.",
      technologies: ["React", "OpenWeather API", "Chart.js", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    },
    {
      title: "Blog Platform",
      description:
        "Modern blogging platform with markdown support, comment system, user profiles, and content management capabilities.",
      technologies: ["Next.js", "MongoDB", "Express", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
    },
    {
      title: "Fitness Tracker",
      description:
        "Personal fitness tracking application with workout logging, progress charts, goal setting, and nutritional information.",
      technologies: ["React Native", "Node.js", "MongoDB", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with data visualization, trend analysis, and automated reporting features.",
      technologies: ["Vue.js", "Python", "Django", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in fullstack development and
            problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary rounded-full hover:bg-accent transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary rounded-full hover:bg-accent transition-colors"
                    aria-label="View source code"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                {/* Description */}
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-border hover:border-primary"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
