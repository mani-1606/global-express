import React, { useState } from 'react';
import PasswordPrompt from '../PasswordPrompt';

const countries = ['India', 'USA', 'UK', 'Australia', 'Canada', 'Germany', 'France', 'Japan', 'China', 'Brazil', 'Russia', 'Italy', 'Spain', 'Singapore', 'UAE'];
const states = {
  India: ['Delhi', 'Maharashtra', 'Karnataka', 'West Bengal'],
  USA: ['California', 'Texas', 'New York', 'Florida', 'Illinois'],
  UK: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
  Australia: ['New South Wales', 'Victoria', 'Queensland', 'Western Australia'],
  Canada: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
  Germany: ['Bavaria', 'Berlin', 'Hamburg', 'Hesse'],
  France: ['Île-de-France', 'Provence', 'Normandy', 'Brittany'],
  Japan: ['Tokyo', 'Osaka', 'Kyoto', 'Hokkaido'],
  China: ['Beijing', 'Shanghai', 'Guangdong', 'Sichuan'],
  Brazil: ['São Paulo', 'Rio de Janeiro', 'Bahia'],
  Russia: ['Moscow', 'Saint Petersburg', 'Krasnodar'],
  Italy: ['Lazio', 'Lombardy', 'Sicily'],
  Spain: ['Madrid', 'Catalonia', 'Andalusia'],
  Singapore: ['Singapore'],
  UAE: ['Dubai', 'Abu Dhabi'],
};
const cities = {
  Delhi: ['New Delhi', 'Dwarka', 'Rohini'],
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
  Karnataka: ['Bangalore', 'Mysore'],
  WestBengal: ['Kolkata', 'Howrah'],
  California: ['Los Angeles', 'San Francisco', 'San Diego'],
  Texas: ['Houston', 'Dallas', 'Austin'],
  NewYork: ['New York City', 'Buffalo'],
  Florida: ['Miami', 'Orlando'],
  Illinois: ['Chicago', 'Springfield'],
  England: ['London', 'Manchester'],
  Scotland: ['Edinburgh', 'Glasgow'],
  Wales: ['Cardiff'],
   Ireland: ['Belfast'],
  NewSouthWales: ['Sydney', 'Newcastle'],
  Victoria: ['Melbourne', 'Geelong'],
  Queensland: ['Brisbane'],
  WesternAustralia: ['Perth'],
  Ontario: ['Toronto', 'Ottawa'],
  Quebec: ['Montreal', 'Quebec City'],
  British_Columbia: ['Vancouver'],
  Alberta: ['Calgary'],
  Bavaria: ['Munich'],
  Berlin: ['Berlin'],
  Hamburg: ['Hamburg'],
  Hesse: ['Frankfurt'],
  'Ile-de-France': ['Paris'],
  Provence: ['Marseille'],
  Normandy: ['Rouen'],
  Brittany: ['Rennes'],
  Tokyo: ['Tokyo'],
  Osaka: ['Osaka'],
  Kyoto: ['Kyoto'],
  Hokkaido: ['Sapporo'],
  Beijing: ['Beijing'],
  Shanghai: ['Shanghai'],
  Guangdong: ['Guangzhou'],
  Sichuan: ['Chengdu'],
  'Sao Paulo': ['Sao Paulo'],
  'Rio de Janeiro': ['Rio de Janeiro'],
  Bahia: ['Salvador'],
  Moscow: ['Moscow'],
  Saint_Petersburg: ['Saint Petersburg'],
  Krasnodar: ['Krasnodar'],
  Lazio: ['Rome'],
  Lombardy: ['Milan'],
  Sicily: ['Palermo'],
  Madrid: ['Madrid'],
  Catalonia: ['Barcelona'],
  Andalusia: ['Seville'],
  Singapore: ['Singapore'],
  Dubai: ['Dubai'],
  Abu_Dhabi: ['Abu Dhabi']
  }
;

export { countries, states, cities };
const movies = ['Avengers', 'Inception', 'Interstellar', 'Jawan', 'Pathaan', 'KGF', 'RRR', 'Spider-Man', 'Batman', 'Frozen', 'Lion King'];

export default function Movies() {
  const [form, setForm] = useState({
    country: countries[0],
    state: '',
    city: '',
    movie: '',
    date: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [pendingSubmit, setPendingSubmit] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'country') {
      setForm({ country: value, state: '', city: '', movie: '', date: '' });
    } else if (name === 'state') {
      setForm({ ...form, state: value, city: '', movie: '', date: '' });
    } else if (name === 'city') {
      setForm({ ...form, city: value, movie: '', date: '' });
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
    alert(`Movie ticket booked for ${form.movie} in ${form.city}, ${form.state}, ${form.country} on ${form.date}`);
  }

  function handlePasswordCancel() {
    setShowPassword(false);
    setPendingSubmit(false);
  }

  return (
    <div style={{padding:'2rem'}}>
      <h2>Book Movie Tickets</h2>
      <form onSubmit={handleSubmit} style={{maxWidth:400,margin:'2rem auto',background:'#fff',padding:'2rem',borderRadius:12,boxShadow:'0 2px 12px rgba(0,0,0,0.10)'}}>
        <div style={{marginBottom:'1rem'}}>
          <label>Country</label>
          <select name="country" value={form.country} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}}>
            {countries.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label>State</label>
          <select name="state" value={form.state} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}} required>
            <option value="">Select State</option>
            {(states[form.country] || []).map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label>City</label>
          <select name="city" value={form.city} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}} required>
            <option value="">Select City</option>
            {(cities[form.state] || []).map(city => <option key={city} value={city}>{city}</option>)}
          </select>
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label>Movie Name</label>
          <select name="movie" value={form.movie} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}} required>
            <option value="">Select Movie</option>
            {movies.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label>Date</label>
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
