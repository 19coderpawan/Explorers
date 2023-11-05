import React from 'react'
import { Model } from './Scene3'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import styled from 'styled-components'

const Thanos=styled.div`
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
bottom:100px;
left:100px;
border-radius:10px;
padding:10px;
`

const Product = () => {
  return (
    <Thanos>
      <Container>
        <Desc>
          Thanos is one of the Strongest Villans in the MCU.
        </Desc>
        <Canvas>
          <OrbitControls autoRotate/>
          <Stage environment="city" intensity={1}>
            <Model/>
          </Stage>
        </Canvas>
      </Container>
    </Thanos>
  )
}

export default Product
