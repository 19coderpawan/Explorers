/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 scene.gltf 
Author: ilyafom1 (https://sketchfab.com/ilyafom1)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chair-9e3a202ac8ac4fd58bdd096fd7d6fc62
Title: Chair
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null} scale={[0.5, 0.5, 0.5]}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.7}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials['Material.003']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')