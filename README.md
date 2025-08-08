# CV en TypeScript

Un CV profesional moderno y responsivo construido con React y TypeScript.

## 🚀 Características

- **Diseño moderno y profesional**: Interfaz elegante con gradientes y efectos visuales
- **Totalmente responsivo**: Se adapta perfectamente a dispositivos móviles y desktop
- **TypeScript**: Código tipado para mayor seguridad y mantenibilidad
- **Componentes modulares**: Arquitectura limpia y reutilizable
- **Iconos integrados**: Usando React Icons para una mejor experiencia visual
- **Datos centralizados**: Fácil personalización desde un solo archivo

## 🛠️ Tecnologías utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de construcción rápida
- **React Icons** - Iconografía moderna
- **CSS3** - Estilos modernos con Flexbox y Grid

## 📦 Instalación

1. **Clona el repositorio**:
```bash
git clone <tu-repositorio>
cd cv-typescript
```

2. **Instala las dependencias**:
```bash
npm install
```

3. **Ejecuta el servidor de desarrollo**:
```bash
npm run dev
```

4. **Abre tu navegador** en `http://localhost:5173`

## ✏️ Personalización

### Datos personales
Edita el archivo `src/data/cvData.ts` para personalizar tu información:

```typescript
export const cvData: CVData = {
  datosPersonales: {
    nombre: "Tu Nombre",
    apellido: "Tu Apellido",
    titulo: "Tu Título Profesional",
    resumen: "Tu resumen profesional...",
    ubicacion: "Tu ubicación",
    foto: "URL de tu foto"
  },
  // ... resto de datos
};
```

### Secciones disponibles

- **Experiencia laboral**: Trabajos anteriores con descripciones y tecnologías
- **Educación**: Formación académica y cursos
- **Habilidades**: Organizadas por categorías con niveles de dominio
- **Proyectos**: Portfolio con enlaces a GitHub y demos
- **Contacto**: Información de contacto profesional

### Estilos
Los estilos están organizados por componente en la carpeta `src/components/`. Puedes personalizar colores, fuentes y layout editando los archivos CSS correspondientes.

## 🚀 Despliegue

### Build para producción
```bash
npm run build
```

### Preview del build
```bash
npm run preview
```

## 📁 Estructura del proyecto

```
src/
├── components/          # Componentes React
│   ├── CV.tsx         # Componente principal
│   ├── Header.tsx     # Encabezado con datos personales
│   ├── Experiencia.tsx # Sección de experiencia laboral
│   ├── Educacion.tsx  # Sección de educación
│   ├── Habilidades.tsx # Sección de habilidades
│   ├── Proyectos.tsx  # Sección de proyectos
│   ├── Contacto.tsx   # Sección de contacto
│   └── *.css          # Estilos de cada componente
├── data/
│   └── cvData.ts      # Datos del CV
├── types/
│   └── index.ts       # Definiciones de tipos TypeScript
├── App.tsx            # Componente raíz
├── main.tsx           # Punto de entrada
└── *.css              # Estilos globales
```

## 🎨 Personalización avanzada

### Cambiar colores
Los colores principales están definidos en los archivos CSS:
- Color principal: `#667eea`
- Color secundario: `#764ba2`
- Gradientes: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

### Agregar nuevas secciones
1. Crea un nuevo componente en `src/components/`
2. Define los tipos en `src/types/index.ts`
3. Agrega los datos en `src/data/cvData.ts`
4. Integra el componente en `src/components/CV.tsx`

## 📱 Responsive Design

El CV está optimizado para:
- **Desktop**: Layout de dos columnas
- **Tablet**: Layout adaptativo
- **Mobile**: Layout de una columna

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

¡Disfruta creando tu CV profesional con TypeScript! 🎉 