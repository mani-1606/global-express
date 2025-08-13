import React from 'react';

export default function MembershipBenefits() {
  return (
    <div style={{padding:'2rem',maxWidth:500,margin:'0 auto'}}>
      <h2>Membership Benefits</h2>
      <ul style={{lineHeight:2}}>
        <li><b>Priority Support:</b> Get 24/7 customer support with faster response times.</li>
        <li><b>Zero Transaction Fees:</b> Enjoy free transfers and bill payments.</li>
        <li><b>Exclusive Offers:</b> Access special discounts and cashback on partner brands.</li>
        <li><b>Higher Savings Interest:</b> Earn more on your savings with premium rates.</li>
        <li><b>Personalized Dashboard:</b> Get spending insights and custom financial advice.</li>
        <li><b>Early Access:</b> Try new features before everyone else.</li>
        <li><b>Premium Card Design:</b> Receive a stylish, exclusive debit card.</li>
      </ul>
      <div style={{marginTop:'2rem',textAlign:'center'}}>
        <button style={{padding:'0.8rem 2rem',borderRadius:8,background:'#1976d2',color:'#fff',border:'none',fontWeight:'bold'}}>Upgrade Now</button>
      </div>
    </div>
  );
}
