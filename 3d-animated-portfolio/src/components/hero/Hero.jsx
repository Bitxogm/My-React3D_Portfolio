
import Globe from "./Globe.jsx";
import "./hero.css";
import Shape from "./Shape.jsx";
import Speech from "./Speech.jsx";
import { motion } from "motion/react";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.8,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};




const Hero = () => {
  return (
    <>
      <div className="hero">
    
           
          {/* <div className="shape-layer">
        <Shape />
        </div>  */}
           
     
    
           <div className="globe-lawyer">
        <Globe/>
          </div>  




        <div className="hSection left">
          {/* TITLE */}

          <div className="titleRow">

            <div className="titleText">
              <motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="hTitle">
                Hola,
                <br />
                <span>soy Victor!</span>
              </motion.h1>
            </div>
            <motion.a animate={{ y: [0, 5], opacity: [0, 1, 0], }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }}
              href="#services" className="">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                  stroke="white"
                  strokeWidth="1"
                />
                <motion.path
                  animate={{ y: [0, 5] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  }}

                  d="M12 5V8"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </motion.a>
          </div>

          {/* AWARDS */}
          <motion.div className="awards" variants={awardVariants} initial="initial" animate="animate">
            {/* <motion.h2 variants={awardVariants}>“Un vistazo al stack que marcó el inicio de mi camino como desarrollador.”</motion.h2> */}
            <motion.p variants={awardVariants}>Estas son algunas de las tecnologías y plataformas con las que he trabajado:</motion.p>

            {/* Tecnologías */}
            <motion.p className="label" variants={awardVariants}>Tecnologías que uso:</motion.p>

            {/* Primera fila: 4 iconos */}
            <motion.div className="awardList techRow" variants={awardVariants}>
              <motion.img className="awardIcon" src="/react_original.png" alt="React" />
              <motion.img className="awardIcon" src="/JS.png" alt="JavaScript" />
              <motion.img className="awardIcon" src="/TS.png" alt="TypeScript" />
              <motion.img className="awardIcon" src="/python.png" alt="Python" />
            </motion.div>

            {/* Segunda fila: 3 iconos */}
            <motion.div className="awardList techRow" variants={awardVariants}>
              <motion.img className="awardIcon" src="/html5.png" alt="HTML5" />
              <motion.img className="awardIcon" src="/css3.png" alt="CSS3" />
              <motion.img className="awardIcon" src="/SQL_icon.png" alt="SQL" />
              <motion.img className="awardIcon" src="/git_original.png" alt="Git" />
            </motion.div>

            {/* Plataformas */}
            <motion.p className="label" variants={awardVariants}>Plataformas donde me formé:</motion.p>
            <motion.div className="awardList-platformsRow" variants={awardVariants}>
              <motion.img className="awardIcon-platformIcon" src="/Keepcoding.svg" alt="KeepCoding" />
              <motion.img className="awardIcon-platformIcon" src="/udemy_logo.png" alt="Udemy" />
            </motion.div>
          </motion.div>


          {/* SCROLL SVG */}


        </div>


        <div className="hSection right">

          {/* FOLLOW */}
          <motion.div variants={followVariants} initial="initial" animate="animate" className="follow">
            <motion.a href="https://github.com/Bitxogm" target="_blank">
              <img src="/icons8-github-100.png"></img>
            </motion.a>
          
            <motion.a variants={followVariants} initial="initial" animate="animate" href="https://www.linkedin.com/in/victor-manuel-gonzalez-moreno/" target="_blank">
              <img src="/icons8-linkedin-100.png"></img>
            </motion.a>
            <motion.div className="followTextContainer">
              <motion.div variants={followVariants} initial="initial" animate="animate" className="followText">FOLLOW ME</motion.div>
            </motion.div>
          </motion.div>

          {/* BUBBLE */}
          < Speech />
          {/*  CERTIFICATES*/}
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}



            className="certificate">
            DESARROLLADOR
            <br />
            WEB
            <br />
            JUNIOR
            <br />
            FULL-STACK
            <motion.a href="/#contact" className="contactLink" animate={{
              x: [200, 0],
              opacity: [0, 1],
            }}
              transition={{
                duration: 2,
              }}
            >
              <motion.div className="contactButton" animate={{ rotate: [0, 360] }} transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}   >
                <svg viewBox="0 0 200 200" width="150" height="150">
                  <circle cx="100" cy="100" r="90" fill="pink" />
                  <path
                    id="innerCirclePath"
                    fill="none"
                    d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                  />
                  <text className="circleText">
                    <textPath href="#innerCirclePath">Hire Now •</textPath>
                  </text>
                  <text className="circleText">
                    <textPath href="#innerCirclePath" startOffset="44%">
                      Contact Me •
                    </textPath>
                  </text>
                </svg>

                <div className="arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="50"
                    height="50"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                  >
                    <line x1="6" y1="18" x2="18" y2="6" />
                    <polyline points="9 6 18 6 18 15" />
                  </svg>

                </div>

              </motion.div>
            </motion.a>
          </motion.div>
        </div>

        <div className="bg">
          {/* 3d-shape */}





          <div className="hImg">
            <img src="/Perfil.png" alt="Perfil"></img>
          </div>
        </div>

      </div >
    </>
  );
};
export default Hero;







