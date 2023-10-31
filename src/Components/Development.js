import React from 'react'
import { Model } from './Scene2'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import styled from 'styled-components'

const Dev=styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;

`
const Container=styled.div`
 width:1400px;
  height: 100vh;
  display:flex;
  justify-content:space-between;
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

const Development = () => {
  return (
    <Dev>
      <Container>
        <Desc>
          Iron man is one of the Strongest Characters in the MCU.
        </Desc>
        <Canvas>
          <OrbitControls autoRotate/>
          <Stage environment="city" intensity={1}>
            <Model/>
          </Stage>
        </Canvas>
      </Container>
    </Dev>
  )
}

export default Development
