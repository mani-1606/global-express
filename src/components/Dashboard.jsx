import React from 'react';

const dashboardOptions = [
  {
    title: 'Balance',
    desc: 'View your current account balance.',
    btn: 'View Balance',
    link: '/dashboard/balance',
  // Removed currency balances
  },
  {
    title: 'Transfer',
    desc: 'Send money to others or exchange currency.',
    btn: 'Go to Transfer',
    link: '/transfer',
  },
  {
    title: 'Transaction History',
    desc: 'See all your past transactions.',
    btn: 'View History',
    link: '/history',
  },
  {
    title: 'Analytics',
    desc: 'Analyze your spending and income.',
    btn: 'View Analytics',
    link: '/analytics',
  },
];

import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard" style={{ maxWidth: 900, margin: '3rem auto', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Account Dashboard</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
        {dashboardOptions.map(opt => (
          <div key={opt.title} style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px rgba(0,40,120,0.10)', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', minHeight: 180 }}>
            <h3>{opt.title}</h3>
            <p>{opt.desc}</p>
            {/* Removed currency balances table */}
            <button className="amex-card-btn" style={{ marginTop: '1rem' }} onClick={() => navigate(opt.link)}>{opt.btn}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
