export default function ProductCard({ item }) {
  if (item.type === "option") {
    return (
      <article className="option-card reveal">
        <h3>{item.name}</h3>
        {item.description && <p>{item.description}</p>}
        <span className="option-badge">Inclus</span>
      </article>
    );
  }

  return (
    <article className="product-card reveal">
      <div className="img-placeholder">
        🍦<span>Photo à venir</span>
      </div>
      <h3>{item.name}</h3>
      {item.description && <p>{item.description}</p>}
      <strong>{item.price}</strong>
      {item.badge && <span className="sup-badge">{item.badge}</span>}
    </article>
  );
}
