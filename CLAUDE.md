# Herman Portfolio 2 - Development Style Guide

This document provides comprehensive guidelines for maintaining consistency, quality, and best practices throughout the Herman Portfolio project. All AI assistants and developers should follow these guidelines when contributing to this project.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Code Structure & Organization](#code-structure--organization)
3. [Styling Guidelines](#styling-guidelines)
4. [Component Patterns](#component-patterns)
5. [Animation & Interactions](#animation--interactions)
6. [Accessibility Standards](#accessibility-standards)
7. [Performance Optimization](#performance-optimization)
8. [Git Workflow](#git-workflow)
9. [Important Project Rules](#important-project-rules)

---

## Project Overview

### Tech Stack
- **Frontend Framework:** React 18+ (JavaScript only, NO TypeScript)
- **Styling:** Tailwind CSS with custom utilities
- **Build Tool:** Vite
- **Routing:** React Router
- **Backend:** Netlify Functions (serverless)
- **CMS:** Decap CMS (formerly Netlify CMS)
- **AI Integration:** OpenAI GPT-4o-mini
- **Deployment:** Netlify

### Project Goals
- Modern, interactive portfolio showcasing frontend development and UI/UX design skills
- Dark-themed design with vibrant gradient accents
- Smooth animations and transitions throughout
- Full accessibility compliance
- Mobile-first responsive design
- Fast performance and optimized loading

---

## Code Structure & Organization

### File Size Limits

**CRITICAL RULE: All code files must be between 200-500 lines maximum.**

When a file approaches or exceeds 500 lines:
1. **Extract components** - Break UI into smaller, reusable components
2. **Separate concerns** - Move logic to custom hooks or utility files
3. **Create sub-components** - Split large components into smaller ones
4. **Use composition** - Combine smaller components instead of one large file

**Example of Good File Structure:**
```
src/
├── components/
│   ├── header/
│   │   ├── index.jsx           # 150 lines - Main header component
│   │   ├── MobileMenu.jsx      # 80 lines - Mobile menu extracted
│   │   └── NavItem.jsx         # 50 lines - Navigation item component
│   ├── chatBot/
│   │   ├── index.jsx           # 200 lines - Main chatbot
│   │   ├── MessageList.jsx     # 100 lines - Message display
│   │   └── ChatInput.jsx       # 80 lines - Input component
```

### Component Organization

#### Directory Structure
```
src/
├── components/          # Reusable UI components
│   ├── [component-name]/
│   │   └── index.jsx   # Always use index.jsx for main component
├── pages/              # Page-level components (routes)
│   └── [page-name]/
│       └── index.jsx
├── data/               # Static data and loaders
├── hooks/              # Custom React hooks (if needed)
└── utils/              # Utility functions
```

#### Component File Naming
- **Folders:** Use camelCase (e.g., `heroSection/`, `projectCard/`)
- **Files:** Always name main component file `index.jsx`
- **Sub-components:** Use PascalCase (e.g., `MobileMenu.jsx`, `NavItem.jsx`)

#### Import/Export Pattern
```javascript
// ✅ CORRECT - Default export from index.jsx
export default function ComponentName() {
  // component code
}

// ✅ CORRECT - Importing
import ComponentName from '../components/componentName';

// ❌ INCORRECT - Named exports for main components
export { ComponentName };
```

---

## Styling Guidelines

### Design System

#### Color Palette

**Primary Colors:**
- `emerald-400` - Primary brand color (#34d399)
- `emerald-500` - Buttons and CTAs (#10b981)
- `emerald-600` - Hover states (#059669)
- `cyan-400` - Accent color (#22d3ee)
- `purple-500` - Secondary accent (#a855f7)
- `pink-500` - Tertiary accent (#ec4899)

**Neutral Colors:**
- `black` - Primary background
- `gray-900` - Secondary background (#111827)
- `gray-800` - Card backgrounds (#1f2937)
- `gray-700` - Darker elements (#374151)
- `gray-400` - Secondary text (#9ca3af)
- `gray-300` - Tertiary text (#d1d5db)
- `white` - Primary text and highlights

**Gradient Combinations:**
```css
/* Primary Gradient - Use for headings, important CTAs */
from-emerald-400 via-cyan-400 to-purple-500

/* Secondary Gradient - Use for borders, subtle effects */
from-emerald-500 to-cyan-500

/* Accent Gradient - Use for animated elements */
from-emerald-400 via-pink-500 to-purple-500

/* Background Gradients */
from-black via-gray-900 to-black
```

#### Typography Scale

**Headings:**
```javascript
// H1 - Page titles
"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold"

// H2 - Section titles
"text-2xl md:text-3xl lg:text-4xl font-bold"

// H3 - Subsection titles
"text-xl md:text-2xl font-semibold"

// H4 - Card titles
"text-lg md:text-xl font-semibold"
```

**Body Text:**
```javascript
// Large body
"text-lg md:text-xl"

// Regular body
"text-base"

// Small text
"text-sm"

// Extra small
"text-xs"
```

#### Spacing System

**Container Padding:**
```javascript
// Page containers
"px-4 py-20"              // Mobile
"sm:px-6 lg:px-8"         // Tablet/Desktop

// Section spacing
"space-y-16"              // Between major sections
"space-y-8"               // Between subsections
"space-y-4"               // Between related elements
```

**Component Spacing:**
```javascript
// Large gaps
"gap-12 md:gap-16 lg:gap-20"

// Medium gaps
"gap-6 md:gap-8"

// Small gaps
"gap-2 md:gap-4"
```

### Glass-morphism Pattern

**Standard Glass Card:**
```javascript
className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl"
```

**Interactive Glass Card:**
```javascript
className="backdrop-blur-md bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all duration-300"
```

**Glass with Gradient Border:**
```javascript
className="animated-border backdrop-blur-md bg-white/10 rounded-2xl"
```

### Responsive Design Breakpoints

**Mobile-First Approach - Always start with mobile styles:**

```javascript
// Mobile (default) - 0px to 639px
"text-base p-4"

// Small tablets - 640px+
"sm:text-lg sm:p-6"

// Tablets - 768px+
"md:text-xl md:p-8"

// Small laptops - 1024px+
"lg:text-2xl lg:p-10"

// Large screens - 1280px+
"xl:text-3xl xl:p-12"
```

**Responsive Layout Patterns:**
```javascript
// Grid that stacks on mobile
"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Flex that wraps
"flex flex-wrap gap-4"

// Flex column to row
"flex flex-col md:flex-row gap-6"

// Hide/show based on screen size
"hidden md:block"        // Hidden on mobile, visible on tablet+
"block md:hidden"        // Visible on mobile, hidden on tablet+
```

---

## Component Patterns

### Standard Component Structure

```javascript
import { useState, useEffect } from 'react';
import { IconName } from 'lucide-react';
import ComponentName from '../componentName';

/**
 * Brief description of what this component does
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Prop description
 */
function ComponentName({ title, children }) {
  // 1. State declarations
  const [state, setState] = useState(initialValue);

  // 2. Effects
  useEffect(() => {
    // Effect logic
    return () => {
      // Cleanup
    };
  }, [dependencies]);

  // 3. Event handlers
  const handleEvent = () => {
    // Handler logic
  };

  // 4. Render helpers (if needed)
  const renderHelper = () => {
    // Helper JSX
  };

  // 5. Main render
  return (
    <div className="...">
      {/* Component JSX */}
    </div>
  );
}

export default ComponentName;
```

### Conditional Rendering Patterns

```javascript
// ✅ CORRECT - Early return for loading states
if (loading) {
  return <LoadingSpinner />;
}

// ✅ CORRECT - Ternary for simple conditions
{isActive ? <ActiveIcon /> : <InactiveIcon />}

// ✅ CORRECT - && for conditional rendering
{showMessage && <Message text={text} />}

// ✅ CORRECT - Using variables for complex JSX
const content = isLoggedIn ? <Dashboard /> : <Login />;
return <div>{content}</div>;

// ❌ INCORRECT - Nested ternaries (hard to read)
{condition ? (another ? <A /> : <B />) : <C />}
```

### Props Patterns

```javascript
// ✅ CORRECT - Destructure props in function signature
function Card({ title, description, image, onClick }) {
  // Use props directly
}

// ✅ CORRECT - Default props
function Button({
  text = 'Click me',
  variant = 'primary',
  size = 'medium'
}) {
  // Component logic
}

// ✅ CORRECT - Spread remaining props
function Input({ label, error, ...inputProps }) {
  return (
    <div>
      <label>{label}</label>
      <input {...inputProps} />
      {error && <span>{error}</span>}
    </div>
  );
}
```

---

## Animation & Interactions

### Transition Standards

**All interactive elements MUST have smooth transitions:**

```javascript
// Standard transition for most elements
"transition-all duration-300"

// Faster transitions for hover states
"transition-colors duration-200"

// Specific property transitions
"transition-transform duration-500"

// Custom easing
"transition-all duration-300 ease-in-out"
```

### Hover Effects

**Scale Transform:**
```javascript
// Subtle scale (cards, buttons)
"transform hover:scale-105 transition-all duration-300"

// Very subtle (large elements)
"transform hover:scale-[1.02] transition-all duration-300"

// Scale down (buttons on click)
"active:scale-95"
```

**Color Changes:**
```javascript
// Text color
"text-gray-300 hover:text-white transition-colors duration-300"

// Background color
"bg-emerald-500 hover:bg-emerald-600 transition-colors duration-200"

// Gradient shift
"bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600"
```

**Group Hover Pattern:**
```javascript
// Parent element
<div className="group">
  {/* Child elements respond to parent hover */}
  <h3 className="group-hover:text-emerald-400">Title</h3>
  <p className="group-hover:text-gray-200">Description</p>
  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
</div>
```

### Animation Classes

**Pulse Effect:**
```javascript
"animate-pulse"  // For loading states, breathing effects
```

**Bounce Effect:**
```javascript
"animate-bounce"  // For scroll indicators, attention grabbers
```

**Custom Animations in Tailwind:**
```javascript
// Glow animation (for borders)
"animate-glow-spin"

// Fade in
"animate-in fade-in slide-in-from-top-2 duration-300"
```

### Loading States

```javascript
// Always provide loading feedback
{loading ? (
  <LoadingSpinner />
) : (
  <Content />
)}

// Skeleton loaders for content
<div className="animate-pulse bg-gray-700 h-4 rounded"></div>
```

---

## Accessibility Standards

### ARIA Labels

**All interactive elements MUST have proper ARIA labels:**

```javascript
// Buttons
<button
  onClick={handleClick}
  aria-label="Close menu"
  aria-expanded={isOpen}
>
  <X />
</button>

// Links
<Link
  to="/about"
  aria-label="Navigate to About page"
  aria-current={isActive ? 'page' : undefined}
>
  About
</Link>

// Icons (decorative)
<Icon className="..." aria-hidden="true" />

// Navigation
<nav aria-label="Main navigation">
  {/* nav items */}
</nav>
```

### Semantic HTML

**Always use semantic HTML elements:**

```javascript
// ✅ CORRECT
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>

// ❌ INCORRECT - Don't use divs for everything
<div className="header">
<div className="nav">
```

### Focus States

**All interactive elements MUST have visible focus states:**

```javascript
"focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black"
```

### Keyboard Navigation

```javascript
// Handle Enter and Space for custom clickable elements
const handleKeyPress = (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleClick();
  }
};

<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyPress={handleKeyPress}
>
  Clickable Element
</div>
```

---

## Performance Optimization

### Image Optimization

**ALWAYS use OptimizedImage component:**

```javascript
import OptimizedImage from '../optimizedImage';

<OptimizedImage
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  eager={false}  // true for above-fold images only
  className="w-full h-full object-cover"
/>
```

### Lazy Loading

```javascript
// Lazy load route components
const BlogPost = lazy(() => import('./pages/blog/post'));

// Wrap in Suspense
<Suspense fallback={<LoadingSpinner />}>
  <BlogPost />
</Suspense>
```

### Avoiding Re-renders

```javascript
// Use memo for expensive components
import { memo } from 'react';

const ExpensiveComponent = memo(({ data }) => {
  // Component logic
});

// Use useMemo for expensive calculations
const processedData = useMemo(() => {
  return expensiveOperation(data);
}, [data]);

// Use useCallback for event handlers passed to children
const handleClick = useCallback(() => {
  // Handler logic
}, [dependencies]);
```

---

## Git Workflow

### Commit Message Format

**Always use descriptive commit messages:**

```
<type>: <short description>

<detailed description if needed>

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `style:` - UI/styling changes
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `docs:` - Documentation updates
- `chore:` - Maintenance tasks

**Examples:**
```
feat: Add dynamic blog loading with vite-plugin-markdown

- Install vite-plugin-markdown for build-time processing
- Update posts.js to use pre-processed modules
- Add error handling with static fallback
- Fix Buffer API issue in browser environment

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

### Branch Strategy

- `main` - Production-ready code
- Feature branches - Use descriptive names (`feature/blog-cms`, `fix/mobile-nav`)

### Before Committing

1. **Test locally** - Verify changes work
2. **Check responsive design** - Test mobile, tablet, desktop
3. **Run build** - Ensure no build errors
4. **Check accessibility** - Verify ARIA labels and keyboard nav
5. **Review file sizes** - Ensure no file exceeds 500 lines

---

## Important Project Rules

### Hard Rules (NEVER Break These)

1. **NO TypeScript** - This project uses JavaScript only
2. **200-500 line file limit** - Extract components if exceeding
3. **Mobile-first responsive design** - Always start with mobile styles
4. **Accessibility required** - All interactive elements need ARIA labels
5. **Use OptimizedImage** - Never use raw `<img>` tags
6. **Dark theme consistency** - Maintain black/gray background throughout
7. **Gradient brand colors** - emerald-400, cyan-400, purple-500
8. **Default exports** - Main components use default export
9. **index.jsx naming** - Main component file is always `index.jsx`
10. **Smooth transitions** - All interactive elements have 300ms transitions

### Soft Guidelines (Follow Unless Good Reason)

1. **Prefer composition over props** - Use children and compound components
2. **Extract custom hooks** - For reusable stateful logic
3. **Co-locate related files** - Keep component files together
4. **Minimize dependencies** - Only add packages when necessary
5. **Use semantic HTML** - Prefer `<button>` over `<div onClick>`
6. **Comment complex logic** - Help future developers understand
7. **Consistent spacing** - Use Tailwind's spacing scale
8. **Group related imports** - React, external libs, internal components
9. **Follow DRY principle** - Don't Repeat Yourself. When the same UI element, button, or pattern appears in multiple places, extract it into a reusable component instead of duplicating code

### Component Checklist

Before completing a component, verify:

- [ ] File is under 500 lines
- [ ] Uses default export
- [ ] Has proper ARIA labels
- [ ] Responsive on mobile, tablet, desktop
- [ ] All interactive elements have hover/focus states
- [ ] Transitions are smooth (300ms standard)
- [ ] Colors match design system
- [ ] Images use OptimizedImage component
- [ ] No console errors
- [ ] Follows semantic HTML
- [ ] Has descriptive prop names
- [ ] Includes JSDoc comments for complex props

### Design Pattern Checklist

For any new feature:

- [ ] Dark background (black/gray-900)
- [ ] Gradient accents (emerald/cyan/purple)
- [ ] Glass-morphism effects where appropriate
- [ ] Animated hover states
- [ ] Group hover patterns for cards
- [ ] Loading states for async operations
- [ ] Error handling with user feedback
- [ ] Mobile-first responsive design
- [ ] Keyboard navigation support
- [ ] Screen reader friendly

---

## Common Patterns Reference

### Card Component Pattern

```javascript
<div className="group relative backdrop-blur-md bg-white/10 hover:bg-white/15 rounded-xl border border-white/20 p-6 transition-all duration-300 transform hover:scale-105">
  {/* Animated border effect */}
  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-emerald-400 via-pink-500 to-purple-500 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

  {/* Content */}
  <div className="relative z-10">
    <h3 className="text-xl font-semibold group-hover:text-emerald-400 transition-colors">
      Title
    </h3>
    <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
      Description
    </p>
  </div>
</div>
```

### Button Pattern

```javascript
// Primary Button
<button className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black">
  Button Text
  <Icon className="w-5 h-5" />
</button>

// Secondary Button
<button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
  Button Text
</button>
```

### Gradient Text Pattern

```javascript
<h1 className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
  Gradient Heading
</h1>
```

---

## Questions or Updates?

If you encounter a situation not covered in this guide:
1. Look at existing similar components for patterns
2. Follow the general principles (accessibility, responsiveness, dark theme)
3. Document your decision for future reference
4. Keep files under 500 lines by extracting components

This is a living document. Update it when new patterns emerge or standards change.

---

**Last Updated:** 2026-01-06
**Maintainer:** Herman Hylland
**AI Assistant:** Claude Code by Anthropic
