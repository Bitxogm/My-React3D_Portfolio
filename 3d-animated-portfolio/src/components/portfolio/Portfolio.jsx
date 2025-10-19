import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [

  {
    id: 1,
    img: "/logic-academy-portfolio-hero.png",
    title: "Social Media Project",
      desc: "Plataforma Fullstack de aprendizaje de programación (React 18 + TypeScript / Node.js + Express) construida con Tailwind CSS y Shadcn/ui, integrada con MongoDB Atlas. Incorpora Gemini 2.0 Flash como tutor personal de IA que genera explicaciones, diagramas de flujo, tests y hints contextuales. Incluye Monaco Editor (VS Code en el navegador), ejecución real de código Python/JavaScript, sistema de gamificación completo (XP, niveles, achievements, streaks), analytics visuales con heatmap estilo GitHub, 30+ ejercicios en 6 categorías, y 25+ plantillas de código listas para usar. Dashboard interactivo con seguimiento de progreso en tiempo real.",
    link: "https://new-logic-agent-git-dev-bitxejos-projects.vercel.app/",
  },

  {
    id: 2,
    img: "/codecraft-ai-portfolio-hero.png",
    title: "CodeCraft AI: Refactor, Test & Translate",
    desc: "Aplicación Fullstack (React/Vite) construida con Tailwind CSS y Shadcn/ui, que integra la API de Google Gemini (LLM) en el backend. Ofrece funcionalidades avanzadas como Refactorización inteligente, Análisis de Seguridad, Generación de Tests Unitarios, Modularización y Documentación automática. Incluye un Chatbot contextual. Es el copiloto definitivo para la automatización de tareas repetitivas y la mejora continua de la calidad del código.",
    link: "https://new-code-ai-assistant.vercel.app/",
  },
  {
    id: 3,
    img: "/landig-review.png",
    title: "Plataforma de Reseñas de Videojuegos",
    desc: "Proyecto Front-end (HTML5/CSS3/JS) que simula una plataforma de reseñas de videojuegos. Enfocado en la maquetación y diseño responsive desde cero, asegurando una visualización perfecta en cualquier dispositivo móvil o de escritorio.",
    link: "https://landig-review-videogames.netlify.app/",
  },
  {
    id: 4,
    img: "/web-CSS3.png",
    title: "WebDesign CSS3:Landing Page Moderna",
    desc: "Página de aterrizaje (Landing Page) diseñada con foco en la experiencia de usuario y animaciones fluidas utilizando exclusivamente HTML5 y CSS3. Un proyecto para demostrar habilidad en responsive design y optimización de rendimiento",
    link: "https://designwebcss3.netlify.app/",
  },

  {
    id: 5,
    img: "/p5.jpg",
    title: "Animated Portfolio Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link} target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;