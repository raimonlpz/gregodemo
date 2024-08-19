import { CameraControls, Environment, MeshPortalMaterial, OrbitControls, RoundedBox, Text, useCursor, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { Nebula } from "./Nebula";
import { Staff } from "./Staff";
import { Orbit } from "./Orbit";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import Screen from "./Screen";

export const Experience = () => {

  const [active, setActive] = useState(null)
  const [hovered, setHovered] = useState(null)
  useCursor(hovered)
  const [clicked, setClicked] = useState(false);

  const controlsRef = useRef()
  const scene = useThree(state => state.scene)

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

  return (
    <>
      <ambientLight intensity={1} />
      <Environment preset="sunset" />
      {/* <OrbitControls /> */}
      <CameraControls ref={controlsRef} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 6} />

      {/* <PortalStage texture={'textures/refloruit.jpg'} title={'Refloruit'} color="white" active={active} setActive={setActive} hovered={hovered} setHovered={setHovered}>
        <Orbit scale={0.55} hovered={hovered === 'Refloruit'} />
      </PortalStage>

      <PortalStage texture={'textures/spiritum.jpg'} position-x={-2.5} rotation-y={Math.PI / 8} title={'Spiritum'} color="white"  active={active} setActive={setActive} hovered={hovered} setHovered={setHovered}>
        <Nebula scale={0.55} hovered={hovered === 'Spiritum'} />
      </PortalStage>

      <PortalStage texture={'textures/aquarum.jpg'} position-x={2.5} rotation-y={-Math.PI / 8} title={'Aquarum'} color="white"  active={active} setActive={setActive} hovered={hovered} setHovered={setHovered}>
        <Staff scale={0.06} hovered={hovered === 'Aquarum'} />
      </PortalStage> */}

      <PortalStage  initialPosition={[0, 0, -800]}
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


        {!clicked && (
          <>
            <Text font={'fonts/Cardinal.ttf'} fontSize={1.15} position={[-1.55, -0.1, 0]} anchorY={'bottom'} >
              Grego
              <meshBasicMaterial color={'white'} toneMapped={false}  />
            </Text>
            <Text font={'fonts/Aron-SemiBold.ttf'} fontSize={1} position={[1.55, 0, 0]} anchorY={'bottom'} >
              techno
              <meshBasicMaterial color={'white'} toneMapped={false}  />
            </Text>

            <Text font={'fonts/Cinzel.ttf'} fontSize={0.25} position={[0, -.5, 0]} anchorY={'bottom'} onClick={() => setClicked(true)} onPointerEnter={() => setHovered('cta')} onPointerLeave={() => setHovered(null)}>
              ENTER EP
              <meshBasicMaterial color={'white'} toneMapped={false} />
            </Text>

            <Screen />
          </>
        )}
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