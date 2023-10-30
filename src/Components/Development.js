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

const Development = () => {
  return (
    <Dev>
      <Container>
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
