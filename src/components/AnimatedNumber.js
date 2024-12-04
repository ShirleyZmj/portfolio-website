import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

function AnimatedNumber({ targetValue }) {
  // Motion value for the animation
  const count = useMotionValue(0);

  // Transform the motion value into a rounded number
  const animatedValue = useTransform(count, (latest) => Math.round(latest));

  // State to store the animated number
  const [displayValue, setDisplayValue] = useState(0);

  // Update the displayed number as the motion value changes
  useEffect(() => {
    const unsubscribe = animatedValue.on("change", (v) => setDisplayValue(v));
    return () => unsubscribe();
  }, [animatedValue]);

  // Animate the number when the component mounts
  useEffect(() => {
    count.set(0); // Reset to 0 before starting
    count.set(targetValue, { duration: 2000, ease: "easeOut" }); // Animate to target
  }, [targetValue, count]);

  return (
    <motion.div style={{ fontSize: "2rem", fontWeight: "bold" }}>
      {displayValue}
    </motion.div>
  );
}

export default function App() {
  return <AnimatedNumber targetValue={100} />;
}
