import { CameraControls, Environment, MeshPortalMaterial, OrbitControls, RoundedBox, Text, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { Nebula } from "./Nebula";
import { Staff } from "./Staff";
import { Orbit } from "./Orbit";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";

export const Experience = () => {

  const [active, setActive] = useState(null)
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

      <PortalStage texture={'textures/refloruit.jpg'} title={'Refloruit'} color="white" active={active} setActive={setActive}>
        <Orbit scale={0.55} />
      </PortalStage>

      <PortalStage texture={'textures/spiritum.jpg'} position-x={-2.5} rotation-y={Math.PI / 8} title={'Spiritum'} color="white"  active={active} setActive={setActive}>
        <Nebula scale={0.55} />
      </PortalStage>

      <PortalStage texture={'textures/aquarum.jpg'} position-x={2.5} rotation-y={-Math.PI / 8} title={'Aquarum'} color="white"  active={active} setActive={setActive}>
        <Staff scale={0.06} />
      </PortalStage>

    </>
  );
};


const PortalStage = ({ children, texture, title, color, active, setActive, ...props}) => {
  const map = useTexture(texture)
  const portalMaterial = useRef()

  useFrame((_state, delta) => {
    const worldOpen = active === title 
    easing.damp(portalMaterial.current, 'blend', worldOpen ? 1 : 0, 0.2, delta)
  })


  return (
    <group {...props}>
      <Text font={'fonts/Cinzel.ttf'} fontSize={0.15} position={[0, -1.3, 0.051]} anchorY={'bottom'}>
        {title}
        <meshBasicMaterial color={color} toneMapped={false} />
      </Text>
      <RoundedBox name={title} args={[2,3,0.1]} onDoubleClick={() => setActive(active === title ? null : title)}>
        {/* <planeGeometry args={[2, 3]} /> */}
        <MeshPortalMaterial ref={portalMaterial} side={THREE.DoubleSide} > 
          <ambientLight intensity={1} />
          <Environment preset="sunset" />
          {children}
          <mesh>
            <sphereGeometry args={[5, 64,  64]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  )
}