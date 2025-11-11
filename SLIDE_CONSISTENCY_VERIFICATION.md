# Slide Consistency Verification

## Overview
This document verifies the consistency between agentic workflow examples shown across different slides in the presentation.

## Changed Slides

### Slide 6: GitHub Agentic Workflows
**Purpose**: Introduce agentic workflows with a concrete example

**Content** (lines 90-110):
```yaml
---
on:
  issues:
    types: [opened]
permissions:
  contents: read  # AI agent: read-only
safe-outputs:
  add-comment:    # Separate job handles writes
---
Summarize issue and respond in a comment.
```

**Key Features**:
- Triggers on issue opened event
- Read-only permissions for AI agent
- Uses safe-outputs pattern for comment creation
- Clear task description

### Slide 16: Agentic Workflow Compiler
**Purpose**: Show how the markdown workflow compiles to GitHub Actions YAML

**Content** (lines 171-189):
```yaml
jobs:
  activation:
    run: check authorization & sanitize inputs

  agent: needs[activation] # new container
    permissions: contents: read # no writes!
    run: claude "Summarize issue and respond" --tools github

  detection: needs[agent] # new container
    run: detect malicious outputs
    permissions: none

  add-comment: needs[detection] # new container
    run: gh issue comment add ...
    permissions: issues: write
```

**Key Features**:
- Shows the job dependency chain: activation → agent → detection → add-comment
- Agent job has read-only permissions (contents: read)
- Detection job validates outputs with no permissions
- Add-comment job has write permissions (issues: write)
- Task matches the markdown: "Summarize issue and respond"

## Consistency Check ✅

| Aspect | Slide 6 (Markdown) | Slide 16 (Compiled) | Status |
|--------|-------------------|---------------------|--------|
| Event Trigger | `on: issues: types: [opened]` | Implicitly shown through workflow | ✅ Consistent |
| AI Permissions | `permissions: contents: read` | `agent: permissions: contents: read` | ✅ Consistent |
| Safe Outputs | `safe-outputs: add-comment` | `add-comment: needs[detection]` job | ✅ Consistent |
| Task | "Summarize issue and respond in a comment" | `run: claude "Summarize issue and respond"` | ✅ Consistent |
| Security Pattern | AI has no write permissions | Agent has `contents: read`, add-comment has `issues: write` | ✅ Consistent |

## Summary
The agentic workflow example now flows consistently from slide to slide:
1. **Slide 6** introduces the markdown format with safe-outputs pattern
2. **Slide 16** shows how that markdown compiles into separate jobs with proper permission separation

This demonstrates the key security principle: the AI agent runs with read-only permissions, and write operations are handled by separate jobs after validation.
