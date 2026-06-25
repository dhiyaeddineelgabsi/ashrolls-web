import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuFilter from '../components/MenuFilter';
import MenuGrid from '../components/MenuGrid';
import menuData from '../data/menuData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState(menuData[0].category);
  useScrollReveal();

  return (
    <>
      <Header />
      <main className="section-light decorative-bg">
        <div className="container">
          <h1 className="page-title">Notre Menu</h1>
          <MenuFilter
            categories={menuData}
            activeFilter={activeFilter}
            onFilter={setActiveFilter}
          />
          <MenuGrid categories={menuData} activeFilter={activeFilter} />
        </div>
      </main>
      <a href="https://wa.me/21620229964" target="_blank" rel="noopener" className="whatsapp-float" aria-label="WhatsApp">
        <span>💬</span>
        <em className="tooltip">Contactez-nous</em>
      </a>
      <Footer />
    </>
  );
}
