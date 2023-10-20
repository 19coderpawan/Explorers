import React from 'react'

const Who = () => {
  return (
    <div  className='who_Section'>  
       <div className="Who_Container">
        <div className="left_who">
          {/* 3D model  */}
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
