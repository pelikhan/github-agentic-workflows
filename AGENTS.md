# AGENTS.md — GitHub Agentic Workflows & Continuous AI Presentation

> `./gh-aw` is an alias of `gh aw`!

## Project Overview 
This repository is for a presentation on **GitHub Agentic Workflows** and **Continuous AI**.  

- **Agentic Workflows** let developers write GitHub Actions in natural language. The workflow’s “source code” is a markdown description that gets compiled into a YAML Actions workflow by the `gh aw` CLI  .  
- **Continuous AI** is a broad concept (coined to echo “CI/CD”) for using AI/LLMs to automate ongoing software collaboration tasks (documentation, issue triage, etc.)  .  

Our audience knows **Azure DevOps Pipelines** but is new to GitHub Actions and AI.  
👉 Explain that **GitHub Actions** are YAML-defined CI workflows (no GUI editor) and each YAML file in `.github/workflows/` triggers on events , analogous to pipeline stages. 

---

## Slide & Demo Requirements  

- **Slides:**  
  README.md is a slide deck using [Marp](https://marp.app/) syntax (note the `marp: true` frontmatter).  
  - Intro: *What are Agentic Workflows? Why Continuous AI?*  
  - Comparison: GitHub Actions vs Azure Pipelines.  
  - Visual: Natural language → LLM engine → GitHub Action run.  

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
- run `gh aw compile`

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
