---
title: "Timer & Planner: Combining Focus Sessions with Smart Scheduling"
date: 2026-01-02T00:00:00.000Z
featured: false
excerpt: "Building a privacy-focused productivity app that combines customizable timers with drag-and-drop weekly and monthly planning."
readTime: 5 min read
author: Herman Hylland
tags:
  - React
  - TypeScript
  - Tailwind CSS
  - dnd-kit
  - Productivity
projectLink: /project/project-timer-planner
projectLabel: View Timer & Planner Project
---

Timer & Planner was born from a simple frustration: why do I need separate apps for timing focus sessions and planning my schedule? The result is a unified productivity tool that keeps everything in one place.

## The Concept

Instead of switching between a Pomodoro timer and a calendar app, Timer & Planner provides:

- Customizable session templates with work/break intervals
- Weekly and monthly planning views
- Drag-and-drop rescheduling
- All data stored locally—no account required

## Timer Features

### Session Templates
Create and save templates for different activities. A coding session might have 45-minute work blocks with 10-minute breaks, while a reading session might use 25/5 intervals.

### Visual Progress
A circular progress display with gradient effects shows exactly where you are in your session. Audio alerts notify you when intervals transition.

### Accurate Timing
The timer uses timestamp-based calculations rather than simple countdown intervals, ensuring accuracy even if your browser tab is inactive.

## Planner Features

### Weekly Grid View
The week view spans 6 AM to 11 PM with a clear grid layout. You can see your entire week at a glance.

### Drag-and-Drop Rescheduling
Powered by dnd-kit, activities can be dragged to new time slots or days. The smooth animations make rescheduling feel natural.

### Monthly Overview
The calendar view with navigation controls helps you see the bigger picture and plan ahead.

### Color-Coded Categories
Activities can be tagged with customizable colors, making it easy to distinguish work, personal, and other categories at a glance.

### Recurring Events
Set activities to repeat daily, weekly, monthly, or as one-time events. The system handles all the scheduling logic.

## Privacy-First Design

All data stays on your device:

- No accounts to create
- No cloud storage
- JSON export/import for backups
- Full control over your productivity data

This approach means you can use Timer & Planner without worrying about your schedule being stored on someone else's servers.

## Technical Implementation

- **React 19 + TypeScript**: Type safety and modern React patterns
- **Vite**: Fast development and optimized builds
- **Tailwind CSS 4**: Styling with the latest features
- **@dnd-kit**: Accessible drag-and-drop
- **localStorage**: Persistent data without a backend

## Why I Built This

As someone who values both focus time and organized planning, I wanted a tool that treated these as complementary rather than separate concerns. Timer & Planner reflects how I actually work—alternating between deep focus sessions and schedule management.

*Try Timer & Planner and take control of your productivity!*
