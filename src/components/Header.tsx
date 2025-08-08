import React from 'react';
import { DatosPersonales } from '../types';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Header.css';

interface HeaderProps {
  datosPersonales: DatosPersonales;
}

const Header: React.FC<HeaderProps> = ({ datosPersonales }) => {
  return (
    <header className="cv-header">
      <div className="header-content">
        <div className="header-left">
          <div className="profile-image">
            <img src={datosPersonales.foto} alt={`${datosPersonales.nombre} ${datosPersonales.apellido}`} />
          </div>
          <div className="profile-info">
            <h1 className="name">{datosPersonales.nombre} {datosPersonales.apellido}</h1>
            <h2 className="title">{datosPersonales.titulo}</h2>
            <p className="location">
              <FaMapMarkerAlt /> {datosPersonales.ubicacion}
            </p>
          </div>
        </div>
        
        <div className="header-right">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope />
              <span>nelson@byads.co</span>
            </div>
            <div className="contact-item">
              <FaPhone />
              <span>+57 319 242 9257</span>
            </div>
            <div className="contact-item">
              <FaLinkedin />
              <span>https://www.linkedin.com/in/nelson-franco89/</span>
            </div>
            <div className="contact-item">
              <FaGithub />
              <span>github.com/nelsonbyads </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="summary">
        <p>{datosPersonales.resumen}</p>
      </div>
    </header>
  );
};

export default Header; 