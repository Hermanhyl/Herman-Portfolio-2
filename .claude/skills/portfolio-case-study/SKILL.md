---
name: portfolio-case-study
description: Create, improve, or rework portfolio case studies for Herman's UX/frontend portfolio site. Use this skill whenever the user wants to add a new project to their portfolio, write a case study, showcase client work (like Connecta), document a project's process and decisions, review or rework existing portfolio pieces, or asks how to present their work professionally to recruiters and potential clients. Also trigger when the user mentions "portefølje", "case study", "showcase", "legge til prosjekt", or wants interactive portfolio components like before/after sliders. The skill runs a structured interview to extract the project story before writing anything.
---

# Portfolio Case Study Builder

Build professional, recruiter-ready case studies for Herman Hylland's portfolio (React + i18n, Norwegian and English). The goal of every case study is to make a hiring manager or potential client think: "this person makes good decisions, communicates clearly, and I can see exactly how they work."

The core insight from hiring research: recruiters spend under 60 seconds scanning before deciding whether to read on. They are not looking for pretty screens. They are looking for **judgment, decision-making, and impact**. Every case study this skill produces must surface those three things fast.

## Modes

Figure out which mode applies from the user's request:

1. **New case study** - The user has a finished (or nearly finished) project to add. Run the interview, then write the case study, then offer components.
2. **Rework existing** - The user wants to improve an existing case study or portfolio piece. Read `references/audit-checklist.md`, evaluate the existing piece against it, present findings, then rewrite with the user's input.
3. **Component request** - The user wants an interactive element (before/after slider, metric cards, process timeline). Go straight to `references/components.md`.
4. **Portfolio strategy** - The user asks what's expected, what's standard, or how to structure the portfolio overall. Read `references/case-study-structure.md` and advise, grounded in their actual portfolio and target roles.

## Mode 1: New case study workflow

### Step 1: Interview first, write second

Never write a case study from thin information. A case study built on vague input reads as generic filler, and generic filler is exactly what makes hiring managers close the tab. The interview is where the real material comes from: the decisions, the trade-offs, the moments where something went wrong and got fixed.

Read `references/interview-questions.md` for the full question framework. Key principles:

- Ask in **rounds of 2-4 questions**, not all 20+ at once. Start with context (client, role, timeframe, scope), then go deeper based on what the answers reveal.
- **Chase the "why" behind decisions.** If the user says "I chose WordPress", the follow-up is "why WordPress over alternatives, and what constraint drove that?" The decision rationale IS the case study.
- **Hunt for friction.** Problems, dead ends, client pushback, technical constraints, things that had to be redone. Recruiters explicitly look for how candidates handle trade-offs and course-correct. A case study with no friction reads as fiction.
- **Extract numbers wherever possible.** Load time before/after, Lighthouse scores, conversion, traffic, time saved, WCAG issues fixed. If hard metrics don't exist, get qualitative outcomes: client quote, validated learning, what changed for the end user.
- If the user has assets (screenshots, before/after images, Figma links, live URL), ask what exists so the case study can be structured around them.
- Stop interviewing when there is enough for a strong story. Do not drag it out. Usually 2-3 rounds is enough; confirm with a short summary of what you've got before writing.

### Step 2: Write the case study

Read `references/case-study-structure.md` for the full structure and writing guidance. Non-negotiables:

- **Results first.** The summary block at the top states the outcome before the story begins. Busy reviewers decide in seconds; give them the payoff up front.
- **One project, one core problem.** Don't cram everything the project involved into the narrative. Pick the strongest thread; mention the rest briefly.
- **Decisions over deliverables.** Every section should answer "why did you do it this way?" not just "what did you do?"
- **Scannable.** Short paragraphs, clear section headings that follow the process, visuals carrying weight. Someone should get the story in a 2-minute skim and the depth in a 5-minute read.
- **Honest voice, no inflated language.** Herman's positioning is "shows how I actually work". Superlatives and buzzwords undermine that. Concrete beats impressive-sounding every time.
- Never use em dashes. Use commas, parentheses, periods, or colons.

### Step 3: Produce output in both languages

The portfolio uses i18n (Norwegian + English). Produce the case study content as structured data ready to drop into the i18n setup, plus a readable draft of both language versions for review. Ask the user whether they want:
- Markdown drafts (NO + EN) for review first, or
- JSX/JSON directly matching their portfolio's existing content structure (ask them to share an existing case study file so the format matches exactly).

### Step 4: Offer interactive components

After the content is approved, suggest components that fit the specific story (don't force components where they don't add anything):
- **Before/after slider** when there's a redesign with comparable screenshots
- **Metric highlight cards** when there are numbers worth showing
- **Process timeline** for projects with distinct phases
- **Embedded prototype/live link** when the work is interactive

Component code and specs are in `references/components.md`. Components must be accessible (keyboard operable, ARIA, reduced-motion aware). Herman offers WCAG audits professionally, so an inaccessible portfolio component would be self-undermining.

## Mode 2: Reworking existing case studies

1. Ask for the existing case study (URL, text, or file).
2. Read `references/audit-checklist.md` and score the piece against each criterion.
3. Present findings in priority order: what's costing the most (usually: results buried or missing, decisions not explained, wall-of-text, unclear role) before polish items.
4. Interview to fill the gaps the audit revealed. Reuse the relevant questions from `references/interview-questions.md`.
5. Rewrite following the same structure and quality bar as Mode 1.

## Quality bar (check before delivering)

Before presenting any case study, verify it answers these five questions a hiring manager implicitly asks. If any answer is missing or hard to find, fix it first:

1. What was the problem and why did it matter (to the client/users)?
2. What exactly was this person's role and contribution?
3. What key decisions did they make, and why?
4. What went wrong or was hard, and how did they handle it?
5. What changed as a result of the work?
