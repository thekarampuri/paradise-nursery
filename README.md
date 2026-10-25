# Paradise Nursery Shopping Application

A modern, responsive e-commerce web application for an online botanical nursery built using **React**, **Redux Toolkit**, and **Vite**. This project fulfills all requirements for the Coursera / IBM React and Redux Toolkit final project assignment.

---

## 🌿 Project Overview

Paradise Nursery is an intuitive online plant shop offering curated collections of houseplants designed to brighten homes, purify indoor air, and provide natural aromatic benefits. Users can seamlessly browse categorized plants, inspect details, add items to a dynamic shopping cart, manage quantities, and review live subtotals and order totals.

---

## ✨ Features

### 1. Landing Page (`App.jsx` & `App.css`)
- Plant-themed hero section with botanical background image.
- Distinct Paradise Nursery company branding and tagline.
- Prominent "Get Started" call-to-action button linking directly to the product catalog.
- Integrated **About Us** section describing the nursery's mission and values.

### 2. About Us Component (`AboutUs.jsx`)
- Detailed overview of Paradise Nursery's passion for horticulture.
- Clarifies our mission to make indoor gardening accessible and enjoyable.
- Highlights commitments to plant quality, sustainability, and plant-parent guidance.

### 3. Product Catalog (`ProductList.jsx`)
- **3+ Distinct Plant Categories**:
  - *Air Purifying Plants* (Snake Plant, Spider Plant, Peace Lily, Boston Fern, Rubber Plant, English Ivy)
  - *Aromatic & Medicinal Plants* (Aloe Vera, Lavender, Rosemary, Sweet Basil, Peppermint, Chamomile)
  - *Low Maintenance & Succulents* (Jade Plant, ZZ Plant, Golden Pothos, Echeveria, Zebra Haworthia, Cast Iron Plant)
- **6 Unique Houseplants per Category** (Total: 18 high-quality plants).
- Each plant card features:
  - High-resolution botanical thumbnail image
  - Plant name
  - Formatted unit price
  - Informative plant description
  - Dynamic **Add to Cart** button
- The "Add to Cart" button automatically disables and reflects "Added to Cart" once an item is placed in the cart.
- Persistent header navbar displaying navigation links (**Home**, **Plants**, **Cart**) and a live item count badge.

### 4. Shopping Cart (`CartItem.jsx` & `CartSlice.jsx`)
- Live shopping cart view displaying all selected items.
- Itemized breakdown showing thumbnail, name, unit price, quantity, and individual subtotal.
- Intuitive **+** (increment) and **-** (decrement) quantity controls that automatically recompute totals.
- Item deletion functionality (**Delete** button).
- Live calculation of total items and grand total amount.
- **Continue Shopping** button seamlessly navigating back to the plant catalog.
- **Checkout** button displaying an interactive "Coming Soon" notification.

---

## 🛠️ Technology Stack

- **Framework**: React 18 / 19
- **Build Tool**: Vite
- **State Management**: Redux Toolkit & React-Redux
- **Routing**: React Router DOM (v7)
- **Styling**: Vanilla CSS3 with modern flexbox/grid and responsive design

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.x or later)
- npm (v9.x or later)

### Installation
```bash
git clone https://github.com/thekarampuri/paradise-nursery.git
cd paradise-nursery
npm install
```

### Run Locally (Development)
```bash
npm run dev
```
Visit `http://localhost:5173` in your browser.

### Production Build
```bash
npm run build
```

---

## 📋 Coursera Final Assignment Rubric & File Map

| Task | Required File | Description | Points |
| :--- | :--- | :--- | :--- |
| **Task 1** | [`README.md`](README.md) | Project name, overview, features, and setup instructions | 2 pts |
| **Task 2** | [`src/AboutUs.jsx`](src/AboutUs.jsx) | Professional company description for Paradise Nursery | 1 pt |
| **Task 3** | [`src/App.css`](src/App.css) | Botanical background image styling for the landing page | 1 pt |
| **Task 4** | [`src/App.jsx`](src/App.jsx) | Landing page with branding and "Get Started" button | 3 pts |
| **Task 5** | [`src/CartSlice.jsx`](src/CartSlice.jsx) | Redux slice managing shopping cart state and actions | 4 pts |
| **Task 6** | [`src/ProductList.jsx`](src/ProductList.jsx) | Plant catalog with 3+ categories, 6+ plants each, & navbar | 16 pts |
| **Task 7** | [`src/CartItem.jsx`](src/CartItem.jsx) | Shopping cart page with quantity controls & checkout | 23 pts |
| **Total** | | | **50 / 50 pts** |

---

## 👤 Author
**Akhil Karampuri** (GitHub: [@thekarampuri](https://github.com/thekarampuri))
