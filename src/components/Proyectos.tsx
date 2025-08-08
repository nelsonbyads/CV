import React from 'react';
import { Proyecto as ProyectoType } from '../types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Proyectos.css';

interface ProyectosProps {
  proyectos: ProyectoType[];
}

const Proyectos: React.FC<ProyectosProps> = ({ proyectos }) => {
  return (
    <section className="proyectos-section">
      <h2 className="section-title">Proyectos</h2>
      <div className="proyectos-grid">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="proyecto-card">
            <div className="proyecto-header">
              <h3 className="proyecto-nombre">{proyecto.nombre}</h3>
              <div className="proyecto-links">
                {proyecto.github && (
                  <a href={proyecto.github} target="_blank" rel="noopener noreferrer" className="proyecto-link">
                    <FaGithub />
                  </a>
                )}
                {proyecto.url && (
                  <a href={proyecto.url} target="_blank" rel="noopener noreferrer" className="proyecto-link">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
            
            <p className="proyecto-descripcion">{proyecto.descripcion}</p>
            
            <div className="proyecto-tecnologias">
              {proyecto.tecnologias.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos; 