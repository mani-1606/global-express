import React, { useState } from 'react';
import PasswordPrompt from '../PasswordPrompt';

const allCountries = [
  'India', 'USA', 'UK', 'Australia', 'Canada', 'Germany', 'France', 'Japan', 'China', 'Brazil', 'Russia', 'Italy', 'Spain', 'Singapore', 'UAE', 'Turkey', 'Netherlands', 'Switzerland', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Mexico', 'Argentina', 'New Zealand', 'Thailand', 'Malaysia', 'Indonesia', 'Saudi Arabia', 'Egypt', 'Greece', 'Portugal', 'Belgium', 'Poland', 'South Korea', 'Vietnam', 'Philippines', 'Ireland', 'Austria', 'Czech Republic', 'Hungary', 'Romania', 'Israel', 'Chile', 'Colombia', 'Peru', 'Pakistan', 'Bangladesh', 'Nigeria', 'Kenya', 'Morocco', 'Qatar', 'Kuwait', 'Oman', 'Sri Lanka', 'Nepal', 'Bhutan', 'Maldives', 'Iceland', 'Luxembourg', 'Slovakia', 'Slovenia', 'Estonia', 'Latvia', 'Lithuania', 'Croatia', 'Bulgaria', 'Serbia', 'Ukraine', 'Belarus', 'Georgia', 'Armenia', 'Azerbaijan', 'Kazakhstan', 'Uzbekistan', 'Turkmenistan', 'Mongolia', 'Cambodia', 'Laos', 'Myanmar', 'Afghanistan', 'Iraq', 'Iran', 'Jordan', 'Lebanon', 'Syria', 'Yemen', 'Libya', 'Tunisia', 'Algeria', 'Ethiopia', 'Sudan', 'Ghana', 'Ivory Coast', 'Senegal', 'Tanzania', 'Uganda', 'Zimbabwe', 'Zambia', 'Botswana', 'Namibia', 'Mozambique', 'Angola', 'Cameroon', 'Congo', 'DR Congo', 'Madagascar', 'Rwanda', 'Burundi', 'Malawi', 'Somalia', 'South Sudan', 'Sierra Leone', 'Liberia', 'Gabon', 'Equatorial Guinea', 'Mauritius', 'Seychelles', 'Cape Verde', 'Comoros', 'Djibouti', 'Eritrea', 'Gambia', 'Guinea', 'Guinea-Bissau', 'Lesotho', 'Mauritania', 'Niger', 'Sao Tome and Principe', 'Swaziland', 'Togo', 'Chad', 'Central African Republic', 'Benin', 'Burkina Faso', 'Mali', 'Monaco', 'San Marino', 'Vatican City', 'Andorra', 'Liechtenstein', 'Montenegro', 'North Macedonia', 'Kosovo', 'Albania', 'Bosnia and Herzegovina', 'Moldova'
];

const airports = {
  India: ['Delhi (DEL)', 'Mumbai (BOM)', 'Bangalore (BLR)', 'Chennai (MAA)', 'Hyderabad (HYD)', 'Kolkata (CCU)', 'Goa (GOI)'],
  USA: ['New York (JFK)', 'Los Angeles (LAX)', 'Chicago (ORD)', 'San Francisco (SFO)', 'Dallas (DFW)', 'Miami (MIA)'],
  UK: ['London Heathrow (LHR)', 'London Gatwick (LGW)', 'Manchester (MAN)', 'Edinburgh (EDI)'],
  Australia: ['Sydney (SYD)', 'Melbourne (MEL)', 'Brisbane (BNE)', 'Perth (PER)'],
  Canada: ['Toronto (YYZ)', 'Vancouver (YVR)', 'Montreal (YUL)', 'Calgary (YYC)'],
  Germany: ['Frankfurt (FRA)', 'Munich (MUC)', 'Berlin (BER)'],
  France: ['Paris Charles de Gaulle (CDG)', 'Paris Orly (ORY)', 'Nice (NCE)'],
  Japan: ['Tokyo Narita (NRT)', 'Tokyo Haneda (HND)', 'Osaka (KIX)'],
  China: ['Beijing (PEK)', 'Shanghai (PVG)', 'Guangzhou (CAN)'],
  Brazil: ['Sao Paulo (GRU)', 'Rio de Janeiro (GIG)', 'Brasilia (BSB)'],
  // ...existing code...
};
const countryList = allCountries;

export default function Flights() {
  const [form, setForm] = useState({
    fromCountry: countryList[0],
    toCountry: countryList[1],
    fromAirport: '',
    toAirport: '',
    date: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [pendingSubmit, setPendingSubmit] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'fromCountry') {
      setForm({
        ...form,
        fromCountry: value,
        fromAirport: '',
      });
    } else if (name === 'toCountry') {
      setForm({
        ...form,
        toCountry: value,
        toAirport: '',
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
    alert(`Flight booked from ${form.fromAirport} (${form.fromCountry}) to ${form.toAirport} (${form.toCountry}) on ${form.date}`);
  }

  function handlePasswordCancel() {
    setShowPassword(false);
    setPendingSubmit(false);
  }

  return (
    <div style={{padding:'2rem'}}>
      <h2>Book Flights</h2>
      <form onSubmit={handleSubmit} style={{maxWidth:400,margin:'2rem auto',background:'#fff',padding:'2rem',borderRadius:12,boxShadow:'0 2px 12px rgba(0,0,0,0.10)'}}>
        <div style={{marginBottom:'1rem'}}>
          <label>From Country</label>
          <select name="fromCountry" value={form.fromCountry} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}}>
            {countryList.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label>From Airport</label>
          <select name="fromAirport" value={form.fromAirport} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}} required>
            <option value="">Select Airport</option>
            {(airports[form.fromCountry] || ['No airports available']).map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label>To Country</label>
          <select name="toCountry" value={form.toCountry} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}}>
            {countryList.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label>To Airport</label>
          <select name="toAirport" value={form.toAirport} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}} required>
            <option value="">Select Airport</option>
            {(airports[form.toCountry] || ['No airports available']).map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label>Date of Travel</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid #ccc',marginTop:'0.3rem',background:'#f9f9f9',color:'#222'}} required />
        </div>
        <button type="submit" style={{padding:'0.7rem 1.5rem',borderRadius:8,background:'#0070f3',color:'#fff',border:'none',width:'100%'}}>Book Flight</button>
      </form>
      {showPassword && pendingSubmit && (
        <PasswordPrompt onConfirm={handlePasswordConfirm} onCancel={handlePasswordCancel} />
      )}
    </div>
  );
}
