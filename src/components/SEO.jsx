import { useEffect } from 'react';

export default function SEO({ meta }) {
  useEffect(() => {
    if (!meta) return;

    // Update Title
    if (meta.title) {
      document.title = meta.title;
    }

    // Custom helper to update or create meta tags
    const updateMetaTag = (name, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update meta tags
    updateMetaTag('description', meta.description);
    updateMetaTag('keywords', meta.keywords);

    // Update Canonical URL
    if (meta.canonical) {
      let canonicalElement = document.querySelector(`link[rel="canonical"]`);
      if (!canonicalElement) {
        canonicalElement = document.createElement('link');
        canonicalElement.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalElement);
      }
      canonicalElement.setAttribute('href', meta.canonical);
    }
  }, [meta]);

  return null;
}
