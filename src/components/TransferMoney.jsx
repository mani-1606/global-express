import React, { useState } from 'react';
import PasswordPrompt from './PasswordPrompt';

const currencies = [
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', rate: 1 },
  { code: 'USD', name: 'US Dollar', symbol: '$', rate: 0.012 },
  { code: 'EUR', name: 'Euro', symbol: '€', rate: 0.011 },
  { code: 'GBP', name: 'British Pound', symbol: '£', rate: 0.0095 },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', rate: 1.7 },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', rate: 0.018 },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', rate: 0.016 },
];

const TransferMoney = () => {
  const [form, setForm] = useState({
    recipientName: '',
    bankName: '',
    branch: '',
    accountNumber: '',
    iban: '',
    swift: '',
    routing: '',
    purpose: '',
    amount: '',
    currency: 'INR',
    convertTo: 'USD',
    convertedAmount: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConvert = (e) => {
    e.preventDefault();
    const fromRate = currencies.find(c => c.code === form.currency).rate;
    const toRate = currencies.find(c => c.code === form.convertTo).rate;
    const converted = ((parseFloat(form.amount) || 0) * toRate / fromRate).toFixed(2);
    setForm({ ...form, convertedAmount: converted });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [pendingSubmit, setPendingSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPassword(true);
    setPendingSubmit(true);
  };

  function handlePasswordConfirm() {
    setShowPassword(false);
    setPendingSubmit(false);
    alert('Transfer submitted!');
  }

  function handlePasswordCancel() {
    setShowPassword(false);
    setPendingSubmit(false);
  }

  return (
    <div className="transfer-money-card" style={{ maxWidth: 500, margin: '3rem auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px rgba(0,40,120,0.10)', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Transfer Money</h2>
  <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 500 }}>Recipient’s Full Name</label>
          <input type="text" name="recipientName" value={form.recipientName} onChange={handleChange} style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }} placeholder="Full name as per bank records" required />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 500 }}>Bank Name</label>
          <input type="text" name="bankName" value={form.bankName} onChange={handleChange} style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }} placeholder="Bank name" required />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 500 }}>Branch (if needed)</label>
          <input type="text" name="branch" value={form.branch} onChange={handleChange} style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }} placeholder="Branch name" />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 500 }}>Account Number / IBAN</label>
          <input type="text" name="accountNumber" value={form.accountNumber} onChange={handleChange} style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }} placeholder="Account number or IBAN" required />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 500 }}>SWIFT/BIC Code (for international)</label>
          <input type="text" name="swift" value={form.swift} onChange={handleChange} style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }} placeholder="SWIFT/BIC code" />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 500 }}>Routing Number (for US domestic)</label>
          <input type="text" name="routing" value={form.routing} onChange={handleChange} style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }} placeholder="Routing number" />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 500 }}>Purpose of Transfer</label>
          <input type="text" name="purpose" value={form.purpose} onChange={handleChange} style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }} placeholder="Purpose (e.g. tuition, family, business)" />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ fontWeight: 500 }}>Amount</label>
          <input type="number" name="amount" value={form.amount} onChange={handleChange} style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }} placeholder="Enter amount" min="0" required />
        </div>
        <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 500 }}>Currency</label>
            <select name="currency" value={form.currency} onChange={handleChange} style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }}>
              {currencies.map(c => (
                <option key={c.code} value={c.code}>{c.name} ({c.symbol})</option>
              ))}
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 500 }}>Convert To</label>
            <select name="convertTo" value={form.convertTo} onChange={handleChange} style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }}>
              {currencies.map(c => (
                <option key={c.code} value={c.code}>{c.name} ({c.symbol})</option>
              ))}
            </select>
          </div>
        </div>
        <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button className="amex-card-btn" type="button" style={{ width: '50%' }} onClick={handleConvert}>Convert</button>
          <input type="text" value={form.convertedAmount ? `${form.convertedAmount} ${form.convertTo}` : ''} readOnly style={{ width: '50%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', background: '#f7fafd', color: '#222' }} placeholder="Converted amount" />
        </div>
        <button className="amex-card-btn" type="submit" style={{ width: '100%' }}>Submit Transfer</button>
      </form>
      {showPassword && pendingSubmit && (
        <PasswordPrompt onConfirm={handlePasswordConfirm} onCancel={handlePasswordCancel} />
      )}
    </div>
  );
};

export default TransferMoney;
