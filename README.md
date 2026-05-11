# Frontend Interview Task

## Overview

Your task is to update the page so the hero and navigation sections match the provided design reference and the tab content below it becomes interactive.

Design reference:
https://assets.pkimgs.com/pkimgs/ab/images/dp/ecm/202620/0629/001/001.png

QA environment:
https://mserawsi.github.io/interview/

Pixel-perfect accuracy is not required for this exercise, but please get as close as you reasonably can by eye. We value visual accuracy in production work.

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

## Your Task

Complete the CSS and JavaScript portions of the task. You may work on them in either order.

### CSS Styling

Style the hero and navigation sections so they resemble the design reference.

Write your styles in:

```text
src/assets/scss/_nav-grid.scss
```

This file is already imported in `main.scss`.

Requirements:

- Use **SCSS** for all styling
- Write styles only in the `src/assets/scss/` directory
- Match the layout, spacing, and overall visual style from the design reference
- Colors do not need to be exact. You may also use the variables in `src/assets/scss/_variables.scss` where appropriate
- Ensure the design is responsive and works across browser sizes
- Keep your styles clean and organized

The tab content sections below the navigation do not need to be visually styled. They are included mainly for the JavaScript interaction.

### JavaScript Interaction

Add vanilla JavaScript so the navigation items work like tabs.

Write your JavaScript in:

```text
src/assets/js/tabNav.js
```

This file is already imported and called from `App.vue`.

When a user clicks a navigation item:

- The clicked item should become the active tab
- The previously active item should no longer be active
- The matching tab content section should be shown
- All other tab content sections should be hidden
- The page should not navigate away or reload when a tab is clicked

The first tab item and first tab content are active by default in the markup. Your JavaScript should update the active state when a different tab is clicked.


Use the existing classes in the markup to connect each navigation item with its matching tab content section. Do not use a JavaScript framework or library for this portion of the task.

Keep the JavaScript readable, maintainable, and scoped to this feature.

## Hints

- SCSS variables are available in `src/assets/scss/_variables.scss`
- Feel free to add new variables if needed
- Reference the existing class names in `NavGrid.vue` and the files in `src/components/TabContent/`
- JavaScript should toggle classes for active/visible states; CSS should handle how those states look

## Project Structure

```text
src/
├── components/
│   ├── HeroSection.vue          # Hero image
│   ├── NavGrid.vue              # Navigation markup
│   └── TabContent/              # Tab content panels
├── assets/scss/
│   ├── _variables.scss          # SCSS variables
│   ├── _nav-grid.scss           # Navigation styles go here
│   └── main.scss                # Global styles
├── assets/js/
│   └── tabNav.js                # Tab interaction JavaScript goes here
└── App.vue                     
```

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
