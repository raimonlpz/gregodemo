/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/models/Greek/scene.gltf -o src/components/Greek.jsx -r public 
Author: Samuel Francis Johnson (Oneironauticus) (https://sketchfab.com/oneironauticus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/broken-ancient-greek-column-debris-1ad492ad20164a108d6d37c83adba223
Title: Broken ancient greek column - debris
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'

const Greek = forwardRef((props, forwardRef) => {
  const { nodes, materials } = useGLTF('/models/Greek/scene.gltf')
  return (
    <group {...props} dispose={null} ref={forwardRef}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Debris_Column_cell_BAKED} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.Debris_Column_cell_BAKED} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Debris_Column_cell_BAKED} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Debris_Column_cell_BAKED} />
    </group>
  )
})

useGLTF.preload('/models/Greek/scene.gltf')

export default Greek

