---
title: "PIA Salary Tracker: Privacy-First Income Management"
date: 2026-01-01T00:00:00.000Z
featured: false
excerpt: "Building an income tracking app that stores all data locally in Excel files, with automatic tax calculations and bilingual support."
readTime: 5 min read
author: Herman Hylland
tags:
  - Next.js
  - TypeScript
  - Recharts
  - Excel
  - Privacy
projectLink: /project/project-pia-salary
projectLabel: View PIA Salary Tracker Project
---

PIA Salary Tracker was built to solve a real problem: tracking income across multiple sources while keeping sensitive financial data completely private. Unlike cloud-based solutions, every piece of data stays on your device.

## The Privacy Challenge

Most income tracking apps require accounts and store your financial data on remote servers. For something as sensitive as salary information, this felt unnecessary. PIA Salary Tracker takes a different approach-all data lives in Excel files that you control.

## How It Works

### Starting Fresh or Continuing
You can create a new Excel file from scratch or load an existing one. When loading a file, all previous entries are imported and displayed immediately.

### Adding Entries
For each income entry, you specify:
- Income source
- Amount
- Month

The app automatically calculates social insurance deductions based on configurable rates.

### Real-Time Dashboard
As you add entries, the dashboard updates with:
- Year-based income overview
- Trend visualization charts (powered by Recharts)
- Total earnings and deductions

### Flexible Saving
When you're done:
- Save changes to the same file (overwriting)
- Save to a new file (keeping versions)
- Export wherever you want on your device

## Key Features

### Automatic Calculations
Configure your social insurance rate once, and the app handles all deduction calculations automatically.

### Duplicate Protection
The app alerts you when attempting to add entries for months that already exist, preventing accidental data duplication.

### Data Visualization
Recharts powers the income trend visualizations, making it easy to see patterns over time.

### Bilingual Support
Full German and English support with seamless language switching. All functionality remains identical regardless of language choice.

## Technical Stack

- **Next.js 16** with App Router
- **React 19** and **TypeScript** for type safety
- **Tailwind CSS** and **shadcn/ui** for polished styling
- **xlsx library** for Excel file operations
- **Recharts** for data visualization

## Design Decisions

### Why Excel?
Excel files are universally accessible. You can open your income data in any spreadsheet application, share it easily, and maintain backups however you prefer. No proprietary formats, no lock-in.

### Why Local-Only?
Financial data is inherently sensitive. By keeping everything local, users maintain complete ownership and control. There's no server to breach, no account to compromise.

### Why Bilingual?
Built initially for users in German-speaking regions, the bilingual support makes the app accessible to a wider audience without maintaining separate versions.

## What I Learned

PIA Salary Tracker demonstrated that not every app needs cloud infrastructure. Sometimes the simplest solution-local storage with universal file formats-is the most powerful. Users appreciate having complete control over their data.

*Start tracking your income with complete privacy!*
