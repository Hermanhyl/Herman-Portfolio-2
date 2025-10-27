# AI Portfolio Assistant - Setup Guide

Your portfolio now includes an AI-powered chatbot that can answer questions about your skills, projects, and experience!

## ✨ Features

- **Floating Chat Button**: Appears on all pages with a sparkle icon
- **Smart AI Assistant**: Uses GPT-4o-mini to answer questions about your portfolio
- **Beautiful UI**: Matches your portfolio's design with gradients and animations
- **Quick Actions**: Pre-built questions visitors can click
- **Conversation History**: Maintains context throughout the chat session
- **Mobile Responsive**: Works great on all screen sizes

## 🚀 Setup Instructions

### Step 1: Get Your OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account (you'll need to add a payment method)
3. Click **"Create new secret key"**
4. Give it a name like "Portfolio Chatbot"
5. **Copy the key immediately** (you'll only see it once!)

> **Note**: OpenAI offers $5 in free credits for new accounts. GPT-4o-mini is very affordable (~$0.15 per 1M input tokens).

### Step 2: Create Your `.env` File

Create a file named `.env` in your project root:

```bash
OPENAI_API_KEY=sk-your-actual-api-key-here
```

Replace `sk-your-actual-api-key-here` with your actual API key.

**Important**: The `.env` file is already in `.gitignore`, so it won't be committed to Git. Keep it safe!

### Step 3: Test Locally

To test the chatbot with the serverless functions, run:

```bash
npm run dev:netlify
```

This uses Netlify Dev to run both your Vite app AND the serverless functions locally.

- Your app will be available at `http://localhost:8888` (or another port if 8888 is busy)
- The Netlify functions will work at `/.netlify/functions/*`

### Step 4: Deploy to Netlify

#### Add Environment Variable to Netlify:

1. Go to your Netlify dashboard: https://app.netlify.com
2. Select your portfolio site
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable**
5. Set:
   - **Key**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key (starts with `sk-`)
   - **Scopes**: Select "All scopes"
6. Click **Create variable**

#### Deploy Your Changes:

```bash
git add .
git commit -m "Add AI portfolio assistant chatbot"
git push
```

Netlify will automatically deploy your changes!

## 💰 Cost Estimate

With GPT-4o-mini:
- Input: ~$0.15 per 1M tokens
- Output: ~$0.60 per 1M tokens

**Typical chat conversation**: ~$0.001-0.005 (less than a penny!)

For a portfolio with moderate traffic (1000 visitors/month, 20% using chat):
- **Estimated cost**: $1-5 per month

## 🎨 Customization

### Update the System Prompt

Edit `netlify/functions/chat.js` to customize what the AI knows about you:

```javascript
const SYSTEM_PROMPT = `You are an AI assistant for Herman Hylland's portfolio website...`
```

Add more details about:
- Your specific skills and expertise
- Project details and technologies
- Work experience
- Achievements
- Contact preferences

### Customize Quick Actions

Edit `src/components/chatBot/index.jsx`:

```javascript
const quickActions = [
  "Tell me about Herman's skills",
  "Show me his projects",
  "What technologies does he use?",
];
```

### Adjust AI Parameters

In `netlify/functions/chat.js`:

```javascript
temperature: 0.7,  // Higher = more creative, Lower = more focused
max_tokens: 500,   // Maximum response length
```

## 🔧 Troubleshooting

### Chatbot button doesn't appear
- Check browser console for errors
- Verify the ChatBot component is imported in `src/components/layout/index.jsx`

### "Failed to get response" error
- **Local**: Make sure you're running `npm run dev:netlify` (not just `npm run dev`)
- **Local**: Verify your `.env` file exists and has the correct API key
- **Production**: Check Netlify environment variables are set correctly

### API Rate Limits
OpenAI has rate limits. For free tier:
- 3 requests per minute
- 200 requests per day

Upgrade your OpenAI account if needed.

## 📊 Monitoring Usage

Monitor your OpenAI usage at: https://platform.openai.com/usage

You can set up:
- Usage limits
- Email notifications
- Monthly budgets

## 🎉 What's Next?

Your AI assistant is ready! It can:
- Answer questions about your skills and experience
- Recommend relevant projects based on visitor interests
- Help visitors navigate your portfolio
- Provide information 24/7

Enjoy your new AI-powered portfolio feature!
