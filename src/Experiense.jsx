import { OrbitControls } from "@react-three/drei";

const Experiense = () => {
  return (
    <>
    <OrbitControls makeDefault/>
    <mesh>
      <boxGeometry args={[10, 0, 100]} />
      <meshBasicMaterial color="0xffff00" />
    </mesh>
    </>
  );
}

export default Experiense;