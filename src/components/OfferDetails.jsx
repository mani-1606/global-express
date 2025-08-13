import React from 'react';


const dummyOffers = [
  {
    title: '5% Cashback on All Utility Payments',
    desc: 'Pay your electricity, water, or gas bill and get 5% cashback instantly.'
  },
  {
    title: 'Welcome Bonus ₹2000',
    desc: 'Get a ₹2000 bonus on your first card transaction above ₹10,000.'
  },
  {
    title: 'Zero Annual Fee for First Year',
    desc: 'Apply now and enjoy zero annual fee for the first year on Platinum and Diamond cards.'
  },
  {
    title: 'Airport Lounge Access',
    desc: 'Free access to select airport lounges for Crown card holders.'
  },
  {
    title: 'Refer & Earn',
    desc: 'Refer a friend and earn up to ₹500 per successful referral.'
  },
];

const offerDetails = {
  'Latest Offers': {
    title: 'Latest Offers',
    desc: 'Check your eligibility for our cards and get exclusive rewards. Special discounts, cashback, and more for new and existing customers.',
    offers: dummyOffers,
  },
  'Membership Benefits': {
    title: 'Membership Benefits',
    desc: 'Enjoy premium benefits and special privileges with every card. Access airport lounges, travel insurance, and exclusive partner deals.',
  },
  'Card Security': {
    title: 'Card Security',
    desc: 'Stay safe with advanced security features and tips. Learn about fraud protection, secure transactions, and how to keep your account safe.',
  },
};

const OfferDetails = ({ type }) => {
  const info = offerDetails[type] || {};
  return (
    <div style={{ maxWidth: 500, margin: '3rem auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px rgba(0,40,120,0.10)', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>{info.title}</h2>
      <p>{info.desc}</p>
      {type === 'Latest Offers' && info.offers && (
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Current Offers</h3>
          <ul style={{ paddingLeft: '1.2rem' }}>
            {info.offers.map((offer, idx) => (
              <li key={idx} style={{ marginBottom: '1rem' }}>
                <strong>{offer.title}</strong><br />
                <span>{offer.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OfferDetails;
