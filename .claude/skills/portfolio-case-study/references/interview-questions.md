# Interview framework

Purpose: extract the raw material a strong case study is made of. The user often knows the project so well that they skip the parts reviewers care about most (constraints, trade-offs, friction). The interview surfaces those.

## How to run it

- 2-4 questions per round, conversational, in Norwegian (match the user's language).
- Adapt based on answers; skip questions already answered.
- Follow every significant decision with "why that, and not the alternative?"
- When an answer is vague ("it went pretty well"), push once for specifics ("what does 'well' look like: a number, a client reaction, something you can point to?").
- Before writing, summarize what you have in a short bullet list and confirm.

## Round 1: Context (always ask)

1. Who was the client / who was it for, and what do they do?
2. What was the deliverable and scope? (full site from scratch, redesign, feature, audit...)
3. Timeframe and your role: solo end-to-end, or part of a team? What did YOU own?
4. What does the client's success look like: what were they hoping would change?

## Round 2: Problem and constraints

5. What was actually broken or missing before? (For redesigns: what was wrong with the old solution, concretely?)
6. What constraints shaped the work: budget, deadline, existing brand/CMS, client's technical level, content availability?
7. Were there stakeholders with conflicting wishes? How was that handled?

## Round 3: Process and decisions (the gold)

8. Walk through the phases roughly: what came first, what next?
9. What were the 2-3 biggest decisions in the project? For each: what were the alternatives, and why did you land where you did?
10. What research or investigation happened before designing/building? (competitor look, user input, analytics, accessibility audit of the old site...)
11. Show me the friction: what didn't work on the first try? What did the client push back on? What had to be redone?
12. Was AI-assisted workflow (Claude Code etc.) part of the process? For what, and how was output validated?

## Round 4: Solution and results

13. What are the 3-5 features/screens that best represent the work?
14. Numbers: performance before/after, Lighthouse, load time, traffic, conversions, WCAG issues fixed, time saved?
15. If no hard numbers: what did the client say? What changed for end users in practice?
16. Is it live? URL? Screenshots of before AND after available?

## Round 5: Reflection

17. Looking back, what would you do differently?
18. What did this project teach you that you've used since?

## Asset inventory (ask once, near the end)

- Before-screenshots of the old solution (needed for before/after slider)
- After-screenshots at matching viewport/crop
- Process artifacts: wireframes, Figma frames, sketches, style tiles
- Client quote or permission to reference them by name
- Live URL

If before/after images exist at comparable framing, flag that the before/after slider component is a strong fit. If they don't match in framing, suggest side-by-side cards instead; a slider with mismatched crops looks broken.
