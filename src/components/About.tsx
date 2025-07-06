
import { Badge } from '@/components/ui/badge';
import FloatingCode from '@/components/ui/floating-code';
import { codeSnippets } from '@/utils/codeSnippets';

const About = () => {
  const highlights = [
    "Focused on writing clean code",
    "Hands-on with LLM APIs integration",
    "Full-stack expertise",
    "Exploring new Technologies",
    "Team leadership"
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
              Learn more about my journey, experience, and what drives my passion for development
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
                  Hello! I'm John, a passionate full-stack developer with over 5 years of experience 
                  creating digital solutions that make a difference. My journey began with curiosity 
                  about how websites work, which quickly evolved into a deep love for coding and 
                  problem-solving.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  I specialize in modern web technologies including React, Node.js, and cloud platforms. 
                  I believe in writing clean, maintainable code and creating user experiences that are 
                  both beautiful and functional. When I'm not coding, you can find me exploring new 
                  technologies, contributing to open source, or mentoring aspiring developers.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  I'm always excited about new challenges and opportunities to grow. Whether it's 
                  building scalable applications, optimizing performance, or collaborating with 
                  amazing teams, I bring enthusiasm and expertise to every project.
                </p>

                <div className="flex flex-wrap gap-2">
                  {highlights.map((highlight, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
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
              
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 p-1">
                  <div className="w-full h-full rounded-2xl bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">👨‍💻</div>
                      <p className="text-muted-foreground">Professional Photo</p>
                      <p className="text-sm text-muted-foreground">Coming Soon</p>
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
