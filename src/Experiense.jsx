import { OrbitControls } from "@react-three/drei";

const Experiense = () => {
  return (
    <>
    <ambientLight intensity={0.5} />
    <directionalLight intensity={2} position={[10, 10, 100]} />
    <OrbitControls makeDefault/>
    <mesh position={[0,0,0]}>
      <boxGeometry args={[10, 0, 100]} />
      <meshStandardMaterial color="0xffff00" />
    </mesh>
    <mesh position={[0,1.01,40]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="purple" />
    </mesh>
    </>
  );
}

export default Experiense;