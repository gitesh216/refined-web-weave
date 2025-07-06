
import { Badge } from '@/components/ui/badge';

const About = () => {
  const highlights = [
    "5+ years of experience",
    "50+ projects completed",
    "Full-stack expertise",
    "Cloud architecture",
    "Team leadership"
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="section-padding">
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
            <div className="animate-fade-in-up">
              <div className="prose prose-lg text-foreground max-w-none">
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

            <div className="animate-fade-in-up">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
