



import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../assets/global-express-logo.svg';
import './Header.css';


const navItems = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/transfer', label: 'Transfer' },
  { to: '/apply-loan', label: 'Loan' },
  { to: '/refer', label: 'Refer' },
  { to: '/about', label: 'About' },
  { to: '/login', label: 'Login' },
];

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 600;

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <header className="header phonepe-header">
      <div className="logo">
        <img src={logo} alt="Global Express Logo" className="logo-svg" />
        <span>Global Express</span>
      </div>
      <div className="menu-toggle" onClick={() => setMenuOpen((v) => !v)}>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </div>
      <nav className={"nav-bar" + (isMobile ? (menuOpen ? " open" : " closed") : "") }>
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={
              'nav-link' + (location.pathname === item.to ? ' active' : '')
            }
            onClick={() => setMenuOpen(false)}
          >
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
