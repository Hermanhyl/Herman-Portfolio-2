/**
 * JsonLd — renders a <script type="application/ld+json"> block with
 * the supplied data object. The component is intentionally dumb:
 * callers build the schema.org object and pass it in. Google reads
 * the data even though it sits inside <script>, which is the
 * standard pattern for structured data in SPAs.
 *
 * Use one block per schema type. Several blocks on the same page
 * are fine (e.g. Person + WebSite on the homepage).
 *
 * @param {Object} props
 * @param {Object} props.data - schema.org structured data object
 */
export default function JsonLd({ data }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Shared Person object describing Herman. Used by the homepage and
 * the About page. Update here, both pages stay in sync.
 */
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Herman Hylland',
  url: 'https://portfolio-herman-hylland.netlify.app/',
  image: 'https://portfolio-herman-hylland.netlify.app/Profil/Bruk_denne.jpg',
  jobTitle: 'Frontend Developer & UI/UX Designer',
  description:
    'Frontend developer and UI/UX designer based in Norway. Combines a Bachelor in Animation and Digital Art with frontend development at Noroff. Builds accessible, interactive web experiences with React, TypeScript, and Tailwind.',
  email: 'mailto:hermanhyl@hotmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NO',
  },
  sameAs: [
    'https://www.linkedin.com/in/herman-hylland/',
    'https://github.com/Hermanhyl',
    'https://www.instagram.com/hermanhyl98/',
  ],
  knowsAbout: [
    'Frontend Development',
    'React',
    'TypeScript',
    'UI/UX Design',
    'Figma',
    'Animation',
    'Motion Design',
    'Web Accessibility',
  ],
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Noroff School of Technology and Digital Media',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Høgskolen i Innlandet',
    },
  ],
};

/**
 * WebSite schema for the homepage. Tells search engines the
 * canonical home URL and gives a stable site identity.
 */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Herman Hylland Portfolio',
  url: 'https://portfolio-herman-hylland.netlify.app/',
  inLanguage: ['en', 'no'],
  author: {
    '@type': 'Person',
    name: 'Herman Hylland',
  },
};

/**
 * Build a BlogPosting object for an individual blog post.
 *
 * @param {Object} post - The blog post object from data/blog/posts.js
 * @returns {Object} schema.org BlogPosting structured data
 */
export function buildBlogPostingSchema(post) {
  if (!post) return null;
  const baseUrl = 'https://portfolio-herman-hylland.netlify.app';
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage ? `${baseUrl}${post.coverImage}` : undefined,
    datePublished: post.date,
    dateModified: post.lastModified || post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Herman Hylland',
      url: `${baseUrl}/about`,
    },
    publisher: {
      '@type': 'Person',
      name: 'Herman Hylland',
      url: baseUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.id}`,
    },
    keywords: post.tags?.join(', '),
  };
}
