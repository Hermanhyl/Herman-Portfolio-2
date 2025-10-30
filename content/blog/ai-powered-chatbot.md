---
title: Building an AI-Powered Portfolio Assistant
date: 2025-10-29T00:00:00.000Z
featured: true
excerpt: How I integrated OpenAI GPT-4o-mini into my portfolio to create an interactive AI assistant that answers questions about my skills and experience.
readTime: 5 min read
author: Herman Hylland
tags:
  - React
  - AI
  - OpenAI
  - Serverless
---

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
