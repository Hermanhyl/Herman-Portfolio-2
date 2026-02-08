---
title: "GoneFishing: Building a Modern Fishing Tracker App"
date: 2026-01-06T00:00:00.000Z
featured: false
excerpt: "Creating a comprehensive fishing tracking application with Next.js, Supabase, and a focus on user experience across all devices."
readTime: 5 min read
author: Herman Hylland
tags:
  - Next.js
  - React
  - Supabase
  - Tailwind CSS
projectLink: /project/project-gonefishing
projectLabel: View GoneFishing Project
---

GoneFishing started as a simple idea: what if anglers could easily track their catches without relying on handwritten notes or memory? The result is a modern fishing tracking application that helps users document every detail of their fishing adventures.

## The Problem

Fishing enthusiasts often want to remember details about their catches-where they were, what species they caught, the conditions that day. But traditional methods are unreliable. Notes get lost, memories fade, and there's no good way to analyze trends over time.

## The Solution

GoneFishing provides a clean, intuitive interface for recording:

- Fish species, size, and weight
- Location and GPS coordinates
- Weather and water conditions
- Personal notes and observations

## Key Features

### Theme Management
Users can switch between light and dark modes, with preferences saved for consistency. The dark mode uses a slate blue background that's easy on the eyes during early morning or late evening sessions-when many fishing trips happen.

### Flexible Measurements
The unit system provider lets users choose between metric and imperial, making the app accessible worldwide regardless of preferred measurement systems.

### Secure Authentication
Powered by Supabase, the authentication system ensures each user's data remains private while providing a seamless login experience.

## Technical Decisions

### Why Next.js?
Next.js provided the perfect foundation with its built-in routing, excellent performance optimizations, and seamless integration with Supabase for both authentication and data storage.

### Responsive-First Design
Knowing that anglers might log catches from their phones by the water, mobile responsiveness was a priority from day one. The interface works seamlessly whether you're on a phone at the lake or reviewing your history on a desktop at home.

### Preventing Flash of Unstyled Content
Special attention was paid to applying theme settings immediately on page load, preventing the jarring "flash" that can occur when switching between light and dark themes.

## Lessons Learned

Building GoneFishing reinforced the importance of understanding your users' context. Fishing happens in various conditions-bright sunlight, low light, wet hands. Every design decision considered these real-world scenarios.

## What's Next

Future plans include data visualization for catch trends, social features, weather API integration, and photo uploads. The goal is to make GoneFishing the most comprehensive fishing tracking solution available.

*Check out the live demo to see GoneFishing in action!*
