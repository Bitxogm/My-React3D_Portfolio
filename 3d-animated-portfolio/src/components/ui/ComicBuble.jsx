import styles from './ComicBubble.module.css';

const ComicBubble = ({ children }) => (
  <svg
  className={`${styles.bubble} ${styles.bubbleFloat}`} 
    viewBox="0 0 300 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 20 h240 a20 20 0 0 1 20 20 v100 a20 20 0 0 1 -20 20 h-180 l-40 40 10 -40 a20 20 0 0 1 -10 -20 v-100 a20 20 0 0 1 20 -20"
      fill="#ffffffee"
      stroke="#000"
      strokeWidth="4"
      className={styles.bubblePath}
    />

    <foreignObject x="30" y="30" width="240" height="140">
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{
          fontFamily: 'Comic Sans MS, cursive',
          fontSize: '2em',
          padding: '20px',
          color: '#000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {children}
      </div>
    </foreignObject>
  </svg>
);

export default ComicBubble;
