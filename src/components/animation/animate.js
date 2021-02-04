export const bgVariants = {
  hidden: {
    x: '-100vw',
  },
  show: {
    x: '0',
    transition: { duration: 1.5 },
  },
};

export const slideToLeft = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: 'easeOut' },
  },
};

export const slideToRight = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: 'easeOut' },
  },
};

export const slideToTop = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: 'easeIn' },
  },
};

export const slideToDown = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: 'easeIn' },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.9, ease: 'easeIn' },
  },
};

export const fastFade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeIn' },
  },
};

export const delayFade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1, ease: 'easeIn' },
  },
};

export const delayOneFade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { delay: 1, duration: 1, ease: 'easeIn' },
  },
};
