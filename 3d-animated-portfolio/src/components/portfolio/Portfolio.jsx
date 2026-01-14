import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [

  {
    id: 1,
    img: "/logic-academy-portfolio-hero.png",
    title: "Logic Academy",
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
    img: "/call-spam-blocker.png ",
    title: "Call Spam AI Blocker - Android",
    desc: "Aplicación nativa Android (React Native + Java) que detecta y bloquea llamadas spam automáticamente. Implementa múltiples estrategias: lista negra personalizable, whitelist de contactos, modo radical y la técnica Answer+Hangup (contesta y cuelga silenciosamente spam, reducción 80%). Sistema de detección con AccessibilityService, integración con PhoneLookup API, historial de llamadas bloqueadas y preparada para IA conversacional con Gemini.",
    link: "https://github.com/Bitxogm/Call-Spam-IA-Bolcker",
  },
  {
    id: 4,
    img: "/sms-guardian.png",
    title: "SMSGuardian - Android",
    desc: "Aplicación de seguridad Android (React Native + Java Native) que intercepta y bloquea SMS spam y phishing automáticamente. Motor de análisis híbrido en 3 fases: Whitelist local (validación de dominios bancarios oficiales sin salir del dispositivo), Heurística avanzada offline (detección de vishing, patrones de urgencia, acortadores sospechosos) y Verificación Cloud con VirusTotal + Google Safe Browsing. Incluye cuarentena inteligente, sincronización automática con contactos, SQLite local para privacidad total, y detección de URLs maliciosas en tiempo real. Compatible con F-Droid y stores éticas.",
    link: "https://github.com/Bitxogm/SMSGuardian",
  },

  {
    id: 5,
    img: "/cv-generator.png",
    title: "CV Generator Powered By AI",
    desc: "Aplicación web que genera CVs profesionales en PDF con tres estilos (Visual, Moderno, Clásico) optimizados para sistemas ATS. Incluye IA integrada que analiza ofertas de trabajo, compara con tu perfil y sugiere mejoras personalizadas, además de generar cartas de presentación adaptadas.",
    link: "https://github.com/Bitxogm/CV-Generator-V2",
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