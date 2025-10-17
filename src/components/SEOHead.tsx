import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

const SEOHead = ({ 
  title = "Desenvolvimento de Sites e Softwares | Arte Visual Software - 15 Anos de Experiência",
  description = "Especialistas em desenvolvimento de sites, e-commerce, sistemas web e apps personalizados. 15 anos transformando ideias em soluções digitais. Orçamento grátis!",
  canonicalUrl = "https://artevisualsoft.com.br/"
}: SEOHeadProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = canonicalUrl;
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = canonicalUrl;
      document.head.appendChild(canonical);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', description);
  }, [title, description, canonicalUrl]);

  return null;
};

export default SEOHead;
