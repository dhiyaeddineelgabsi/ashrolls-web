export default function MenuFilter({ categories, activeFilter, onFilter }) {
  return (
    <div className="filter-bar">
      {categories.map((cat) => (
        <button
          key={cat.category}
          className={`filter-btn${activeFilter === cat.category ? ' active' : ''}`}
          onClick={() => onFilter(cat.category)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
