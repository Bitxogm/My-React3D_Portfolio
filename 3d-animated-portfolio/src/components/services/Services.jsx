import ComputerModelContainer from "./3d-objects-containers/LaptopContainer";
import GamingPcContainer from "./3d-objects-containers/GamingPcContainer";
import "./services.css";
import KeyboardContainer from "./3d-objects-containers/KeyboardContainer";
import Counter from "./counter";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";


const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 1,
  }
};

const listVariants = {
  initial: {
    x: -100,
    y: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    }
  }
};

const serviceVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}


// const services = [
//   {
//     id: 1,
//     img: "/service1.png",
//     title: "Web Development",
//     counter: 35,
//   },

//   {
//     id: 2,
//     img: "/service2.png",
//     title: "Product Design",
//     counter: 13,
//   },

//   {
//     id: 3,
//     img: "/service3.png",
//     title: "Branding",
//     counter: 15,
//   },
// ];

const services = [
  {
    id: 1,
    img: "/laptop.png", // Laptop = desarrollo web
    title: "Desarrollo Full Stack",
    desc: "Aplicaciones web con React, Node.js y MongoDB. Enfocado en buenas prácticas, diseño limpio y funcionalidad real.",
    counter: 4,
  },
  {
    id: 2,
    img: "/pcgaming.png", // PC gaming = herramientas con IA
    title: "Herramientas con IA",
    desc: "Agentes inteligentes que refactorizan código, generan tests y traducen entre lenguajes. Automatización al servicio del desarrollador.",
    counter: 2,
  },
  {
    id: 3,
    img: "/keyboard.png", // Keyboard = testing y automatización
    title: "Automatización y Testing",
    desc: "Scripts para tareas repetitivas, generación de pruebas unitarias y análisis de seguridad. Código más robusto, menos trabajo manual.",
    counter: 3,
  },
];


const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);


  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className='services' ref={ref} >
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="sTitle">¿Qué se hacer?
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="serviceList">
          {services.map((service) => (
            <div className="service"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt="" ></img>
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>
            </div>
          ))}

          <div className="counterList">
            <Counter from={0} to={9} text="Proyectos personales" />
            <Counter from={0} to={3} text="Herramientas con IA" />
            <Counter from={0} to={19} text="Repos públicos en GitHub" />
          </div>
          <div className="serviceDesc">
            <motion.p
              variants={serviceVariants}
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {services.find(s => s.id === currentServiceId)?.desc}
            </motion.p>
          </div>
        </motion.div>
      </div>

      <div className="sSection right">
        {currentServiceId === 1 ? (<ComputerModelContainer />
        ) : currentServiceId === 2 ? (
          <GamingPcContainer />) : (
          <KeyboardContainer />
        )}


      </div>
    </div>
  )
}
export default Services;