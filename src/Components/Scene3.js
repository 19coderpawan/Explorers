/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 scene.gltf 
Author: TheSitthikorn (https://sketchfab.com/TheSitthikorn)
License: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
Source: https://sketchfab.com/3d-models/thanos-7dca464eb47a4048bdba16a9f942cc48
Title: Thanos
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene3.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={1}>
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh geometry={nodes.Object_7.geometry} material={materials['Material.001']} skeleton={nodes.Object_7.skeleton} />
        <skinnedMesh geometry={nodes.Object_8.geometry} material={materials['Material.003']} skeleton={nodes.Object_8.skeleton} />
        <skinnedMesh geometry={nodes.Object_9.geometry} material={materials['Material.003']} skeleton={nodes.Object_9.skeleton} />
        <skinnedMesh geometry={nodes.Object_10.geometry} material={materials['Material.004']} skeleton={nodes.Object_10.skeleton} />
        <skinnedMesh geometry={nodes.Object_11.geometry} material={materials['Material.002']} skeleton={nodes.Object_11.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
