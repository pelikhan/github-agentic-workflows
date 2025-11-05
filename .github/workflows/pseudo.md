---
on:
  command:
    name: pseudo
  reaction: "rocket"
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
# Pseudo Language Converter

Transform the issue content to pseudo language. Pseudo language is a fun, technical-sounding representation of the text that makes it sound like pseudo-code or algorithmic instructions.

Convert the following issue content:

```
${{ needs.activation.outputs.text }}
```

## Instructions:
1. Read and understand the issue content
2. Transform it to pseudo language by:
   - Converting statements to pseudo-code style (e.g., "IF..THEN..ELSE", "WHILE", "FOR EACH")
   - Using technical terminology and algorithmic language
   - Maintaining the original meaning while making it sound more formal and code-like
   - Adding programming-style syntax like arrows (→), assignments (←), and logical operators
3. Make it entertaining while keeping the essence of the original message
4. Post your pseudo-language transformation as a comment

Example transformation:
- Original: "We need to fix the login button on the homepage"
- Pseudo: "PROCEDURE: FixLoginButton() → LOCATE element.homepage.loginButton → APPLY patch.fixBehavior() → VERIFY button.onClick() RETURNS success → END PROCEDURE"
