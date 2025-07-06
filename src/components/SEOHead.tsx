
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
  title = "John Doe - Full-Stack Developer Portfolio",
  description = "Full-Stack Developer specializing in React, Node.js, and modern web technologies. View my portfolio and get in touch for your next project.",
  keywords = "full-stack developer, react developer, nodejs, portfolio, web development, javascript",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
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
    updateMetaTag('author', 'John Doe');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'John Doe Portfolio', true);

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
          "name": "John Doe",
          "jobTitle": "Full-Stack Developer",
          "description": description,
          "url": url,
          "sameAs": [
            "https://github.com",
            "https://linkedin.com",
            "mailto:john.doe@example.com"
          ],
          "knowsAbout": [
            "React", "Node.js", "TypeScript", "JavaScript", "Python", 
            "PostgreSQL", "MongoDB", "AWS", "Docker", "GraphQL"
          ]
        },
        {
          "@type": "WebSite",
          "@id": `${url}#website`,
          "url": url,
          "name": "John Doe - Portfolio",
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
