/*
  Framer Motion Animations, Transitions, and Variants definitions
 */

export const transitions = {
  spring: {
    type: 'spring',
    damping: 20,
    stiffness: 300,
  },
  springStiff: {
    type: 'spring',
    damping: 30,
    stiffness: 500,
  },
  springStiffer: {
    type: 'spring',
    damping: 40,
    stiffness: 700,
  },
  springDamp: {
    type: 'spring',
    damping: 30,
    stiffness: 300,
  },
  easeOut: {
    type: 'tween',
    ease: 'easeOut',
    duration: 0.2,
  },
}

export const transitionVariants = {
  fadeIn: (duration = 0.2) => ({
    opacity: 1,
    transition: {
      duration: duration,
      ease: 'easeOut',
    },
  }),
  fadeOut: (duration = 0.2) => ({
    opacity: 0,
    transition: {
      duration: duration,
      ease: 'easeIn',
    },
  }),
  growIn: (duration = 0.2) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: duration,
      ease: 'easeOut',
    },
  }),
  growOut: (duration = 0.2) => ({
    scale: 0.9,
    opacity: 0,
    transition: {
      duration: duration,
      ease: 'easeIn',
    },
  }),
  scaleIn: {
    scale: 1,
    opacity: 1,
  },
  scaleOut: {
    scale: 0,
    opacity: 0,
  },
}

export const positionVariants = {
  initialLeft: {
    x: -64,
    opacity: 0,
  },
  initialRight: {
    x: 64,
    opacity: 0,
  },
  initialTop: {
    y: -64,
    opacity: 0,
  },
  floatingTop: {
    y: 16,
    opacity: 1,
    transition: transitions.springStiff,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
}

export const spawnVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      opacity: {
        ...transitions.easeOut,
        delay,
      },
      y: {
        ...transitions.spring,
        delay,
      },
    },
  }),
}
