# Presentation Notes for Web Unleashed 2025

## Audience
Professional web developers familiar with:
- Modern JavaScript/TypeScript
- Node.js and npm ecosystem  
- Web development workflows and CI/CD
- React, Vue, or other frontend frameworks

## Key Messaging

### 1. AI-Powered Automation for Web Developers
Focus on how GitHub Agentic Workflows can automate common web development tasks without requiring deep AI expertise.

### 2. Security-First Approach
Emphasize the multi-layered security model:
- Read-only permissions for AI agents
- Sandboxed execution in containers
- Network access controls
- Safe-outputs for write operations

### 3. Practical Web Development Use Cases
- Accessibility audits (WCAG compliance)
- Bundle size monitoring
- Documentation generation
- Code review automation
- Test coverage analysis
- Security vulnerability scanning

### 4. Natural Language Configuration
Show how developers can write automation in markdown instead of complex YAML configurations.

## Demo Suggestions

1. **Live Workflow Creation**: Use Copilot CLI to generate a workflow
2. **Compilation**: Show `gh aw compile` converting markdown to GitHub Actions
3. **Security Demo**: Demonstrate prompt injection protection
4. **MCP Integration**: Show custom tools like bundle analyzer or Lighthouse

## Web-Specific Examples in Slides

- **Slide 3**: CI/CD examples use npm, Node.js v20
- **Slide 4**: Issue triage for web development tasks
- **Slide 6**: Security threats specific to web (npm packages, .env files)
- **Slide 7**: Web data sources (APIs, npm packages)
- **Slide 14**: Network permissions for npm, yarn, backend APIs
- **Slide 15**: MCP servers for bundle analysis, Lighthouse audits
- **Slide 19**: Cache configuration for node_modules

## Q&A Preparation

**Q: How does this compare to GitHub Actions alone?**
A: Agentic Workflows add AI capabilities with natural language configuration while maintaining GitHub Actions' security model.

**Q: What about costs?**
A: Use `gh aw logs` to monitor AI usage and costs. Set timeouts and max-turns to control spending.

**Q: Can I use my own AI models?**
A: Yes, custom engines allow you to bring your own AI or use deterministic scripts.

**Q: How do I prevent prompt injection attacks?**
A: Built-in sanitization, read-only permissions, and safe-outputs provide defense in depth.

## Additional Resources

- GitHub Agentic Workflows: https://github.com/githubnext/gh-aw
- Continuous AI: https://githubnext.com/projects/continuous-ai/
- Model Context Protocol: https://modelcontextprotocol.io/
- OWASP LLM Top 10: https://owasp.org/www-project-top-10-for-large-language-model-applications/
