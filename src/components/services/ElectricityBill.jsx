import React, { useState } from 'react';
import PasswordPrompt from '../PasswordPrompt';
import { countries, states, cities } from './Movies';

export default function ElectricityBill() {
  const [form, setForm] = useState({
    country: countries[0],
    state: '',
    city: '',
    address: '',
    houseNo: '',
    billId: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [paid, setPaid] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowPassword(true);
  }

  function handleConfirm() {
    setShowPassword(false);
    setPaid(true);
  }

  function handleCancel() {
    setShowPassword(false);
  }

  return (
    <div style={{padding:'2rem',maxWidth:400,margin:'0 auto'}}>
      <h2>Electricity Bill</h2>
      <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
  <select name="country" value={form.country} onChange={handleChange} style={{padding:'0.7rem',borderRadius:8,border:'1px solid #ccc',background:'#f7f7f7',color:'#222'}} required>
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
  <select name="state" value={form.state} onChange={handleChange} style={{padding:'0.7rem',borderRadius:8,border:'1px solid #ccc',background:'#f7f7f7',color:'#222'}} required>
          <option value="">Select State</option>
          {form.country && states[form.country]?.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
  <select name="city" value={form.city} onChange={handleChange} style={{padding:'0.7rem',borderRadius:8,border:'1px solid #ccc',background:'#f7f7f7',color:'#222'}} required>
          <option value="">Select City</option>
          {form.state && cities[form.state]?.map(city => <option key={city} value={city}>{city}</option>)}
        </select>
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
          style={{padding:'0.7rem',borderRadius:8,border:'1px solid #ccc',background:'#f7f7f7',color:'#222'}}
          required
        />
        <input
          name="houseNo"
          value={form.houseNo}
          onChange={handleChange}
          placeholder="House No."
          style={{padding:'0.7rem',borderRadius:8,border:'1px solid #ccc',background:'#f7f7f7',color:'#222'}}
          required
        />
        <input
          name="billId"
          value={form.billId}
          onChange={handleChange}
          placeholder="Bill ID"
          style={{padding:'0.7rem',borderRadius:8,border:'1px solid #ccc',background:'#f7f7f7',color:'#222'}}
          required
        />
        <button type="submit" style={{padding:'0.7rem',borderRadius:8,background:'#1976d2',color:'#fff',border:'none'}}>Pay Bill</button>
      </form>
      {showPassword && (
        <PasswordPrompt onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
      {paid && (
        <div style={{marginTop:'1rem',color:'green'}}>Bill paid for {form.address}, {form.city}, {form.state}, {form.country} (Bill ID: {form.billId})</div>
      )}
    </div>
  );
}
