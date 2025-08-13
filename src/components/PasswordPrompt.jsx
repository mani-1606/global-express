import React, { useState } from 'react';

export default function PasswordPrompt({ onConfirm, onCancel }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!password) {
      setError('Password required');
      return;
    }
    // Simulate password check (replace with real auth logic)
    if (password === '1234') {
      setError('');
      onConfirm();
    } else {
      setError('Incorrect password');
    }
  }

  return (
    <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.3)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:9999}}>
      <form onSubmit={handleSubmit} style={{background:'#fff',padding:'2rem',borderRadius:12,minWidth:320,boxShadow:'0 2px 12px rgba(0,0,0,0.12)'}}>
        <h3>Enter Password</h3>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" style={{width:'100%',padding:'0.7rem',margin:'1rem 0',borderRadius:8,border:'1px solid #ccc'}} />
        {error && <div style={{color:'red',marginBottom:'1rem'}}>{error}</div>}
        <div style={{display:'flex',gap:'1rem'}}>
          <button type="submit" style={{padding:'0.7rem 1.5rem',borderRadius:8,background:'#0070f3',color:'#fff',border:'none'}}>Confirm</button>
          <button type="button" style={{padding:'0.7rem 1.5rem',borderRadius:8,background:'#eee',border:'none'}} onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
