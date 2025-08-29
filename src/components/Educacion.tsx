import React from 'react';
import { Educacion as EducacionType } from '../types';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import './Educacion.css';

interface EducacionProps {
  educacion: EducacionType[];
}

const Educacion: React.FC<EducacionProps> = ({ educacion }) => {
  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split("-");
    const date = new Date(Date.UTC(Number(year), Number(month) - 1, 1));
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      timeZone: "UTC" // evita corrimiento
    });
  };
  
  

  return (
    <section className="educacion-section">
      <h2 className="section-title">Educación</h2>
      <div className="educacion-list">
        {educacion.map((edu) => (
          <div key={edu.id} className="educacion-item">
            <div className="educacion-header">
              <div className="educacion-icon">
                <FaGraduationCap />
              </div>
              <div className="educacion-content">
                <h3 className="titulo">{edu.titulo}</h3>
                <h4 className="institucion">{edu.institucion}</h4>
                <div className="educacion-fechas">
                  <span className="fecha">
                    <FaCalendarAlt />
                    {formatDate(edu.fechaInicio)} - {edu.fechaFin ? formatDate(edu.fechaFin) : 'En Curso'}
                  </span>
                </div>
                {edu.descripcion && (
                  <p className="descripcion">{edu.descripcion}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Educacion; 