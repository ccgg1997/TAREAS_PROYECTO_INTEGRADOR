import React from 'react';
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Briggite = () => {
  const sphereRef = useRef(null);

  useFrame((state, delta) => {

    sphereRef.current.position.x = 5 * Math.cos(state.clock.getElapsedTime());

    sphereRef.current.rotation.y += 0.3 * delta; 
  });

  return (
    <>
      <mesh position={[0, 2, 0]} ref={sphereRef} >
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial color="green" />
      </mesh>
    </>
  );
};

export default Briggite;
