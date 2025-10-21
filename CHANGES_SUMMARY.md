# Changes Summary

## Overview
This PR addresses the requirement to "Update AGENTS.md and ask for slides screenshot when modified. If the text bleeds out of the image, reduce the content on the slide."

## Changes Made

### 1. AGENTS.md Updates

**Added Quality Check Requirement**
- Added a new bullet point under the "Slides" section specifying that when README.md is modified, screenshots should be generated and reviewed
- Explicitly mentions checking for text bleeding and reducing content if needed
- This provides clear documentation for developers about the slide quality expectations

### 2. Enhanced accessibility-review.md Workflow

**New Capabilities Added:**
- **Added `edit` tool**: Allows the AI agent to modify README.md files when text bleeding is detected
- **Added `create-pull-request` safe-output**: Enables the agent to create PRs with slide content reductions
  - Title prefix: "[slides] "
  - Labels: slides, automation
  - Draft mode enabled for review

**Enhanced Instructions:**
1. **Screenshot ALL Slides**: Changed from taking a single screenshot to capturing all slides
   - Uses Playwright keyboard navigation (right arrow) to advance through slides
   - Saves with descriptive filenames (slide-1.png, slide-2.png, etc.)

2. **Text Bleeding Detection**: Added explicit requirement to check for:
   - Text overflow/bleeding beyond slide boundaries
   - Content density issues
   - Overly crowded slides

3. **Automated Remediation**: Workflow now has two response modes:
   - **If text bleeding detected**: Create a PR with modifications to README.md to fix the issues
   - **If no bleeding but other issues**: Create an accessibility issue as before

### 3. Documentation Updates

**Rebuilding Workflows Section**
- Clarified the compilation process
- Added specific command for compiling individual workflows
- Documented the output location for `.lock.yml` files

## Compilation Note

The workflow file has been updated but **not yet compiled** because:
- The `gh-aw` extension requires authentication that's not available in this environment
- The repository maintainer needs to run `gh aw compile accessibility-review` to generate the `.lock.yml` file
- This is documented in AGENTS.md under "Rebuilding workflows"

## How to Complete This Change

After merging this PR, a repository maintainer should:

```bash
# Install gh-aw if not already installed
gh extension install githubnext/gh-aw

# Compile the updated workflow
gh aw compile accessibility-review

# Commit the generated lock file
git add .github/workflows/accessibility-review.lock.yml
git commit -m "Compile accessibility-review workflow"
git push
```

## Testing

To test this workflow once compiled:
1. Create a PR that modifies README.md
2. Mark the PR as "ready for review"
3. The workflow will trigger and:
   - Build slides using Marp
   - Take screenshots of all slides
   - Analyze for text bleeding and accessibility issues
   - Create a PR if text bleeding is detected, or an issue if other problems exist
   - Upload all screenshots as workflow artifacts

## Benefits

1. **Automated Quality Control**: No manual checking needed for slide text overflow
2. **Proactive Fixes**: AI agent can automatically create PRs to fix detected issues
3. **Complete Coverage**: All slides are reviewed, not just the first one
4. **Documentation**: Clear process documented in AGENTS.md for future reference
