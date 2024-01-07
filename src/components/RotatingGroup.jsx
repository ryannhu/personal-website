import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useFrame } from '@react-three/fiber';

const RotatingGroup = ({ children }) => {
  const groupRef = useRef();
  let frame = 0; // Frame counter

  useFrame(() => {
    if (groupRef.current) {
      frame += 0.001; // Adjust this value to change the speed of the oscillation
      const oscillation = Math.sin(frame); // Oscillation between -1 and 1
      const amplitude = 0.26; // Adjust this value to change the range of the oscillation

      // Applying oscillation to the x-rotation
      groupRef.current.rotation.x = oscillation * amplitude;
      // You can still keep the y-rotation if you want continuous rotation along with the oscillation
      groupRef.current.rotation.y += 0.005; 
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

RotatingGroup.propTypes = {
  children: PropTypes.node.isRequired
};

export default RotatingGroup;
