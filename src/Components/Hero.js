import React from 'react'
import Navbar from './Navbar'
import {Canvas} from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere} from '@react-three/drei'
import { Material } from 'three'

const Hero = () => {
  return (
    <div className='hero_Section'>
       <Navbar/>
       <div className="hero_Container">
        <div className="left">
          <h1 style={{textTransform:"uppercase",color:"transparent",WebkitTextStroke:"1px white"}}>Welcome. To. Galaxy</h1>
          <div className="what_we_do">
            <img src="./img/line.png" alt="" className="line" />
           <h2 className='subtitle'>What we do</h2>
          </div>
           <p className='info'>Here we explore the Madness of this vast and beautifull Universe. 
          ?</p>
           <button>Learn More</button>
        </div>
        <div className="right">
          <Canvas camera={{fov:25, position:[6,6,6]}}>
            <OrbitControls autoRotate />
            <ambientLight intensity={4}/>
            <directionalLight position={[3,2,1]}/>
            <Sphere args={[1,100,200]} scale={1.6}>
              {/* now to apply distroction in the sphere me have to use this component. */}
              <MeshDistortMaterial color={'#220736'}
              attach="material"
              distort={0.5}
              speed={2}/>
            </Sphere>
          </Canvas>
          <img src="./img/moon.png" alt="" />
        </div>
       </div>
    </div>
  )
}

export default Hero
