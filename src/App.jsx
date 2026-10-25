import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Navbar from './components/Navbar';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

function LandingPage() {
  return (
    <div>
      <section className="landing-page">
        <div className="landing-overlay"></div>
        <div className="landing-container">
          <span className="landing-badge">🌿 Welcome to Nature's Sanctuary</span>
          <h1>Paradise Nursery</h1>
          <p className="landing-tagline">Where Greenery Meets Serenity</p>
          <p className="landing-description">
            Transform your living and workspaces into refreshing, air-purifying natural retreats.
            Explore our hand-selected botanical collections featuring resilient indoor foliage,
            soothing aromatics, and gorgeous low-maintenance succulents.
          </p>
          <Link to="/products" className="get-started-btn" id="get-started-button">
            <span>Get Started</span>
            <span className="btn-arrow">→</span>
          </Link>
        </div>
      </section>
      <AboutUs />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
