import { useState, useEffect } from "react";

const easeOutQuad = (t: number) => --t * t * t + 1;
const frameDuration = 1000 / 60;

const useCountUp = (end: number, duration: number = 2000): number => {
  const [count, setCount] = useState(0);
  const countTo = end;

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const countInterval = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(countTo * progress);

      if (frame === totalFrames) {
        clearInterval(countInterval);
      }
    }, frameDuration);
  }, []);

  return Math.floor(count);
};

export default useCountUp;
