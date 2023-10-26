import React from 'react'
// import Testthree from './Test_three'
import {Canvas} from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import Treseaurerectcube from './treseaurerect_cube'

const Who = () => {
  return (
    <div  className='who_Section'>  
       <div className="Who_Container">
        <div className="left_who">
          {/* there should be any other way to give the dimensions to the cube other than boxgeometry. */}
        <Canvas camera={{fov:25, position:[5,5,5]}} >
            <OrbitControls autoRotate={true}/>
            {/* to include the color in the material */}
            <ambientLight intensity={1}/>
            {/* to see the edges of the material */}
            <directionalLight position={[3,2,1]}/>
            <Treseaurerectcube/>
        </Canvas>
        </div>
        <div className="right_who">
          <h1>Think outside the square box</h1>
          <div className="what_we_do">
            <img src="./img/line.png" alt="" className="line" />
           <h2 className='subtitle'>What we Work</h2>
          </div>
           <p className='info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum fugit porro 
          ?</p>
           <button>See our Work</button>
        </div>
       </div>
    </div>
  )
}

export default Who
