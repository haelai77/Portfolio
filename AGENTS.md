# AGENTS.md

## Purpose
This repository should favor clean, compact UI and disciplined software engineering. Changes should improve clarity, maintainability, and usability without adding unnecessary complexity.

## UI Direction
- Prefer compact layouts over oversized cards, loose spacing, or decorative excess.
- Keep interfaces clean, legible, and visually calm.
- Use a consistent spacing scale, consistent radii, and restrained shadows.
- Favor simple visual hierarchy: clear headings, short supporting copy, obvious actions.
- Reuse existing patterns before introducing new ones.
- Build responsive layouts that stay compact and readable on mobile and desktop.
- Prioritize accessibility: semantic HTML, keyboard support, sufficient contrast, and meaningful labels.
- Avoid visual noise: unnecessary gradients, animation, borders, icons, or duplicated labels.

## Engineering Principles
- DRY: do not duplicate logic, markup, or styling when a shared abstraction is justified.
- KISS: prefer the simplest implementation that solves the problem well.
- YAGNI: do not add speculative abstractions, props, state, or dependencies.
- SRP: keep components and modules focused on one clear responsibility.
- Composition over inheritance: build small reusable pieces that combine cleanly.
- Make invalid states hard to represent with clear types and constrained APIs.
- Prefer readability over cleverness.
- Leave the codebase cleaner than you found it.

## Implementation Guidelines
- Match existing project conventions unless there is a strong reason to improve them.
- Keep components small and reusable, but do not abstract prematurely.
- Prefer explicit names for components, props, variables, and CSS classes.
- Keep styling localized and predictable.
- Minimize prop surface area and avoid unnecessary configuration.
- Add comments only when they explain non-obvious reasoning.
- Do not introduce new dependencies unless they provide clear value.
- Preserve backward compatibility unless a deliberate breaking change is required.

## Quality Bar
- Verify that changes compile and do not break existing behavior.
- Check responsive behavior for UI changes.
- Watch for regressions in spacing, alignment, overflow, and accessibility.
- When possible, reduce complexity while making the change.
- If a tradeoff is required, prefer maintainability and clarity.
