# Frontend Interview Task

## Overview

Complete the CSS Styling Challenge. The JavaScript Challenge is a bonus.

Design reference:
https://assets.pkimgs.com/pkimgs/ab/images/dp/ecm/202620/0629/001/001.png

Working Prototype with JavaScript Example:

QA environment:
https://mserawsi.github.io/interview/


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
git checkout -b your-name/frontend-task
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

## CSS Styling Challenge

Style the page to match the design reference.

Write your styles in:

```text
src/assets/scss/main.scss
```

Requirements:

- Use **SCSS** for all styling
- Match the overall layout and spacing of the design reference
- Colors do not need to be exact. SCSS variables are available in `src/assets/scss/_variables.scss`


## JavaScript Challenge

Add vanilla JavaScript so the navigation items work like tabs.

Write your JavaScript in:

```text
src/assets/js/tabNav.js
```

When a user clicks a navigation item:

- The clicked nav item should become the active tab
- All other nav items should no longer be active
- The matching tab content section should be shown
- All other tab content sections should be hidden

Additional Notes:

- The first nav item and first tab content are active by default in the markup
- Use the existing classes in the markup
- Do not use a JavaScript framework or library


## Submission

When you're finished:

1. Commit your changes
   ```bash
   git add .
   git commit -m "Complete frontend task"
   ```

2. Push your branch to your fork
   ```bash
   git push origin your-name/frontend-task
   ```

3. Open a pull request
   - Go to the original repository: `https://github.com/mserawsi/interview`
   - Click **Pull requests** -> **New pull request**
   - Click **compare across forks**
   - Set **base repository** to `mserawsi/interview` and **base** to `main`
   - Set **head repository** to your fork and **compare** to your branch
   - Click **Create pull request**

4. Check your changes
   - https://mserawsi.github.io/interview/

Good luck!
