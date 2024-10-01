import { useRef, useEffect, useState } from "react";
import styles from "../styles/css-modules/fadeInEffect.module.css";

const useGetFadeAnimation = (mustReanimate = false) => {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting && (!hasIntersected || mustReanimate)) {
      setHasIntersected(true);
    } else if (!isIntersecting && mustReanimate) {
      setHasIntersected(false);
    }
  }, [isIntersecting, mustReanimate]);

  const animationClass = hasIntersected
    ? styles.endFadeInEffect
    : styles.startFadeInEffect;

  const delays = {
    s: styles.delayS,
    m: styles.delayM,
    l: styles.delayL,
  };

  return { ref, animationClass, delays };
};

export default useGetFadeAnimation;