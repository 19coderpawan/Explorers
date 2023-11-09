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
    /* height: 50%; */
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
 flex-grow: 3;
`

const Product = () => {
  return (
    <Thanos>
      <Container>
        <Desc>
          Thanos is one of the Strongest Villans in the MCU.
        </Desc>
        <Canvascontainer>
        <Canvas>
          <OrbitControls autoRotate/>
          <Stage environment="city" intensity={1}>
            <Model/>
          </Stage>
        </Canvas>
        </Canvascontainer>
      </Container>
    </Thanos>
  )
}

export default Product
