import React from 'react';
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";



const Maik = () => {
    const boxRef1 = useRef(null)

  useFrame((state, delta) => {
    boxRef1.current.rotation.x += 1*delta
    boxRef1.current.rotation.y += 1*delta
  })
  return (
        <>
            <mesh position={[0, 5, -15]} ref={boxRef1}>
                <torusGeometry args={[3, 2, 8, 100]} />
                <meshPhongMaterial color="red" />
            </mesh>
        </>
    );
};

export default Maik;
