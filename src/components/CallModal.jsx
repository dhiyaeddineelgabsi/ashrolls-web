import { useState } from 'react';

const PHONES = [
  { value: '21620229964', label: '+216 20 229 964' },
  { value: '21692950656', label: '+216 92 950 656' },
];

export default function CallModal({ isOpen, onClose }) {
  const [selectedPhone, setSelectedPhone] = useState(PHONES[0].value);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay show" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <button className="close-modal" onClick={onClose}>✕</button>
        <h3>Choisissez un numero</h3>
        <div className="phone-chooser">
          {PHONES.map((phone) => (
            <label key={phone.value} className="phone-option">
              <input
                type="radio"
                name="selectedPhone"
                value={phone.value}
                checked={selectedPhone === phone.value}
                onChange={() => setSelectedPhone(phone.value)}
              />
              <span>{phone.label}</span>
            </label>
          ))}
        </div>
        <div className="modal-actions">
          <a href={`tel:+${selectedPhone}`} className="btn btn-secondary">Appeler</a>
          <a href={`https://wa.me/${selectedPhone}`} target="_blank" rel="noopener" className="btn btn-primary">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
