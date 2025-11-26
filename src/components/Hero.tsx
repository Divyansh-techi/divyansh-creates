import { Github, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const socialLinks = [
  { icon: Github, href: "https://github.com/Divyansh-techi", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/divyansh-arekar-743657392", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/arekar_divyansh", label: "Instagram" },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Floating decorative elements */}
      <div className="floating-circle w-24 h-24 border-2 border-secondary/60 top-32 right-[20%]" />
      <div className="floating-circle floating-circle-delayed w-12 h-12 bg-secondary top-48 right-[15%]" />
      <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -bottom-48 -left-48" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="flex flex-col gap-6">
              {/* Social Links - Vertical */}
              <div className="flex lg:flex-col gap-4 mb-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>

              {/* Main Heading */}
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Hi,
                  <br />
                  I'm <span className="text-primary">Divyansh Arekar</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mt-4 font-light">
                  Web Developer & AI Engineer
                </p>
              </div>

              {/* Typing Animation */}
              <div className="animate-fade-in-up-delay-1">
                <p className="text-muted-foreground typing-cursor">
                  Java · Python · Go · AI · SQL
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-2">
                <Button variant="hero" size="lg" asChild>
                  <a href="#projects">
                    View Portfolio
                    <ArrowRight size={18} />
                  </a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Photo & Info */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end">
            {/* Profile Photo */}
            <div className="relative mb-8 animate-fade-in-up">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-border/50 relative z-10">
                <img
                  src={profilePhoto}
                  alt="Divyansh Arekar - Web Developer & AI Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
            </div>

            {/* Info Card */}
            <div className="card-glass p-6 max-w-sm animate-fade-in-up-delay-1">
              <p className="text-secondary text-sm font-medium mb-2">Expert on</p>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                Building web apps & AI-powered tools.
              </h2>
              <p className="text-muted-foreground text-sm mb-4">
                3rd-year Integrated MCA student at International Institutes Of Professional Studies — 
                focused on web development, AI model integration, and solving algorithmic challenges.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors text-sm font-medium"
              >
                Download CV
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
