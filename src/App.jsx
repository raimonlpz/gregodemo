import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Environment, MeshReflectorMaterial } from "@react-three/drei";


function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
      {/* <color attach="background" args={["#ececec"]} /> */}
      <fog attach="fog" args={['#17171b', 30, 40]} />
      <color attach="background" args={['#17171b']} />
      <directionalLight castShadow intensity={1} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
        <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
      </directionalLight>
      <Experience />
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
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
        </mesh>
        <Environment preset="dawn" />
    </Canvas>
  );
}

export default App;
