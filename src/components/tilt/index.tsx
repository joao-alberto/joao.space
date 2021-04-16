import React from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";

function Tilt({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 20], [25, -25]);
  const rotateY = useTransform(x, [0, 20], [-25, 25]);

  function handleMouse(event) {
    x.set(event.pageX / 250);
    y.set(event.pageY / 250);
  }

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouse);

    return () => window.removeEventListener("mousemove", handleMouse);
  }, [handleMouse]);

  return <motion.div style={{ rotateX, rotateY }}>{children}</motion.div>;
}

export default Tilt;
