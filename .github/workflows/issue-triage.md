---
on:
  issues:
    types: [opened, reopened]
permissions:
  contents: read
engine: copilot
network: defaults
---
# Issue Triage
Summarize issue #${{ github.event.issue.number }} in 3 emojis.