# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a standalone product page mockup for an e-commerce website ("BLOOM & NEST" - Scallop Collection). The entire application is contained in a single `index.html` file with no build system or dependencies beyond external CDN resources.

## Technology Stack

- **Vue.js 3**: Loaded via CDN (`https://unpkg.com/vue@3/dist/vue.global.js`)
- **Vanilla CSS**: All styles are embedded in `<style>` tags within the HTML
- **No build system**: Direct HTML file that can be opened in a browser

## How to Run

Simply open `index.html` in a web browser:
```bash
open index.html
```

Or serve it with a simple HTTP server:
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Architecture

### Single-File Structure
The `index.html` file contains three main sections in order:
1. **CSS Styles** (lines 9-730): Complete styling system with CSS variables for theming
2. **HTML Template** (lines 732-1011): Vue.js template markup using Vue directives
3. **JavaScript** (lines 1013-1074): Vue.js application logic with reactive data

### Vue.js Application
- Uses Vue 3 Composition API via `createApp()`
- All state is managed in the `data()` function
- Components are not extracted; everything is in the root Vue instance
- Vue directives used: `v-for`, `v-if`, `v-model`, `@click`, `:class`, `:style`, `v-html`

### Design System
CSS variables defined in `:root` (lines 16-27):
- Color palette: cream, soft-pink, dusty-rose, sage, soft-blue, charcoal, warm-gray, light-gray, white, gold
- Fonts: 'Cormorant Garamond' (serif, headings) and 'Montserrat' (sans-serif, body)
- Responsive breakpoints: 1024px (tablet) and 640px (mobile)

### Key Interactive Features
- Image gallery with thumbnail selection (`selectedImage` state)
- Color swatches (`selectedColor` state with 4 options)
- Size selector (`selectedSize` state with 3 sizes)
- Quantity selector with increment/decrement
- Wishlist toggle
- Accordion for product details (3 sections: Product Details, Dimensions & Care, Shipping & Returns)

## Modifying the Code

### Adding New Colors
Update the `colors` array in the Vue data (line 1031-1036) and add corresponding CSS for the color swatch (around line 377-380).

### Changing Product Information
Product data is stored in the Vue instance's `data()` function (lines 1017-1066):
- `images`: Gallery image gradients
- `colors`: Available color options
- `sizes`: Available sizes with prices
- `accordionItems`: Expandable product detail sections

### Styling Changes
All styles are in the `<style>` block. Key sections:
- Lines 36-100: Header and navigation
- Lines 125-241: Product gallery
- Lines 243-322: Product info and pricing
- Lines 324-419: Option selectors (color, size)
- Lines 549-606: Accordion components

### Responsive Design
Media queries at lines 697-729 handle responsive layouts for tablet (1024px) and mobile (640px) breakpoints.

## License

Apache License 2.0 - See LICENSE file for full terms.
