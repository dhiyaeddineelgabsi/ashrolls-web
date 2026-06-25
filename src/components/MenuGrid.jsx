import ProductCard from './ProductCard';

export default function MenuGrid({ categories, activeFilter }) {
  const activeCategory = categories.find((c) => c.category === activeFilter);
  const items = activeCategory ? activeCategory.items : [];
  const products = items.filter((i) => i.type !== "option");
  const options = items.filter((i) => i.type === "option");

  return (
    <>
      <div className="products-grid">
        {products.map((item, idx) => (
          <ProductCard key={idx} item={item} />
        ))}
      </div>
      {options.length > 0 && (
        <div className="options-section">
          <h3 className="options-title">✓ Inclus avec votre commande</h3>
          <div className="options-grid">
            {options.map((item, idx) => (
              <ProductCard key={idx} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
