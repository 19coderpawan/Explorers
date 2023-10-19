import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='hero_Section'>
       <Navbar/>
       <div className="hero_Container">
        <div className="left">
          <h1>Think. Make . Solve</h1>
          <div className="what_we_do">
            <img src="./img/line.png" alt="" className="line" />
           <h2 className='subtitle'>What we do</h2>
          </div>
           <p className='info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum fugit porro 
          ?</p>
           <button>Learn More</button>
        </div>
        <div className="right">
          <img src="./img/moon.png" alt="" />
        </div>
       </div>
    </div>
  )
}

export default Hero
