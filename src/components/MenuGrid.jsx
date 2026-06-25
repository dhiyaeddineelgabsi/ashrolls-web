import ProductCard from './ProductCard';

export default function MenuGrid({ categories, activeFilter }) {
  const activeCategory = categories.find((c) => c.category === activeFilter);
  const items = activeCategory ? activeCategory.items : [];

  return (
    <div className="products-grid">
      {items.map((item, idx) => (
        <ProductCard key={idx} item={item} />
      ))}
    </div>
  );
}
