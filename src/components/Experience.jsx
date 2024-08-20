import { Environment, MeshPortalMaterial, RoundedBox, Text, useCursor, useTexture, CameraControls } from "@react-three/drei";
import * as THREE from 'three'
import { Nebula } from "./Nebula";
import { Staff } from "./Staff";
import { Orbit } from "./Orbit";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import Screen from "./Screen";
import Greek from "./Greek";
import { useNavigate } from "react-router";

export const Experience = () => {

  const [active, setActive] = useState(null)
  const [hovered, setHovered] = useState(null)
  useCursor(hovered)
  const [clicked, setClicked] = useState(false);

  const controlsRef = useRef()
  const scene = useThree(state => state.scene)

  const titleRef = useRef()
  const titleRef2 = useRef()
  const videoRef = useRef()
  const greekRef = useRef()

  const navigate = useNavigate();

  useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3()
      scene.getObjectByName(active).getWorldPosition(targetPosition)
      controlsRef.current.setLookAt(
        0,
        0,
        5,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true
      )
    } else {
      controlsRef.current.setLookAt(
        0,
        0,
        10,
        0,
        0,
        0,
        true
      )
    }
  }, [active])


  useFrame((_state, delta) => {

    if (greekRef.current) {
      easing.damp3(
        greekRef.current.rotation,
        clicked ? [-Math.PI * 2, -Math.PI / 2.5, 0] : [0, -Math.PI / 2.5, 0],
        .75,
        delta
      )
    }

    if (titleRef.current && titleRef2.current) {
      easing.damp3(
        titleRef.current.position,
        clicked ? [-1.55, 100, 0] : [-1.55, -0.1, 0],
        .75,
        delta
      )
      easing.damp3(
        titleRef2.current.position,
        clicked ? [1.55, 100, 0] : [1.55, 0, 0],
        .75,
        delta
      )
    }

    if (videoRef.current) {
      easing.damp3(
        videoRef.current.position,
        clicked ? [0, -100, -5] : [0, -3, -5],
        .75,
        delta
      )
    }
  })



  return (
    <>
      <ambientLight intensity={1} />
      <Environment preset="sunset" />
      <CameraControls 
        ref={controlsRef} 
        maxPolarAngle={Math.PI / 2} 
        minPolarAngle={Math.PI / 6} 
        maxDistance={15}
        minDistance={7}
        maxAzimuthAngle={Math.PI / 7}
        minAzimuthAngle={-Math.PI / 7}
        enableDamping={true}
        panSpeed={0}
        enablePan={false}
        rotateSpeed={0.5}
        zoomSpeed={0.5}
        dampingFactor={1}
        // mouseButtons={{
        //   left: 1, // Disable panning with left mouse button
        //   middle: 1, // Disable panning with middle mouse button
        //   right: 1, // Disable panning with right mouse button
        // }}
      />

      {/* <PortalStage texture={'textures/refloruit.jpg'} title={'Refloruit'} color="white" active={active} setActive={setActive} hovered={hovered} setHovered={setHovered}>
        <Orbit scale={0.55} hovered={hovered === 'Refloruit'} />
      </PortalStage>

      <PortalStage texture={'textures/spiritum.jpg'} position-x={-2.5} rotation-y={Math.PI / 8} title={'Spiritum'} color="white"  active={active} setActive={setActive} hovered={hovered} setHovered={setHovered}>
        <Nebula scale={0.55} hovered={hovered === 'Spiritum'} />
      </PortalStage>

      <PortalStage texture={'textures/aquarum.jpg'} position-x={2.5} rotation-y={-Math.PI / 8} title={'Aquarum'} color="white"  active={active} setActive={setActive} hovered={hovered} setHovered={setHovered}>
        <Staff scale={0.06} hovered={hovered === 'Aquarum'} />
      </PortalStage> */}

      <PortalStage  initialPosition={[0, 0, -900]}
        clicked={clicked} texture={'textures/refloruit.jpg'} title={'Refloruit'} color={'white'} position={[0, 0, -2]} rotation={[0, 0, 0]} active={active} setActive={setActive} hovered={hovered} setHovered={setHovered}> 
        <Nebula scale={0.6} hovered={hovered === 'Refloruit'} />
      </PortalStage>

      <PortalStage  initialPosition={[20, 0, 0]}
        clicked={clicked} texture={'textures/aquarum.jpg'} title={'Aquarum'} color={'white'} position={[2, 0, 0]} rotation={[0, -Math.PI / 2, 0]} active={active} setActive={setActive} hovered={hovered} setHovered={setHovered}>
        <Orbit scale={0.5} hovered={hovered === 'Aquarum'} />
      </PortalStage>

      <PortalStage  initialPosition={[-20, 0, 0]}
        clicked={clicked} texture={'textures/spiritum.jpg'} title={'Spiritum'} color={'white'} position={[-2, 0, 0]} rotation={[0, Math.PI / 2, 0]} active={active} setActive={setActive} hovered={hovered} setHovered={setHovered}>
        <Orbit scale={0.5} hovered={hovered === 'Spiritum'} />
      </PortalStage>

      <PortalStage  initialPosition={[0, 20, 0]}
        clicked={clicked} texture={'textures/sapientiaem.jpg'} title={'Sapientam'} color={'white'} position={[0, 2, 0]} rotation={[-Math.PI / 2, 0, 0]} active={active} setActive={setActive} hovered={hovered} setHovered={setHovered}>
        <Nebula scale={0.6} hovered={hovered === 'Sapientam'} />
      </PortalStage>

      <PortalStage  initialPosition={[0, -20, 0]}
        clicked={clicked} texture={'textures/templum.jpg'} title={'Templum'} color={'white'} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} active={active} setActive={setActive} hovered={hovered} setHovered={setHovered}>
        <Staff scale={0.06} hovered={hovered === 'Templum'} />
      </PortalStage>


      <>
              <Text ref={titleRef} font={'fonts/Cardinal.ttf'} fontSize={1.15} position={[-1.55, -0.1, 0]} anchorY={'bottom'} >
                Grego
                <meshBasicMaterial color={'white'} toneMapped={false}  />
              </Text>
              <Text ref={titleRef2} font={'fonts/Aron-SemiBold.ttf'} fontSize={1} position={[1.55, 0, 0]} anchorY={'bottom'} >
                techno
                <meshBasicMaterial color={'white'} toneMapped={false}  />
              </Text>
      </>

        {!clicked && (
              <Text font={'fonts/Cinzel.ttf'} fontSize={0.25} position={[0, -.5, 0]} anchorY={'bottom'} onClick={() => setClicked(true)} onPointerEnter={() => setHovered('cta')} onPointerLeave={() => setHovered(null)}>
              ENTER EP
              <meshBasicMaterial color={'white'} toneMapped={false} />
            </Text>
        )}

        {clicked && (
          <>
          <Text font={'fonts/Cinzel.ttf'} fontSize={0.15} position={[-4, 0, 0]} anchorY={'bottom'} onClick={() => navigate('/film')} onPointerEnter={() => setHovered('cta')} onPointerLeave={() => setHovered(null)}>
              Film
              <meshBasicMaterial color={'white'} toneMapped={false} />
            </Text>
            <Text font={'fonts/Cinzel.ttf'} fontSize={0.15} position={[4, 0, 0]} anchorY={'bottom'} onClick={() => setClicked(false)} onPointerEnter={() => setHovered('cta')} onPointerLeave={() => setHovered(null)}>
              Home
              <meshBasicMaterial color={'white'} toneMapped={false} />
            </Text>
          </>
        )}

        <Greek ref={greekRef} position={[-.85, -3.2, -5]} scale={[3.5,3.5,3.6]} rotation={[0, -Math.PI / 2.5, 0]} />
        {/* <GreekV2 position={[0, -3, -5]} scale={[1,1,1]} /> */}
        <Screen ref={videoRef} clicked={clicked} />
    </>
  );
};


const PortalStage = ({ initialPosition, clicked, children, texture, title, color, active, setActive, hovered, setHovered, ...props}) => {
  const map = useTexture(texture)
  const portalMaterial = useRef()
  const group = useRef()

  useFrame((_state, delta) => {
    const worldOpen = active === title 
    easing.damp(portalMaterial.current, 'blend', worldOpen ? 1 : 0, 0.2, delta)

    easing.damp3(
      group.current.position,
      clicked ? props.position : initialPosition,
      0.4,
      delta
    )
  })


  return (
    <group ref={group} {...props}>
      <Text font={'fonts/Cinzel.ttf'} fontSize={0.15} position={[0, -1.3, 0.051]} anchorY={'bottom'}>
        {title}
        <meshBasicMaterial color={color} toneMapped={false} />
      </Text>
      <RoundedBox 
        name={title} 
        args={[2,2,0.1]} 
        onDoubleClick={() => setActive(active === title ? null : title)}
        onPointerEnter={() => setHovered(title)}
        onPointerLeave={() => setHovered(null)}
      >
        {/* <planeGeometry args={[2, 3]} /> */}
        <MeshPortalMaterial  ref={portalMaterial} side={THREE.DoubleSide} > 
          <ambientLight intensity={1} />
          <Environment preset="sunset" />
          {children}
          <mesh>
            <sphereGeometry args={[5, 64,  64]} />
            <meshStandardMaterial map={map} side={THREE.BackSide}  />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  )
}