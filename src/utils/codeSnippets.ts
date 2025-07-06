
export const codeSnippets = {
  hero: {
    component: `const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="animate-fade-in-up">
        <h1 className="gradient-text text-6xl font-bold">
          John Doe
        </h1>
        <h2 className="text-2xl text-muted-foreground">
          Full-Stack Developer
        </h2>
      </div>
    </section>
  );
};`,
    styles: `.gradient-text {
  @apply bg-gradient-to-r from-primary to-blue-400 
         bg-clip-text text-transparent;
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}`,
    interface: `interface HeroProps {
  name: string;
  title: string;
  description: string;
  socialLinks: SocialLink[];
}

type SocialLink = {
  platform: 'github' | 'linkedin' | 'email';
  url: string;
  icon: LucideIcon;
};`
  },
  
  skills: {
    data: `const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    title: "Backend", 
    skills: ["Node.js", "Express", "Python", "PostgreSQL"],
    color: "bg-green-500/10 text-green-400 border-green-500/20"
  }
];`,
    rendering: `{skillCategories.map((category, index) => (
  <div key={category.title} className="tech-card">
    <h3 className="text-primary">{category.title}</h3>
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill) => (
        <Badge 
          key={skill}
          className={category.color}
        >
          {skill}
        </Badge>
      ))}
    </div>
  </div>
))}`,
    types: `interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

type TechStack = SkillCategory[];`
  },

  projects: {
    component: `const ProjectCard = ({ project }) => (
  <article className="project-card hover-lift">
    <OptimizedImage
      src={project.image}
      alt={project.title}
      className="aspect-video rounded-lg"
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-4">
        {project.title}
      </h3>
      <p className="text-muted-foreground mb-6">
        {project.description}
      </p>
      <div className="flex gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  </article>
);`,
    filtering: `const featuredProjects = projects.filter(p => p.featured);
const otherProjects = projects.filter(p => !p.featured);

// Render with animation delays
{featuredProjects.map((project, index) => (
  <ProjectCard 
    key={project.id}
    project={project}
    style={{ animationDelay: \`\${index * 0.2}s\` }}
  />
))}`,
    styles: `.project-card {
  @apply bg-card/80 backdrop-blur-sm border border-border
         rounded-xl overflow-hidden hover:border-primary/50
         transition-all duration-500 hover:shadow-2xl
         hover:shadow-primary/10;
}

.hover-lift {
  @apply transition-all duration-300 hover:transform
         hover:-translate-y-2 hover:shadow-xl;
}`
  },

  about: {
    component: `const About = () => {
  const highlights = [
    "5+ years of experience",
    "50+ projects completed", 
    "Full-stack expertise"
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="prose prose-lg">
          <p className="text-lg leading-relaxed">
            Hello! I'm John, a passionate full-stack developer...
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {highlights.map((highlight, index) => (
            <Badge key={index} variant="secondary">
              {highlight}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};`,
    animations: `@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}`
  },

  contact: {
    form: `const ContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID', 
        data,
        'YOUR_PUBLIC_KEY'
      );
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
};`,
    validation: `const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;`,
    emailjs: `// EmailJS Integration
import emailjs from '@emailjs/browser';

const sendEmail = async (formData) => {
  const response = await emailjs.send(
    process.env.EMAILJS_SERVICE_ID,
    process.env.EMAILJS_TEMPLATE_ID,
    formData,
    process.env.EMAILJS_PUBLIC_KEY
  );
  return response;
};`
  }
};
