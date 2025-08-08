import React from 'react';
import { Habilidad } from '../types';
import './Habilidades.css';

interface HabilidadesProps {
  habilidades: Habilidad[];
}

const Habilidades: React.FC<HabilidadesProps> = ({ habilidades }) => {
  const categorias = {
    'frontend': 'Frontend',
    'backend': 'Backend',
    'database': 'Base de Datos',
    'tools': 'Herramientas',
    'soft-skills': 'Habilidades Blandas'
  };

  const habilidadesPorCategoria = habilidades.reduce((acc, habilidad) => {
    if (!acc[habilidad.categoria]) {
      acc[habilidad.categoria] = [];
    }
    acc[habilidad.categoria].push(habilidad);
    return acc;
  }, {} as Record<string, Habilidad[]>);

  const renderStars = (nivel: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < nivel ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="habilidades-section">
      <h2 className="section-title">Habilidades</h2>
      <div className="habilidades-content">
        {Object.entries(habilidadesPorCategoria).map(([categoria, habs]) => (
          <div key={categoria} className="categoria-habilidades">
            <h3 className="categoria-titulo">{categorias[categoria as keyof typeof categorias]}</h3>
            <div className="habilidades-list">
              {habs.map((habilidad) => (
                <div key={habilidad.id} className="habilidad-item">
                  <div className="habilidad-info">
                    <span className="habilidad-nombre">{habilidad.nombre}</span>
                    <div className="habilidad-nivel">
                      {renderStars(habilidad.nivel)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades; 