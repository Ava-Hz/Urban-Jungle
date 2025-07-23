# Urban Jungle 🌿

A modern and responsive e-commerce React app for discovering and buying unique plants.  
Live demo: [urban-jungle-one.vercel.app](https://urban-jungle-one.vercel.app)

## Features

- Shop page with filtering & sorting
- Add to Cart with quantity management
- Smooth scrollable product sliders for mobile
- Toast notifications for cart actions
- Dynamic product data via Back4App API
- Fully responsive design
- Deployed on Vercel

## Tech Stack

- Frontend: React, React Router, TailwindCSS
- API: Back4App (Parse Server)
- Deployment: Vercel

---

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Ava-Hz/Urban-Jungle
cd urban-jungle
npm install
```

Start the local dev server:

```bash
npx start or npx react-scripts start
```

To build for production:

```bash
npm run build
```

## Configuration

API keys for Back4App are set directly in Axios config headers (in `Sorting.js`, `RandomProducts.js`, etc.).

## Project Structure (Simplified)

src/
├── About/ # About page sections
├── Contact/ # Contact page components
├── Shop/ # Shop, product detail, cart, and sorting
├── Context/ # CartContext (global state)
├── App.js # Main routes
├── Notification.js # Toast component
└── parseConfig.js # Axios headers for API

## Notes

- Optimized for mobile and desktop users.
- API responses are filtered and randomized where needed (e.g., Related Products).
- Mobile users can horizontally scroll product cards with smooth snapping.
