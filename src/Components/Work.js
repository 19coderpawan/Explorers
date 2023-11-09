import React, { useState } from 'react'
import styled from 'styled-components'
import WebDesign from './WebDesign'
import Development from './Development'
import Product from './Product'

const WorkSection = styled.div`
height:100vh;
scroll-snap-align:center;
display:flex;
justify-content:center;
@media only screen and (max-width:786px){
  height: 150vh;
}
/* background-image: url("../public/img/universe.jpg"); */
/* color:red; */
`
const WorkContainer = styled.div`
  width:2300px;
  height: auto;
  display:flex;
  justify-content:space-between;
  @media only screen and (max-width:786px){
    flex-direction: column;
    justify-content: center;
    width:100%;
    align-items: center;
  }
`
const WorkLeft = styled.div`
  flex:2;
  display:flex;
  align-items:center;
  @media only screen and (max-width:786px){
    flex:3;
  }
`
const Lists = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap:20px;
`
const Listitems = styled.li`
  font-size:90px;
  color:transparent;
  font-weight:bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor:pointer;
  -webkit-text-stroke:1px white;
  position: relative;
  
  &::after{
    content: "${(props) => props.text}";
    position: absolute;
    top:0;
    left: 0;
     width: 0px;
    /* color:whitesmoke; */
    overflow: hidden;
    white-space: nowrap; 
    background-image: url("./img/st.jpg"); 
    background-repeat: repeat; 
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
  }
  &:hover{
    &::after{
      animation: textcolor 1.5s ease-in-out both ;

      @keyframes textcolor {
        100%{
          width: 100%;
        }
      }
    }
  }
  @media only screen and (max-width:786px){
     font-size:30px;
  }
`;
const WorkRight = styled.div`
  flex:1;
  @media only screen and (max-width:786px){
    height: 100%; 
    width:100%;
    flex:3;
    overflow-x: scroll;
    margin-right: 30px;
    margin-bottom: -500px;
    overflow-y:hidden;
  }
`


const Work = () => {
  const data = [
    "Captain America",
    "Iron Man",
    "Thanos"
  ]
  const [work,setwork]=useState("Web Design");
  return (

    <WorkSection className='work_section'>
      <WorkContainer>
      <WorkRight>
          {work==="Captain America" ? (<WebDesign/>): work==="Iron Man" ?(<Development/>):<Product/>}
        </WorkRight>
        <WorkLeft>
          <Lists>
            {data.map((li) => (
              <Listitems key={li} text={li} onClick={()=>setwork(li)}>
                {li}
              </Listitems>
            ))}
          </Lists>
        </WorkLeft>
        
      </WorkContainer>
    </WorkSection>
  )
}

export default Work
