import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import CallModal from '../components/CallModal';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import Specialties from '../components/Specialties';
import useScrollReveal from '../hooks/useScrollReveal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Specialties />
      </main>
      <WhatsAppFloat onClick={() => setModalOpen(true)} />
      <CallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Footer />
    </>
  );
}
