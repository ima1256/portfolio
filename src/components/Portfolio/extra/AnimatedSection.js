// AnimatedSection.jsx
import { motion } from 'framer-motion';

import { Box } from '@mui/material';
import { animations } from '../../Test/Animations';
import { eventBus } from '../../../eventBus';
import { useState, useEffect } from 'react';
import { useShowAnimations } from 'PortfolioHooks';

const AnimatedSection = ({ children }) => {
  const MotionBox = motion.create(Box);
  return (
    <MotionBox
      style={{ willChange: 'transform, opacity' }}
      className=""
      initial={{ opacity: 0, y: '30vh' }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </MotionBox>
  );
};

const AnimatedMain = ({ children, className = '' }) => {
  const [triggered, setTriggered] = useState(false);
  const MotionBox = motion.create(Box);

  useEffect(() => {
    const handleEvent = (data) => {
      setTriggered(true);
    };

    eventBus.on('header-logo-animation', handleEvent);

    return () => {
      eventBus.off('header-logo-animation', handleEvent);
    };
  }, []);

  return (
    <MotionBox
      style={{ willChange: 'transform, opacity' }}
      className={className}
      initial={{ opacity: 0, y: '-60vh' }}
      animate={triggered ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {children}
    </MotionBox>
  );
};

const AnimatedTitle = ({ children, className = '' }) => {
  const [triggered, setTriggered] = useState(false);
  const MotionBox = motion.create(Box);

  useEffect(() => {
    const handleEvent = (data) => {
      console.log(data);
      setTriggered(true);
    };

    eventBus.on('header-logo-animation', handleEvent);

    return () => {
      eventBus.off('header-logo-animation', handleEvent);
    };
  }, []);

  return (
    <MotionBox
      style={{ willChange: 'transform, opacity' }}
      className={className}
      initial={{ opacity: 0, y: '-60vh' }}
      animate={triggered ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {children}
    </MotionBox>
  );
};

const XFlip = ({ children }) => {
  return (
    <motion.div
      style={{
        perspective: 1000, // Needed for 3D effect
        display: 'inline-block',
      }}
      animate={{
        rotateX: 360,
      }}
      initial={{
        rotateX: 0,
      }}
      // whileHover={{}}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        repeat: 0,
        // repeatType: 'loop', // Loops from start
      }}
    >
      {children}
    </motion.div>
  );
};

const TestAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 10,
        // repeat: Infinity,
        // repeatType: 'mirror',
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

const Animation = ({
  children,
  id = 'myid',
  name = 'Rotate X',
  duration = 1,
  repeat = 0,
  repeatDelay = 0,
  waitForAnimation = '',
  stop = false,
}) => {
  const showAnimations = useShowAnimations();

  const [triggered, setTriggered] = useState(
    waitForAnimation || stop ? false : true
  );

  useEffect(() => {
    const handleEvent = (data) => {
      setTriggered(true);
    };

    if (waitForAnimation) {
      eventBus.on(waitForAnimation, handleEvent);

      return () => {
        eventBus.off(waitForAnimation, handleEvent);
      };
    }
  }, []);

  if (!showAnimations) return children;

  return (
    <motion.div
      key={id}
      initial={animations[name].initial}
      animate={triggered ? animations[name].animate : {}} // Dynamically change the animation
      transition={{
        ...animations[name].transition,
        duration,
        repeat,
        repeatDelay,
      }} // Use the transition from the animation
      onAnimationComplete={() => eventBus.emit(id, animations[name])}
    >
      {children}
    </motion.div>
  );
};

export { AnimatedSection, AnimatedMain, XFlip, TestAnimation, Animation };
