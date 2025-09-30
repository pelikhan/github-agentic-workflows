---
on:
  workflow_dispatch:
  push:
    branches:
      - main
    paths:
      - 'README.md'
permissions:
  contents: read
  actions: read
engine: claude
tools:
  playwright:
  bash:
network: defaults
safe-outputs:
  create-issue:
    title-prefix: "[accessibility] "
    labels: [accessibility, automation]
  upload-assets:
---

# Accessibility Review for Slides

This workflow reviews the accessibility of the presentation slides.

## Steps to perform:

1. **Build the slides**: Run `npx @marp-team/marp-cli README.md -o slides.html` to rebuild the HTML slides from the Markdown source.

2. **Take a screenshot**: Use Playwright to navigate to the `slides.html` file and take a screenshot of the first slide. Save it to a file.

3. **Analyze accessibility**: Review the slides.html file and the screenshot for accessibility issues, including:
   - Color contrast
   - Text readability
   - Semantic HTML structure
   - Heading hierarchy
   - Alt text for images
   - Keyboard navigation
   - Screen reader compatibility
   - Font sizes

4. **Create an issue**: Create a GitHub issue with your findings. Include:
   - A summary of accessibility strengths
   - Specific accessibility concerns found
   - Recommendations for improvements
   - Reference to WCAG 2.1 guidelines where applicable

The slides are a presentation about GitHub Agentic Workflows and Continuous AI, targeted at an audience familiar with Azure DevOps Pipelines but new to GitHub Actions.
