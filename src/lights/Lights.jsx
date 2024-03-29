import { Color } from "three";

const Lights = () => {
  return (
    <>
        <ambientLight  intensity={1} />
        
        {/* esta luz es */}
        <directionalLight position={[2, 10,0]}
        castShadow={true}
        color={new Color('#8f00ff')}
        intensity={2} 
        />

        {/* esta luz es una luz puntual pero es costosa a nivel de rendimiento */}
        {/* <pointLight position={[0, 10, 40]} 
        color={new Color('#8f00ff')}
        intensity={1000} /> */}

        {/* <spotLight position={[0, 10, 40]}
        angle={Math.PI/3}
        color={"yellow"}
        intensity={500}
        /> */}

        <hemisphereLight 
        position={[2, 10, -2]}
        intensity={3}
        color={"red"}
        skyColor={"blue"}
        />

    </>
  );
}

export default Lights;