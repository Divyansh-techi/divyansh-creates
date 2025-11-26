import { Code, Brain, MessageSquare, Zap } from "lucide-react";

const technicalSkills = [
  { name: "Java", level: 85 },
  { name: "Python", level: 80 },
  { name: "Go", level: 70 },
  { name: "SQL", level: 75 },
  { name: "C/C++", level: 75 },
  { name: "Web Development", level: 85 },
  { name: "AI Implementation", level: 75 },
  { name: "Git/GitHub", level: 80 },
];

const softSkills = [
  { name: "Communication", icon: MessageSquare },
  { name: "Problem Solving", icon: Brain },
  { name: "Multitasking", icon: Zap },
];

const techStack = [
  "HTML/CSS/JavaScript",
  "React",
  "Node.js",
  "Flask/FastAPI",
  "PostgreSQL",
  "Git",
  "Docker",
  "Linux",
];

const Skills = () => {
  return (
    <section id="skills" className="section-container bg-card/30">
      <div className="text-center mb-12">
        <p className="text-secondary text-sm font-medium mb-2">My Expertise</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Skills & <span className="text-primary">Technologies</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Technical Skills */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Code className="text-primary" size={24} />
            <h3 className="text-xl font-semibold text-foreground">Technical Skills</h3>
          </div>

          <div className="space-y-4">
            {technicalSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills & Tech Stack */}
        <div className="space-y-12">
          {/* Soft Skills */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Brain className="text-secondary" size={24} />
              <h3 className="text-xl font-semibold text-foreground">Soft Skills</h3>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {softSkills.map((skill) => (
                <div key={skill.name} className="card-glass p-4 text-center group hover:border-secondary/50 transition-colors">
                  <skill.icon className="mx-auto text-secondary mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <p className="text-foreground text-sm font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
