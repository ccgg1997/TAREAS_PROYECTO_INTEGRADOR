import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Maik from "./integrantes/maik";
import Briggite from "./integrantes/briggitte";
import Aleja from "./integrantes/aleja";
import Valeria from "./integrantes/valeria";
import Andres from "./integrantes/andres";
import Jose from "./integrantes/jose";

const Experience = () => {
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={2} position={[10, 10, 100]} />
      <OrbitControls makeDefault />
      <Andres/>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[10, 0, 100]} />
        <meshStandardMaterial color="0xffff00" />
      </mesh>

      <mesh position={[0, 7.52, 30]}>
        <coneGeometry args={[2, 15, 5]} />
        <meshLambertMaterial color="brown" flatShading={true} />
      </mesh>
      <mesh position={[0, 14, 30]}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshToonMaterial color="green" />
      </mesh>
      <Maik />
      <Briggite/>
      <Aleja/>
      <Valeria/>
      <Jose/>
      
    </>
  );
};

export default Experience;
