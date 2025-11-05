---
marp: true
---

# GitHub Agentic Workflows
## Research Preview

Peli de Halleux
Microsoft Research

https://github.com/githubnext/gh-aw


> in collaboration with Edward Aftandilian (GitHub Next), Russell Horton (GitHub Next), Don Syme (Github Next), Krzysztof Cieślak (GitHub Next), Ben De St Paer-Gotch (GitHub), Jiaxiao Zhou (Microsoft)

---

# peli

_building developer tool & experiences_

- Pex - Dynamic Symbolic Test Generatino for .NET
- TouchDevelop - Code on your phone! (Windows Phone, iPhon 5!)
- BBC micro:bit - coding on national TV?
- MakeCode - K12 coding platform (Minecraft/Arcade/micro:bit)
- GenAIScript - scripting LLMs
- ...

> linkedin: @pelidehalleux

---

# Continuous Integration to Continuous AI

- **Accessibility review** — Automated WCAG compliance checks

- **Documentation** — Auto-generate API docs and README files

- **Code review** — AI-powered PR analysis and suggestions

- **Test improvement** — Identify missing test coverage

- **Bundle analysis** — Monitor package size and dependencies

- **Issue triage** — Automated labeling and prioritization

> https://githubnext.com/projects/continuous-ai/

<!--
https://github.com/githubnext/gh-aw/issues/1920
-->

---

# Evolution: LLMs to SWE Agents
## From code completion to autonomous workflows

**2021: GitHub Copilot** — AI-powered code completion

**2022: ChatGPT** — Conversational AI assistant

**2023: LLMs & Web UI Generators** — Prompt to Web App

**2024: Agent CLIs** — Claude Code: File edit, bash

**2025: MCP, SKILLS.md** - Unified tooling

---

# CI/CD with GitHub Actions

YAML workflows stored in `.github/workflows/` that trigger on events like push, pull requests, configuration as code.

```yaml
on: # Event triggers
  push:
    branches: [main]
permissions: # Fine-grained access control
  contents: read
jobs:
  build: # Containerized execution
    steps:
      - uses: actions/checkout@v4 
      - uses: actions/setup-node@v4
      - run: npm test # deterministic code
```

---

# GitHub Agentic Workflows

Combine Github Actions and SWE Agents.

```yaml
--- # GitHub Actions yaml
on: issues: types: [opened]
permissions: issue: write # danger
--- # Agent prompt
Summarize the current issue.
```

> https://githubnext.com/projects/agentic-workflows/

---


# The "Lethal Trifecta" for AI Agents

AI agents become risky when they combine **three capabilities** at once:

- **Private data access**

- **Untrusted content**

- **External communication**

> https://simonw.substack.com/p/the-lethal-trifecta-for-ai-agents

---

# Combine Github Actions and SWE Agents **SAFELY**.

---

# Keeping it safe with Agents

- **Containers**: GitHub Actions Jobs

- **Firewalls**: Network Control

- **Zero Trust**: Minimal Permissions

- **Plan / Check / Act**: LLM judge, Human in the loop

---

# Plan / Check / Act for Agents

- **Activation** — Authorization & input sanitization
- **Agent** — AI Engine with read-only permissions
- **Detection** — Output validation & secret scanning
- **Action** — Safe outputs with write permissions

---

# Safe Outputs

```yaml
---
on: 
  pull_request:
    types: [opened]
permissions: read-all # AI agent: read-only
safe-outputs:
  create-issue:     # Separate job handles writes
  create-pull-request:
  add-comment:
---
Check for breaking changes in package.json and create an issue.
```

**Security:** AI can't directly write to GitHub. Safe-outputs validate and execute.

---

# Agentic Workflow Compiler

```yaml
jobs:
  activation:
    run: check authorization & sanitize inputs

  agent: needs[activation] # new container
    permissions: contents: read # no writes!
    run: claude "analyze issue" --tools github

  detection: needs[agent] #  new container
    run: detect malicious outputs
    permissions: none

  add-comment: needs[detection] # new container
    run: gh issue comment add ...
    permissions: issues: write
```

> GitHub Action Workflows is a compiler, yaml is the "bytecode"

---

# Getting Started (Agentically)

```sh
# install github actions workflow
gh extension install githubnext/gh-aw
gh aw init
# install copilot cli
npm install -g github/copilot
copilot

> /create-agentic-workflow
```

> Designed to be built with Agents from day 0.

---

# Network Permissions

```yaml
---
on:
  pull_request:
network:
  allowed:
    - defaults  # Basic infrastructure
    - node      # NPM ecosystem
tools:
  web-fetch:
---
Fetch latest TypeScript docs report findings in a comment.
```

> Control external access for security

---

# Safe Outputs → Copilot Handoff

```yaml
---
on:
  issues:
    types: [opened]
safe-outputs:
  create-issue:
    assignees: ["copilot"]
---
Analyze issue and break down into implementation tasks
```

> Triage agent → Creates tasks → @copilot implements → Review

---

# AI Engines
## Multiple AI providers supported

* **Claude Code** (default) • **Codex** (exp.) • **Copilot CLI** (exp.)
* **Custom Engine** (bring your own AI)

```yaml
engine: claude  # sensible defaults
```

---

# MCP Servers Configuration

```yaml
mcp-servers:
  bundle-analyzer:
    command: "node"
    args: ["path/to/mcp-server.js"]
    allowed: "*"
```

**MCP:** Extend AI with [Model Context Protocol](https://modelcontextprotocol.io/)

---

# Containerized, Firewalled MCPs

```yaml
mcp-servers:
  web-scraper:
    container: mcp/fetch
    network:
      allowed: ["npmjs.com", "*.jsdelivr.com"]
    allowed: ["fetch"]
```

**Defense in depth:** Container + network + permissions

---

# Monitoring & Optimization

Let the agent investigate its own performance.

```sh
# Filter by date range
gh aw logs --start-date -1w accessibility-review
```

---

# Cache & Persistent Memory
## Speed up workflows and maintain context

```yaml
---
on:
  pull_request:
    types: [opened]
cache-memory: true  # AI remembers across runs
---
Review this PR with context from previous reviews:
- Check for repeated issues
- Track improvement trends
- Reference past discussions
```

**Benefits:** Faster builds + contextual AI analysis

---

# Playwright + Upload Assets
## Browser automation for web app testing

```yaml
---
on:
  pull_request:
    types: [ready_for_review]
tools:
  playwright:      # Headless browser automation
safe-outputs:
  create-issue:
  upload-assets:   # Attach screenshots to artifacts
---
Test the web application:
1. Navigate to the deployed preview URL
2. Take screenshots of key pages
3. Check for visual regressions
4. Validate responsive design (mobile, tablet, desktop)
5. Create issue with findings and screenshots
```

**Use cases:** Visual regression, accessibility audits, E2E validation for SPAs

---

# Sanitized Context & Security
## Protect against prompt injection

```yaml
---
on:
  issues:
    types: [opened]
permissions:
  contents: read
  actions: read
safe-outputs:
  add-comment:
---
# RECOMMENDED: Use sanitized context
Analyze this issue content (safely sanitized):
"${{ needs.activation.outputs.text }}"

Metadata:
- Issue #${{ github.event.issue.number }}
- Repository: ${{ github.repository }}
- Author: ${{ github.actor }}
```

**Auto-sanitization:** @mentions neutralized, bot triggers blocked, malicious URIs filtered

---

# Creating Agentic Workflows with AI
## Use Copilot CLI to generate workflows

Install GitHub Copilot CLI:
```sh
npm install -g @github/copilot
```

Generate a workflow interactively:
```sh
copilot
```

Then in the Copilot CLI:
```
load https://raw.githubusercontent.com/githubnext/gh-aw/main/.github/prompts/create-agentic-workflow.prompt.md

Create an agentic workflow that reviews PRs for:
- Breaking changes in package.json
- Missing TypeScript types
- Security vulnerabilities
```

**Meta-automation:** Use AI to create AI workflows!

---

| Workflow | Title |
|----------|-------|
| [accessibility-review](.github/workflows/accessibility-review.md) | Accessibility Review for Slides 
| [daily-log-scanner](.github/workflows/daily-log-scanner.md) | Daily Agentic Workflow Log Scanner |
| [issue-triage](.github/workflows/issue-triage.md) | Issue Triage |
| [package-security-check](.github/workflows/package-security-check.md) | Package Security Deep Research |
| [pseudo](.github/workflows/pseudo.md) | Pseudo Language Converter |
| [slidify](.github/workflows/slidify.md) | Slidify - Generate Slide from Issue |
| [update-workflow-docs](.github/workflows/update-workflow-docs.md) | Agentic Workflow Documentation Updater | 
