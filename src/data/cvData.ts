import { CVData } from '../types';

export const cvData: CVData = {
  datosPersonales: {
    nombre: "Nelson Leon",
    apellido: "Franco González",
    titulo: "Analista de datos",
    resumen: "Analista de datos con 3+ años de experiencia en el análisis de datos. Especializado en el análisis de datos y la visualización de datos. Me encanta crear aplicaciones escalables y mantenibles con código limpio y mejores prácticas.",
    ubicacion: "Medellín, Colombia",
    foto: "https://media.licdn.com/dms/image/v2/D4E03AQGBp4gocaHxzQ/profile-displayphoto-shrink_800_800/B4EZNk3bPNG8Ac-/0/1732564071923?e=1757548800&v=beta&t=tI2hcFxvDdFJhPCvaU5LZ80gpdQAZ8_hcNId2mtPD10"
  },
  experiencia: [
    {
      id: 1,
      empresa: "Byads",
      puesto: "Analista de datos",
      fechaInicio: "2024-06",
      fechaFin: "2025-06",
      descripcion: [
        "Analista de datos en Byads, empresa de publicidad digital en Colombia.",
        "Desarrollo de herramientas de análisis de datos para la empresa.",
        "Automatización de procesos de análisis de datos.",
        "Optimización de procesos de análisis de datos."
      ],
      tecnologias: ["SQL", "Power Query", "Power BI", "Tableau", "Google Cloud", "Python", "Excel", "Google Sheets", "Google Data Studio"]
    },
    {
      id: 2,
      empresa: "Konecta BPO",
      puesto: "Analista de Reporting 2",
      fechaInicio: "2013-11",
      fechaFin: "2024-06",
      descripcion: [
        "Analista de datos en Konecta BPO, empresa de outsourcing en Colombia.",
        "Desarrollo de herramientas de análisis de datos para la empresa.",
        "Automatización de procesos de análisis de datos.",
        "Optimización de procesos de análisis de datos.",
        "Analista 2 de Reporting y BI"
      ],
      tecnologias: ["SQL", "Power Query", "Power BI", "Tableau", "Google Cloud", "Python", "Excel", "Google Sheets", "Google Data Studio"]
    }
  ],
  educacion: [
    {
      id: 1,
      institucion: "SENA",
      titulo: "Tecnologo en Gestion Empresarial",
      fechaInicio: "2017",
      fechaFin: "2019",
      descripcion: "Profesional encargado de apoyar la planificación, coordinación y control de las operaciones administrativas, financieras y logísticas de la empresa, asegurando la eficiencia operativa y el cumplimiento de metas de productividad y rentabilidad." 
    },
    {
      id: 2,
      institucion: "Universidad de Medellín",
      titulo: "Diplomado en Power BI",
      fechaInicio: "2024",
      descripcion: "Curso avanzado de Power BI"
    }
  ],
  habilidades: [
    { id: 1, nombre: "SQL", nivel: 5, categoria: "database" },
    { id: 2, nombre: "Power Query", nivel: 5, categoria: "database" },
    { id: 3, nombre: "Power BI", nivel: 5, categoria: "database" },
    { id: 4, nombre: "Tableau", nivel: 4, categoria: "database" },
    { id: 5, nombre: "Excel", nivel: 5, categoria: "tools" },
    { id: 6, nombre: "Google Sheets", nivel: 5, categoria: "tools" },
    { id: 7, nombre: "Google Data Studio", nivel: 5, categoria: "tools" },
    { id: 8, nombre: "Google Cloud", nivel: 4, categoria: "tools" },
    { id: 9, nombre: "Python", nivel: 4, categoria: "tools" },
    { id: 10, nombre: "Git", nivel: 5, categoria: "tools" },
    { id: 11, nombre: "Trabajo en equipo", nivel: 5, categoria: "soft-skills" },
    { id: 12, nombre: "Comunicación", nivel: 4, categoria: "soft-skills" }
  ],
  proyectos: [
    {
      id: 1,
      nombre: "Jeeves",
      descripcion: "Plataforma de gestión de clientes y ventas",
      tecnologias: ["SQL", "Power Query", "Power BI", "Tableau", "Google Cloud", "Python", "Excel", "Google Sheets", "Google Data Studio"],
      github: "https://github.com/nelsonbyads/jeeves",
      url: "https://jeeves.byads.co/"
    },
    {
      id: 2,
      nombre: "Automatization Byads",
      descripcion: "Automatización de procesos de análisis de datos",
      tecnologias: ["SQL", "Power Query", "Power BI", "Tableau", "Google Cloud", "Python", "Excel", "Google Sheets", "Google Data Studio"],
      github: "https://github.com/nelsonbyads/automatization-byads",
      url: "https://automatization-byads.byads.co/"
    }
  ],
  contacto: {
    email: "nelson@byads.co",
    telefono: "+57 319 242 9257",
    linkedin: "https://www.linkedin.com/in/nelson-franco89/",
    github: "https://github.com/nelsonbyads",
    portfolio: "https://byads.co"
  }
}; 