import { motion, useMotionValue, animate } from "motion/react";
import { useTransform } from "motion/react";
import { useEffect } from "react";

function AnimateNumber({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.2,
    });
    return controls.stop;
  }, [value]);
  return <motion.span>{rounded}</motion.span>;
}

export default AnimateNumber;
