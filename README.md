# Frontend Interview Task

## Overview

Your task is to style the navigation grid at the bottom of the page to match the design shown in the hero image above it.

**Time estimate:** 10-15 minutes

## Getting Started

### 1. Fork this repository

Click the **Fork** button in the top right corner of this page to create a copy in your GitHub account.

### 2. Clone your fork

```bash
git clone https://github.com/YOUR_USERNAME/interview.git
cd interview
```

### 3. Create a new branch

```bash
git checkout -b your-name/styling-task
```

### 4. Install dependencies

```bash
npm install
```

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Your Task

Look at the **hero image** at the top of the page — this is your design reference.

Now look at the **navigation grid** below it. Your job is to style this grid to match the visual style shown in the hero image.

### Where to write your styles

Add your styles to the following SCSS file:

```
src/assets/scss/_nav-grid.scss
```

This file is already imported in `main.scss`.

**Important:** Keep all styles in the SCSS files — do not add styles directly to the Vue components.

### Requirements

- Use **SCSS** for all styling
- Write styles only in the `src/assets/scss/` directory
- Match the layout, spacing, and visual style from the hero image
- Ensure the design is **responsive** (works on mobile and desktop)
- Keep your code clean and organized

### Hints

- SCSS variables are available in `src/assets/scss/_variables.scss`
- Feel free to add new variables if needed
- Reference the existing class names in `NavGrid.vue` for your selectors

## Project Structure

```
src/
├── components/
│   ├── HeroSection.vue       # Hero image (reference design - do not modify)
│   └── NavGrid.vue           # Navigation grid markup (do not modify)
├── assets/scss/
│   ├── _variables.scss       # SCSS variables
│   ├── _nav-grid.scss        # Your styles go here
│   └── main.scss             # Global styles (imports other files)
├── App.vue
└── main.js
```

## Submission

When you're finished:

1. Commit your changes
   ```bash
   git add .
   git commit -m "Complete styling task"
   ```

2. Push your branch to your fork
   ```bash
   git push origin your-name/styling-task
   ```

3. Open a pull request
   - Go to the original repository: `https://github.com/mserawsi/interview`
   - Click **Pull requests** → **New pull request**
   - Click **compare across forks**
   - Set **base repository** to `mserawsi/interview` and **base** to `main`
   - Set **head repository** to your fork and **compare** to your branch
   - Click **Create pull request**

Good luck!