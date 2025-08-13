import React, { useState } from 'react';
import PasswordPrompt from '../PasswordPrompt';

const countries = [
  'India', 'USA', 'UK', 'Australia', 'Canada', 'Singapore', 'UAE', 'Germany', 'France', 'Japan', 'China', 'Brazil', 'South Africa'
];
const simCompanies = [
  'Airtel', 'Jio', 'Vi', 'BSNL', 'AT&T', 'T-Mobile', 'Verizon', 'Optus', 'Telstra', 'Rogers', 'Bell', 'SingTel', 'Etisalat'
];
const tvCompanies = [
  'Airtel DTH', 'Jio DTH', 'Tata Sky', 'Dish TV', 'Sun Direct', 'Videocon D2H'
];
const mobilePlans = [
  { name: 'Unlimited Calls + 2GB/day', price: 299 },
  { name: '1GB/day + 100 SMS', price: 199 },
  { name: 'International Roaming', price: 999 },
  { name: 'Data Booster 5GB', price: 49 },
];
const tvPlans = [
  { name: 'Basic HD Pack', price: 250 },
  { name: 'Sports Pack', price: 350 },
  { name: 'Kids & Family', price: 200 },
  { name: 'Premium HD', price: 499 },
];

export default function Recharge() {
  const [type, setType] = useState('mobile');
  const [form, setForm] = useState({
    country: countries[0],
    sim: simCompanies[0],
    tv: tvCompanies[0],
    mobile: '',
    customerId: '',
    plan: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [pendingSubmit, setPendingSubmit] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowPassword(true);
    setPendingSubmit(true);
  }

  function handlePasswordConfirm() {
    setShowPassword(false);
    setPendingSubmit(false);
    if (type === 'mobile') {
      alert(`Mobile recharge successful for ${form.mobile} (${form.sim}, ${form.country}) with plan ${form.plan}`);
    } else {
      alert(`TV recharge successful for ${form.customerId} (${form.tv}, ${form.country}) with plan ${form.plan}`);
    }
  }

  function handlePasswordCancel() {
    setShowPassword(false);
    setPendingSubmit(false);
  }

  return (
    <div style={{padding:'2rem'}}>
      <h2>Recharge</h2>
      <div style={{display:'flex',gap:'2rem',marginBottom:'2rem'}}>
        <button onClick={()=>setType('mobile')} style={{padding:'0.7rem 1.5rem',borderRadius:8,background:type==='mobile'?'#0070f3':'#eee',color:type==='mobile'?'#fff':'#222',border:'none'}}>Mobile Recharge</button>
        <button onClick={()=>setType('tv')} style={{padding:'0.7rem 1.5rem',borderRadius:8,background:type==='tv'?'#0070f3':'#eee',color:type==='tv'?'#fff':'#222',border:'none'}}>TV Recharge</button>
      </div>
      <form onSubmit={handleSubmit} style={{maxWidth:400,margin:'2rem auto',background:'#fff',padding:'2rem',borderRadius:12,boxShadow:'0 2px 12px rgba(0,0,0,0.10)'}}>
        {type==='mobile' ? (
          <>
            <div style={{marginBottom:'1rem'}}>
              <label>Country</label>
              <select name="country" value={form.country} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}}>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div style={{marginBottom:'1rem'}}>
              <label>SIM Card Company</label>
              <select name="sim" value={form.sim} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}}>
                {simCompanies.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div style={{marginBottom:'1rem'}}>
              <label>Mobile Number</label>
              <input type="text" name="mobile" value={form.mobile} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}} placeholder="Enter mobile number" required />
            </div>
            <div style={{marginBottom:'1rem'}}>
              <label>Plan</label>
              <select name="plan" value={form.plan} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}} required>
                <option value="">Select Plan</option>
                {mobilePlans.map(p => <option key={p.name} value={p.name}>{p.name} - ₹{p.price}</option>)}
              </select>
            </div>
          </>
        ) : (
          <>
            <div style={{marginBottom:'1rem'}}>
              <label>Country</label>
              <select name="country" value={form.country} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}}>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div style={{marginBottom:'1rem'}}>
              <label>TV Company</label>
              <select name="tv" value={form.tv} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}}>
                {tvCompanies.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div style={{marginBottom:'1rem'}}>
              <label>Customer ID</label>
              <input type="text" name="customerId" value={form.customerId} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}} placeholder="Enter customer ID" required />
            </div>
            <div style={{marginBottom:'1rem'}}>
              <label>Plan</label>
              <select name="plan" value={form.plan} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}} required>
                <option value="">Select Plan</option>
                {tvPlans.map(p => <option key={p.name} value={p.name}>{p.name} - ₹{p.price}</option>)}
              </select>
            </div>
          </>
        )}
        <button type="submit" style={{padding:'0.7rem 1.5rem',borderRadius:8,background:'#0070f3',color:'#fff',border:'none',width:'100%'}}>Recharge</button>
      </form>
      {showPassword && pendingSubmit && (
        <PasswordPrompt onConfirm={handlePasswordConfirm} onCancel={handlePasswordCancel} />
      )}
    </div>
  );
}
