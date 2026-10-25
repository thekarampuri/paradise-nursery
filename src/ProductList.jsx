import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, cartActions } from './CartSlice';
import './pages/ProductList.css';

export const plantCategories = [
  {
    category: 'Air Purifying Plants',
    description: 'Scientifically proven plants that filter indoor pollutants and boost oxygen levels.',
    plants: [
      {
        id: 1,
        name: 'Snake Plant (Sansevieria)',
        price: 18,
        description: 'Hardy air purifier that filters toxins and releases oxygen even at night.',
        image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?w=600&auto=format&fit=crop&q=80',
      },
      {
        id: 2,
        name: 'Spider Plant',
        price: 14,
        description: 'Resilient and fast-growing plant known for removing formaldehyde and carbon monoxide.',
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=600&auto=format&fit=crop&q=80',
      },
      {
        id: 3,
        name: 'Peace Lily',
        price: 22,
        description: 'Elegant white blooms paired with broad glossy leaves that cleanse indoor air.',
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?w=600&auto=format&fit=crop&q=80',
      },
      {
        id: 4,
        name: 'Boston Fern',
        price: 16,
        description: 'Lush arching fronds that naturally humidify rooms and eliminate air impurities.',
        image: 'https://images.unsplash.com/photo-1628188664153-a7ab60d0d9f8?w=600&auto=format&fit=crop&q=80',
      },
      {
        id: 5,
        name: 'Rubber Plant (Ficus)',
        price: 25,
        description: 'Bold, deep-green leathery leaves capable of absorbing indoor toxins with ease.',
        image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&auto=format&fit=crop&q=80',
      },
      {
        id: 6,
        name: 'English Ivy',
        price: 12,
        description: 'Classic evergreen climbing vine effective at capturing airborne particles and mold.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80',
      },
    ],
  },
  {
    category: 'Aromatic & Medicinal Plants',
    description: 'Delightful herbal botanicals offering fresh fragrances, culinary flavors, and natural wellness.',
    plants: [
      {
        id: 7,
        name: 'Aloe Vera',
        price: 15,
        description: 'Healing succulent known for its soothing gel, cooling skin benefits, and easy care.',
        image: 'https://images.unsplash.com/photo-1567689265664-1c48de61db0b?w=600&auto=format&fit=crop&q=80',
      },
      {
        id: 8,
        name: 'French Lavender',
        price: 18,
        description: 'Calming purple flowers with a serene natural fragrance that encourages deep relaxation.',
        image: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=600&auto=format&fit=crop&q=80',
      },
      {
        id: 9,
        name: 'Tuscan Rosemary',
        price: 13,
        description: 'Fragrant evergreen culinary herb that enriches room ambiance and culinary dishes.',
        image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=600&auto=format&fit=crop&q=80',
      },
      {
        id: 10,
        name: 'Sweet Basil',
        price: 10,
        description: 'Aromatic kitchen staple with lush green leaves offering sweet herbal scents.',
        image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=600&auto=format&fit=crop&q=80',
      },
      {
        id: 11,
        name: 'Peppermint',
        price: 11,
        description: 'Crisp, invigorating aroma that stimulates focus and serves as a refreshing tea ingredient.',
        image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=600&auto=format&fit=crop&q=80',
      },
      {
        id: 12,
        name: 'Chamomile',
        price: 12,
        description: 'Delicate daisy-like blossoms renowned for peaceful herbal teas and gentle aroma.',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&auto=format&fit=crop&q=80',
      },
    ],
  },
  {
    category: 'Low Maintenance & Succulents',
    description: 'Thriving, resilient houseplants requiring minimal watering—ideal for busy plant lovers.',
    plants: [
      {
        id: 13,
        name: 'Jade Plant',
        price: 17,
        description: 'Symbol of good luck and prosperity featuring thick, jade-green succulent leaves.',
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&auto=format&fit=crop&q=80',
      },
      {
        id: 14,
        name: 'ZZ Plant',
        price: 24,
        description: 'Virtually indestructible with waxy, deep green foliage that thrives in low light.',
        image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=600&auto=format&fit=crop&q=80',
      },
      {
        id: 15,
        name: 'Golden Pothos',
        price: 14,
        description: 'Popular trailing vine with heart-shaped variegated leaves that tolerate drought.',
        image: 'https://images.unsplash.com/photo-1596724806502-b25866164293?w=600&auto=format&fit=crop&q=80',
      },
      {
        id: 16,
        name: 'Echeveria Rosette',
        price: 9,
        description: 'Stunning geometric succulent rosette with soft pastel tones, requiring bright sunshine.',
        image: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?w=600&auto=format&fit=crop&q=80',
      },
      {
        id: 17,
        name: 'Zebra Haworthia',
        price: 11,
        description: 'Compact succulent with striking white horizontal stripes across dark green pointed leaves.',
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&auto=format&fit=crop&q=80',
      },
      {
        id: 18,
        name: 'Cast Iron Plant',
        price: 26,
        description: 'Named for its legendary endurance against neglect, low light, and temperature fluctuations.',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&auto=format&fit=crop&q=80',
      },
    ],
  },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isPlantInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  return (
    <div className="product-list-page">
      <div className="product-header">
        <h1 className="page-title">🌿 Our Botanical Collection</h1>
        <p className="page-subtitle">
          Hand-curated, healthy houseplants delivered straight from our greenhouse to your sanctuary.
        </p>
      </div>

      {plantCategories.map((catGroup) => (
        <section key={catGroup.category} className="category-section">
          <div className="category-header">
            <h2 className="category-title">{catGroup.category}</h2>
            <p className="category-description">{catGroup.description}</p>
          </div>

          <div className="products-grid">
            {catGroup.plants.map((plant) => {
              const inCart = isPlantInCart(plant.id);
              return (
                <div key={plant.id} className="product-card" id={`product-card-${plant.id}`}>
                  <div className="product-image-container">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="product-image"
                      loading="lazy"
                    />
                    <span className="product-price-badge">${plant.price}</span>
                  </div>

                  <div className="product-info">
                    <h3 className="product-name">{plant.name}</h3>
                    <p className="product-desc">{plant.description}</p>
                    <div className="product-action">
                      <button
                        className={`add-to-cart-btn ${inCart ? 'disabled' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={inCart}
                        id={`add-to-cart-${plant.id}`}
                      >
                        {inCart ? '✓ Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
