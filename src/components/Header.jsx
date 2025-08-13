



import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/global-express-logo.svg';
import './Header.css';


const navItems = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/transfer', label: 'Transfer' },
  { to: '/apply-loan', label: 'Loan' },
  { to: '/refer', label: 'Refer' },
  { to: '/login', label: 'Login' },
];

const Header = () => {
  const location = useLocation();
  return (
    <header className="header phonepe-header">
      <div className="logo">
        <img src={logo} alt="Global Express Logo" className="logo-svg" />
        <span>Global Express</span>
      </div>
      <nav className="nav-bar">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={
              'nav-link' + (location.pathname === item.to ? ' active' : '')
            }
          >
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
