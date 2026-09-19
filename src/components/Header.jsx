import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [status, setStatus] = useState({ open: false, text: 'Vérification...' });

  useEffect(() => {
    function updateStatus() {
      const now = new Date();
      const tunisiaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Tunis' }));
      const hour = tunisiaTime.getHours();
      const minute = tunisiaTime.getMinutes();
      const totalMinutes = hour * 60 + minute;
      const isOpen = totalMinutes >= 720 && totalMinutes < 1440;
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
        <nav className="nav" id="nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Accueil
          </NavLink>
          <NavLink to="/menu" className={({ isActive }) => (isActive ? 'active' : '')}>
            Menu
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
        </nav>
        <span
          className={`status-badge ${status.open ? 'open' : 'closed'}`}
          title={status.text}
        >
          <span className="status-text">{status.text}</span>
          <span className="status-icon" aria-hidden="true">📞</span>
        </span>
      </div>
    </header>
  );
}
