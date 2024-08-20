import React from 'react'
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Cloud } from '@react-three/drei';

function Agenda() {
    let screen = useRef(null);
    let body = useRef(null);
    useEffect(() => {
      var tl = new TimelineMax();
      tl.to(screen, {
        duration: 1.2,
        height: "100%",
        ease: Power3.easeInOut,
      });
      tl.to(screen, {
        duration: 1,
        top: "100%",
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
            <div className="load-screen1" ref={(el) => (screen = el)}></div>
        </div>
        <div ref={(el) => (body = el)} className="Agenda">
            <Canvas className='canvas' shadows camera={{ position: [0, 20, 10], fov: 30 }}>
              <directionalLight castShadow intensity={1} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
                <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
              </directionalLight>
              <Suspense fallback={null}>
              <Cloud color={'#e0e7d3'} position={[1, 2, -15]} speed={0.2} opacity={0.25} />
              <Cloud color={'#dfd9c9'} position={[-4, 1, -10]} speed={0.2} opacity={0.2} />
              <Cloud color={'#e1ced9'} position={[1, 0, 0]} speed={0.2} opacity={0.15} />
              <Cloud color={'#e1ced9'} position={[3, 0, 0]} speed={0.2} opacity={0.15} />
            </Suspense>
            </Canvas>
            <NavLink to="/" className="button nav arrow">&#8592;</NavLink>
        </div>
    </React.Fragment>
  )
}


export default Agenda