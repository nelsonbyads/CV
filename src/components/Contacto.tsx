import React from 'react';
import { Contacto as ContactoType } from '../types';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import './Contacto.css';

interface ContactoProps {
  contacto: ContactoType;
}

const Contacto: React.FC<ContactoProps> = ({ contacto }) => {
  const handleContactClick = (href: string, type: string) => {
    // Prevenir comportamiento por defecto y manejar la navegación
    if (type === 'email' && contacto.email) {
      window.location.href = `mailto:${contacto.email}`;
    } else if (type === 'phone' && contacto.telefono) {
      window.location.href = `tel:${contacto.telefono}`;
    } else if (href) {
      // Abrir en nueva pestaña para enlaces externos
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const contactItems = [
    { 
      icon: FaEnvelope, 
      label: 'Email', 
      value: contacto.email, 
      href: contacto.email ? `mailto:${contacto.email}` : undefined,
      type: 'email'
    },
    { 
      icon: FaPhone, 
      label: 'Teléfono', 
      value: contacto.telefono, 
      href: contacto.telefono ? `tel:${contacto.telefono}` : undefined,
      type: 'phone'
    },
    { 
      icon: FaLinkedin, 
      label: 'LinkedIn', 
      value: 'linkedin.com/in/nelson-franco89', 
      href: contacto.linkedin,
      type: 'link'
    },
    { 
      icon: FaGithub, 
      label: 'GitHub', 
      value: 'github.com/nelsonbyads', 
      href: contacto.github,
      type: 'link'
    },
    { 
      icon: FaGlobe, 
      label: 'Portfolio', 
      value: 'cv-96ev-nelsonbyads-projects.vercel.app', 
      href: contacto.portfolio,
      type: 'link'
    }
  ].filter(item => item.value);

  return (
    <section className="contacto-section">
      <h2 className="section-title">Contacto</h2>
      <div className="contacto-list">
        {contactItems.map((item, index) => (
          <div 
            key={index} 
            className="contacto-item"
            onClick={() => item.href && handleContactClick(item.href, item.type)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                item.href && handleContactClick(item.href, item.type);
              }
            }}
          >
            <div className="contacto-icon">
              <item.icon />
            </div>
            <div className="contacto-info">
              <span className="contacto-label">{item.label}</span>
              <span className="contacto-value">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacto; 