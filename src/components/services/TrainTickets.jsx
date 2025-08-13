import React, { useState } from 'react';
import PasswordPrompt from '../PasswordPrompt';

const trainTypes = ['Local Train', 'Metro Train', 'Normal Train'];
const countries = {
  India: [
    'Andhra Pradesh', 'Bihar', 'Delhi', 'Gujarat', 'Karnataka', 'Kerala', 'Maharashtra', 'Punjab', 'Rajasthan', 'Tamil Nadu', 'Uttar Pradesh', 'West Bengal', 'Telangana', 'Madhya Pradesh', 'Odisha', 'Assam', 'Chhattisgarh', 'Goa', 'Haryana', 'Jharkhand', 'Uttarakhand', 'Himachal Pradesh', 'Tripura', 'Meghalaya', 'Manipur', 'Nagaland', 'Sikkim', 'Arunachal Pradesh', 'Mizoram'
  ],
  USA: [ 'California', 'Texas', 'New York', 'Florida', 'Illinois', 'Pennsylvania', 'Ohio', 'Georgia', 'North Carolina', 'Michigan' ],
  UK: [ 'England', 'Scotland', 'Wales', 'Northern Ireland' ],
  Australia: [ 'New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia', 'Tasmania', 'Australian Capital Territory', 'Northern Territory' ],
  Canada: [ 'Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba', 'Saskatchewan', 'Nova Scotia', 'New Brunswick', 'Newfoundland and Labrador', 'Prince Edward Island' ],
};
const countryList = Object.keys(countries);

export default function TrainTickets() {
  const [form, setForm] = useState({
    name: '',
    country: countryList[0],
    travelMode: trainTypes[0],
    fromState: '',
    toState: '',
    fromStation: '',
    toStation: '',
    date: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [pendingSubmit, setPendingSubmit] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'country') {
      setForm({
        ...form,
        country: value,
        fromState: '',
        toState: '',
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowPassword(true);
    setPendingSubmit(true);
  }

  function handlePasswordConfirm() {
    setShowPassword(false);
    setPendingSubmit(false);
    alert(`Ticket booked for ${form.name} from ${form.fromState} (${form.fromStation}) to ${form.toState} (${form.toStation}) on ${form.date} (${form.travelMode})`);
  }

  function handlePasswordCancel() {
    setShowPassword(false);
    setPendingSubmit(false);
  }

  return (
    <div style={{padding:'2rem'}}>
      <h2>Book Train Tickets</h2>
      <form onSubmit={handleSubmit} style={{maxWidth:400,margin:'2rem auto',background:'#fff',padding:'2rem',borderRadius:12,boxShadow:'0 2px 12px rgba(0,0,0,0.10)'}}>
        <div style={{marginBottom:'1rem'}}>
          <label>Passenger Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}} placeholder="Enter your name" required />
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label>Country</label>
          <select name="country" value={form.country} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}}>
            {countryList.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label>Travel Mode</label>
          <select name="travelMode" value={form.travelMode} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}}>
            {trainTypes.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label>From State</label>
          <select name="fromState" value={form.fromState} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}} required>
            <option value="">Select State</option>
            {countries[form.country].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label>From Station</label>
          <input type="text" name="fromStation" value={form.fromStation} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}} placeholder="Source station" required />
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label>To State</label>
          <select name="toState" value={form.toState} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}} required>
            <option value="">Select State</option>
            {countries[form.country].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label>To Station</label>
          <input type="text" name="toStation" value={form.toStation} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}} placeholder="Destination station" required />
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label>Date of Travel</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}} required />
        </div>
        <button type="submit" style={{padding:'0.7rem 1.5rem',borderRadius:8,background:'#0070f3',color:'#fff',border:'none',width:'100%'}}>Book Ticket</button>
      </form>
      {showPassword && pendingSubmit && (
        <PasswordPrompt onConfirm={handlePasswordConfirm} onCancel={handlePasswordCancel} />
      )}
    </div>
  );
}
