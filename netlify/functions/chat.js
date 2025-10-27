import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Portfolio context - this is what the AI knows about you
const SYSTEM_PROMPT = `You are an AI assistant for Herman Hylland's portfolio website. You help visitors learn about Herman's skills, projects, and experience.

## About Herman
Herman Hylland is a Front-End Developer and Digital Designer with expertise in creating beautiful, modern web experiences.

## Skills & Technologies
- **Front-End**: React, JavaScript, HTML5, CSS3, Tailwind CSS
- **Tools & Frameworks**: Vite, Next.js, React Router
- **Design**: UI/UX Design, Figma, Responsive Design
- **Other**: Git, GitHub, Netlify, Supabase

## Featured Projects
1. **Holidaze** - Accommodation booking platform built with React, Tailwind CSS, and Supabase
2. **E-commerce Store** - Modern shopping experience with product filtering and cart functionality
3. **Social Media Platform** - Full-featured social app with authentication and real-time updates
4. **Various other projects** showcasing different technologies and design approaches

## Communication Style
- Be friendly, professional, and enthusiastic
- Keep responses concise but informative
- When discussing projects, you can link to them: /project/[project-id]
- If asked about contacting Herman, direct them to: /contact
- If asked about Herman's background, direct them to: /about

## Capabilities
You can:
- Answer questions about Herman's skills and experience
- Provide details about specific projects
- Suggest relevant projects based on visitor interests
- Help visitors navigate the portfolio
- Answer general questions about web development

## Important
- Don't make up information not provided in this context
- If you don't know something, be honest and suggest they contact Herman directly
- Encourage visitors to explore the portfolio and reach out via the contact page
`;

export const handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse the request body
    const { messages } = JSON.parse(event.body);

    if (!messages || !Array.isArray(messages)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid request: messages array required' }),
      };
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    // Return the response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: completion.choices[0].message.content,
        usage: completion.usage,
      }),
    };
  } catch (error) {
    console.error('Chat API Error:', error);

    // Handle specific OpenAI errors
    if (error.status === 401) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: 'API configuration error. Please contact the site owner.'
        }),
      };
    }

    if (error.status === 429) {
      return {
        statusCode: 429,
        body: JSON.stringify({
          error: 'Too many requests. Please try again in a moment.'
        }),
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to process chat request. Please try again.'
      }),
    };
  }
};
