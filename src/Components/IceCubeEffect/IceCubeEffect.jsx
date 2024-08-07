// IceCubeEffect.js
import React from 'react';
import IceCube from '../IceCube/IceCube';

const IceCubeEffect = () => {
  // Generate random ice cubes
  const iceCubes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth, // Random x position
    delay: Math.random() * 5000,         // Random delay for each ice cube
  }));

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden',
      zIndex: -1, // Ensure it's behind other components
    }}>
      {iceCubes.map(({ id, x, delay }) => (
        <IceCube key={id} x={x} delay={delay} />
      ))}
    </div>
  );
};

export default IceCubeEffect;
