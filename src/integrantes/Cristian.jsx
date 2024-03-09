import React from 'react';

const Cristian = () => {
    return (
        <>
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

export default Cristian;
