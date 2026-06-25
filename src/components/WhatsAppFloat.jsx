export default function WhatsAppFloat({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="whatsapp-float"
      aria-label="WhatsApp"
    >
      <span>💬</span>
      <em className="tooltip">Contactez-nous</em>
    </button>
  );
}
