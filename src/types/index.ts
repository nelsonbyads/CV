export interface Experiencia {
  id: number;
  empresa: string;
  puesto: string;
  fechaInicio: string;
  fechaFin?: string;
  descripcion: string[];
  tecnologias: string[];
}

export interface Educacion {
  id: number;
  institucion: string;
  titulo: string;
  fechaInicio: string;
  fechaFin?: string;
  descripcion?: string;
}

export interface Habilidad {
  id: number;
  nombre: string;
  nivel: number; // 1-5
  categoria: 'frontend' | 'backend' | 'database' | 'tools' | 'soft-skills';
}

export interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  url?: string;
  github?: string;
  imagen?: string;
}

export interface Contacto {
  email: string;
  telefono?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

export interface DatosPersonales {
  nombre: string;
  apellido: string;
  titulo: string;
  resumen: string;
  ubicacion: string;
  foto?: string;
}

export interface CVData {
  datosPersonales: DatosPersonales;
  experiencia: Experiencia[];
  educacion: Educacion[];
  habilidades: Habilidad[];
  proyectos: Proyecto[];
  contacto: Contacto;
} 