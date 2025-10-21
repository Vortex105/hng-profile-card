# Profile Card

A small, responsive profile card component built with HTML and CSS (optionally JavaScript). Designed for use in landing pages, portfolios, or UI component libraries.

## Features
- Responsive layout
- Multi-page navigation (Home, About, Contact)
- Avatar, name, title, bio, and social links
- Easy to customize (colors, spacing, fonts)
- Lightweight — no frameworks required
- Seamless page transitions

## Demo
Open `index.html` in a browser to view the component locally.
You can also run it using a local development server (for example, VS Code Live Server or Python’s http.server) to ensure JavaScript features like the live time and avatar upload work correctly.

## Installation
Clone the repo and open the demo:
```
git clone https://github.com/Vortex105/hng-profile-card
cd hng-profile-card
open index.html
```


## Customization
- Change colors in `:root` (CSS variables)
- Swap avatar image in `assets/`
- Adjust font-family in `styles.css`
- Add simple interactions with `script.js`
- Modify page-specific styles in respective CSS files
- Customize contact form functionality in `contact.js`

## Project structure
```
/profile-card
├─ index.html      # Main profile page
├─ about.html      # About page
├─ contact.html    # Contact page
├─ css/
│  ├─ styles.css   # Main styles
│  ├─ about.css    # About page styles
│  └─ contact.css  # Contact page styles
├─ script.js       # Main JavaScript
├─ contact.js      # Contact page JavaScript
├─ assets/
│  ├─ avatar.jpg
│  ├─ mdi--instagram.svg
│  ├─ mdi--pinterest.svg
│  ├─ ic--baseline-facebook.svg
│  └─ ri--twitter-x-line.svg
└─ README.md
```

## License
MIT — see LICENSE file for details.