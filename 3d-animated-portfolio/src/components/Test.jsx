

import { motion } from "framer-motion";

const shapeVariants = {
  initialRect: {
    x: -100,
    opacity: 0,
  },
  animateRect: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  initialCircle: {
    y: -100,
    opacity: 0,
  },
  animateCircle: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};

const listVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.6,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const Test = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      <motion.div
        variants={shapeVariants}
        initial="initialRect"
        animate="animateRect"
        style={{ width: 100, height: 100, background: "red" }}
      />

      <motion.div
        variants={shapeVariants}
        initial="initialCircle"
        animate="animateCircle"
        style={{
          width: 100,
          height: 100,
          background: "green",
          borderRadius: "50%",
        }}
      />

      <motion.ul
        variants={listVariants}
        initial="initial"
        animate="animate"
        style={{ listStyle: "none", padding: 0 }}
      >
        {["JavaScript", "React", "Next.js"].map((tech) => (
          <motion.li
            key={tech}
            variants={itemVariants}
            style={{ marginBottom: "0.5rem", fontSize: "1.2rem" }}
          >
            {tech}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Test;
