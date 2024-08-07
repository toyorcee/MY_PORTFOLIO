// IceCube.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const IceCube = ({ x, delay }) => {
  // Calculate starting and ending positions
  const yStart = window.innerHeight;
  const yEnd = -50;

  const props = useSpring({
    from: { opacity: 0, transform: `translateY(${yStart}px)` },
    to: { opacity: 1, transform: `translateY(${yEnd}px)` },
    config: { duration: 5000 },
    reset: true,
    loop: true, // Make the animation loop infinitely
    delay: delay,
  });

  return (
    <animated.div
      style={{
        ...props,
        width: '50px',
        height: '50px',
        backgroundColor: 'skyblue',
        position: 'absolute',
        borderRadius: '10%',
        left: x,
        boxShadow: '0 0 15px rgba(0, 191, 255, 0.7)', // Shine effect
      }}
    />
  );
};

export default IceCube;
