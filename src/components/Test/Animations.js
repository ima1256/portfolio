import { v4 as uuidv4 } from 'uuid';

const animations = {
  'Slide Down': {
    initial: { y: -200, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: 'spring', stiffness: 400, damping: 10 },
  },
  'Fade In Only': {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      ease: 'easeInOut',
    },
  },
  'Slide from Left': {
    initial: { x: -300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { type: 'spring', stiffness: 500, damping: 25 },
  },
  'Scale Up': {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  },
  Bounce: {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
      mass: 1.5,
    },
  },
  'Rotate and Scale': {
    initial: { rotate: 0, scale: 1, opacity: 0 },
    animate: { rotate: 180, scale: 1.2, opacity: 1 },
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  'Slide from Right': {
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  'Fade and Zoom': {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: 'spring', stiffness: 400, damping: 15 },
  },
  Shake: {
    initial: { x: 0 },
    animate: { x: [-10, 10, -10, 10, 0] },
    transition: {
      type: 'tween', // ✅ Changed from 'spring'
      ease: 'easeInOut',
    },
  },
  'Scale and Rotate': {
    initial: { scale: 0.5, rotate: 0, opacity: 0 },
    animate: { scale: 1, rotate: 90, opacity: 1 },
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
  'Bounce Y': {
    initial: { y: 0, opacity: 0 },
    animate: { y: [0, -30, 0], opacity: 1 },
    transition: {
      type: 'tween', // ✅ Changed from 'spring'
      ease: 'easeInOut',
    },
  },
  'Rotate X': {
    initial: { rotateX: 0 },
    animate: { rotateX: 360 },
    transition: { ease: 'easeInOut' },
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
  headerLogo: '7a93743a-2162-446d-9c5b-4a61bd5a058f',
  mainTitle: '3658fe77-e72c-4f5d-9c02-5369d1e3365c',
  mainVideo: '79cb28f2-d12e-452d-9548-28d134322b19',
};

export { animations, animationIds };
