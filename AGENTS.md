# AGENTS.md — GitHub Agentic Workflows & Continuous AI Presentation

> `./gh-aw` is an alias of `gh aw`!

## Project Overview 
This repository is for a presentation on **GitHub Agentic Workflows** and **Continuous AI**.  

- **Agentic Workflows** let developers write GitHub Actions in natural language. The workflow’s “source code” is a markdown description that gets compiled into a YAML Actions workflow by the `gh aw` CLI  .  
- **Continuous AI** is a broad concept (coined to echo “CI/CD”) for using AI/LLMs to automate ongoing software collaboration tasks (documentation, issue triage, etc.)  .  

Our audience is **professional web developers** attending Web Unleashed 2025 conference.  
👉 They are familiar with modern web development (Node.js, TypeScript, React) and CI/CD concepts. Focus on practical web development automation use cases and how AI agents can streamline their workflows. 

---

## Slide & Demo Requirements  

- **Slides:**  
  README.md is a slide deck using [Marp](https://marp.app/) syntax (note the `marp: true` frontmatter).  
  - Intro: *What are Agentic Workflows? Why Continuous AI?*  
  - Comparison: GitHub Actions vs Azure Pipelines.  
  - Visual: Natural language → LLM engine → GitHub Action run.  
  - **Quality Check:** When README.md is modified, screenshots of slides should be generated and reviewed to ensure text fits properly within slide boundaries. If text bleeds out of the image, reduce the content on the slide to maintain readability.  

- **Code Demos:**  
  - Show an Agentic Workflow markdown file (e.g. “Issue Clarifier” or “Documentation Updater”).  
  - Compile to GitHub Actions YAML  .  
  - Demonstrate generation using **Copilot CLI** with `/create-agentic-workflow`  .  
  - Run the generated workflow to highlight triggers, permissions, and tools.  

- **Continuous AI Examples:**  
  - Highlight “Continuous Documentation,” “Continuous Triage,” etc. from GitHub Next .  
  - Mention that *GitHub Agentic Workflows* are listed under *Agentic frameworks* in [Awesome-Continuous-AI](https://github.com/githubnext/awesome-continuous-ai) .  

- **Security Diagram:**  
  - Default: read-only permissions + **safe-outputs** .  
  - Show flow: agent job → sanitized outputs → Actions (comments/issues/PRs).  
  - Note: still experimental, “use at your own risk” .  

## Demo Language

Use TypeScript ESM, Node v20, NPM to generate demo code.

## Rebuilding workflows

- Install the githubnext/gh-aw extension `gh extension install githubnext/gh-aw`
- Run `gh aw compile` to compile all workflows or `gh aw compile accessibility-review` for a specific workflow
- The compiled `.lock.yml` files will be generated in `.github/workflows/`

## Background Research  

- **GitHub Actions vs Azure Pipelines:**  
  - Azure: GUI pipeline editor.  
  - GitHub: YAML-based workflows stored in `.github/workflows/` .  
  - Both support triggers (push, PR, issue events).  

- **Agentic Workflows:**  
  - Compiled via `gh aw` CLI .  
  - LLM agent runs in container (Claude, Codex, etc.).  
  - Tools + permissions declared in frontmatter.  

- **Continuous AI:**  
  - Extends CI/CD to AI-augmented collaboration  .  
  - Examples: code review, triage, documentation .  

- **Copilot CLI / Agent Mode:**  
  - Copilot CLI supports agentic workflows: run multi-step tasks from a single prompt .  
  - Modes: interactive and programmatic (useful in demos).  

- **References:**  
  - [GitHub Agentic Workflows](https://github.com/githubnext/gh-aw)   
  - [Continuous AI](https://github.com/githubnext/awesome-continuous-ai)   
  - [Awesome-Continuous-AI](https://github.com/githubnext/awesome-continuous-ai)   
  - [Marp](https://marp.app/)   
