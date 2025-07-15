# 🍽️ RecetasDelMundo

Una aplicación web moderna para explorar la gastronomía mundial, desarrollada con Astro, React y TypeScript.

![RecetasDelMundo](https://img.shields.io/badge/Status-Completado-success)
![Tech Stack](https://img.shields.io/badge/Tech-Astro%20%7C%20React%20%7C%20TypeScript-blue)
![API](https://img.shields.io/badge/API-TheMealDB-orange)

## 🚀 Características Principales

- ⚡ **Búsqueda Instantánea** - Resultados en tiempo real con debounce
- 🌍 **Navegación por Países** - Explora cocinas del mundo
- 🏷️ **Categorías de Recetas** - Organizado por tipos de plato
- 📱 **Diseño Responsive** - Optimizado para todos los dispositivos
- 🎯 **Detalles Completos** - Ingredientes, instrucciones y videos
- 🔄 **Server-Side Rendering** - Mejor SEO y performance

## 🛠️ Stack Tecnológico

### Frontend
- **[Astro](https://astro.build/)** - Framework principal con SSR
- **[React](https://reactjs.org/)** - Componentes interactivos
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de estilos

### API
- **[TheMealDB](https://www.themealdb.com/)** - Base de datos de recetas

### Herramientas
- **[Vite](https://vitejs.dev/)** - Build tool y servidor de desarrollo
- **[Git](https://git-scm.com/)** - Control de versiones

## 📂 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.astro     # Navegación principal
│   ├── SearchBar.jsx    # Búsqueda instantánea
│   └── MealCard.jsx     # Tarjeta de receta
├── layouts/             # Layouts de página
│   └── Layout.astro     # Layout principal
├── pages/               # Páginas de la aplicación
│   ├── index.astro      # Página de inicio
│   ├── search.astro     # Resultados de búsqueda
│   ├── categories.astro # Lista de categorías
│   ├── countries.astro  # Lista de países
│   ├── team.astro       # Información del equipo
│   ├── architecture.astro # Diagrama de arquitectura
│   ├── category/        # Páginas dinámicas por categoría
│   │   └── [category].astro
│   ├── country/         # Páginas dinámicas por país
│   │   └── [country].astro
│   └── meal/            # Páginas de detalle de recetas
│       └── [id].astro
└── styles/
    └── global.css       # Estilos globales
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Reinald-Code/Desafio2-Web-The-MealDB.git
cd Pagina_Recetas
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:4321
```

## 📋 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run astro` | Ejecuta comandos CLI de Astro |

## 🌟 Funcionalidades Detalladas

### Búsqueda Instantánea
- Resultados en tiempo real mientras escribes
- Debounce de 300ms para optimizar llamadas a la API
- Navegación por teclado (flechas, Enter, Escape)
- Dropdown con 8 resultados principales
- Opción para ver todos los resultados

### Navegación por Categorías
- 14 categorías diferentes (Carne, Pollo, Postres, etc.)
- Iconos representativos para cada categoría
- Traducciones al español
- Grid responsive

### Navegación por Países
- +30 países y regiones del mundo
- Banderas como iconos visuales
- Traducciones de nombres al español
- Fallback con emojis

### Páginas de Detalle
- Información completa de cada receta
- Lista de ingredientes con medidas exactas
- Instrucciones paso a paso
- Videos de YouTube integrados
- Tags clickeables de categoría y país

## 🔌 Integración con API

### Endpoints Utilizados

| Endpoint | Propósito | Uso |
|----------|-----------|-----|
| `search.php?s={query}` | Buscar recetas por nombre | Búsqueda instantánea |
| `filter.php?c={category}` | Filtrar por categoría | Páginas de categorías |
| `filter.php?a={area}` | Filtrar por país | Páginas de países |
| `lookup.php?i={id}` | Detalle de receta | Páginas individuales |
| `random.php` | Recetas aleatorias | Página de inicio |
| `list.php?c=list` | Lista de categorías | Navegación |

## 📱 Diseño Responsive

### Breakpoints
- **Mobile**: < 768px - Diseño de una columna
- **Tablet**: 768px - 1024px - Grid adaptativo
- **Desktop**: > 1024px - Múltiples columnas

### Características
- Mobile First Design
- Grids CSS adaptativos
- Navegación táctil optimizada
- Imágenes responsivas

## 🎯 Optimizaciones de Performance

- **SSR con Astro** para mejor SEO
- **Debouncing** en búsqueda instantánea
- **Lazy loading** de imágenes
- **Manejo de errores** robusto
- **Validación** de parámetros de ruta

## 👥 Equipo de Desarrollo

- **Vicente Saa** - Desarrollador Líder
- **Vicente García** - Desarrollador Intermedio  
- **Max Rojas** - Desarrollador Aprendiz
- **Cristóbal Cabrera** - Ingeniero en Informática

## 📖 Documentación Adicional

- [Documentación Completa](./DOCUMENTACION_COMPLETA.md)
- [Material de Presentación](./MATERIAL_PRESENTACION.md)
- [Instrucciones de Búsqueda](./INSTRUCCIONES_BUSQUEDA.md)
- [Arquitectura del Sistema](/architecture)

## 🔮 Mejoras Futuras

- [ ] Caché local para resultados
- [ ] Sistema de favoritos
- [ ] Filtros avanzados (tiempo, dificultad)
- [ ] Búsqueda por ingredientes
- [ ] Progressive Web App (PWA)
- [ ] Modo offline con Service Workers

## � Licencia

Este proyecto es parte de un trabajo académico desarrollado para el curso de Desarrollo Web.

## 🤝 Contribuciones

Este es un proyecto académico. Para sugerencias o mejoras, por favor contacta al equipo de desarrollo.

---

⭐ **¡Explora RecetasDelMundo y descubre la gastronomía mundial!** ⭐
