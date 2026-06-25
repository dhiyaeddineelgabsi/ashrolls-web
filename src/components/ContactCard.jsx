export default function ContactCard({ onCallClick }) {
  return (
    <section className="contact-card reveal">
      <h2>Infos pratiques</h2>
      <p><strong>Adresse :</strong> Ashrolls, Houmet Souk, Djerba, Tunisie</p>

      <div className="opening-box">
        <h3>Horaires d'ouverture</h3>
        <p>Tous les jours (Dimanche au Samedi) : 13h00 – 00h00</p>
        <small>Les horaires peuvent varier les jours fériés</small>
      </div>

      <div className="contact-actions">
        <button className="btn btn-secondary" onClick={onCallClick}>📞 Nous appeler</button>
        <a href="https://maps.app.goo.gl/465KFEmMxDSEcBDW9" target="_blank" rel="noopener" className="btn btn-primary">📍 Nous trouver</a>
      </div>

      <div className="socials contact-socials mt-md">
        <a href="https://www.instagram.com/_ashrolls_/?hl=fr">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">TikTok</a>
      </div>
    </section>
  );
}
