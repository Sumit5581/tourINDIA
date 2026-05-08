# tourINDIA — Explore. Plan. Wander.

<p align="center">
  <img src="https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Made%20with-React%20%2B%20Vite-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Theme-Patriotic%20India-FF9933?style=for-the-badge" />
</p>

<p align="center">
  A patriotic-themed, interactive travel planning web application that helps tourists explore Indian cities, discover iconic destinations, build personalised wishlists, and plan optimised routes — all in one place.
</p>

---

## Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#-project-structure)
- [Feature Details](#-feature-details)
- [UI & Design Guidelines](#-ui--design-guidelines)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## About the Project

**TourINDIA** is a web application designed for tourists and travel enthusiasts who want to explore the rich cultural and historical heritage of India. Whether you're planning a weekend trip to Jaipur or a longer journey across multiple cities, TourINDIA helps you discover must-visit places, read reviews, view real photos, build a wishlist of preferred destinations, and get optimised travel directions — all within a beautifully crafted, patriotic interface.

---

## Features

### City Search with Animated Loading
- A prominent search bar allows users to search for any Indian city.
- On typing a city name, a **smooth animated loading bar** plays to enhance the user experience and build anticipation.
- Once results load, a **clickable city button** appears for the searched city.
- Clicking the city button reveals all tourist places within that city.

### Tourist Place Discovery
- Displays a curated list of tourist destinations for the selected city.
- Each place card shows:
  - Place name and short description
  - Category (Heritage, Nature, Religious, Adventure, etc.)
  - Location and city
  - Star ratings and review count
  - Photo gallery / representative image

### Real-Time Wishlist (My Travel List)
- Users can add any tourist place to a **personal wishlist** with a single click.
- The wishlist updates in **real time** without page reloads.
- Users can remove places from the wishlist at any time.
- The wishlist persists during the session and can optionally be saved.

### Optimised Route Directions
- For places in the wishlist or selected destinations, the app calculates the **shortest travel route**.
- Helps tourists plan their itinerary by minimising total travel distance and time.
- Displays an ordered route so users know exactly which place to visit next.

### Photos, Reviews & Ratings
- Each tourist place has a dedicated page/modal with:
  - Multiple **high-quality photos** of the location.
  - **User ratings** displayed as star scores with aggregate counts.
  - **Written reviews** from other travellers.
- A dedicated **Review Section** allows users to write and submit their own reviews for any location.

### Patriotic & Polished UI
- The overall theme is **patriotic Indian aesthetics** — inspired by the colours of the Indian flag (saffron, white, and India green) with accents of navy and gold.
- All buttons feature:
  - **Rounded edges** (pill or softly rounded corners).
  - **Smooth hover animations** (colour transitions, subtle lifts, or glow effects).
- The interface is clean, accessible, and mobile-responsive.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React (with Vite) |
| Styling | CSS Modules / Tailwind CSS |
| Routing | React Router DOM |
| State Management | React Context API / useState |
| Maps & Directions | Google Maps API / Leaflet.js |
| Places Data | Google Places API / Custom JSON dataset |
| Animations | CSS Transitions / Framer Motion |
| Icons | React Icons / Lucide React |
| Hosting | Vercel / Netlify |

> **Note:** Specific library choices may be updated as development progresses.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A code editor like [VS Code](https://code.visualstudio.com/)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Sumit5581/tourINDIA.git
cd tourINDIA
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Create a `.env` file in the root directory and add your API keys:

```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
VITE_GOOGLE_PLACES_API_KEY=your_google_places_api_key_here
```

> ⚠️ Never commit your `.env` file. It is already included in `.gitignore`.

### Running the App

**Development server:**

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

**Production build:**

```bash
npm run build
```

**Preview the production build:**

```bash
npm run preview
```

---

## 📁 Project Structure

```
tourINDIA/
├── public/
│   └── assets/             # Static images, hero images, icons
├── src/
│   ├── components/
│   │   ├── SearchBar/      # City search bar with loading animation
│   │   ├── CityButton/     # Clickable city result button
│   │   ├── PlaceCard/      # Individual tourist place card
│   │   ├── Wishlist/       # Real-time wishlist panel
│   │   ├── RouteMap/       # Map with optimised route display
│   │   ├── ReviewSection/  # Reviews, ratings, and submission form
│   │   └── Navbar/         # Site navigation
│   ├── pages/
│   │   ├── Home.jsx        # Landing page with search
│   │   ├── CityPage.jsx    # All tourist places for a city
│   │   ├── PlaceDetail.jsx # Detailed view with photos & reviews
│   │   └── MyWishlist.jsx  # User's saved wishlist & route
│   ├── context/
│   │   └── WishlistContext.jsx  # Global wishlist state
│   ├── data/
│   │   └── places.json     # Local dataset of cities and places
│   ├── styles/
│   │   └── global.css      # Global styles and theme variables
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── vite.config.js
└── README.md
```

---

## 🔎 Feature Details

### Search Flow

```
User types city name
        ↓
Loading bar animation plays
        ↓
City button appears as result
        ↓
User clicks city button
        ↓
Tourist places for that city are displayed
```

### Wishlist Flow

```
User browses tourist places
        ↓
Clicks "Add to Wishlist" on a place
        ↓
Place is instantly added to the wishlist panel (real-time, no reload)
        ↓
User can view/manage wishlist anytime
        ↓
Wishlist can be used to generate an optimised travel route
```

### Route Optimisation Flow

```
User has places in wishlist
        ↓
Clicks "Plan My Route"
        ↓
App calculates shortest path visiting all selected places
        ↓
Ordered route displayed on map with distances and estimated time
```

---

## 🎨 UI & Design Guidelines

| Element | Style |
|---|---|
| Primary Color | Saffron `#FF9933` |
| Secondary Color | India Green `#138808` |
| Accent | Navy Blue `#000080` / White `#FFFFFF` |
| Button Shape | Rounded corners (`border-radius: 24px`) |
| Button Hover | Smooth color/shadow transition (`transition: 0.3s ease`) |
| Font | Clean sans-serif (e.g., Poppins or Nunito) |
| Loading Bar | Gradient animation across top of search results |
| Cards | Soft shadow with hover lift effect |

---

## 🗺️ Roadmap

- [x] Project setup with React + Vite
- [ ] Hero section with patriotic design
- [ ] City search bar with animated loading bar
- [ ] City result button on search
- [ ] Tourist places listing page
- [ ] Place detail page (photos, ratings, description)
- [ ] Review section (view + submit reviews)
- [ ] Real-time wishlist with add/remove functionality
- [ ] Optimised route directions on map
- [ ] Mobile responsive design
- [ ] Deployment on Vercel / Netlify

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add: your feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

Please make sure your code follows the existing style and all components are properly documented.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ for Incredible India 🇮🇳
</p>
