import Drip from './Drip';

function SubSection({ sub }) {
  return (
    <section className="menu-subsection">
      <h3 className="subsection-title">{sub.title}</h3>
      {sub.note && <p className="subsection-note">{sub.note}</p>}

      {sub.items && (
        <div className="chalk-lines">
          {sub.items.map((item, i) => (
            <div className="chalk-line" key={i}>
              <span className="chalk-name">{item.name}</span>
              <span className="chalk-leader" aria-hidden="true" />
              <span className="price-chip">{item.price} DT</span>
            </div>
          ))}
        </div>
      )}

      {sub.options && (
        <div className="chalk-box">
          <span className="chalk-box-badge">inclus</span>
          <div className="chalk-chips">
            {sub.options.map((opt, i) => (
              <span className="chalk-chip" key={i}>{opt}</span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default function MenuGrid({ categories, activeFilter }) {
  const activeCategory = categories.find((c) => c.category === activeFilter);
  if (!activeCategory) return null;

  return (
    <article className={`menu-panel reveal cat-${activeCategory.theme}`}>
      <header className="panel-head">
        <h2 className="panel-title">
          <span className="panel-emoji">{activeCategory.emoji}</span>
          {activeCategory.label}
        </h2>
      </header>
      <Drip />
      <div className="panel-body">
        {activeCategory.subSections.map((sub, i) => (
          <SubSection sub={sub} key={i} />
        ))}
      </div>
    </article>
  );
}
