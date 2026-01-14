// src/constants/index.js
// Archivo de constantes globales del proyecto

/**
 * Información personal
 */
export const PERSONAL_INFO = {
  name: "Tu Nombre",
  title: "Desarrollador Web Fullstack",
  email: "tu.email@example.com",
  github: "https://github.com/Bitxogm",
  linkedin: "https://linkedin.com/in/tu-perfil",
  location: "Tu Ciudad, País"
};

/**
 * Skills/Tecnologías
 */
export const SKILLS = {
  frontend: [
    { name: "React", level: 90, icon: "/react_original.png" },
    { name: "JavaScript", level: 85, icon: "/JS.png" },
    { name: "TypeScript", level: 80, icon: "/TS.png" },
    { name: "HTML5", level: 95, icon: "/html5.png" },
    { name: "CSS3", level: 90, icon: "/css3.png" },
  ],
  backend: [
    { name: "Node.js", level: 80, icon: "/file_type_node_icon_130301.png" },
    { name: "Python", level: 75, icon: "/python.png" },
    { name: "SQL", level: 70, icon: "/SQL_icon.png" },
  ],
  tools: [
    { name: "Git", level: 85, icon: "/git_original.png" },
    { name: "Vite", level: 80 },
    { name: "Three.js", level: 70 },
  ]
};

/**
 * Proyectos destacados
 */
export const PROJECTS = [
  {
    id: 1,
    title: "AI Portfolio Hero",
    description: "Portfolio interactivo con inteligencia artificial",
    image: "/codecraft-ai-portfolio-hero.png",
    technologies: ["React", "Three.js", "AI"],
    github: "https://github.com/usuario/proyecto1",
    demo: "https://proyecto1.com",
    category: "AI"
  },
  {
    id: 2,
    title: "CV Generator",
    description: "Generador de CVs profesionales",
    image: "/cv-generator.png",
    technologies: ["React", "Node.js"],
    github: "https://github.com/usuario/proyecto2",
    demo: "https://proyecto2.com",
    category: "Web App"
  },
  {
    id: 3,
    title: "Videogames Review",
    description: "Plataforma de reseñas de videojuegos",
    image: "/videogames-review.png",
    technologies: ["React", "API"],
    github: "https://github.com/usuario/proyecto3",
    demo: "https://proyecto3.com",
    category: "Web App"
  }
];

/**
 * Servicios ofrecidos
 */
export const SERVICES = [
  {
    id: 1,
    title: "Desarrollo Frontend",
    description: "Creación de interfaces modernas y responsivas con React y tecnologías 3D",
    icon: "💻",
    projects: 4
  },
  {
    id: 2,
    title: "Desarrollo Backend",
    description: "APIs RESTful y bases de datos escalables",
    icon: "⚙️",
    projects: 2
  },
  {
    id: 3,
    title: "Diseño Web",
    description: "Diseño UI/UX atractivo y centrado en el usuario",
    icon: "🎨",
    projects: 3
  }
];

/**
 * Redes sociales
 */
export const SOCIAL_LINKS = {
  github: "https://github.com/Bitxogm",
  linkedin: "https://linkedin.com/in/tu-perfil",
  twitter: "https://twitter.com/tu-usuario",
};

/**
 * Estadísticas
 */
export const STATS = {
  personalProjects: 9,
  aiTools: 3,
  githubRepos: 19,
  yearsExperience: 2
};
