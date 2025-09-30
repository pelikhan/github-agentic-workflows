---
on:
  command:
    name: slidify
  reaction: "art"
permissions:
  contents: read
  actions: read
engine: copilot
network: defaults
tools:
  edit:
safe-outputs:
  create-pull-request:
    title-prefix: "[slidify] "
    labels: [automation, slides]
    draft: true
---
# Slidify - Generate Slide from Issue

Transform the following issue content into a new Marp slide and add it to README.md:

```
${{ needs.activation.outputs.text }}
```

## Instructions:

1. **Read README.md** to understand the existing slide structure
2. **Transform the issue content** into a professional Marp slide:
   - Create a clear, concise slide title (use `# Title` format)
   - Add relevant content from the issue in a presentation-friendly format
   - Use bullet points, code blocks, or other markdown formatting as appropriate
   - Keep it focused and suitable for a technical presentation
   - Maintain consistency with the existing slide style in README.md
3. **Insert the new slide** at an appropriate location before the "Agentic Workflows" table section:
   - The new slide should go after the existing content slides but before the final "Agentic Workflows" section
   - Add the slide separator `---` before and after the new slide
   - Ensure proper spacing and formatting
4. **Create a pull request** with:
   - Title describing the new slide topic
   - Description explaining what was added
   - The modified README.md file

## Example Transformation:

**Issue Content:**
"Add a slide about GitHub Copilot features: code completion, chat, CLI"

**Generated Slide:**
```markdown
---

# GitHub Copilot Features

- **Code Completion** — AI-powered suggestions as you type

- **Chat** — Natural language interaction for code questions

- **CLI** — Command-line interface for terminal workflows

---
```

Remember:
- Use the sanitized issue content from `${{ needs.activation.outputs.text }}`
- Keep the slide concise and presentation-ready
- Follow the existing Marp format in README.md
- Place the slide in a logical position within the presentation flow
