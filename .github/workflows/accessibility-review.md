---
on:
  workflow_dispatch:
  pull_request:
    types: [ready_for_review]
    paths:
      - 'README.md'
permissions:
  contents: read
  actions: read
engine: claude
tools:
  playwright:
  bash:
  edit:
network: defaults
safe-outputs:
  create-issue:
    title-prefix: "[accessibility] "
    labels: [accessibility, automation]
  upload-assets:
  create-pull-request:
    title-prefix: "[slides] "
    labels: [slides, automation]
    draft: true
---

# Accessibility Review for Slides

This workflow reviews the accessibility and quality of the presentation slides.

## Steps to perform:

1. **Build the slides**: Run `npx @marp-team/marp-cli README.md -o slides.html` to rebuild the HTML slides from the Markdown source.

2. **Take screenshots of ALL slides**: Use Playwright to:
   - Navigate to the `slides.html` file
   - Take screenshots of ALL slides in the presentation (not just the first one)
   - Use keyboard navigation (right arrow key) to advance through slides
   - Save each screenshot with a descriptive filename (e.g., `slide-1.png`, `slide-2.png`, etc.)
   - Upload all screenshots as artifacts

3. **Analyze accessibility and quality**: Review the slides.html file and ALL screenshots for issues, including:
   - **Text overflow/bleeding**: Check if any text extends beyond slide boundaries
   - **Content density**: Identify overly crowded slides
   - Color contrast
   - Text readability
   - Semantic HTML structure
   - Heading hierarchy
   - Alt text for images
   - Keyboard navigation
   - Screen reader compatibility
   - Font sizes

4. **Take action based on findings**:

   **If text bleeding or overflow is detected on any slide:**
   - Identify the specific slide number(s) with issues
   - Create a pull request with modifications to README.md that:
     - Reduce verbose content on affected slides
     - Split overly dense slides into multiple slides if needed
     - Use more concise language while maintaining accuracy
     - Ensure text fits properly within slide boundaries
   - In the PR description, list which slides were modified and why
   - Still create an accessibility issue for other findings
   
   **If no text bleeding but other accessibility issues exist:**
   - Create an issue with your findings including:
     - A summary of accessibility strengths
     - Specific accessibility concerns found
     - Recommendations for improvements
     - Reference to WCAG 2.1 guidelines where applicable
     - Note that screenshots are available as workflow artifacts

The slides are a presentation about GitHub Agentic Workflows and Continuous AI, targeted at an audience familiar with Azure DevOps Pipelines but new to GitHub Actions.
