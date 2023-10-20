import React from 'react'

const Work = () => {
  const data=[
    "Web Design",
    "Development",
    "Illustration",
    "Product Design",
    "Social Media"
  ]
  return (
    <div className='work_Section'>
      <div className="work_container">
        <div className="Work_left">
          <ul className="datalist">
            {data.map((list)=>(
              <li key={list} style={{  '--text': 'web design'}}>{list}</li>
            ))}
          </ul>
        </div>
        <div className="Work_right"></div>
      </div>
    </div>
  )
}

export default Work
