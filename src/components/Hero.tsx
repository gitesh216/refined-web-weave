
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import FloatingCode from '@/components/ui/floating-code';
import { codeSnippets } from '@/utils/codeSnippets';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5"></div>
      
      {/* Floating Code Elements */}
      <FloatingCode
        code={codeSnippets.hero.component}
        position="top-left"
        opacity={0.12}
        rotate={-8}
        className="hidden lg:block max-w-sm"
        animate={true}
      />
      
      <FloatingCode
        code={codeSnippets.hero.styles}
        position="top-right"
        opacity={0.15}
        rotate={12}
        language="css"
        className="hidden xl:block max-w-xs"
        animate={true}
      />

      <FloatingCode
        code={codeSnippets.hero.interface}
        position="bottom-left"
        opacity={0.1}
        rotate={-5}
        language="typescript"
        className="hidden lg:block max-w-sm"
        animate={true}
      />
      
      <div className="section-padding py-20 relative z-10">
        <div className="container-width text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-4xl font-bold">
                  GZ
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Gitesh Zope</span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-light">
              Engineer
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              An introvert who talks less but builds more — turning ideas into working software with focus and intent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-3 rounded-full">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 rounded-full">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/gitesh216"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 hover:bg-card transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/gitesh-zope/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 hover:bg-card transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:giteshzope19@gmail.com"
                className="p-3 rounded-full bg-card/50 hover:bg-card transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="p-2 text-primary">
              <ArrowDown size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
