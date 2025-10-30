# Herman Portfolio 2

A modern, interactive portfolio website built with **React** and **Tailwind CSS**. This project showcases my work as a frontend developer and UI/UX designer, featuring an AI-powered assistant, dynamic blog system, and beautiful dark-themed design.

![image](https://github.com/user-attachments/assets/32051128-875f-4171-bb7a-1f672e95337c)

## ✨ Features

### 🤖 AI-Powered Portfolio Assistant
- Interactive chatbot powered by **OpenAI GPT-4o-mini**
- Answers questions about my skills, projects, and experience
- Serverless backend using **Netlify Functions**
- Real-time responses with conversation context
- Beautiful gradient UI with smooth animations

### 📝 Dynamic Blog System
- Markdown-based blog posts with full CMS integration
- **Decap CMS** (formerly Netlify CMS) for easy content management
- Dynamic post loading using **vite-plugin-markdown**
- Rich text editor with frontmatter support
- Featured posts, tags, and read time estimates
- Automatic deployment when new posts are published

### 🎨 Modern UI/UX
- Dark-themed design with gradient accents
- Smooth page transitions and animations
- Responsive layout for all devices
- Custom animated borders and glass-morphism effects
- Accessible navigation and interactive elements

### 📄 Core Pages
- **Homepage** - Hero section with project showcase
- **About** - Background, skills, and education statistics
- **Projects** - Portfolio of work with detailed case studies
- **Blog** - Technical articles and insights
- **Contact** - Easy ways to get in touch

### 🔐 Content Management
- Secure authentication with **Netlify Identity**
- Git-based workflow for version control
- Invite-only admin access
- Real-time preview and editing

## 🛠 Technologies Used

### Frontend
- **React** - UI framework
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **React Markdown** - Markdown rendering with GitHub Flavored Markdown

### Backend & Services
- **Netlify Functions** - Serverless API endpoints
- **OpenAI API** - GPT-4o-mini for AI chatbot
- **Decap CMS** - Git-based content management
- **Netlify Identity** - Authentication and user management

### Build Tools & Plugins
- **vite-plugin-markdown** - Build-time markdown processing
- **@tailwindcss/vite** - Tailwind CSS integration
- **Babel** - JavaScript transpilation

### Deployment
- **Netlify** - Hosting and continuous deployment
- **Git Gateway** - CMS integration with GitHub

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Hermanhyl/Herman-Portfolio-2.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Herman-Portfolio-2
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your OpenAI API key:
   ```env
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. For local Netlify Functions testing:
   ```bash
   npm run dev:netlify
   ```

## 📝 Blog Management

### Setting Up the CMS

After deploying to Netlify, follow these steps:

1. Enable **Netlify Identity** in your Netlify dashboard
2. Enable **Git Gateway** in Identity settings
3. Invite yourself as a user
4. Set registration to "Invite only" for security

### Creating Blog Posts

1. Go to `/blog` on your deployed site
2. Click the purple admin button in the bottom-left corner
3. Login with Netlify Identity
4. Create, edit, or delete posts using the CMS interface
5. Posts are automatically committed to GitHub and deployed

For detailed instructions, see [BLOG_CMS_SETUP.md](./BLOG_CMS_SETUP.md)

## 🌐 Live Site

🔗 [View the Live Site](https://portfolio-herman-hylland.netlify.app/)

## 📁 Project Structure

```
Herman-Portfolio-2/
├── content/
│   └── blog/              # Markdown blog posts
├── netlify/
│   └── functions/         # Serverless functions (chatbot API)
├── public/
│   └── admin/             # Decap CMS admin interface
├── src/
│   ├── components/        # Reusable React components
│   ├── data/              # Static data and blog post loader
│   ├── pages/             # Page components
│   └── App.jsx            # Main app component
├── .env                   # Environment variables (not in repo)
├── vite.config.js         # Vite configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

## 🔑 Environment Variables

The following environment variables are required:

- `VITE_OPENAI_API_KEY` - Your OpenAI API key for the chatbot
- `OPENAI_API_KEY` - OpenAI API key for Netlify Functions (set in Netlify dashboard)

## 📦 Build and Deploy

### Local Build
```bash
npm run build
npm run preview
```

### Deployment

This project is configured for automatic deployment with Netlify:

1. Push changes to the `main` branch
2. Netlify automatically builds and deploys
3. New blog posts trigger automatic rebuilds via Git Gateway

## 🎯 Key Features Implemented

- ✅ AI chatbot with OpenAI integration
- ✅ Dynamic markdown-based blog system
- ✅ CMS with authentication
- ✅ Responsive design
- ✅ SEO-friendly routing
- ✅ Social sharing capabilities
- ✅ Smooth animations and transitions
- ✅ Dark mode theme
- ✅ Project case studies
- ✅ Contact integration

## 👤 Author

**Herman Hylland**
- Portfolio: [portfolio-herman-hylland.netlify.app](https://portfolio-herman-hylland.netlify.app/)
- LinkedIn: [linkedin.com/in/herman-hylland](https://www.linkedin.com/in/herman-hylland/)
- Email: hermanhyl@hotmail.com
- GitHub: [github.com/Hermanhyl](https://github.com/Hermanhyl)

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Built with React and Tailwind CSS
- AI powered by OpenAI GPT-4o-mini
- Icons by Lucide React
- Hosted on Netlify
- CMS by Decap CMS

---

Made with ❤️ by Herman Hylland
