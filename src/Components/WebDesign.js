import React, { Suspense } from 'react'

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Model } from './Scene1'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import styled from 'styled-components'

const Web = styled.div`
height:100vh;
scroll-snap-align:center;
display:flex;
justify-content:center;
`
const Container = styled.div`
 width:1400px;
  height: 100vh;
  display:flex;
  justify-content:space-between;
  position: relative;
`
const Desc=styled.p`
width: 200px;
height: 70px;
background-color: white;
color: black;
/* position: absolute; */
top:100px;
left:100px;
border-radius:10px;
padding:10px;
`

const WebDesign = () => {
  return (
    <Web>
      <Container>
       <Desc>Captain America  is one of the strongest avengers.</Desc>
        <Canvas>

          {/* <ambientLight intensity={2}/>
      <directionalLight position={[1,1,1]}/> */}

          <Stage environment="park" intensity={1} >
            <Model />
          </Stage>
          <OrbitControls autoRotate scale={4} />


        </Canvas>
      </Container>
    </Web>
  )
}

export default WebDesign
