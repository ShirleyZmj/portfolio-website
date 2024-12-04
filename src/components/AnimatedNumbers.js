import React, { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";

function AnimatedNumbers({ value, className = "" }) {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duartion: 6000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      console.log(latest.toFixed(0));
      if (
        ref.current &&
        latest.toFixed(0) <= value &&
        ref.current.textContent != value
      ) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return (
    <motion.span
      ref={ref}
      className={`${className} inline-block`}
    ></motion.span>
  );
}

export default AnimatedNumbers;
