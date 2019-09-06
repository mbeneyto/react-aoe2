const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const enterFromRight = {
  exit: { x: 50, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.75, ...transition } }
};

const enterFromBottom = {
  exit: { y: '50%', opacity: 0, transition },
  enter: { y: '0%', opacity: 1, transition }
};

export default {
  enterFromRight,
  enterFromBottom
};
