import React from 'react';

const balances = [
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', amount: 0 },
  { code: 'USD', name: 'US Dollar', symbol: '$', amount: 0 },
  { code: 'EUR', name: 'Euro', symbol: '€', amount: 0 },
  { code: 'GBP', name: 'British Pound', symbol: '£', amount: 0 },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', amount: 0 },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', amount: 0 },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', amount: 0 },
];

const Balance = () => (
  <div style={{ maxWidth: 500, margin: '3rem auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px rgba(0,40,120,0.10)', padding: '2rem' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>All Currency Balances</h2>
    <table style={{ width: '100%', fontSize: '1.1rem' }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', fontWeight: 500 }}>Currency</th>
          <th style={{ textAlign: 'right', fontWeight: 500 }}>Amount</th>
        </tr>
      </thead>
      <tbody>
        {balances.map(b => (
          <tr key={b.code}>
            <td>{b.name} ({b.symbol})</td>
            <td style={{ textAlign: 'right' }}>{b.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Balance;
