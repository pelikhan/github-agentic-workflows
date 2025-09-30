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

