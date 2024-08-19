import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Environment, MeshReflectorMaterial } from "@react-three/drei";
import Particles from "./components/Particles";
import { Cloud, Sky } from "@react-three/drei";
import { Suspense } from "react";


function App() {
  return (
  <>
    <Canvas shadows camera={{ position: [0, 20, 10], fov: 30 }}>
      {/* <color attach="background" args={["#ececec"]} /> */}
      <fog attach="fog" args={['#17171b', 0, 60]} />
      <color attach="background" args={['#17171b']} />
      <directionalLight castShadow intensity={1} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
        <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
      </directionalLight>
      <Experience />
      {/* <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[400, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={15}
            depthScale={1}
            minDepthThreshold={0.85}
            color="#151515"
            metalness={0.6}
            roughness={1}
          />
      </mesh> */}
      <Particles count={2000} />
      <Environment preset="dawn" />

        {/* <Sky /> */}
        <Suspense fallback={null}>
          <Cloud color={'#e6f0f3'} position={[-8, -2, -25]} speed={0.2} opacity={0.1} />
          {/* <Cloud color={'#e0e7d3'} position={[4, 2, -15]} speed={0.2} opacity={0.25} /> */}
          <Cloud color={'#dfd9c9'} position={[-4, 2, -10]} speed={0.2} opacity={0.2} />
          {/* <Cloud color={'#d7cee1'} position={[2, -2, -5]} speed={0.2} opacity={0.15} /> */}
          <Cloud color={'#e1ced9'} position={[4, 2, 0]} speed={0.2} opacity={0.15} />
        </Suspense>
    </Canvas>


    <div className="nav">
      <div className="nav-shop">shop</div>
      <div className="nav-agenda">agenda</div>
    </div>
{/* 
    <div className="frame">
      <img src="imgs/frame2.png" alt="Frame" />
    </div> */}
  </>
  );
}

export default App;
