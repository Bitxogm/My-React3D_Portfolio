import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div className='container'>

      <section id="#home" >
        <Hero />
      </section>

      <section id="#services">
        <Services />
      </section>

      {/* 
        IMPORTANTE: Portfolio NO debe estar dentro de <section> 
        Razón: Portfolio usa scroll horizontal especial (scrollYProgress)
        que necesita ~5 clicks de rueda para mostrar los 5 proyectos.
        Si lo envuelves en <section>, el scroll-snap-align interfiere
        y las secciones se montan/superponen incorrectamente.
        ¡NO DESCOMENTAR las etiquetas <section> de abajo!
      */}
      {/* <section id="#portfolio"> */}
        <Portfolio />
      {/* </section> */}

      <section id="#contact">
        <Contact />
      </section>
    </div>
  );
}
export default App;







