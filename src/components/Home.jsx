



import './HomeAmex.css';
import logo from '../assets/global-express-logo.svg';

const sliderImages = [
  // New Money quote 1
  'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80',
  // Money quote 2 (unchanged)
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
];

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  { label: 'Mobile Recharge', route: '/services/mobile-recharge' },
  { label: 'TV Recharge', route: '/services/tv-recharge' },
  { label: 'Book Train Tickets', route: '/services/train-tickets' },
  { label: 'Book Flights', route: '/services/flights' },
  { label: 'Movie Tickets', route: '/services/movies' },
  { label: 'Savings', route: '/services/savings' },
  { label: 'Electricity Bill', route: '/services/electricity-bill' },
];



const Home = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const cardTypes = [
    { name: 'Platinum', desc: 'Premium privileges and rewards.', color: '#e5e4e2' },
    { name: 'Diamond', desc: 'Exclusive offers and luxury benefits.', color: '#b9f2ff' },
    { name: 'Crown', desc: 'Elite status and top-tier perks.', color: '#f9e79f' },
  ];

  return (
    <div className="amex-home">
      <div className="amex-slider">
        {sliderImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="Banking Slide"
            className={`amex-slide${slide === idx ? ' active' : ''}`}
          />
        ))}
        <div className="amex-slider-dots">
          {sliderImages.map((_, idx) => (
            <span
              key={idx}
              className={`amex-dot${slide === idx ? ' active' : ''}`}
              onClick={() => setSlide(idx)}
            />
          ))}
        </div>
      </div>
      <section className="amex-hero-section">
        <div className="amex-hero-content">
          <img src={logo} alt="Global Express Logo" className="amex-hero-logo" />
          <h1>Global Express Bank</h1>
          <p className="amex-tagline">Don't bank without it.</p>
          <button className="amex-cta-btn" onClick={() => navigate('/cards')}>Explore Cards</button>
        </div>
        <div className="amex-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.2rem', marginTop: '2.5rem' }}>
          {services.map((service) => (
            <div key={service.label} className="amex-service-card" style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 8px rgba(0,40,120,0.08)', padding: '1.2rem', textAlign: 'center', cursor: 'pointer', fontWeight: 500 }} onClick={() => navigate(service.route)}>
              {service.label}
            </div>
          ))}
        </div>
      </section>
      <section className="amex-cards-section">
        <div className="amex-cards-grid">
          <div className="amex-card">
            <h3>Latest Offers</h3>
            <p>Check your eligibility for our cards and get exclusive rewards.</p>
            <button className="amex-card-btn" onClick={() => navigate('/offers/latest')}>Learn More</button>
          </div>
          <div className="amex-card">
            <h3>Membership Benefits</h3>
            <p>Enjoy premium benefits and special privileges with every card.</p>
            <button className="amex-card-btn" onClick={() => navigate('/offers/membership')}>Learn More</button>
          </div>
          <div className="amex-card">
            <h3>Card Security</h3>
            <p>Stay safe with advanced security features and tips.</p>
            <button className="amex-card-btn" onClick={() => navigate('/offers/security')}>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
