
import ContactForm from '@/components/ContactForm';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'john.doe@example.com',
      href: 'mailto:john.doe@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-500'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:john.doe@example.com',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <section id="contact" className="py-20" role="region" aria-labelledby="contact-heading">
      <div className="section-padding">
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
            <div className="animate-fade-in-up">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-up space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's connect</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're a startup looking to build your first product, an established 
                  company needing to scale, or a fellow developer wanting to collaborate, 
                  I'm always open to discussing new opportunities and interesting projects.
                </p>

                <div className="space-y-4" role="list">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-card/30 hover:bg-card/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      role="listitem"
                      aria-label={`${info.label}: ${info.value}`}
                    >
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

              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20">
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
