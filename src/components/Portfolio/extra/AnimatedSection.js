// AnimatedSection.jsx
import { motion } from "framer-motion";

import { Box } from "@mui/material";

const AnimatedSection = ({ children }) => {
  const MotionBox = motion.create(Box);
  return (
    <MotionBox
      style={{ willChange: 'transform, opacity' }}
      className=""
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      { children }
    </MotionBox>
  );
};

const AnimatedMain = ({ children, className="" }) => {
  const MotionBox = motion.create(Box);
  return (
    <MotionBox
      style={{ willChange: 'transform, opacity' }}
      className={`${className}`}
      initial={{ opacity: 0, y: "-20vh" }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      { children }
    </MotionBox>
  );
};

export { AnimatedSection, AnimatedMain };
