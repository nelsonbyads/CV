import React from 'react';
import { Experiencia as ExperienciaType } from '../types';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experiencia.css';

interface ExperienciaProps {
  experiencia: ExperienciaType[];
}

const Experiencia: React.FC<ExperienciaProps> = ({ experiencia }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <section className="experiencia-section">
      <h2 className="section-title">Experiencia Laboral</h2>
      <div className="experiencia-list">
        {experiencia.map((exp) => (
          <div key={exp.id} className="experiencia-item">
            <div className="experiencia-header">
              <div className="experiencia-title">
                <h3 className="puesto">{exp.puesto}</h3>
                <h4 className="empresa">{exp.empresa}</h4>
              </div>
              <div className="experiencia-fechas">
                <span className="fecha">
                  <FaCalendarAlt />
                  {formatDate(exp.fechaInicio)} - {exp.fechaFin ? formatDate(exp.fechaFin) : 'Presente'}
                </span>
              </div>
            </div>
            
            <div className="experiencia-descripcion">
              <ul>
                {exp.descripcion.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
            
            <div className="experiencia-tecnologias">
              <h5>Tecnologías utilizadas:</h5>
              <div className="tecnologias-tags">
                {exp.tecnologias.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiencia; 