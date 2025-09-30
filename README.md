# GitHub Agentic Workflows presentation

This repository also contains materials for a presentation on **GitHub Agentic Workflows** and **Continuous AI**. See [AGENTS.md](./AGENTS.md) for details.

## Agentic Workflows

This repository includes example agentic workflows:

| Workflow | Title | Role |
|----------|-------|------|
| [issue-triage](.github/workflows/issue-triage.md) | Issue Triage | Automatically summarizes new issues with emojis and responds in a comment |
| [accessibility-review](.github/workflows/accessibility-review.md) | Accessibility Review for Slides | Reviews the accessibility of presentation slides on push to main |
| [daily-log-scanner](.github/workflows/daily-log-scanner.md) | Daily Agentic Workflow Log Scanner | Analyzes recent GitHub Agentic Workflow runs daily to identify issues and missing tools |
| [issue-triage](.github/workflows/issue-triage.md) | Issue Triage | Automatically summarizes new issues with emojis and responds in a comment |
| [package-security-check](.github/workflows/package-security-check.md) | Package Security Deep Research | Conducts comprehensive security analysis of package-lock.json changes in pull requests |
| [pseudo](.github/workflows/pseudo.md) | Pseudo Language Converter | Transforms issue content to pseudo-code style language via /pseudo command |
| [update-workflow-docs](.github/workflows/update-workflow-docs.md) | Agentic Workflow Documentation Updater | Automatically updates README.md with a summary table of all agentic workflows |

## Tools

```
npm install -g @github/copilot
npm install -g @marp-team/marp-cli
```