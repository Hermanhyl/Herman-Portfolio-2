import matter from 'gray-matter';

// Dynamically import all markdown files from content/blog/
const markdownFiles = import.meta.glob('/content/blog/*.md', { eager: true, as: 'raw' });

// Parse markdown files and create blog posts array
export const blogPosts = Object.entries(markdownFiles).map(([filepath, content]) => {
  // Parse frontmatter and content
  const { data, content: body } = matter(content);

  // Extract filename without extension for id
  const filename = filepath.split('/').pop();
  const id = filename.replace('.md', '');

  return {
    id,
    title: data.title,
    excerpt: data.excerpt,
    content: body,
    date: data.date,
    readTime: data.readTime,
    tags: data.tags || [],
    featured: data.featured || false,
    author: data.author || 'Herman Hylland'
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first

// Helper function to get post by ID
export const getPostById = (id) => {
  return blogPosts.find(post => post.id === id);
};

// Helper function to get featured post
export const getFeaturedPost = () => {
  return blogPosts.find(post => post.featured);
};

// Helper function to get recent posts
export const getRecentPosts = (limit = 3) => {
  return blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};
