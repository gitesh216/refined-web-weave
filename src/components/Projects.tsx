import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ArrowRight } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';
import FloatingCode from '@/components/ui/floating-code';
import { codeSnippets } from '@/utils/codeSnippets';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&auto=format",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format",
      technologies: ["React", "Express", "MongoDB", "Socket.io", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and historical weather data visualization.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&auto=format",
      technologies: ["React", "TypeScript", "Charts.js", "Weather API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Fitness Tracker",
      description: "Mobile-first fitness application with workout tracking, progress analytics, and social features for fitness enthusiasts.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop&auto=format",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "AI Chat Application",
      description: "Intelligent chat application powered by AI with natural language processing, context awareness, and multi-language support.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&auto=format",
      technologies: ["React", "Python", "OpenAI API", "WebSocket", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop&auto=format",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-card/30 relative overflow-hidden" role="region" aria-labelledby="projects-heading">
      {/* Background Code Elements */}
      <FloatingCode
        code={codeSnippets.projects.component}
        position="custom"
        opacity={0.06}
        rotate={-15}
        className="absolute top-10 -left-32 max-w-lg hidden xl:block"
        animate={true}
      />
      
      <FloatingCode
        code={codeSnippets.projects.filtering}
        position="custom"
        opacity={0.1}
        rotate={10}
        className="absolute top-1/3 -right-20 max-w-md hidden lg:block"
        animate={true}
      />

      <FloatingCode
        code={codeSnippets.projects.styles}
        position="custom"
        opacity={0.08}
        rotate={-8}
        language="css"
        className="absolute bottom-20 left-10 max-w-sm hidden lg:block"
        animate={true}
      />

      <div className="section-padding relative z-10">
        <div className="container-width">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my recent work and contributions to the development community
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-1 gap-12 mb-16">
            {featuredProjects.map((project, index) => (
              <article key={project.id} className={`project-card hover-lift animate-fade-in-up flex flex-col lg:flex-row relative overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Project card code decoration */}
                <div className="absolute top-4 right-4 opacity-5 pointer-events-none hidden lg:block">
                  <pre className="font-mono text-xs text-primary max-w-xs">
                    <code>{`<article className="project-card">
  <h3>{project.title}</h3>
  <p>{project.description}</p>
</article>`}</code>
                  </pre>
                </div>
                
                <div className="lg:w-1/2 relative z-10">
                  <OptimizedImage
                    src={project.image}
                    alt={`Screenshot of ${project.title} project`}
                    className="aspect-video rounded-lg"
                    priority={index === 0}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-primary/10 text-primary border-primary/20">Featured</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs" role="listitem">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button asChild className="flex-1">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title} (opens in new tab)`}
                      >
                        Live Demo <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`View source code for ${project.title} on GitHub (opens in new tab)`}
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">View source code</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {otherProjects.map((project, index) => (
                <article key={project.id} className="project-card hover-lift animate-fade-in-up relative overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }} role="listitem">
                  {/* Small code decoration for grid cards */}
                  {index === 0 && (
                    <div className="absolute bottom-2 right-2 opacity-8 pointer-events-none">
                      <pre className="font-mono text-xs text-muted-foreground">
                        <code>{`<Badge>{tech}</Badge>`}</code>
                      </pre>
                    </div>
                  )}
                  
                  <OptimizedImage
                    src={project.image}
                    alt={`Screenshot of ${project.title} project`}
                    className="aspect-video rounded-t-lg"
                    width={400}
                    height={240}
                  />
                  <div className="p-6 relative z-10">
                    <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4" role="list" aria-label="Technologies used">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs" role="listitem">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" asChild className="flex-1">
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`View demo of ${project.title} (opens in new tab)`}
                        >
                          Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`View source code for ${project.title} on GitHub (opens in new tab)`}
                        >
                          <Github className="h-3 w-3" aria-hidden="true" />
                          <span className="sr-only">View source code</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="text-center animate-fade-in-up">
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View all projects on GitHub (opens in new tab)"
              >
                View All Projects on GitHub <Github className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
