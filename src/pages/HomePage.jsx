import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import Specialties from '../components/Specialties';
import useScrollReveal from '../hooks/useScrollReveal';

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Specialties />
      </main>
      <a href="https://wa.me/21620229964" target="_blank" rel="noopener" className="whatsapp-float" aria-label="WhatsApp">
        <span>💬</span>
        <em className="tooltip">Contactez-nous</em>
      </a>
      <Footer />
    </>
  );
}
