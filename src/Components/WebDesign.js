// import React, { Suspense } from 'react'
import React from 'react'

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Model } from './Scene1'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,  Stage } from '@react-three/drei'
import styled from 'styled-components'

const Web = styled.div`
height:100vh;
scroll-snap-align:center;
display:flex;
justify-content:center;
`
const Container = styled.div`
 width: 100%;
  max-width: 1600px;
  height: 100vh;
  display: flex;
  flex-direction: column-reverse; /* Reverse the order for smaller screens */
  justify-content: space-between;
  @media only screen and (max-width: 786px) {
    flex-direction: column; /* Change to column layout for smaller screens */
    align-items: center;
    justify-content: center;
    /* max-width: 2000px; */
    /* border:none; */
  }
`
const Desc=styled.p`
 width: 100%;
  max-width: 700px;
  height: 90px;
  background-color: white;
  color: black;
  border-radius: 10px;
  padding: 10px;
  margin: 30px; /* Add margin for better spacing */
  overflow: hidden;
  @media only screen and (max-width: 786px) {
    padding:30px;
    font-size:15px;
    /* width:100%; */
    height: 40px;
    border-radius: 30%;
    /* max-width: 900px; */
    text-align: center;
  }
`
const Canvascontainer= styled.div`
 flex-grow: 1;
`

const WebDesign = () => {
  return (
    <Web>
      <Container>
       <Desc>Captain America  is one of the strongest avengers.</Desc>
       <Canvascontainer>
        <Canvas>

          {/* <ambientLight intensity={2}/>
      <directionalLight position={[1,1,1]}/> */}

          <Stage environment="park" intensity={1} >
            <Model />
          </Stage>
          <OrbitControls autoRotate scale={1} />


        </Canvas>
       </Canvascontainer>
      </Container>
    </Web>
  )
}

export default WebDesign

