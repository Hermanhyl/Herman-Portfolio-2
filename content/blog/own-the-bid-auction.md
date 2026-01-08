---
title: "Own The Bid: Building an Auction Platform with Vanilla JavaScript"
date: 2026-01-03T00:00:00.000Z
featured: false
excerpt: "Creating a full-featured auction platform using vanilla JavaScript, and the improvements I made after initial feedback."
readTime: 5 min read
author: Herman Hylland
tags:
  - JavaScript
  - Tailwind CSS
  - Noroff API
  - Figma
projectLink: /project/project4
projectLabel: View Own The Bid Project
---

Own The Bid started as my semester project—a web-based auction platform where users can list items, place bids, and compete in timed auctions. What made this project special was the iterative improvement process after submission.

## The Platform

Built on the Noroff API, Own The Bid allows:

- **Registered users** to create listings with images, descriptions, and deadlines
- **Bidding** on other users' items with available credits
- **Profile management** including avatar customization
- **Browsing** for unregistered visitors

## The Initial Build

Using vanilla JavaScript, Tailwind CSS, and the Noroff API, I created a functional auction platform with:

- User registration and authentication
- Listing creation and management
- Real-time bidding functionality
- Credit tracking system

## Post-Submission Improvements

After completing the initial version, I revisited the project based on instructor feedback and my own growing understanding of best practices.

### Proper Error Handling

The original version lacked consistent error responses. I added:

- Try/catch blocks throughout the application
- Meaningful error messages for users
- Appropriate console logging for debugging

This made the app more reliable and user-friendly while improving the development experience.

### Sticky Footer Fix

A small but important visual fix—the footer now reliably stays at the bottom of the viewport, even on pages with little content. These details matter for professional presentation.

### Input Validation

The initial version didn't thoroughly check user input. I implemented:

- Required field validation
- Format checking for emails and other inputs
- Clear feedback when validation fails

This improved data integrity and guided users toward successful form submissions.

## Why Vanilla JavaScript?

This project was about understanding fundamentals. Without React or Vue abstracting things away, I had to:

- Manage DOM manipulation directly
- Handle state without a framework
- Implement routing and navigation manually
- Structure code for maintainability

These lessons made me a better developer, even as I've since moved to React for most projects.

## My Design Process

Before writing any code, I followed a structured design workflow in Figma that I use for all my projects.

### 1. Mind Mapping & Information Architecture
I started with a mind map to outline all the pages needed—home, listings, individual auction pages, user profiles, login/register—and how they interconnect. This helped identify the complete user journey from browsing to bidding to winning.

### 2. Ideation & Concept Exploration
During ideation, I explored different visual approaches for an auction platform. Should it feel exclusive and premium? Playful and exciting? I settled on a clean, professional look that builds trust while maintaining the excitement of competitive bidding.

### 3. Wireframing
Simple wireframes came next—rough layouts showing where content would live without any styling. This phase focused on user flow and content hierarchy: where does the bid button go? How do users track their active bids? What information is most important on a listing card?

### 4. Style Guide Development
I created a comprehensive style guide including:
- **Typography**: Font hierarchy for headings, body text, prices, and bid amounts
- **Color Palette**: Colors that convey trust and urgency for auction contexts
- **Button Styles**: Primary actions (place bid), secondary actions, and states
- **Spacing System**: Consistent margins and padding throughout
- **Component Library**: Cards, forms, navigation elements

### 5. High-Fidelity Design (Mobile First)
Following mobile-first principles, I designed the complete mobile experience first. Every screen—from browsing auctions on a phone to placing a bid—was designed to work perfectly on small screens before considering desktop.

### 6. Desktop Adaptation
With mobile complete, I expanded to desktop layouts, utilizing the extra space for multi-column listing grids, sidebar filters, and enhanced auction detail views.

### 7. Prototyping
Finally, I built an interactive prototype simulating key flows: browsing listings, viewing auction details, placing bids, and managing user profiles. This revealed UX issues before development began.

## Key Takeaways

Own The Bid taught me that building something is just the first step. The improvements I made afterward demonstrated the importance of code review, user feedback, and continuous refinement.

*Check out Own The Bid and try placing a bid!*
