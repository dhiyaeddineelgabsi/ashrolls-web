import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero decorative-bg">
      <div className="container hero-content">
        <h1>Roll It Your Way!</h1>
        <p>La gelaterie artisanale qui rafraîchit Djerba 🍦 Créations fun, fraîches et personnalisables à Houmet Souk.</p>
        <Link to="/menu" className="btn btn-primary">Découvrir notre menu</Link>
      </div>
      <span className="float-emoji e1">🍦</span>
      <span className="float-emoji e2">🍓</span>
      <span className="float-emoji e3">❄️</span>
    </section>
  );
}
