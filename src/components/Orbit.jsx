/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 public/models/Orbit/Orbit.gltf -o src/components/Orbit.jsx -r public 
Author: tamminen (https://sketchfab.com/tamminen)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/water-orb-30ca9b8469da4a49ab127b6bb5b87d61
Title: Water Orb
*/

import React, { useEffect } from 'react'
import { useGLTF, useAnimations, Environment } from '@react-three/drei'

export function Orbit({ hovered, ...props }) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/models/Orbit/Orbit.gltf')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['RootAction'].reset().fadeIn(0.5).play();
    actions['RootAction'].timeScale = hovered ? 4 : 1
    return () => {
      actions['RootAction'].reset().fadeOut(0.5)
    }
  }, [hovered])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Root_2">
                <group name="Icosphere_0">
                  <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.material} />
                </group>
                <group name="Icosphere001_1" scale={0.701}>
                  <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.material_1} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Orbit/Orbit.gltf')