import { Link } from 'react-router-dom';

export default function Specialties() {
  return (
    <section className="section-white">
      <div className="container">
        <h2>Nos Spécialités</h2>
        <div className="special-grid">
          <article className="special-card reveal">
            <h3>Glace Large</h3>
            <p>Notre glace roulée signature en grand format.</p>
            <strong>8DT</strong>
          </article>
          <article className="special-card reveal">
            <h3>Jwajem Spécial ASH</h3>
            <p>La recette maison la plus généreuse et la plus iconique.</p>
            <strong>19DT</strong>
          </article>
          <article className="special-card reveal">
            <h3>Saint-Sébastien</h3>
            <p>Fondant, crémeux, irrésistible — une vraie pause plaisir.</p>
            <strong>11DT</strong>
          </article>
        </div>
        <div className="center mt-lg">
          <Link to="/menu" className="btn btn-secondary">Voir tout le menu</Link>
        </div>
      </div>
    </section>
  );
}
