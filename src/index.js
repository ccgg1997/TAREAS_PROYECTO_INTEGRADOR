import { createRoot } from 'react-dom/client';
import Experience from './Experience';
import './styles.css';
import { Canvas } from '@react-three/fiber';

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Canvas
      shadows={true}
      camera={{ position: [10, 10, 200] }}
    >
      <Experience />
    </Canvas>    
  </>
);