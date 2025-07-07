import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Gitesh Zope - Full-Stack Developer Portfolio",
  description = "Hi, I'm Gitesh Zope — a full-stack developer building web and AI-powered solutions. Explore my work, projects, and get in touch.",
  keywords = "gitesh zope, full-stack developer, backend developer, nodejs, portfolio, software engineer, javascript",
  image = "",
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Gitesh Zope');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'Gitesh Zope Portfolio', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);

    // Structured data for Person and Website
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${url}#person`,
          "name": "Gitesh Zope",
          "jobTitle": "Full-Stack Developer",
          "description": description,
          "url": url,
          "sameAs": [
            "https://github.com/gitesh216",
            "https://www.linkedin.com/in/gitesh-zope/",
            "mailto:giteshzope19@gmail.com"
          ],
          "knowsAbout": [
            "React", "Node.js", "TypeScript", "JavaScript", "Python", 
            "PostgreSQL", "MongoDB", "AWS", "Docker", "Redis", "Websockets"
          ]
        },
        {
          "@type": "WebSite",
          "@id": `${url}#website`,
          "url": url,
          "name": "Gitesh Zope - Portfolio",
          "description": description,
          "publisher": {
            "@id": `${url}#person`
          }
        }
      ]
    };

    // Update structured data
    let structuredDataScript = document.querySelector('#structured-data') as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEOHead;
