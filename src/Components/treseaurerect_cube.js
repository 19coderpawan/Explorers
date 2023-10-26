import React ,{useRef}from 'react'
import {  PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Treseaurerectcube = () => {
    /* Now to apply animation on the text in the cube we are going to use the useFrame hook of the react-three-fiber
      */
     const ref=useRef();
     useFrame((state)=>{
        ref.current.position.y=Math.sin(state.clock.elapsedTime);
     })
    return (
        <mesh>
            {/* <boxGeometry args={[2, 2, 2]} Color="aqua" /> */}
            <boxGeometry  Color="aqua" />

            {/* to add the color you have to include materials */}
            <meshStandardMaterial >
                {/* to include the text in the model */}
                <RenderTexture attach="map">
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 0, 6]} />
                    <color attach="background" args={["#3457D5"]} />
                    <Text ref={ref} fontSize={1} color="#0039a6">
                        ~~~~~~~~~~
                    </Text>
                    <Text ref={ref} fontSize={1} color="#0039a6">
                        ~~~~~~~~~
                    </Text>
                    <Text ref={ref} fontSize={1} color="#0039a6">
                        ~~~~~~~~~~
                    </Text>
                    <Text ref={ref} fontSize={1} color="#0039a6" >
                        ~~~~~~~~~~
                    </Text>
                    <Text ref={ref} fontSize={1} color="#0039a6" position={[-1,-1,-1]}>
                        ||||||||||
                    </Text>
                    <Text ref={ref} fontSize={1} color="#0039a6" position={[-1,-1,-1]}>
                        ||||||||||
                    </Text>
                    <Text ref={ref} fontSize={1} color="#0039a6" position={[-1,-1,-1]}>
                        ||||||||||
                    </Text>
                    <Text ref={ref} fontSize={1} color="#0039a6" position={[1,1,1]}>
                        ||||||||||
                    </Text>
                    <Text ref={ref} fontSize={1} color="#0039a6"  position={[1,1,1]}>
                        ||||||||||
                    </Text>
                    <Text ref={ref} fontSize={1} color="#0039a6">
                        ^^^^^^^^^^^
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}

export default Treseaurerectcube
