# 🌐 My React 3D Portfolio

<div align="center">
  
  [![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://myreactportfolio1944.web.app/)
  [![GitHub](https://img.shields.io/badge/github-repo-blue.svg)](https://github.com/Bitxogm/My-React3D_Portfolio)
  [![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://reactjs.org/)
  [![Three.js](https://img.shields.io/badge/Three.js-0.177.0-000000?logo=three.js)](https://threejs.org/)
  [![Vite](https://img.shields.io/badge/Vite-7.1.0-646CFF?logo=vite)](https://vitejs.dev/)

  **Un portafolio web moderno e interactivo con animaciones 3D y efectos visuales impresionantes**

  [Ver Demo](https://myreactportfolio1944.web.app/) · [Reportar Bug](https://github.com/Bitxogm/My-React3D_Portfolio/issues) · [Solicitar Feature](https://github.com/Bitxogm/My-React3D_Portfolio/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características](#-características)
- [Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [Demostración](#-demostración)
- [Comenzando](#-comenzando)
  - [Prerequisitos](#prerequisitos)
  - [Instalación](#instalación)
  - [Variables de Entorno](#variables-de-entorno)
- [Uso](#-uso)
- [Scripts Disponibles](#-scripts-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Despliegue](#-despliegue)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🎯 Acerca del Proyecto

Este es un portafolio web personal desarrollado con React y Three.js, diseñado para mostrar proyectos, habilidades y experiencia de una manera única y visualmente atractiva. El proyecto incorpora elementos 3D interactivos, animaciones fluidas y efectos visuales modernos para crear una experiencia de usuario memorable.

### ¿Por qué este proyecto?

- 🎨 **Diseño Moderno**: Interfaz minimalista y elegante con animaciones suaves
- 🌍 **Elementos 3D**: Globo terráqueo interactivo y modelos 3D de objetos tecnológicos
- 📱 **Responsive**: Diseño adaptable a todos los dispositivos
- ⚡ **Rendimiento**: Optimizado con Vite para tiempos de carga rápidos
- 🎭 **Interactivo**: Animaciones y efectos que responden a la interacción del usuario

---

## ✨ Características

- 🌐 **Globo 3D Interactivo**: Visualización de un globo terráqueo rotativo con Three.js
- 💬 **Burbujas de Diálogo Estilo Cómic**: Elementos de UI creativos y animados
- 🎮 **Modelos 3D**:
  - Gaming PC
  - Laptop
  - Teclado mecánico
- 🎬 **Animaciones Suaves**: Implementadas con Framer Motion
- ⌨️ **Animación de Texto**: Efecto de escritura automática
- 🔮 **Efecto Matrix Rain**: Animación de fondo estilo Matrix
- 📧 **Formulario de Contacto**: Integración con EmailJS para mensajes directos
- 🎨 **Formas Geométricas Animadas**: Elementos visuales dinámicos
- 🚀 **Optimización de Rendimiento**: Código optimizado y lazy loading

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **[React](https://reactjs.org/)** (v19.1.0) - Biblioteca de JavaScript para construir interfaces de usuario
- **[Three.js](https://threejs.org/)** (v0.177.0) - Biblioteca de gráficos 3D
- **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)** (v9.1.2) - Renderizador de React para Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** (v10.3.0) - Helpers útiles para react-three-fiber
- **[Framer Motion](https://www.framer.com/motion/)** (v12.18.1) - Biblioteca de animaciones para React

### Utilidades
- **[EmailJS](https://www.emailjs.com/)** (v4.4.1) - Servicio de envío de emails
- **[React Type Animation](https://www.npmjs.com/package/react-type-animation)** (v3.2.0) - Animaciones de escritura

### Herramientas de Desarrollo
- **[Vite](https://vitejs.dev/)** (v7.1.0) - Build tool y dev server ultrarrápido
- **[ESLint](https://eslint.org/)** (v9.13.0) - Linter para JavaScript/React
- **[@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react)** - Plugin oficial de React para Vite

### Despliegue
- **[Firebase Hosting](https://firebase.google.com/docs/hosting)** - Plataforma de hosting

---

## 🎬 Demostración

🔗 **[Ver Sitio en Vivo](https://myreactportfolio1944.web.app/)**

### Capturas de Pantalla

```
🏠 Hero Section
   ├─ Globo 3D interactivo
   ├─ Efecto Matrix Rain
   └─ Burbujas de diálogo animadas

🛠️ Services Section
   ├─ Gaming PC 3D
   ├─ Laptop 3D
   └─ Teclado 3D

📁 Portfolio Section
   └─ Galería de proyectos

📬 Contact Section
   └─ Formulario de contacto con EmailJS
```

---

## 🚀 Comenzando

Sigue estos pasos para obtener una copia local del proyecto y ejecutarlo.

### Prerequisitos

Asegúrate de tener instalado:

- **Node.js** (v18.0.0 o superior)
  ```bash
  node --version
  ```

- **npm** o **yarn**
  ```bash
  npm --version
  # o
  yarn --version
  ```

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Bitxogm/My-React3D_Portfolio.git
   ```

2. **Navega al directorio del proyecto**
   ```bash
   cd My-React3D_Portfolio/3d-animated-portfolio
   ```

3. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

### Variables de Entorno

Si vas a utilizar la funcionalidad de EmailJS, necesitarás configurar las credenciales:

1. **Copia el archivo de ejemplo**
   ```bash
   cp .env.example .env
   ```

2. **Crea una cuenta en [EmailJS](https://www.emailjs.com/)**

3. **Configura tu servicio de email**
   - Crea un servicio de email (Gmail, Outlook, etc.)
   - Crea una plantilla de email
   - Obtén tu Service ID, Template ID y Public Key

4. **Actualiza el archivo .env con tus credenciales**
   ```env
   VITE_SERVICE_ID=tu_service_id
   VITE_TEMPLATE_ID=tu_template_id
   VITE_PUBLIC_KEY=tu_public_key
   ```

⚠️ **IMPORTANTE**: Nunca subas el archivo `.env` a GitHub. Ya está incluido en `.gitignore`.

---

## 💻 Uso

### Modo Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Modo Desarrollo con Incógnito

Para abrir automáticamente en modo incógnito de Chrome:

```bash
npm run incognito-dev
```

### Build de Producción

Genera los archivos optimizados para producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`

### Preview de Producción

Previsualiza el build de producción localmente:

```bash
npm run preview
```

### Linting

Ejecuta el linter para verificar el código:

```bash
npm run lint
```

---

## 📁 Estructura del Proyecto

```
3d-animated-portfolio/
│
├── public/                          # Archivos estáticos
│   └── textures/                    # Texturas para modelos 3D
│
├── src/                             # Código fuente
│   ├── components/                  # Componentes de React
│   │   ├── contact/                 # Sección de contacto
│   │   │   ├── Contact.jsx
│   │   │   ├── contact.css
│   │   │   └── ContactSvg.jsx
│   │   │
│   │   ├── hero/                    # Sección hero (principal)
│   │   │   ├── Hero.jsx
│   │   │   ├── hero.css
│   │   │   ├── Globe.jsx            # Globo 3D
│   │   │   ├── MatrixRain.jsx       # Efecto Matrix
│   │   │   ├── Shape.jsx            # Formas geométricas
│   │   │   ├── Speech.jsx           # Burbujas de diálogo
│   │   │   └── Speech.module.css
│   │   │
│   │   ├── portfolio/               # Sección de portafolio
│   │   │   ├── Portfolio.jsx
│   │   │   └── portfolio.css
│   │   │
│   │   ├── services/                # Sección de servicios
│   │   │   ├── Services.jsx
│   │   │   ├── services.css
│   │   │   ├── Counter.jsx
│   │   │   │
│   │   │   ├── 3d-objects-containers/
│   │   │   │   ├── GamingPcContainer.jsx
│   │   │   │   ├── KeyboardContainer.jsx
│   │   │   │   └── LaptopContainer.jsx
│   │   │   │
│   │   │   └── 3d-react-objects/
│   │   │       ├── GamingPc.jsx
│   │   │       ├── Keyboard.jsx
│   │   │       └── Laptop.jsx
│   │   │
│   │   └── ui/                      # Componentes UI reutilizables
│   │       ├── ComicBuble.jsx
│   │       └── ComicBubble.module.css
│   │
│   ├── App.jsx                      # Componente principal
│   ├── main.jsx                     # Punto de entrada
│   └── index.css                    # Estilos globales
│
├── scripts/                         # Scripts de utilidad
│   └── check-secrets.sh
│
├── eslint.config.js                 # Configuración de ESLint
├── firebase.json                    # Configuración de Firebase
├── index.html                       # HTML base
├── jsconfig.json                    # Configuración de JavaScript
├── package.json                     # Dependencias y scripts
├── vite.config.js                   # Configuración de Vite
└── README.md                        # Este archivo
```

---

## 🌐 Despliegue

Este proyecto está configurado para desplegarse en Firebase Hosting.

### Desplegar en Firebase

1. **Instala Firebase CLI** (si no lo tienes)
   ```bash
   npm install -g firebase-tools
   ```

2. **Inicia sesión en Firebase**
   ```bash
   firebase login
   ```

3. **Construye el proyecto**
   ```bash
   npm run build
   ```

4. **Despliega a Firebase**
   ```bash
   firebase deploy
   ```

### Desplegar en Otras Plataformas

Este proyecto también se puede desplegar en:

- **Vercel**: Conecta tu repositorio de GitHub
- **Netlify**: Arrastra y suelta la carpeta `dist/`
- **GitHub Pages**: Configura en settings del repositorio

---

## 🤝 Contribuir

Las contribuciones son lo que hace que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. Cualquier contribución que hagas será **muy apreciada**.

1. Fork el Proyecto
2. Crea tu Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus Cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la Branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 📧 Contacto

**Proyecto**: [https://github.com/Bitxogm/My-React3D_Portfolio](https://github.com/Bitxogm/My-React3D_Portfolio)

**Website**: [https://myreactportfolio1944.web.app/](https://myreactportfolio1944.web.app/)

**Autor**: Bitxogm - Desarrollador Web Fullstack

---

## 🙏 Agradecimientos

- [Three.js](https://threejs.org/) - Por la increíble biblioteca 3D
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - Por hacer Three.js accesible en React
- [Framer Motion](https://www.framer.com/motion/) - Por las hermosas animaciones
- [EmailJS](https://www.emailjs.com/) - Por el servicio de emails
- [Firebase](https://firebase.google.com/) - Por el hosting

---

<div align="center">
  
  **⭐ Si te gusta este proyecto, dale una estrella en GitHub ⭐**
  
  Hecho con ❤️ y mucho ☕
  
</div>