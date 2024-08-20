import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Cloud } from "@react-three/drei";
import { Suspense } from "react";
import { Experience } from '../components/Experience';
import Particles from '../components/Particles'
import { useRef, useEffect } from 'react';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { NavLink } from 'react-router-dom';

function Home() {

let screen = useRef(null);
let body = useRef(null);

useEffect(() => {
    var tl = new TimelineMax();
    tl.to(screen, {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 1,
      left: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    });
    tl.set(screen, { left: "-100%" });
    TweenMax.to(body, .3, {css: {
      opacity: "1",
      pointerEvents: "auto",
      ease: Power4.easeInOut
    }}).delay(2);
    return () => {
      TweenMax.to(body, 1, {css: {
        opacity: "0",
        pointerEvents: 'none'
      }});
  }
  });

  return (
  <React.Fragment>

    <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}>
        </div>
    </div>
    <div className="Home" ref={(el) => (body = el)}>

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
      <Environment preset="dawn" />

        {/* <Sky /> */}
        <Suspense fallback={null}>
          <Cloud color={'#e6f0f3'} position={[-8, -2, -25]} speed={0.2} opacity={0.1} />
          {/* <Cloud color={'#e0e7d3'} position={[4, 2, -15]} speed={0.2} opacity={0.25} /> */}
          <Cloud color={'#dfd9c9'} position={[-4, 2, -10]} speed={0.2} opacity={0.2} />
          {/* <Cloud color={'#d7cee1'} position={[2, -2, -5]} speed={0.2} opacity={0.15} /> */}
          <Cloud color={'#e1ced9'} position={[4, 2, 0]} speed={0.2} opacity={0.15} />
        </Suspense>

        <Particles count={2000} />
    </Canvas>

    <div className="nav">
      <div className="nav-shop">SHOP &#10548;</div>
      <NavLink to="/agenda" className="button nav-agenda">AGENDA</NavLink>
    </div>

    </div>
  </React.Fragment>
  );
}

export default Home

