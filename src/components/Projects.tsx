import { Github, ExternalLink, Mic, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Jarvis — Voice Activated Command System",
    tagline: "Voice assistant built with Python & AI",
    description:
      "A sophisticated voice-activated command system that uses speech recognition, intent parsing, and command execution. Built using Python and AI libraries for natural language understanding.",
    tech: ["Python", "AI/ML", "Speech Recognition", "NLU"],
    icon: Mic,
    github: "https://github.com/Divyansh-techi",
    highlights: [
      "Voice recognition with high accuracy",
      "Custom intent parsing engine",
      "Extensible command architecture",
    ],
  },
  {
    title: "SIH Internship Recommendation Engine",
    tagline: "Smart suggestions for students",
    description:
      "An intelligent recommendation engine that suggests relevant internships to students based on their skills, interests, and academic background. Developed as a group project.",
    tech: ["Python", "Machine Learning", "Data Analysis", "Flask"],
    icon: Search,
    github: "https://github.com/Divyansh-techi",
    highlights: [
      "Personalized recommendations",
      "Skill-based matching algorithm",
      "User-friendly interface",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container bg-card/30">
      <div className="text-center mb-12">
        <p className="text-secondary text-sm font-medium mb-2">Featured Work</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          My <span className="text-primary">Projects</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card-glass p-6 group hover:border-primary/50 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <project.icon className="text-primary" size={24} />
              </div>
              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>

            {/* Content */}
            <span className="text-secondary text-xs font-medium">{project.tagline}</span>
            <h3 className="text-xl font-semibold text-foreground mt-1 mb-3">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

            {/* Highlights */}
            <ul className="space-y-2 mb-6">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {highlight}
                </li>
              ))}
            </ul>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="text-center mt-12">
        <Button variant="hero-outline" size="lg" asChild>
          <a href="https://github.com/Divyansh-techi" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
