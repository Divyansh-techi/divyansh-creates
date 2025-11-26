import { Globe, Brain, Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack web applications with responsive UI and modern frameworks. From concept to deployment.",
    deliverables: ["React/Node.js apps", "Responsive design", "API integration"],
  },
  {
    icon: Brain,
    title: "AI Model Integration",
    description: "Integrating ML/AI models into applications, voice assistants, and intelligent automation systems.",
    deliverables: ["Model deployment", "Voice assistants", "Chatbot systems"],
  },
  {
    icon: Code2,
    title: "Algorithmic Solutions",
    description: "Performance optimization, algorithm design, and solving complex computational challenges.",
    deliverables: ["Algorithm design", "Performance tuning", "Code optimization"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-container">
      <div className="text-center mb-12">
        <p className="text-secondary text-sm font-medium mb-2">What I Offer</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          My <span className="text-primary">Services</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="card-glass p-6 group hover:border-primary/50 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <service.icon className="text-primary" size={24} />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{service.description}</p>

            <ul className="space-y-2 mb-6">
              {service.deliverables.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0" asChild>
              <a href="#contact">
                Discuss Project
                <ArrowRight size={14} />
              </a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
