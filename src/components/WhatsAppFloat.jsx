export default function WhatsAppFloat({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="whatsapp-float"
      aria-label="Nous appeler"
    >
      <span>📞</span>
      <em className="tooltip">Contactez-nous</em>
    </button>
  );
}
