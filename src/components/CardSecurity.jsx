import React from 'react';

export default function CardSecurity() {
  return (
    <div style={{padding:'2rem',maxWidth:500,margin:'0 auto'}}>
      <h2>Card Security</h2>
      <ul style={{lineHeight:2}}>
        <li><b>Two-Factor Authentication:</b> Add an extra layer of security to your account and transactions.</li>
        <li><b>Instant Card Lock:</b> Lock your card instantly if lost or stolen, right from the app.</li>
        <li><b>Real-Time Alerts:</b> Get notified of every transaction and suspicious activity.</li>
        <li><b>Zero Liability Protection:</b> You are not responsible for unauthorized transactions.</li>
        <li><b>Encrypted Data:</b> All your card and personal data is protected with bank-grade encryption.</li>
        <li><b>Virtual Cards:</b> Use virtual cards for online shopping to keep your real card details safe.</li>
        <li><b>24/7 Fraud Monitoring:</b> Our systems monitor your account for fraud around the clock.</li>
      </ul>
      <div style={{marginTop:'2rem',textAlign:'center'}}>
        <button style={{padding:'0.8rem 2rem',borderRadius:8,background:'#1976d2',color:'#fff',border:'none',fontWeight:'bold'}}>Learn More</button>
      </div>
    </div>
  );
}
