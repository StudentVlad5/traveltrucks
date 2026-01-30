# TravelTrucks - Camper Rental Service

**TravelTrucks** is a modern web application designed for discovering and booking camper vans. It provides a seamless user experience for travelers to browse a fleet of vehicles, apply advanced filters, and manage their favorite campers.

## Key Features

- **Vehicle Catalog**: Browse a wide list of available campers with an efficient "Load More" pagination system.
- **Advanced Filtering**:
  - Search by location.
  - Filter by vehicle type: _Panel Truck, Fully Integrated,_ or _Alcove_.
  - Filter by equipment: _AC, TV, Kitchen, Bathroom, etc._
- **URL State Management**: All filters are synchronized with URL search parameters. This allows users to refresh the page, use navigation buttons (back/forward), or share links without losing their search criteria.
- **Detailed Camper Pages**: View high-resolution galleries, detailed descriptions, vehicle specifications, and genuine user reviews.
- **Booking System**: Integrated booking form with client-side validation and date selection.
- **Favorites**: Save preferred campers to a dedicated list, persisted across browser sessions via Redux Persist.
- **UX/UI Optimizations**: Smooth scrolling, automatic scroll-to-top on route changes, and interactive motion components.

## Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) + [Redux Persist](https://github.com/rt2zz/redux-persist)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **HTTP Client**: [Axios](https://axios-http.com/)

## Installation & Setup

1.  **Clone the repository:**

    ```bash
    (https://github.com/StudentVlad5/traveltrucks)

    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```text
├── app/                 # Next.js App Router (pages, layouts, and sub-routes)
├── components/          # Reusable UI components (Filters, Forms, UI Elements)
├── store/               # Redux store configuration, slices, and async thunks
├── types/               # TypeScript interfaces and type definitions
├── helper/              # Constants, utility functions, and SVG icons
└── public/              # Static assets (images, fonts)
```

## Technical Highlights

URL Synchronization Logic: Implemented a "Single Source of Truth" pattern where the URL parameters drive the application state. Used useSearchParams combined with useMemo to ensure the UI stays in sync with the URL without causing redundant renders.

Performance Optimization: Avoided "Cascading Renders" by using lazy state initialization and careful effect management, ensuring smooth state transitions even with complex filter combinations.

Persistence: Leveraged Redux Persist to keep user favorites and application settings safe between page reloads.

Clean Code & Architecture: Followed a modular approach with separate layers for business logic (Thunks), state management (Slices), and UI (Functional Components).

## MVP Implementation & Scalability

This project is currently implemented as a **High-Performance MVP (Minimum Viable Product)**. The architecture is designed with **scalability in mind**, allowing for rapid integration of complex features without structural refactoring.

### Current State:

- Core booking flow and filtering system are fully functional.
- Optimized state management ensures fast response times.
- Modular component structure allows for easy UI updates.

### Roadmap & Future Scaling:

The project is ready for the next phase of development, with the following features prioritized for implementation:

- **Internationalization (i18n)**: Integration of `next-intl` or `react-i18next` for multi-language support (English, German, Ukrainian, etc.).
- **Dynamic Theming**: Support for Dark/Light modes using `next-themes` and Tailwind CSS variables.
- **Advanced Availability Search**: Date-range picker for campers, allowing users to check real-time availability for specific travel periods.
- **User Authentication**: Secure registration and login system via `NextAuth.js` or `Clerk` to manage personal bookings and profile settings.
- **Payment Gateway Integration**: Secure online payments using `Stripe` or `PayPal` for instant camper reservations.
- **Admin Dashboard**: A dedicated interface for van owners to manage their fleet, update descriptions, and track booking statistics.

This scalable foundation ensures that **TravelTrucks** can grow from a simple search tool into a full-scale rental marketplace.

# License

This project was developed for educational purposes as part of a portfolio. Feel free to use it as a reference.
