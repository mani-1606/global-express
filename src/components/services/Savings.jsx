import React, { useState } from 'react';
import PasswordPrompt from '../PasswordPrompt';

export default function Savings() {
  const [form, setForm] = useState({ name: '', amount: '' });
  const [currency, setCurrency] = useState('INR');
  const [converted, setConverted] = useState('');
  const rates = { USD: 0.012, EUR: 0.011, GBP: 0.0095, INR: 1 };

  function convertMoney(amount, to) {
    if (!amount || isNaN(amount)) return '';
    const val = (parseFloat(amount) * rates[to]).toFixed(2);
    return `${val} ${to}`;
  }
  const [showPassword, setShowPassword] = useState(false);
  const [saved, setSaved] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === 'amount') {
      setConverted(convertMoney(e.target.value, currency));
    }
  }

  function handleCurrencyChange(e) {
    setCurrency(e.target.value);
    setConverted(convertMoney(form.amount, e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowPassword(true);
  }

  function handleConfirm() {
    setShowPassword(false);
    setSaved(true);
  }

  function handleCancel() {
    setShowPassword(false);
  }

  return (
    <div style={{padding:'2rem',maxWidth:400,margin:'0 auto'}}>
      <h2>Savings</h2>
      <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name of Savings"
          style={{padding:'0.7rem',borderRadius:8,border:'1px solid #ccc',background:'#f7f7f7',color:'#222'}}
          required
        />
        <input
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount to Save"
          style={{padding:'0.7rem',borderRadius:8,border:'1px solid #ccc',background:'#f7f7f7',color:'#222'}}
          required
        />
        <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
          <label htmlFor="currency">Convert to:</label>
          <select id="currency" value={currency} onChange={handleCurrencyChange} style={{padding:'0.5rem',borderRadius:8,border:'1px solid #ccc',background:'#f7f7f7',color:'#222'}}>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
          {converted && <span style={{color:'#0070f3'}}>{converted}</span>}
        </div>
        <button type="submit" style={{padding:'0.7rem',borderRadius:8,background:'#1976d2',color:'#fff',border:'none'}}>Save</button>
      </form>
      {showPassword && (
        <PasswordPrompt onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
      {saved && (
        <div style={{marginTop:'1rem',color:'green'}}>Savings added: {form.name} - ₹{form.amount}</div>
      )}
    </div>
  );
}
