import React from 'react';
import './HomeAmex.css';

const cardTypes = [
  {
    name: 'Platinum',
    desc: 'Premium privileges and rewards.',
    color: '#e5e4e2',
    eligibility: {
      indian: [
        'Minimum age: 21 years',
        'Valid PAN and Aadhaar',
        'Stable income (₹8 lakh+ per year)',
        'Good credit score (700+)',
      ],
      nonIndian: [
        'Minimum age: 21 years',
        'Valid passport and visa/green card',
        'Stable income (equivalent $10,000+ per year)',
        'Good credit score (700+)',
      ],
    },
  },
  {
    name: 'Diamond',
    desc: 'Exclusive offers and luxury benefits.',
    color: '#b9f2ff',
    eligibility: {
      indian: [
        'Minimum age: 23 years',
        'Valid PAN and Aadhaar',
        'Stable income (₹15 lakh+ per year)',
        'Excellent credit score (750+)',
      ],
      nonIndian: [
        'Minimum age: 23 years',
        'Valid passport and visa/green card',
        'Stable income (equivalent $20,000+ per year)',
        'Excellent credit score (750+)',
      ],
    },
  },
  {
    name: 'Crown',
    desc: 'Elite status and top-tier perks.',
    color: '#f9e79f',
    eligibility: {
      indian: [
        'Minimum age: 25 years',
        'Valid PAN and Aadhaar',
        'Stable income (₹30 lakh+ per year)',
        'Exceptional credit score (800+)',
      ],
      nonIndian: [
        'Minimum age: 25 years',
        'Valid passport and visa/green card',
        'Stable income (equivalent $40,000+ per year)',
        'Exceptional credit score (800+)',
      ],
    },
  },
];

const Cards = () => (
  <section className="amex-cards-section">
    <div className="amex-cards-grid">
      {cardTypes.map((card) => (
        <div className="amex-card" key={card.name} style={{background: card.color}}>
          <h3>{card.name} Card</h3>
          <p>{card.desc}</p>
          <div style={{ margin: '1rem 0' }}>
            <strong>Eligibility (Indians):</strong>
            <ul style={{ margin: '0.5rem 0 0 1rem', padding: 0 }}>
              {card.eligibility.indian.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <strong style={{ marginTop: '0.7rem', display: 'block' }}>Eligibility (Non-Indians):</strong>
            <ul style={{ margin: '0.5rem 0 0 1rem', padding: 0 }}>
              {card.eligibility.nonIndian.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <button className="amex-card-btn">Apply</button>
        </div>
      ))}
    </div>
  </section>
);

export default Cards;
