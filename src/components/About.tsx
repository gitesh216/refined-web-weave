import { Badge } from "@/components/ui/badge";
import FloatingCode from "@/components/ui/floating-code";
import { codeSnippets } from "@/utils/codeSnippets";

const About = () => {
  const highlights = [
    "Focused on writing clean code",
    "Hands-on with LLM APIs integration",
    "Full-stack expertise",
    "Exploring new Technologies",
    "Team leadership",
  ];

  return (
    <section id="about" className="py-20 bg-card/30 relative overflow-hidden">
      {/* Background Code Elements */}
      <FloatingCode
        code={codeSnippets.about.component}
        position="custom"
        opacity={0.08}
        rotate={-5}
        className="absolute top-20 right-0 max-w-md hidden xl:block"
        animate={true}
      />

      <FloatingCode
        code={codeSnippets.about.animations}
        position="custom"
        opacity={0.1}
        rotate={12}
        language="css"
        className="absolute bottom-10 -left-16 max-w-sm hidden lg:block"
        animate={true}
      />

      <div className="section-padding relative z-10">
        <div className="container-width">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Learn more about my journey, experience, and what drives my
              passion for development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up relative">
              {/* Inline code decoration */}
              {/* <div className="absolute -top-8 -right-8 opacity-8 pointer-events-none hidden lg:block">
                <pre className="font-mono text-xs text-primary">
                  <code>{`const developer = {
  name: "Gitesh Zope",
  experience: "1+ years",
  passion: "Full-stack development"
};`}</code>
                </pre>
              </div> */}

              <div className="prose prose-lg text-foreground max-w-none relative z-10">
                <p className="text-lg leading-relaxed mb-6">
                  Hello! I'm Gitesh Zope, a passionate full-stack developer and
                  final-year Computer Engineering student with a strong interest
                  in solving real-world problems through technology.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  I specialize in modern web development using the MERN stack,
                  and I’ve built projects ranging from a LeetCode-style coding
                  platform to AI-powered tools. I enjoy building products that are
                  intuitive and impactful. When I’m not coding, I’m usually
                  learning new technologies, exploring AI, or working on
                  open-source and collaborative projects with my team.
                </p>


                <div className="flex flex-wrap gap-2">
                  {highlights.map((highlight, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 py-1"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up relative">
              {/* Code decoration around image */}
              {/* <div className="absolute -top-4 -left-4 opacity-6 pointer-events-none">
                <pre className="font-mono text-xs text-green-400">
                  <code>{`// Always learning
const skills = [...existingSkills, newTech];`}</code>
                </pre>
              </div> */}

              <div className="relaive">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 p-10">
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/20 flex items-center justify-center overflow-hidden p-10">
                    <div className="text-center">
                      <img
                        src="/images/myimage2.jpeg"
                        alt="Professional Photo"
                        className="w-full h-full object-contain rounded-2xl"
                      />
                      {/* <div className="text-6xl mb-4">👨‍💻</div>
                      <p className="text-muted-foreground">
                        Professional Photo
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Coming Soon
                      </p> */}
                    </div>
                  </div>
                </div>

                {/* Bottom right code decoration */}
                {/* <div className="absolute -bottom-4 -right-4 opacity-8 pointer-events-none">
                  <pre className="font-mono text-xs text-orange-400">
                    <code>{`<div className="rounded-2xl">
  <img src="profile.jpg" />
</div>`}</code>
                  </pre>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
