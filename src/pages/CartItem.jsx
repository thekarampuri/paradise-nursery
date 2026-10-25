import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  updateQuantity,
  increaseQuantity,
  decreaseQuantity,
} from './CartSlice';
import './pages/CartItem.css';

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const handleIncrement = (item) => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item.id));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  const handleCheckout = () => {
    alert('Thank you for shopping with Paradise Nursery! Checkout functionality is Coming Soon. ✨');
  };

  const calculateTotalCost = (item) => {
    return (item.quantity * item.price).toFixed(2);
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header-row">
          <h1 className="cart-title">Your Plant Cart</h1>
          <span className="cart-badge">{totalQuantity} {totalQuantity === 1 ? 'Plant' : 'Plants'}</span>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🪴</div>
            <h2>Your cart is currently empty</h2>
            <p>Looks like you haven't brought any green friends home yet!</p>
            <Link to="/products" className="continue-shopping-btn" id="start-shopping-btn">
              Explore Plants
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items-column">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-card" id={`cart-item-${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-card-image"
                  />
                  
                  <div className="cart-card-details">
                    <h3 className="cart-card-name">{item.name}</h3>
                    <p className="cart-card-unit-price">Unit Price: ${Number(item.price).toFixed(2)}</p>
                    <p className="cart-card-desc">{item.description}</p>
                  </div>

                  <div className="cart-card-quantity">
                    <button
                      className="qty-btn decrement-btn"
                      onClick={() => handleDecrement(item)}
                      aria-label="Decrease quantity"
                      id={`decrease-qty-${item.id}`}
                    >
                      −
                    </button>
                    <span className="qty-number" id={`quantity-${item.id}`}>{item.quantity}</span>
                    <button
                      className="qty-btn increment-btn"
                      onClick={() => handleIncrement(item)}
                      aria-label="Increase quantity"
                      id={`increase-qty-${item.id}`}
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-card-subtotal">
                    <span className="subtotal-label">Subtotal</span>
                    <span className="subtotal-val">${calculateTotalCost(item)}</span>
                  </div>

                  <button
                    className="delete-item-btn"
                    onClick={() => handleRemove(item)}
                    title="Remove item"
                    id={`delete-item-${item.id}`}
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary-card">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Total Items:</span>
                <span className="summary-highlight">{totalQuantity}</span>
              </div>
              <div className="summary-row">
                <span>Total Amount:</span>
                <span className="summary-highlight">${Number(totalAmount).toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span className="free-shipping">FREE (Botanical Care)</span>
              </div>
              <hr className="summary-divider" />
              <div className="summary-row total-row">
                <span>Grand Total:</span>
                <span className="grand-total-amount">${Number(totalAmount).toFixed(2)}</span>
              </div>

              <button
                className="checkout-btn"
                onClick={handleCheckout}
                id="checkout-button"
              >
                Checkout (Coming Soon)
              </button>

              <Link
                to="/products"
                className="continue-shopping-link"
                id="continue-shopping-button"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
