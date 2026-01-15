// Import all markdown files using vite-plugin-markdown
// This processes them at build time for both English and Norwegian
const enModules = import.meta.glob('/content/blog/en/*.md', { eager: true });
const noModules = import.meta.glob('/content/blog/no/*.md', { eager: true });

// Static fallback posts (used if dynamic loading fails)
const staticPosts = {
  en: [
    {
      id: 'ai-powered-chatbot',
      title: 'Building an AI-Powered Portfolio Assistant',
      excerpt: 'How I integrated OpenAI GPT-4o-mini into my portfolio to create an interactive AI assistant.',
      content: 'Content not available. Please check back later.',
      date: '2025-10-29',
      readTime: '5 min read',
      tags: ['React', 'AI', 'OpenAI', 'Serverless'],
      featured: true,
      author: 'Herman Hylland'
    }
  ],
  no: [
    {
      id: 'ai-powered-chatbot',
      title: 'Bygger en AI-drevet portefølje-assistent',
      excerpt: 'Hvordan jeg integrerte OpenAI GPT-4o-mini i porteføljen min for å lage en interaktiv AI-assistent.',
      content: 'Innhold ikke tilgjengelig. Vennligst sjekk tilbake senere.',
      date: '2025-10-29',
      readTime: '5 min lesing',
      tags: ['React', 'AI', 'OpenAI', 'Serverless'],
      featured: true,
      author: 'Herman Hylland'
    }
  ]
};

/**
 * Parse markdown modules into post objects
 * @param {Object} modules - Vite glob import modules
 * @returns {Array} - Array of parsed post objects
 */
function parseModules(modules) {
  if (!modules || Object.keys(modules).length === 0) {
    return [];
  }

  return Object.entries(modules).map(([filepath, module]) => {
    try {
      const filename = filepath.split('/').pop();
      const id = filename.replace('.md', '');
      const attributes = module.attributes || {};
      const content = module.html || module.markdown || '';

      return {
        id,
        title: attributes.title || 'Untitled',
        excerpt: attributes.excerpt || '',
        content: content,
        date: attributes.date || new Date().toISOString(),
        readTime: attributes.readTime || '5 min read',
        tags: Array.isArray(attributes.tags) ? attributes.tags : [],
        featured: attributes.featured || false,
        author: attributes.author || 'Herman Hylland',
        projectLink: attributes.projectLink || null,
        projectLabel: attributes.projectLabel || 'View Project'
      };
    } catch (parseError) {
      console.error(`Error parsing ${filepath}:`, parseError);
      return null;
    }
  }).filter(post => post !== null);
}

// Parse posts for both languages at build time
const parsedEnPosts = parseModules(enModules);
const parsedNoPosts = parseModules(noModules);

// Use parsed posts or fall back to static
const englishPosts = parsedEnPosts.length > 0 ? parsedEnPosts : staticPosts.en;
const norwegianPosts = parsedNoPosts.length > 0 ? parsedNoPosts : staticPosts.no;

// Log loading status
if (parsedEnPosts.length > 0) {
  console.log(`✅ Loaded ${parsedEnPosts.length} English posts from markdown`);
}
if (parsedNoPosts.length > 0) {
  console.log(`✅ Loaded ${parsedNoPosts.length} Norwegian posts from markdown`);
}

/**
 * Get blog posts for a specific language
 * @param {string} lang - Language code ('en' or 'no')
 * @returns {Array} - Sorted array of blog posts
 */
export function getBlogPosts(lang = 'en') {
  const posts = lang === 'no' ? norwegianPosts : englishPosts;
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get a specific post by ID for a language
 * @param {string} id - Post ID
 * @param {string} lang - Language code ('en' or 'no')
 * @returns {Object|undefined} - Post object or undefined
 */
export function getPostById(id, lang = 'en') {
  const posts = lang === 'no' ? norwegianPosts : englishPosts;
  return posts.find(post => post.id === id);
}

/**
 * Get the featured post for a language
 * @param {string} lang - Language code ('en' or 'no')
 * @returns {Object|undefined} - Featured post or undefined
 */
export function getFeaturedPost(lang = 'en') {
  const posts = lang === 'no' ? norwegianPosts : englishPosts;
  return posts.find(post => post.featured);
}

/**
 * Get recent posts for a language
 * @param {number} limit - Number of posts to return
 * @param {string} lang - Language code ('en' or 'no')
 * @returns {Array} - Array of recent posts
 */
export function getRecentPosts(limit = 3, lang = 'en') {
  return getBlogPosts(lang).slice(0, limit);
}

// Default export for backward compatibility
export const blogPosts = englishPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
