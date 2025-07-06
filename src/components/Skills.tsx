
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "JavaScript", "HTML5", "CSS3"],
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      color: "bg-green-500/10 text-green-400 border-green-500/20"
    },
    {
      title: "DevOps & Tools",
      skills: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD", "Linux", "Nginx", "Terraform"],
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    },
    {
      title: "Mobile & Other",
      skills: ["React Native", "Flutter", "REST APIs", "Microservices", "Testing", "Agile", "Figma", "Firebase"],
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={category.title} className="tech-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className={`${category.color} hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Always learning and exploring new technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
