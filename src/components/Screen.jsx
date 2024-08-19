import { useEffect } from "react"
import { forwardRef } from "react"
import { useState } from "react"
import * as THREE from 'three'
import { EffectComposer, GodRays, Bloom } from '@react-three/postprocessing'

function Screen() {
    const [material, set] = useState()
    return (
      <>
        <Emitter ref={set} />
        {material && (
          <EffectComposer disableNormalPass multisampling={8}>
            <GodRays sun={material} exposure={0.34} decay={0.8} blur />
            <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={1} />
          </EffectComposer>
        )}
      </>
    )
  }

  const Emitter = forwardRef((props, forwardRef) => {
    const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/video/rs.mp4', playsInline: true, crossOrigin: 'Anonymous', loop: true, muted: true }))
    useEffect(() => {
        video.play()
        video.playsInline = true;
        video.setAttribute("webkit-playsinline", "webkit-playsinline");
        video.setAttribute("playsinline", "");
        video.setAttribute("playsinline", true);
    }, [video])
    return (
      <mesh ref={forwardRef} position={[0, -3, -5]} rotation={[-Math.PI / 2.5, 0, 0]} {...props}>
        <planeGeometry args={[16, 10]} />
        <meshBasicMaterial transparent opacity={0.8}>
          <videoTexture attach="map" args={[video]} colorSpace={THREE.SRGBColorSpace} />
        </meshBasicMaterial>
        <mesh scale={[16.05, 10.05, 1]} position={[0, 0, -0.01]}>
          <planeGeometry />
          <meshBasicMaterial color="black"  />
        </mesh>
      </mesh>
    )
  })


  export default Screen