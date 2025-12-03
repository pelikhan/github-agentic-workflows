---
on:
  schedule:
    - cron: "0 9 * * *"  # Daily at 9 AM UTC
  workflow_dispatch:      # Allow manual trigger
permissions:
  contents: read
  actions: read
  issues: read
  pull-requests: read
tools:
  github:
    toolsets:
      - default
      - actions
safe-outputs:
  create-issue:
    title-prefix: "📊 Daily Activity Report - "
    labels: [report, automation, daily-stats]
timeout-minutes: 15
---

# Daily Repository Activity Report Generator

Generate a comprehensive daily activity report for the repository **${{ github.repository }}** covering the last 24 hours.

## Report Requirements

Create a detailed report with the following sections using **tables, numbers, and emojis**:

### 📈 **Activity Summary Table**
Create a summary table with these metrics from the last 24 hours:
- 🔄 **Commits**: Number of new commits
- 🐛 **Issues**: New issues opened vs closed
- 🔀 **Pull Requests**: New PRs opened vs merged vs closed
- 💬 **Comments**: Total comments on issues and PRs
- 🏃 **Workflow Runs**: Total GitHub Actions runs and their status
- 👥 **Contributors**: Unique active contributors

### 📊 **Detailed Metrics Tables**

#### 1. **Commit Activity** 📝
- Table showing commits by author
- Include commit count and emoji indicators
- Show most active contributors

#### 2. **Issue Activity** 🎯
- New issues opened (with links and titles)
- Issues closed/resolved
- Issues by label/category if applicable
- Use status emojis (🟢 opened, ✅ closed, etc.)

#### 3. **Pull Request Activity** 🔀
- New PRs opened (with links and titles)
- PRs merged
- PRs closed without merging
- Use status emojis (🟡 draft, 🟢 open, ✅ merged, ❌ closed)

#### 4. **Workflow Activity** ⚡
- GitHub Actions runs in the last 24 hours
- Success/failure rates with emojis
- Most frequently run workflows

### 🎨 **Formatting Guidelines**
- Use **markdown tables** for all data
- Include **relevant emojis** for each section
- Add **percentage indicators** where applicable
- Use **bold text** for important numbers
- Include **links** to issues, PRs, and commits where relevant
- If no activity in a category, show "No activity" with appropriate emoji

### 📅 **Time Period**
Report covers: **{{ 24 hours ago }} to {{ now }}** (UTC)

## Example Output Format

```markdown
# 📊 Daily Activity Report - YYYY-MM-DD

## 📈 Activity Summary
| Metric | Count | Change |
|--------|-------|--------|
| 🔄 Commits | **5** | +2 📈 |
| 🐛 Issues Opened | **3** | +1 📈 |
| 🐛 Issues Closed | **2** | +2 📈 |
| 🔀 PRs Opened | **1** | +1 📈 |
| ✅ PRs Merged | **2** | +1 📈 |

[Continue with detailed tables...]
```

**Important**: 
- Focus on the **last 24 hours** of activity only
- Ensure all numbers are **accurate** and **up-to-date**
- Make the report **visually appealing** with proper emoji usage
- Include **actionable insights** if patterns are detected