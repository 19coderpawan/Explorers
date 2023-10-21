import React from 'react'
import styled from 'styled-components'

const WorkSection = styled.div`
height:100vh;
scroll-snap-align:center;
display:flex;
justify-content:center;
`
const WorkContainer = styled.div`
  width:1400px;
  display:flex;
  justify-content:space-between;
`
const WorkLeft = styled.div`
  flex:1;
  display:flex;
  align-items:center;
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
    background-image: url("./img/galaticdragon.jpg"); 
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
`;
const WorkRight = styled.div`
  flex:1;
`


const Work = () => {
  const data = [
    "Web Design",
    "Development",
    "Illustration",
    "ProductDesign",
    "Social Media"
  ]
  return (
    <WorkSection>
      <WorkContainer>
        <WorkLeft>
          <Lists>
            {data.map((li) => (
              <Listitems key={li} text={li}>
                {li}
              </Listitems>
            ))}
          </Lists>
        </WorkLeft>
        <WorkRight></WorkRight>
      </WorkContainer>
    </WorkSection>
  )
}

export default Work

