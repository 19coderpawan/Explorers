import React from 'react'
import styled from 'styled-components'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, RenderTexture, Text } from '@react-three/drei'
// import { Color } from 'three'
/* In this file we are going to see how we can create three js how we can import three js 3D objects in your 
  react for that you have to install certain files these files are-:
    1. three
    2. @react-three/fiber
    3.@react-three/drei */


const TestContainer=styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  /* background-image: url("../public/img/constellation.jpg"); */
  /* background-color: red; */
`

const Testthree = () => {
  return (
    <TestContainer className='testContainer'>
        {/* this component is the react fiber component it is like a frame that will include only 
           three js coponent it will not contain any html elements. */}
        <Canvas>
            <OrbitControls autoRotate={true}/>
            {/* to include the color in the material */}
            <ambientLight intensity={2}/>
            {/* to see the edges of the material */}
            <directionalLight position={[1,2,3]}/>
          <mesh>
            <boxGeometry args={[1,1,1]} Color="red"/>
            {/* to add the color you have to include materials*/}
             <meshStandardMaterial >
             {/* to include the text in the model */}
             <RenderTexture attach="map">
                <color attach="background" args={["red"]} />
                <Text fontSize={3} color="blue">
                    Pawan 
                </Text>
             </RenderTexture>
             </meshStandardMaterial>
          </mesh>
        </Canvas>
    </TestContainer>
  )
}

export default Testthree
