export const blogPosts = [
  {
    id: 'ai-powered-chatbot',
    title: 'Building an AI-Powered Portfolio Assistant',
    excerpt: 'How I integrated OpenAI GPT-4o-mini into my portfolio to create an interactive AI assistant that answers questions about my skills and experience.',
    content: `
In this post, I'll walk you through how I built an AI-powered chatbot for my portfolio using OpenAI's GPT-4o-mini model and Netlify Functions.

## The Challenge

I wanted to create an interactive way for visitors to learn about my skills, projects, and experience without requiring them to browse through every page. The solution? An AI assistant that can answer questions naturally.

## Tech Stack

- **OpenAI GPT-4o-mini**: Cost-effective and fast AI model
- **Netlify Functions**: Serverless backend for API calls
- **React**: Frontend UI with smooth animations
- **Tailwind CSS**: Beautiful, responsive design

## Implementation

The chatbot consists of three main parts:

1. **Frontend Component**: A floating chat button and window with message history
2. **Serverless Function**: Handles API requests to OpenAI
3. **System Prompt**: Context about my portfolio that guides the AI

## Key Features

- Real-time responses with streaming
- Conversation context maintenance
- Cost-effective (~$0.001-0.005 per conversation)
- Beautiful UI with gradients and animations

## Results

The chatbot has become one of the most engaging features on my portfolio, allowing visitors to get personalized information quickly.
    `,
    image: '/blog/ai-chatbot.jpg',
    date: '2025-10-29',
    readTime: '5 min read',
    tags: ['React', 'AI', 'OpenAI', 'Serverless'],
    featured: true,
    author: 'Herman Hylland'
  },
  {
    id: 'modern-react-patterns',
    title: 'Modern React Patterns I Use Daily',
    excerpt: 'A look at the React patterns and practices that have improved my development workflow and code quality.',
    content: `
After two years of working with React, I've settled on a set of patterns that consistently help me write cleaner, more maintainable code.

## Custom Hooks for Logic Reuse

Custom hooks are my go-to for extracting and reusing component logic. They keep components focused on rendering while keeping logic testable.

## Compound Components

For complex UI components, compound components provide a flexible API that's easy to understand and use.

## Optimizing with useMemo and useCallback

Strategic use of memoization has significantly improved performance in my applications, especially with large lists and complex calculations.

## Conclusion

These patterns have made my React code more maintainable and performant. They're not silver bullets, but they've proven valuable in real-world projects.
    `,
    image: '/blog/react-patterns.jpg',
    date: '2025-10-25',
    readTime: '4 min read',
    tags: ['React', 'JavaScript', 'Frontend'],
    featured: false,
    author: 'Herman Hylland'
  },
  {
    id: 'design-to-development',
    title: 'From Figma to Code: My Workflow',
    excerpt: 'How I bridge the gap between design and development to create pixel-perfect, responsive web interfaces.',
    content: `
Having a background in both design and development has shaped how I approach building web interfaces.

## Design Phase

I start every project in Figma, creating comprehensive designs that include:
- Component libraries
- Responsive breakpoints
- Interactive prototypes
- Design tokens (colors, spacing, typography)

## Development Phase

With a solid design foundation, I translate designs to code using:
- Tailwind CSS for rapid styling
- Component-driven architecture
- Design tokens as CSS variables
- Responsive-first approach

## The Bridge

The key is maintaining design consistency while embracing web-native patterns. Not everything from design transfers directly - and that's okay.

## Tools & Techniques

- Figma plugins for design tokens
- Tailwind for consistent spacing
- CSS variables for theming
- Storybook for component documentation
    `,
    image: '/blog/figma-to-code.jpg',
    date: '2025-10-20',
    readTime: '6 min read',
    tags: ['Design', 'Figma', 'CSS', 'UI/UX'],
    featured: false,
    author: 'Herman Hylland'
  }
];

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
