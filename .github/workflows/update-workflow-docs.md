---
on:
  workflow_dispatch:
  push:
    branches:
      - main
    paths:
      - '.github/workflows/*.md'
permissions:
  contents: read
  actions: read
engine: copilot
network: defaults
tools:
  bash:
    - "ls -la .github/workflows/*.md"
    - "cat .github/workflows/*.md"
    - "grep -A 5 '^# ' .github/workflows/*.md"
  edit:
safe-outputs:
  create-pull-request:
    title-prefix: "[docs] "
    labels: [documentation, automation]
    draft: false
---

# Agentic Workflow Documentation Updater

This workflow automatically updates the README.md with a summary table of all agentic workflows in the repository.

## Your Task

1. **Discover all agentic workflows**: List all `.md` files in the `.github/workflows/` directory (excluding `.lock.yml` files and non-agentic workflow files like `build-typescript.yml`).

2. **Extract workflow information**: For each agentic workflow file:
   - Extract the workflow title (the first H1 heading in the markdown content, e.g., `# Issue Triage`)
   - Determine the workflow's role/purpose from the markdown description (the text immediately after the H1 heading)
   - Note the filename (without the `.md` extension) for creating links

3. **Generate a markdown table**: Create a table with the following columns:
   - **Workflow**: The filename (as a link to the workflow file, e.g., `[issue-triage](.github/workflows/issue-triage.md)`)
   - **Title**: The H1 heading from the workflow
   - **Role**: A brief description of what the workflow does (1-2 sentences max)

4. **Update README.md**: 
   - Locate the "## Agentic Workflows" section in README.md
   - Replace the current bullet list with the generated markdown table
   - Preserve the section title and any text before the list/table
   - Ensure the table is properly formatted with markdown table syntax

5. **Create a pull request**: Use the safe-outputs to create a pull request with your changes. The PR should:
   - Have a clear title indicating it's updating workflow documentation
   - Include a description explaining what was updated
   - Show the new table of workflows

## Example Table Format

The table should look like this:

| Workflow | Title | Role |
|----------|-------|------|
| [issue-triage](.github/workflows/issue-triage.md) | Issue Triage | Automatically summarizes new issues with emojis |
| [accessibility-review](.github/workflows/accessibility-review.md) | Accessibility Review for Slides | Reviews presentation slides for accessibility issues on push to main |

## Important Notes

- Only include `.md` files from `.github/workflows/` that are agentic workflows (have YAML frontmatter with `engine:` field)
- Skip compiled `.lock.yml` files and standard GitHub Actions YAML files
- Keep descriptions concise and informative
- Ensure the table is properly formatted with consistent spacing
- If you cannot determine a workflow's role from the content, use a generic description like "Automated workflow task"
- DO NOT EDIT MARKDOWN FILES in .github/workflows/*
