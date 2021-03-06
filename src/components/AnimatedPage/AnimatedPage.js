import React from "react";
import { motion } from "framer-motion"

const animations = {
  initial: { opacity: 3, x: -60 },
  animate: { opacity: 8, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{duration: .6}}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
