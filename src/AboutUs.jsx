import React from 'react';
import './components/AboutUs.css';

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>About Paradise Nursery</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Welcome to Paradise Nursery</h3>
            <p>
              At Paradise Nursery, we believe that bringing greenery into your living space transforms
              not just the aesthetic of your room, but also your health, focus, and peace of mind.
              Founded by passionate plant enthusiasts, our nursery is dedicated to providing healthy,
              sustainably grown houseplants that flourish in indoor environments.
            </p>
            
            <h3>Our Mission</h3>
            <p>
              Our mission is to make indoor gardening accessible, enjoyable, and rewarding for everyone—whether
              you are taking home your very first succulent or cultivating an expansive urban jungle.
              We take great care in curating resilient, vibrant houseplants that purify the air and uplift your everyday life.
            </p>
            
            <h3>Why Choose Paradise Nursery?</h3>
            <ul className="features-list">
              <li>✓ Hand-inspected, healthy plants sourced directly from sustainable growers</li>
              <li>✓ Comprehensive botanical collections: air purifiers, aromatics, and low-maintenance succulents</li>
              <li>✓ Clear plant-care guidance tailored to beginners and experienced collectors alike</li>
              <li>✓ Eco-friendly packaging engineered to ensure safe transit directly to your doorstep</li>
              <li>✓ Dedicated customer support to assist you at every step of your plant parenting journey</li>
            </ul>
            
            <h3>Our Commitment to Sustainability</h3>
            <p>
              We prioritize eco-friendly soil mixes, recyclable packaging materials, and energy-conscious
              nursery practices to minimize our carbon footprint and preserve natural habitats for generations to come.
            </p>
          </div>
          
          <div className="about-contact">
            <h3>Contact Paradise Nursery</h3>
            <div className="contact-info">
              <p><strong>Customer Care:</strong> support@paradisenursery.com</p>
              <p><strong>Toll-Free:</strong> 1-800-PARADISE (1-800-727-2347)</p>
              <p><strong>Headquarters:</strong> 500 Botanical Way, Suite 10, Green City, GC 94016</p>
              <p><strong>Nursery Hours:</strong> Mon - Sat: 9:00 AM - 6:00 PM EST (Closed Sundays)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
