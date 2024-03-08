import { OrbitControls } from "@react-three/drei";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={2} position={[10, 10, 100]} />
      <OrbitControls makeDefault />
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[10, 0, 100]} />
        <meshStandardMaterial color="0xffff00" />
      </mesh>
      <mesh position={[0, 1.01, 40]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshLambertMaterial color="blue" />
      </mesh>
      <mesh position={[0, 7.52, 30]}>
        <coneGeometry args={[2, 15, 5]} />
        <meshLambertMaterial color="brown" flatShading={true} />
      </mesh>
      <mesh position={[0, 14, 30]}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshToonMaterial color="green" />
      </mesh>
    </>
  );
};

export default Experience;
