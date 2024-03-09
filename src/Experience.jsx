import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Maik from "./integrantes/maik";
import Briggite from "./integrantes/briggitte";
import Aleja from "./integrantes/aleja";
import Valeria from "./integrantes/valeria";
import Andres from "./integrantes/andres";
import Jose from "./integrantes/jose";
import Cristian from "./integrantes/Cristian";
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

      <Cristian/>
      <Maik />
      <Briggite/>
      <Aleja/>
      <Valeria/>
      <Jose/>
      
    </>
  );
};

export default Experience;
