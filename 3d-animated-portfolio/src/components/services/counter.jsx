import { useInView, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";

const Counter = ({ from, to, text }) => {
  const [count, setCount] = useState(false);

  const ref = useRef(from);
  const isInView = useInView(ref);

  useEffect(() => {
    const animation = animate(from, to, {
      duration: 4,
      ease: "easeOut",
      onUpdate: (prev) => {
        setCount(Math.floor(prev));
      }
    });

    return () =>  animation.cancel();
  }, [isInView, from, to])

  
  return (
    <div className='counter' ref={ref}>
      <div className="counterContent">
        <h1>{count}+</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}
export default Counter;

