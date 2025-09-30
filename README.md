# TypeScript Cowsay Implementation

A TypeScript implementation of the classic cowsay utility, built for Node.js v20+ with ES modules.

## Features

- 🐄 Multiple cow characters (default, dead, greedy, paranoid, stoned, tired, young)
- 💭 Thought bubbles (cowthink mode)
- 🎨 Custom eyes and tongue
- 📏 Configurable speech bubble width
- 🔧 CLI interface and programmatic API
- 📦 Zero external dependencies
- 📝 Full TypeScript support with declarations

## Installation & Usage

### Building the Project

```bash
npm install
npm run build
```

### CLI Usage

```bash
# Basic cowsay
node dist/index.js "Hello, World!"

# Use different cow character
node dist/index.js -f dead "I'm dead"

# Custom eyes and tongue
node dist/index.js -e "^^" -T ":P" "Happy cow"

# Thought bubble
node dist/index.js -t "Thinking..."

# Custom width
node dist/index.js -W 20 "This is a longer message that will wrap"

# List available cows
node dist/index.js -l

# Help
node dist/index.js --help
```

### Programmatic Usage

```typescript
import { cowsay, cowthink, listCows } from './dist/index.js';

// Basic usage
console.log(cowsay('Hello, TypeScript!'));

// With options
console.log(cowsay('Custom cow', {
  cow: 'greedy',
  eyes: '$$',
  width: 30
}));

// Thought bubble
console.log(cowthink('Deep thoughts...'));

// List available cows
console.log('Available cows:', listCows());
```

## Available Cow Characters

- **default** - Classic cow with 'oo' eyes
- **dead** - Dead cow with 'xx' eyes and 'U' tongue
- **greedy** - Money-loving cow with '$$' eyes
- **paranoid** - Worried cow with '@@' eyes
- **stoned** - Relaxed cow with '**' eyes and 'U' tongue
- **tired** - Sleepy cow with '--' eyes
- **young** - Baby cow with '..' eyes

## Demo

Run the built-in demo to see all features:

```bash
npm run demo
```

## Development

This project is built with:
- **TypeScript 5.0+** with ES2022 target
- **ES Modules** for modern Node.js
- **Node.js 20+** runtime
- Zero external dependencies (no npm packages needed at runtime)

## Project Structure

```
src/
├── characters.ts  # Cow character definitions
├── bubble.ts      # Speech bubble generation
├── cowsay.ts      # Core cowsay logic
└── index.ts       # CLI interface and exports
```

## API Reference

### `cowsay(message: string, options?: CowsayOptions): string`

Generate cowsay output with a speech bubble.

### `cowthink(message: string, options?: CowsayOptions): string`

Generate cowsay output with a thought bubble.

### `listCows(): string[]`

Get list of available cow character names.

### `CowsayOptions`

```typescript
interface CowsayOptions {
  cow?: string;      // Cow character name
  eyes?: string;     // Custom eyes (2 characters)
  tongue?: string;   // Custom tongue
  width?: number;    // Speech bubble width (default: 40)
  think?: boolean;   // Use thought bubble
}
```

---

# GitHub Agentic Workflows Demo

This repository also contains materials for a presentation on **GitHub Agentic Workflows** and **Continuous AI**. See [AGENTS.md](./AGENTS.md) for details.

## Agentic Workflows

This repository includes example agentic workflows:

| Workflow | Title | Role |
|----------|-------|------|
| [accessibility-review](.github/workflows/accessibility-review.md) | Accessibility Review for Slides | Reviews the accessibility of presentation slides for color contrast, readability, and WCAG compliance |
| [daily-log-scanner](.github/workflows/daily-log-scanner.md) | Daily Agentic Workflow Log Scanner | Analyzes recent GitHub Agentic Workflow runs daily to identify issues and missing tools |
| [issue-triage](.github/workflows/issue-triage.md) | Issue Triage | Summarizes new issues in 3 emojis and responds with a comment |
| [package-security-check](.github/workflows/package-security-check.md) | Package Security Deep Research | Conducts comprehensive security analysis of package-lock.json changes in pull requests |
| [pseudo](.github/workflows/pseudo.md) | Pseudo Language Converter | Transforms issue content to pseudo-code style language via /pseudo command |
| [update-workflow-docs](.github/workflows/update-workflow-docs.md) | Agentic Workflow Documentation Updater | Automatically updates README.md with a summary table of all agentic workflows |

## Tools

```
npm install -g @github/copilot
npm install -g @marp-team/marp-cli
```