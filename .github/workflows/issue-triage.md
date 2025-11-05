---
on:
  issues:
    types: [opened, reopened]
  reaction: "eyes"
permissions:
  contents: read
  issues: read
  pull-requests: read
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