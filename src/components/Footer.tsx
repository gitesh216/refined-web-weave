
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:john.doe@example.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50">
      <div className="section-padding py-12">
        <div className="container-width">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div>
              <div className="font-bold text-xl gradient-text mb-4">
                John Doe
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Full-stack developer passionate about creating exceptional digital experiences 
                with modern web technologies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Let's Connect</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>San Francisco, CA</p>
                <a 
                  href="mailto:john.doe@example.com" 
                  className="block hover:text-primary transition-colors"
                >
                  john.doe@example.com
                </a>
                <a 
                  href="tel:+15551234567" 
                  className="block hover:text-primary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} John Doe. All rights reserved. Built with React & Tailwind CSS.
            </p>
            
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="rounded-full"
            >
              <ArrowUp size={16} className="mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
