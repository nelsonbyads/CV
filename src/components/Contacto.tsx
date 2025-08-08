import React from 'react';
import { Contacto as ContactoType } from '../types';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import './Contacto.css';

interface ContactoProps {
  contacto: ContactoType;
}

const Contacto: React.FC<ContactoProps> = ({ contacto }) => {
  const contactItems = [
    { icon: FaEnvelope, label: 'Email', value: contacto.email, href: `mailto:${contacto.email}` },
    { icon: FaPhone, label: 'Teléfono', value: contacto.telefono, href: contacto.telefono ? `tel:${contacto.telefono}` : undefined },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/cristian-garcia', href: contacto.linkedin },
    { icon: FaGithub, label: 'GitHub', value: 'github.com/cristian-garcia', href: contacto.github },
    { icon: FaGlobe, label: 'Portfolio', value: 'cristian-garcia.dev', href: contacto.portfolio }
  ].filter(item => item.value);

  return (
    <section className="contacto-section">
      <h2 className="section-title">Contacto</h2>
      <div className="contacto-list">
        {contactItems.map((item, index) => (
          <div key={index} className="contacto-item">
            <div className="contacto-icon">
              <item.icon />
            </div>
            <div className="contacto-info">
              <span className="contacto-label">{item.label}</span>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="contacto-value">
                  {item.value}
                </a>
              ) : (
                <span className="contacto-value">{item.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacto; 