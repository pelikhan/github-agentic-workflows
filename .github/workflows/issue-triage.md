---
on:
  issues:
    types: [opened, reopened]
  reaction: "eyes"
permissions:
  issues: read
engine: copilot
network: defaults
tools:
  github:
    allowed: ["*"]
safe-outputs:
  add-comment:
---
# Issue Triage
Summarize issue #${{ github.event.issue.number }} in 3 emojis. Respond in a comment.

```
${{ needs.activation.outputs.text }}
```