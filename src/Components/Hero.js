import React from 'react'
import Navbar from './Navbar'

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
          <img src="./img/moon.png" alt="" />
        </div>
       </div>
    </div>
  )
}

export default Hero
