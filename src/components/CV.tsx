import React from 'react';
import { cvData } from '../data/cvData';
import Header from './Header';
import Experiencia from './Experiencia';
import Educacion from './Educacion';
import Habilidades from './Habilidades';
import Proyectos from './Proyectos';
import Contacto from './Contacto';
import './CV.css';

const CV: React.FC = () => {
  return (
    <div className="cv-container">
      <div className="cv-content">
        <Header datosPersonales={cvData.datosPersonales} />
        
        <div className="cv-sections">
          <div className="cv-main">
            <Experiencia experiencia={cvData.experiencia} />
            <Educacion educacion={cvData.educacion} />
            <Proyectos proyectos={cvData.proyectos} />
          </div>
          
          <div className="cv-sidebar">
            <Habilidades habilidades={cvData.habilidades} />
            <Contacto contacto={cvData.contacto} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV; 