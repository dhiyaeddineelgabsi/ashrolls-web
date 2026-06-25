import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import ContactCard from '../components/ContactCard';
import CallModal from '../components/CallModal';
import MapEmbed from '../components/MapEmbed';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  useScrollReveal();

  return (
    <>
      <Header />
      <main className="section-white decorative-bg">
        <div className="container contact-grid">
          <ContactCard onCallClick={() => setModalOpen(true)} />
        </div>
        <MapEmbed />
      </main>
      <WhatsAppFloat onClick={() => setModalOpen(true)} />
      <CallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Footer />
    </>
  );
}
