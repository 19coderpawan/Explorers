// import React ,{useRef}from 'react'
import React from 'react'
import {  PerspectiveCamera, RenderTexture ,Text} from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'
// import * as THREE from 'three';

const Treseaurerectcube = () => {
    /* Now to apply animation on the text in the cube we are going to use the useFrame hook of the react-three-fiber
      */
    // const textureLoader = new THREE.TextureLoader();
    // const texture = textureLoader.load('../img/dragon.jpg');
    //  const ref=useRef(); //to get the access or the reference of the text.
    //  useFrame((state)=>{
    //     ref.current.position.y=Math.sin(state.clock.elapsedTime);
    //  })
    return (
        // <mesh position={[-2,0,0]}> you can set the position if you want to add multiple mesh object with different
        // positon.
        <mesh >
            {/* <boxGeometry args={[2, 2, 2]} Color="aqua" /> */}
            <boxGeometry  Color="aqua" />

            {/* to add the color you have to include materials */}
            <meshStandardMaterial   >
                {/* to include the text in the model */}
                <RenderTexture >
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 0, 6]} /> 
                    <color attach="background" args={["aqua"]} />
                     <Text  fontSize={1} color="#0039a6">
                        pawan
                    </Text> 
                 </RenderTexture> 
            </meshStandardMaterial>
        </mesh>       
    )
}

export default Treseaurerectcube
