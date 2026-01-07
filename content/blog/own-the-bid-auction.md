---
title: "Own The Bid: Building an Auction Platform with Vanilla JavaScript"
date: 2025-01-03T00:00:00.000Z
featured: false
excerpt: "Creating a full-featured auction platform using vanilla JavaScript, and the improvements I made after initial feedback."
readTime: 5 min read
author: Herman Hylland
tags:
  - JavaScript
  - Tailwind CSS
  - Noroff API
  - Figma
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

## Design with Figma

The complete design was planned in Figma before development, including:

- All page layouts and components
- Responsive breakpoints
- Interaction states

This upfront planning made development smoother and ensured design consistency.

## Key Takeaways

Own The Bid taught me that building something is just the first step. The improvements I made afterward demonstrated the importance of code review, user feedback, and continuous refinement.

*Check out Own The Bid and try placing a bid!*
