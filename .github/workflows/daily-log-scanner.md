---
on:
  schedule:
    - cron: "0 9 * * *"  # Daily at 9 AM UTC
  workflow_dispatch:  # Allow manual trigger
permissions:
  actions: read
  contents: read
engine: claude
network: defaults
tools:
  github:
    allowed: ["*"]
safe-outputs:
  create-issue:
    title-prefix: "[agentic-logs] "
    labels: [automation, logs, agentic-workflows]
    max: 5
---

# Daily Agentic Workflow Log Scanner

Your task is to analyze recent GitHub Agentic Workflow runs and identify issues that need attention.

## Instructions

1. **Retrieve Recent Workflow Runs**: Use the GitHub API to fetch workflow runs from the last 24 hours for workflows in `.github/workflows/` directory that use agentic engines (Claude, Copilot, Codex).

2. **Download and Analyze Logs**: For each agentic workflow run, download and analyze the logs looking for:
   - **Missing Tool Errors**: Patterns like "Tool not found", "missing_tool", "tool not available", or when agents report they need tools that don't exist
   - **Tool Detection Issues**: Errors in tool initialization, MCP server connection failures, or tool permission errors
   - **Agent Execution Failures**: Unexpected errors, timeouts, or crashes in the agent execution
   - **Authentication/Authorization Errors**: Token issues, permission denied errors related to tools or GitHub API
   - **Configuration Errors**: Invalid workflow configurations, missing required parameters

3. **Create Issues for Problems Found**: For each category of problems found:
   - Create an issue with a clear title indicating the problem type
   - Include:
     - Summary of the issue
     - Workflow name and run ID where it was detected
     - Relevant log excerpts (truncated if too long)
     - Timestamp and frequency if the issue appears multiple times
     - Suggested fixes or investigation steps
   - Group similar issues together rather than creating duplicate issues for the same problem

4. **Focus Areas**:
   - Look for the "missing_tool" safe-output type which agents use to report needed functionality
   - Check for MCP server initialization failures
   - Identify tool allowlist misconfigurations
   - Find network permission issues

## GitHub Context

- Repository: ${{ github.repository }}
- Run ID: ${{ github.run_id }}
- Actor: ${{ github.actor }}

## Important Notes

- **Rate Limiting**: Be mindful of GitHub API rate limits. Fetch only what's necessary.
- **Deduplication**: Before creating an issue, check if a similar issue already exists from previous runs.
- **Prioritization**: Focus on critical errors first (missing tools, execution failures) before warnings.
- **Log Size**: If logs are very large, extract only relevant sections with context.

Use the `create_issue` tool from safe-outputs MCP to create issues with your findings.
