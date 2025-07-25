import { Badge } from "@/components/ui/badge";
import FloatingCode from "@/components/ui/floating-code";
import { codeSnippets } from "@/utils/codeSnippets";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      color: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Python",
      ],
      color: "bg-green-500/10 text-green-400 border-green-500/20",
    },
    {
      title: "DevOps & Tools",
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Git",
        "CI/CD",
        "Linux",
        "Nginx",
        "Terraform",
      ],
      color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
    },
    {
      title: "AI & Emerging Tech",
      skills: [
        "OpenAI API",
        "Vector DBs",
        "ChatGPT",
        "Prompt Engineering",
        "AI Integration",
        "LLMs",
        "RAG",
      ],
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      title: "Architecture & Patterns",
      skills: [
        "Monorepos",
        "Modular Design",
        "Clean Code",
        "Folder Structures",
        "Reusable Components",
        "Code Splitting",
      ],
      color: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Code Elements */}
      <FloatingCode
        code={codeSnippets.skills.data}
        position="custom"
        opacity={0.08}
        rotate={-3}
        className="absolute top-20 -left-20 max-w-md hidden lg:block"
        animate={true}
      />

      <FloatingCode
        code={codeSnippets.skills.rendering}
        position="custom"
        opacity={0.12}
        rotate={8}
        className="absolute bottom-10 -right-10 max-w-sm hidden xl:block"
        animate={true}
      />

      <FloatingCode
        code={codeSnippets.skills.types}
        position="custom"
        opacity={0.1}
        rotate={-12}
        language="typescript"
        className="absolute top-1/2 right-20 max-w-xs hidden lg:block"
        animate={true}
      />

      <div className="section-padding relative z-10">
        <div className="container-width">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 relative">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="tech-card animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary relative z-10">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 relative z-10">
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

                {/* Card-specific code decoration */}
                {index === 1 && (
                  <div className="absolute top-2 right-2 opacity-5 pointer-events-none">
                    <pre className="font-mono text-xs text-primary">
                      <code>{`{skills.map(skill => (
  <Badge key={skill}>
    {skill}
  </Badge>
))}`}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">
                Always learning and exploring new technologies
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
