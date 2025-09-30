---
marp: true
---

# GitHub Agentic Workflows
Peli de Halleux
Microsoft Research

> in collaboration with Edward Aftandilian (GitHub), Peli de Halleux, Russell Horton (GitHub), Don Syme (Github),
Krzysztof Cieślak (GitHub), Ben De St Paer-Gotch (GitHub), Jiaxiao Zhou (Microsoft)

---

# Continuous AI
## Exploring LLM-powered automation in platform-based software collaboration

> https://githubnext.com/projects/continuous-ai/

---

# Continous AI

- Issue triage and labeling.

- Continuous QA.

- Accessibility review.

- Continuous documentation.

- Continuous test improvement.

- ...

---

# GitHub Agentic Workflows
## Towards Natural‑Language Programming for GitHub Actions



> https://githubnext.com/projects/agentic-workflows

---

# 3 Phases of Agentic Workflows

- **Activation** — Authorization

- **Agent** — Copilot

- **Detection** — XPAi

- **Action** — Safe Outputs

---

# GitHub Actions

GitHub Actions are YAML-defined CI/CD workflows stored in `.github/workflows/` that trigger on events like push, pull requests, or issues—no GUI editor needed, unlike Azure DevOps Pipelines.

```yaml
name: Build TypeScript

on:
  push:
    paths:
      - '**.ts'
      - 'tsconfig.json'
      - 'package*.json'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
```

---

# Issue Triage Example
## Agentic Workflow in Natural Language

Write workflows in Markdown with YAML frontmatter—no complex YAML jobs needed!

```markdown
---
on:
  issues:
    types: [opened, reopened]
permissions:
  issues: read
engine: copilot
safe-outputs:
  add-comment:
---
# Issue Triage
Summarize issue #${{ github.event.issue.number }} in 3 emojis. 
Respond in a comment.
```

This compiles to a full GitHub Actions workflow that uses AI to triage issues automatically.

---

# Network Rules & Firewall
## Controlling AI Agent Network Access

GitHub Agentic Workflows include **network access controls** for AI agents to enhance security and prevent unintended external access.

- **Default**: Basic infrastructure only (certificates, JSON schema, Ubuntu)
- **Ecosystem identifiers**: Pre-configured allowlists for common tools (python, node, java, etc.)
- **Custom domains**: Exact domain matches and wildcard patterns
- **Complete lockdown**: Deny all network access with `network: {}`

---

# Network Permission Modes

Four levels of network access control:

1. **Basic Infrastructure** — `network: defaults`
   - Certificates, JSON schema, Ubuntu repositories

2. **Ecosystem Access** — `network: { allowed: [defaults, python, node] }`
   - Language-specific package managers and tools

3. **Custom Domains** — `network: { allowed: ["api.example.com", "*.trusted.com"] }`
   - Granular control with exact matches and wildcards

4. **No Network** — `network: {}`
   - Complete network isolation for sensitive workflows

---

# Network Configuration Example

```yaml
---
on:
  pull_request:
    types: [opened]
permissions:
  contents: read
engine: claude
network:
  allowed:
    - defaults       # Basic infrastructure
    - python        # PyPI ecosystem
    - node          # NPM ecosystem
    - "api.github.com"  # Custom domain
tools:
  web-fetch:
  web-search:
---
# Code Review Agent
Analyze the PR and fetch documentation from allowed domains only.
```

The `network:` field enforces a firewall using Claude Code hooks—not network proxies.

