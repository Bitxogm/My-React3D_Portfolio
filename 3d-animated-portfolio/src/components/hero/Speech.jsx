import { TypeAnimation } from 'react-type-animation';
import ComicBubble from '../ui/ComicBuble';
import styles from './Speech.module.css';

const Speech = () => {
  return (


    <div className={styles.speechContainer}>
      <ComicBubble>
        <TypeAnimation
          sequence={[
            'Hola, soy Víctor 👋',
            1000,
            'Full Stack developer & creativo 💡',
            1500,
            '¿Trabajamos juntos? 🎯',
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
        />
      </ComicBubble>

      <div className={styles.speechImageWrapper}>
        <img
          className={styles.speechImage}
          src="/foto_reduce2.jpg"
          alt="Víctor"
        />
      </div>
    </div>


  );
};
export default Speech;