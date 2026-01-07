---
title: "My Creative Side: Digital Illustration as Passion and Purpose"
date: 2025-01-07T12:00:00.000Z
featured: false
excerpt: "Showcasing my creative and illustrative side—a lifelong passion I always return to, and my dream of combining illustration with my professional work."
readTime: 7 min read
author: Herman Hylland
tags:
  - Digital Art
  - Illustration
  - Passion Project
  - Character Design
  - Creative Expression
---

While my professional focus is frontend development and UI/UX design, digital illustration is so much more than a hobby to me—it's the creative outlet I always fall back to. No matter how busy life gets, I find myself returning to my iPad and Procreate, losing hours in the flow of creating something from nothing. My portfolio features over 80 illustrations, and this collection represents years of passionate practice and creative expression.

## A Passion That Never Fades

Illustration isn't something I picked up recently. It's been with me for as long as I can remember. When I need to decompress, when I want to express something I can't put into words, when I simply want to create—I draw. There's something deeply satisfying about watching a blank canvas transform into a character, a dragon, or a portrait that captures someone's essence.

This passion influences everything I do professionally. The eye for detail, the understanding of color and composition, the ability to visualize ideas—these skills transfer directly into my development and design work. But beyond the practical benefits, illustration keeps my creative spirit alive.

## The Dream: Combining Passion with Profession

Honestly? My dream job would let me use my talents as an illustrator alongside my development skills. Whether that's working on games, creating visual content for digital products, designing characters for apps, or contributing concept art to creative projects—I want my professional work to feel like creative expression, not just technical execution.

I believe being creative through my work makes me a better developer and designer. It's not just about writing clean code or following design systems—it's about bringing imagination and artistry to everything I create. Finding a role where illustration is valued alongside technical skills would be the perfect blend of everything I love.

## What You'll Find in the Gallery

My illustration work spans several categories:

### Portraits
From celebrity studies like David Bowie, Daniel Radcliffe, and Tom Hardy to original character portraits—capturing likeness and personality in digital form is endlessly challenging and rewarding. Self-portraits serve as both practice and artistic reflection.

### Characters
Character design is where imagination runs free. Superheroes like Batman and Black Panther, fantasy figures, cowboys, sailors, angels—each character presents unique challenges in pose, expression, and storytelling through visual detail.

### Dragons & Creatures
Fantasy creatures, especially dragons, are among my absolute favorites. From the majestic Elder Dragon to playful young dragons breathing their first fire, these pieces combine anatomy studies with pure imagination.

### Knights & Warriors
Medieval and fantasy warriors offer rich opportunities for armor design, dramatic poses, and visual storytelling. There's something timeless about depicting strength and heroism.

### Animals & Birds
Eagles, ravens, owls, dogs, snakes—nature provides endless inspiration and helps maintain fundamental drawing skills.

### Landscapes & Scenes
Space stations, cherry blossoms, cityscapes—environmental work challenges me to think about composition, perspective, and atmosphere.

### Sketches & Studies
Not every piece is finished, and that's okay. My sketch work shows the process behind polished illustrations—essential practice that keeps skills sharp.

## How I Built the Gallery

Since this is my portfolio as a frontend developer, I wanted the illustrations section to showcase both my artwork AND my technical skills. Here's how it works:

### The Carousel
The main view features an auto-rotating carousel that cycles through illustrations with smooth 700ms fade transitions. Users can click the navigation dots to jump to specific images, and the carousel pauses on hover to let visitors appreciate each piece.

### Category Filtering
With 80+ illustrations across 8 categories, filtering was essential. The category buttons use React state to instantly filter the displayed images, with a counter showing how many illustrations match the current selection.

### The Grid Layout
The responsive grid adapts from 2 columns on mobile to 5 columns on large screens. Each thumbnail features:
- Hover effects with scale transforms
- Gradient overlays revealing titles
- Ring highlights on focus for accessibility
- Lazy loading for performance

### The Lightbox
Clicking any image opens a custom-built lightbox component using React Portals. Features include:
- Keyboard navigation (arrow keys to browse, Escape to close)
- Touch-friendly navigation buttons
- Loading spinners for smooth image transitions
- Image counter showing position in the collection
- Automatic body scroll lock when open

### Watermark Protection
Each image includes a subtle watermark overlay—my name displayed at 10-15% opacity, rotated for minimal visual interference while protecting my work.

### Technical Details
- **React state management** for carousel index, category selection, and lightbox visibility
- **useCallback and useEffect** hooks for keyboard event handling and cleanup
- **createPortal** to render the lightbox outside the normal DOM hierarchy
- **CSS transitions** for smooth animations throughout
- **Responsive design** ensuring the gallery works on all screen sizes

## Tools of the Trade

My illustration work is created primarily with:
- **Procreate** on iPad Pro—my go-to for 95% of my work
- **Adobe Photoshop** for complex compositions and final touches
- Various custom and downloaded brushes mimicking traditional media

The digital medium allows for endless experimentation without material costs—perfect for trying new techniques and pushing creative boundaries.

## Illustration Informs Everything

Years of illustration practice directly influence my frontend work:

- **Color sense** from mixing palettes transfers to UI design
- **Composition principles** apply to web layouts
- **Attention to detail** carries over to pixel-perfect implementation
- **Visual problem-solving** helps with both art and code

## The Journey Continues

Every illustration teaches me something new. Whether I'm studying anatomy, experimenting with lighting, or trying a completely new style—the growth never stops. And I hope that one day, this passion becomes an even bigger part of my professional life.

If you're looking for someone who brings genuine creativity and artistic vision to technical work, that's exactly what I offer. Illustration isn't separate from my development career—it's the foundation of how I see and create.

*Browse the illustrations section of my portfolio to explore the full collection. And if you know of opportunities where illustration skills are valued alongside frontend development, I'd love to hear about them!*
