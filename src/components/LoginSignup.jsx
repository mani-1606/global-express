import React, { useState } from 'react';
import './HomeAmex.css';

const LoginSignup = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: 'India',
    phone: '',
    aadhaar: '',
    pan: '',
    greenCard: ''
  });
  const [signupMode, setSignupMode] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    alert('Login clicked!');
  };
  const handleSignup = (e) => {
    e.preventDefault();
    // Add signup logic here
    alert('Signup clicked!');
  };
  return (
    <div className="login-signup-card" style={{ maxWidth: 350, margin: '3rem auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px rgba(0,40,120,0.10)', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Login / Signup</h2>
      <form>
        {!signupMode ? (
          <>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="username" style={{ fontWeight: 500 }}>Email or Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }}
                placeholder="Enter email or username"
                autoComplete="username"
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="password" style={{ fontWeight: 500 }}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }}
                placeholder="Enter password"
                autoComplete="current-password"
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button className="amex-card-btn" style={{ width: '48%' }} onClick={handleLogin}>Login</button>
              <button className="amex-card-btn" style={{ width: '48%' }} onClick={() => setSignupMode(true)}>Signup</button>
            </div>
          </>
        ) : (
          <>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="username" style={{ fontWeight: 500 }}>Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }}
                placeholder="Enter username"
                autoComplete="username"
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email" style={{ fontWeight: 500 }}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }}
                placeholder="Enter email address"
                autoComplete="email"
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="country" style={{ fontWeight: 500 }}>Country</label>
              <select
                id="country"
                name="country"
                value={form.country}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }}
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="phone" style={{ fontWeight: 500 }}>Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }}
                placeholder="Enter phone number"
                autoComplete="tel"
              />
            </div>
            {form.country === 'India' ? (
              <>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="aadhaar" style={{ fontWeight: 500 }}>Aadhaar Number</label>
                  <input
                    type="text"
                    id="aadhaar"
                    name="aadhaar"
                    value={form.aadhaar}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }}
                    placeholder="Enter Aadhaar number"
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="pan" style={{ fontWeight: 500 }}>PAN Number</label>
                  <input
                    type="text"
                    id="pan"
                    name="pan"
                    value={form.pan}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }}
                    placeholder="Enter PAN number"
                  />
                </div>
              </>
            ) : (
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="greenCard" style={{ fontWeight: 500 }}>Green Card Number</label>
                <input
                  type="text"
                  id="greenCard"
                  name="greenCard"
                  value={form.greenCard}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }}
                  placeholder="Enter Green Card number"
                />
              </div>
            )}
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="password" style={{ fontWeight: 500 }}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }}
                placeholder="Enter password"
                autoComplete="new-password"
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="confirmPassword" style={{ fontWeight: 500 }}>Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }}
                placeholder="Confirm password"
                autoComplete="new-password"
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button className="amex-card-btn" style={{ width: '48%' }} onClick={handleSignup}>Signup</button>
              <button className="amex-card-btn" style={{ width: '48%' }} onClick={() => setSignupMode(false)}>Back to Login</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default LoginSignup;
