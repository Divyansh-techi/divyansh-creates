import { GraduationCap, Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const timeline = [
  {
    year: "2023",
    title: "Started Integrated MCA",
    description: "Began 5-Year Integrated MCA program at International Institutes Of Professional Studies",
  },
  {
    year: "2024",
    title: "AI & Web Development Focus",
    description: "Deep dive into AI model integration and full-stack web development",
  },
  {
    year: "2026",
    title: "BCA Completion (Expected)",
    description: "Bachelor's degree completion milestone",
  },
  {
    year: "2028",
    title: "MCA Completion (Expected)",
    description: "Master's degree completion and career launch",
  },
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left - About Text */}
        <div>
          <p className="text-secondary text-sm font-medium mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Passionate about building <span className="text-primary">efficient solutions</span>
          </h2>

          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm a 3rd-year student pursuing a 5-Year Integrated MCA at International Institutes 
              Of Professional Studies. My journey in technology started with a curiosity about how 
              software can solve real-world problems efficiently.
            </p>
            <p>
              I specialize in web development and AI model integration, with a strong foundation 
              in algorithmic problem solving. I believe in writing clean, maintainable code that 
              not only works but performs exceptionally.
            </p>
            <p>
              Currently, I'm deepening my expertise in Java, Python, and Go while exploring 
              advanced AI implementations. When I'm not coding, you'll find me solving algorithmic 
              challenges or contributing to open-source projects.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <Button variant="hero" asChild>
              <a href="#">
                <Download size={18} />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center p-4 card-glass">
              <p className="text-3xl font-bold text-primary">3+</p>
              <p className="text-sm text-muted-foreground mt-1">Years of Study</p>
            </div>
            <div className="text-center p-4 card-glass">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground mt-1">Projects</p>
            </div>
            <div className="text-center p-4 card-glass">
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground mt-1">Technologies</p>
            </div>
          </div>
        </div>

        {/* Right - Timeline */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="text-secondary" size={24} />
            <h3 className="text-xl font-semibold text-foreground">Education Timeline</h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-12">
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-card border-2 border-secondary flex items-center justify-center">
                    <Calendar size={14} className="text-secondary" />
                  </div>

                  {/* Content */}
                  <div className="card-glass p-4">
                    <span className="text-secondary text-sm font-medium">{item.year}</span>
                    <h4 className="text-foreground font-semibold mt-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
