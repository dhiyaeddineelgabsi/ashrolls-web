import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState({ open: false, text: 'Vérification...' });

  useEffect(() => {
    function updateStatus() {
      const now = new Date();
      const tunisiaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Tunis' }));
      const hour = tunisiaTime.getHours();
      const minute = tunisiaTime.getMinutes();
      const totalMinutes = hour * 60 + minute;
      const isOpen = totalMinutes >= 780 && totalMinutes < 1440;
      setStatus({
        open: isOpen,
        text: isOpen ? '🟢 Ouvert maintenant' : '🔴 Fermé',
      });
    }
    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <NavLink className="logo" to="/">ASHROLLS</NavLink>
        <button
          className="hamburger"
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <nav className={`nav${menuOpen ? ' show' : ''}`} id="nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>
            Accueil
          </NavLink>
          <NavLink to="/menu" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>
            Menu
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>
        <span className={`status-badge ${status.open ? 'open' : 'closed'}`}>
          {status.text}
        </span>
      </div>
    </header>
  );
}
