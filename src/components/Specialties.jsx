import { Link } from 'react-router-dom';

export default function Specialties() {
  return (
    <section className="section-white">
      <div className="container">
        <h2>Nos Spécialités</h2>
        <div className="special-grid">
          <article className="special-card reveal">
            <h3>Ice Roll Large Cup</h3>
            <p>Notre glace roulée signature en grand format.</p>
            <strong>8DT</strong>
          </article>
          <article className="special-card reveal">
            <h3>Jwajem Spéciale Ash</h3>
            <p>La recette maison la plus généreuse et la plus iconique.</p>
            <strong>18DT</strong>
          </article>
          <article className="special-card reveal">
            <h3>Cheesecake San Sebastien</h3>
            <p>Fondant, crémeux, irrésistible — une vraie pause plaisir.</p>
            <strong>10DT</strong>
          </article>
        </div>
        <div className="center mt-lg">
          <Link to="/menu" className="btn btn-secondary">Voir tout le menu</Link>
        </div>
      </div>
    </section>
  );
}
