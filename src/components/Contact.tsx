
import ContactForm from '@/components/ContactForm';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import FloatingCode from '@/components/ui/floating-code';
import { codeSnippets } from '@/utils/codeSnippets';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'giteshzope19@gmail.com',
      href: 'mailto:giteshzope19@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7218308547',
      href: 'tel:+917218308547'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Airoli, Navi Mumbai',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/gitesh216',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gitesh-zope/',
      color: 'hover:text-blue-500'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:giteshzope19@gmail.com',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden" role="region" aria-labelledby="contact-heading">
      {/* Background Code Elements */}
      <FloatingCode
        code={codeSnippets.contact.form}
        position="custom"
        opacity={0.06}
        rotate={-10}
        className="absolute top-10 -left-24 max-w-lg hidden xl:block"
        animate={true}
      />
      
      <FloatingCode
        code={codeSnippets.contact.validation}
        position="custom"
        opacity={0.1}
        rotate={8}
        language="typescript"
        className="absolute top-1/3 -right-16 max-w-sm hidden lg:block"
        animate={true}
      />

      <FloatingCode
        code={codeSnippets.contact.emailjs}
        position="custom"
        opacity={0.08}
        rotate={-15}
        className="absolute bottom-20 left-20 max-w-md hidden lg:block"
        animate={true}
      />

      <div className="section-padding relative z-10">
        <div className="container-width">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up relative">
              {/* Form code decoration */}
              <div className="absolute -top-6 -right-6 opacity-6 pointer-events-none hidden lg:block">
                <pre className="font-mono text-xs text-blue-400">
                  <code>{`<form onSubmit={handleSubmit}>
  <input type="email" required />
  <button type="submit">Send</button>
</form>`}</code>
                </pre>
              </div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-up space-y-8 relative">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's connect</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're a startup looking to build your first product, an established 
                  company needing to scale, or a fellow developer wanting to collaborate, 
                  I'm always open to discussing new opportunities and interesting projects.
                </p>

                <div className="space-y-4" role="list">
                  {contactInfo.map((info, index) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-card/30 hover:bg-card/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 relative overflow-hidden"
                      role="listitem"
                      aria-label={`${info.label}: ${info.value}`}
                    >
                      {/* Contact item code decoration */}
                      {index === 0 && (
                        <div className="absolute top-1 right-1 opacity-8 pointer-events-none">
                          <pre className="font-mono text-xs text-green-400">
                            <code>{`href="mailto:${info.value}"`}</code>
                          </pre>
                        </div>
                      )}
                      
                      <div className="p-2 rounded-full bg-primary/10" aria-hidden="true">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">Follow me</h4>
                <div className="flex gap-4" role="list">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-card/30 hover:bg-card/50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${social.color}`}
                      aria-label={`Follow me on ${social.label}`}
                      role="listitem"
                    >
                      <social.icon size={20} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 relative overflow-hidden">
                {/* Response time code decoration */}
                <div className="absolute top-2 right-2 opacity-8 pointer-events-none">
                  <pre className="font-mono text-xs text-purple-400">
                    <code>{`const responseTime = "< 24 hours";`}</code>
                  </pre>
                </div>
                
                <h4 className="font-semibold mb-2">Quick Response</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  feel free to reach out via phone or LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
