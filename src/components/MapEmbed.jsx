export default function MapEmbed() {
  return (
    <div className="container map-wrap reveal">
      <iframe
        src="https://www.google.com/maps?q=33.875436,10.8674224&z=17&output=embed"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Localisation ASHROLLS sur Google Maps"
      />
    </div>
  );
}
