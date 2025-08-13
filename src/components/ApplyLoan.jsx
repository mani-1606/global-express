import React, { useState } from 'react';
import PasswordPrompt from './PasswordPrompt';
import './HomeAmex.css';

const loanTypes = [
  'Personal Loan',
  'Home Loan / Mortgage',
  'Auto Loan',
  'Student / Education Loan',
  'Business Loan',
  'Agriculture Loan',
  'Debt Consolidation Loan',
];

const currencies = [
  { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
  { code: 'ZAR', name: 'South African Rand', symbol: 'R' },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
  { code: 'RUB', name: 'Russian Ruble', symbol: '₽' },
  { code: 'MXN', name: 'Mexican Peso', symbol: '$' },
  { code: 'KRW', name: 'South Korean Won', symbol: '₩' },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
  { code: 'SAR', name: 'Saudi Riyal', symbol: 'ر.س' },
  { code: 'TRY', name: 'Turkish Lira', symbol: '₺' },
  { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp' },
  { code: 'THB', name: 'Thai Baht', symbol: '฿' },
];

const ApplyLoan = () => {
  const [selectedLoan, setSelectedLoan] = useState(loanTypes[0]);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState(currencies[0].code);
  const [months, setMonths] = useState('');
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
    const selectedCurrency = currencies.find(c => c.code === currency);
    alert(`Applied for ${selectedLoan} of ${selectedCurrency.symbol}${amount} (${selectedCurrency.name}) to be cleared in ${months} months.`);
  }

  function handlePasswordCancel() {
    setShowPassword(false);
    setPendingSubmit(false);
  }
  return (
    <div className="apply-loan-card" style={{ maxWidth: 400, margin: '3rem auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px rgba(0,40,120,0.10)', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Apply for a Loan</h2>
  <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1.2rem' }}>
          <label htmlFor="loanType" style={{ fontWeight: 500 }}>Select Loan Type</label>
          <select
            id="loanType"
            name="loanType"
            value={selectedLoan}
            onChange={e => setSelectedLoan(e.target.value)}
            style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }}
          >
            {loanTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <label htmlFor="currency" style={{ fontWeight: 500 }}>Currency</label>
          <select
            id="currency"
            name="currency"
            value={currency}
            onChange={e => setCurrency(e.target.value)}
            style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }}
          >
            {currencies.map(c => (
              <option key={c.code} value={c.code}>{c.name} ({c.symbol})</option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="amount" style={{ fontWeight: 500 }}>Loan Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }}
            placeholder="Enter amount"
            min="0"
            required
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="months" style={{ fontWeight: 500 }}>Months to Clear Loan</label>
          <input
            type="number"
            id="months"
            name="months"
            value={months}
            onChange={e => setMonths(e.target.value)}
            style={{ width: '100%', padding: '0.6rem', borderRadius: 8, border: '1px solid #ccc', marginTop: '0.3rem', background: '#fff', color: '#222' }}
            placeholder="Enter number of months"
            min="1"
            required
          />
        </div>
        <button className="amex-card-btn" type="submit" style={{ width: '100%' }}>Apply</button>
      </form>
      {showPassword && pendingSubmit && (
        <PasswordPrompt onConfirm={handlePasswordConfirm} onCancel={handlePasswordCancel} />
      )}
    </div>
  );
};

export default ApplyLoan;
