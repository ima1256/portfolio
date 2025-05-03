import { v4 as uuidv4 } from 'uuid';

const animations = {
  'Slide Down': {
    initial: { y: -200, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: 'spring', stiffness: 400, damping: 10, duration: 1 },
  },
  'Slide from Left': {
    initial: { x: -300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { type: 'spring', stiffness: 500, damping: 25, duration: 1 },
  },
  'Scale Up': {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: 'spring', stiffness: 400, damping: 25, duration: 1 },
  },
  Bounce: {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
      mass: 1.5,
      duration: 1.5,
    },
  },
  'Fade In with Delay': {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 2, delay: 0.5 },
  },
  'Rotate and Scale': {
    initial: { rotate: 0, scale: 1, opacity: 0 },
    animate: { rotate: 180, scale: 1.2, opacity: 1 },
    transition: { type: 'spring', stiffness: 300, damping: 20, duration: 1.5 },
  },
  'Slide from Right': {
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { type: 'spring', stiffness: 300, damping: 30, duration: 1.5 },
  },
  'Fade and Zoom': {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: 'spring', stiffness: 400, damping: 15, duration: 1.5 },
  },
  Shake: {
    initial: { x: 0 },
    animate: { x: [-10, 10, -10, 10, 0] },
    transition: {
      type: 'tween', // ✅ Changed from 'spring'
      ease: 'easeInOut',
      duration: 0.6,
    },
  },
  'Scale and Rotate': {
    initial: { scale: 0.5, rotate: 0, opacity: 0 },
    animate: { scale: 1, rotate: 90, opacity: 1 },
    transition: { type: 'spring', stiffness: 300, damping: 25, duration: 1.5 },
  },
  'Bounce Y': {
    initial: { y: 0, opacity: 0 },
    animate: { y: [0, -30, 0], opacity: 1 },
    transition: {
      type: 'tween', // ✅ Changed from 'spring'
      ease: 'easeInOut',
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
  'Rotate X': {
    initial: { rotateX: 0 },
    animate: { rotateX: 360 },
    transition: { duration: 1, ease: 'easeInOut', repeat: 0 },
  },
  'Fall and Bounce': {
    initial: { y: '-100vh', opacity: 0 },
    animate: {
      y: ['-100vh', 0, -20, 0, -10, 0, -5, 0],
      opacity: 1,
    },
    transition: {
      type: 'tween',
      ease: 'easeOut',
      times: [0, 0.3, 0.45, 0.6, 0.72, 0.84, 0.92, 1], // timing for keyframes
    },
  },
};

const animationIds = {
  headerLogo: uuidv4(),
  mainTitle: uuidv4(),
  mainVideo: uuidv4(),
};

export { animations, animationIds };
