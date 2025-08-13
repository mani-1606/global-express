import React, { useState } from 'react';

const ReferFriend = () => {
  const [referralUrl] = useState(
    `${window.location.origin}/signup?ref=${Math.random().toString(36).substring(2, 10)}`
  );
  const handleCopy = () => {
    navigator.clipboard.writeText(referralUrl);
    alert('Referral URL copied!');
  };
  return (
    <div className="refer-friend" style={{ maxWidth: 400, margin: '3rem auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px rgba(0,40,120,0.10)', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Refer a Friend</h2>
      <p>Refer a friend and get up to 200 rupees!</p>
      <div style={{ margin: '1.5rem 0' }}>
        <label style={{ fontWeight: 500 }}>Your Referral URL:</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
          <input type="text" value={referralUrl} readOnly style={{ flex: 1, padding: '0.5rem', borderRadius: 8, border: '1px solid #ccc', background: '#f7fafd', color: '#222' }} />
          <button className="amex-card-btn" onClick={handleCopy}>Copy</button>
        </div>
      </div>
    </div>
  );
};

export default ReferFriend;
