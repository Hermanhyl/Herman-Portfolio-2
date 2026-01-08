import { useEffect } from 'react';

/**
 * Custom hook to dynamically update document meta tags
 * @param {Object} options - Meta tag options
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.image - Open Graph image URL
 * @param {string} options.url - Canonical URL
 * @param {string} options.type - Open Graph type (default: 'website')
 */
function useDocumentMeta({
  title,
  description,
  image = 'https://hermanhylland.netlify.app/profile-picture.jpg',
  url,
  type = 'website'
}) {
  useEffect(() => {
    // Update document title
    const fullTitle = title
      ? `${title} | Herman Hylland`
      : 'Herman Hylland | Frontend Developer & UI/UX Designer';
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (property, content, isName = false) => {
      if (!content) return;

      const selector = isName
        ? `meta[name="${property}"]`
        : `meta[property="${property}"]`;

      let element = document.querySelector(selector);

      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        if (isName) {
          element.setAttribute('name', property);
        } else {
          element.setAttribute('property', property);
        }
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Update meta description
    if (description) {
      updateMetaTag('description', description, true);
    }

    // Update Open Graph tags
    updateMetaTag('og:title', fullTitle);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('og:type', type);
    if (url) {
      updateMetaTag('og:url', url);
    }

    // Update Twitter Card tags
    updateMetaTag('twitter:title', fullTitle, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);

    // Cleanup - restore defaults on unmount
    return () => {
      document.title = 'Herman Hylland | Frontend Developer & UI/UX Designer';
    };
  }, [title, description, image, url, type]);
}

export default useDocumentMeta;
