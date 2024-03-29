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
import World from "./world/World";
import Lights from "./lights/Lights";
import EnviromentMap from "./enviroments/EnviromentMap";

const Experience = () => {
  
  return (
    <>
      <Lights />
      <EnviromentMap />
      <OrbitControls makeDefault />
      <Andres/>
      <Maik />
      <Briggite/>
      <Aleja/>
      <Valeria/>
      <Jose/>
      <Cristian/>
      <World  />
      
    </>
  );
};

export default Experience;
