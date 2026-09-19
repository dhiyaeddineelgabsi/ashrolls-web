export default function MenuFilter({ categories, activeFilter, onFilter }) {
  return (
    <div className="filter-bar chalk-filter">
      {categories.map((cat) => (
        <button
          key={cat.category}
          className={`filter-btn cat-${cat.theme}${activeFilter === cat.category ? ' active' : ''}`}
          onClick={() => onFilter(cat.category)}
        >
          <span className="filter-emoji">{cat.emoji}</span> {cat.label}
        </button>
      ))}
    </div>
  );
}
