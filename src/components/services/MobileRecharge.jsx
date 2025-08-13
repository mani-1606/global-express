import React, { useState } from 'react';
import PasswordPrompt from '../PasswordPrompt';

const countries = [
  'India', 'USA', 'UK', 'Australia', 'Canada', 'Singapore', 'UAE', 'Germany', 'France', 'Japan', 'China', 'Brazil', 'South Africa'
];
const simCompanies = [
  'Airtel', 'Jio', 'Vi', 'BSNL', 'AT&T', 'T-Mobile', 'Verizon', 'Optus', 'Telstra', 'Rogers', 'Bell', 'SingTel', 'Etisalat'
];

export default function MobileRecharge() {
  const [form, setForm] = useState({
    country: countries[0],
    sim: simCompanies[0],
    mobile: '',
    amount: '',
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
    alert(`Recharge successful for ${form.mobile} (${form.sim}, ${form.country}) with amount ${form.amount}`);
  }

  function handlePasswordCancel() {
    setShowPassword(false);
    setPendingSubmit(false);
  }

  return (
    <div style={{padding:'2rem'}}>
      <h2>Mobile Recharge</h2>
      <form onSubmit={handleSubmit} style={{maxWidth:400,margin:'2rem auto',background:'#fff',padding:'2rem',borderRadius:12,boxShadow:'0 2px 12px rgba(0,0,0,0.10)'}}>
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
          <label>Amount</label>
          <input type="number" name="amount" value={form.amount} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}} placeholder="Enter amount" required />
        </div>
        <button type="submit" style={{padding:'0.7rem 1.5rem',borderRadius:8,background:'#0070f3',color:'#fff',border:'none',width:'100%'}}>Recharge</button>
      </form>
      {showPassword && pendingSubmit && (
        <PasswordPrompt onConfirm={handlePasswordConfirm} onCancel={handlePasswordCancel} />
      )}
    </div>
  );
}
