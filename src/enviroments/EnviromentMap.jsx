import { Cloud, Environment, Sky, Sparkles } from "@react-three/drei";

export default function EnviromentMap(){

    return (
        <>
            <Environment
                files={"/assets/hdris/sky.hdr"}
                preset={null}
                background={true}
                ground={
                    {
                        height:300,
                        scale:2500,
                        radius:4500
                    
                    }
                }
            />
            <Sparkles
            color={"white"}
            count={100}
            size={80}
            fade={false}
            scale={10}
            position={[10, 5, 10]}

            />

            <Cloud
            opacity={0.5}
            speed={0.5}
            width={50}
            depth={5}
            segments={20}
            position={[10, 5, 150]}
            />
       </>
    )
}