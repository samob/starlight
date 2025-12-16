# GitHub Setup Guide

This guide will help you push your multilingual Starlight documentation site to GitHub.

## Prerequisites

- Git installed on your system
- GitHub account
- Your project is ready in `/home/samob/Public/starlight`

## Step 1: Initialize Git Repository

```bash
cd /home/samob/Public/starlight
git init
```

## Step 2: Configure Git (First Time Setup)

```bash
git config --global user.name "Samo Blatnik"
git config --global user.email "your.email@example.com"
```

## Step 3: Add Files to Git

```bash
git add .
```

## Step 4: Create Initial Commit

```bash
git commit -m "Initial commit: Multilingual personal documentation site

- Starlight-based documentation site with Astro
- 3 languages: Slovenian (default), English, Croatian
- Custom circular profile picture
- Dark theme as default
- Custom language selector with flags (🇸🇮 Slo, 🇬🇧 En, 🇭🇷 Cro)
- Social links: GitHub and LinkedIn
- Content sections: CV/Biography, Projects, Guides
- Custom components: ThemeProvider, LanguageSelect"
```

## Step 5: Create GitHub Repository

1. Go to https://github.com and sign in
2. Click the "+" icon → "New repository"
3. Repository name: `samob` (or your preferred name)
4. Description: "Personal documentation and projects by Samo Blatnik"
5. Choose visibility: Public (recommended for portfolio) or Private
6. **IMPORTANT**: Uncheck all options:
   - ❌ Initialize with a README
   - ❌ Add .gitignore
   - ❌ Add a license
7. Click "Create repository"

## Step 6: Connect Local Repository to GitHub

### Option A: HTTPS (recommended for beginners)
```bash
git remote add origin https://github.com/samob/samob.git
```

### Option B: SSH (if you have SSH keys set up)
```bash
git remote add origin git@github.com:samob/samob.git
```

## Step 7: Push to GitHub

```bash
git push -u origin main
```

## Step 8: Verify on GitHub

1. Go to your repository: https://github.com/samob/samob
2. Check that all files are uploaded correctly
3. View the README.md to see your project description

## Step 9: Enable GitHub Pages (Optional - for Live Website)

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Branch: `main` (or `master` if you renamed it)
6. Folder: `/(root)`
7. Click "Save"
8. Wait a few minutes, then refresh the page
9. Your live site will be available at: `https://samob.github.io/samob/`

## Troubleshooting

### Authentication Issues
If you get authentication errors:

**For HTTPS:**
```bash
git remote set-url origin https://YOUR_USERNAME@github.com/samob/samob.git
```
Then try pushing again. You'll be prompted for your GitHub password (use a Personal Access Token).

**For SSH:**
Make sure your SSH key is added to your GitHub account.

### Branch Name Issues
If your default branch is `master` instead of `main`:
```bash
git branch -M main
git push -u origin main
```

### Repository Name Change
If you want a different repository name, update the remote URL:
```bash
git remote set-url origin https://github.com/samob/YOUR_NEW_REPO_NAME.git
```

## Project Structure on GitHub

After pushing, your repository will contain:

```
samob/
├── src/
│   ├── components/
│   │   ├── LanguageSelect.astro    # Custom language selector
│   │   └── ThemeProvider.astro     # Dark theme provider
│   └── content/
│       ├── docs/                   # Content in 3 languages
│       └── i18n/                   # UI translations
├── public/
├── astro.config.mjs               # Starlight configuration
├── package.json
├── tsconfig.json
└── README.md
```

## Next Steps

1. **Customize Content**: Update the dummy content in all language folders
2. **Add Images**: Replace placeholder content with real information
3. **Deploy**: Use GitHub Pages or deploy to your preferred hosting platform
4. **Maintenance**: Use Git for version control as you update your site

## Useful Git Commands

```bash
# Check status
git status

# Add specific files
git add filename.md

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push changes
git push

# Pull latest changes
git pull

# View commit history
git log --oneline
```

## Alternative: GitHub CLI

If you have GitHub CLI installed:

```bash
# Create and push in one command
gh repo create samob --public --source=. --remote=origin --push
```

This will create the repository and push your code in one step.