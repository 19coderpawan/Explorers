import React from 'react'
import styled from 'styled-components'
import MapChart from './Map';

const ContactsSection=styled.div`
    height: 100vh;
    color: white;
    scroll-snap-align: start;
    /* background-image: url('./stars.webp'); */
`;
const Contactcontainer=styled.div`
  width: 100%;
  height:100%;
  display: flex;
  justify-content: space-between;
  gap:10px;
`;
const Contactleft=styled.div`
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form=styled.form`
   width:500px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap:20px;
`;
const Contacttitle=styled.h1`
  font-weight: bold;
  font-size:70px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color:transparent;
  -webkit-text-stroke: 1px white;
  /* background-image: url("./universe.jpg"); */
  /* overflow: hidden;
  white-space: nowrap; 
  background-image: url("./img/dragon.jpg"); 
  background-repeat: repeat; 
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent;  */
  align-self: center;
`;
const Para=styled.p`
  font-weight: bold;
  font-size:30px;
  text-transform: uppercase;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color:transparent;
  /* background-image: url("./universe.jpg"); */
  overflow: hidden;
  white-space: nowrap; 
  background-image: url("./img/dragon.jpg"); 
  background-repeat: repeat; 
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent; 
  text-align: center;
`
const Input=styled.input`
    padding: 25px;
    border:2px solid white;
    border-radius:20px;
    background-image: url("./img/st.jpg");
    color:white;
    font-weight:bolder;
    font-size:20px;

    &::placeholder{
    color:white;
   }
`;

const TextArea=styled.textarea`
  padding:25px;
  border:2px solid white;
  border-radius: 20px;
  background-image: url("./img/st.jpg");
  font-weight:bolder;
  text-transform:uppercase;
  color:black;
  font-size:20px;

   &::placeholder{
    color:white;
   }
`;
const Button=styled.button`
  background-image: url("./img/st.jpg");
  border-radius: 10px;
  width:50%;
  align-self: center;
  border:2px solid white;
  cursor: pointer;
  padding:20px;
  font-weight: bold;
  font-size:20px;
  color:snow;
  text-transform:uppercase;
  
`;
const Contactright=styled.div`
  flex:1;
`;

const Contacts = () => {
  return (
   <ContactsSection className='contact_section'>
    <Contactcontainer>
    <Contactleft>
       <Form>
       <Contacttitle>Contact Us
       <Para>From any where</Para>
       </Contacttitle>
       
        <Input placeholder='name'></Input>
        <Input placeholder='email'></Input>
        <TextArea placeholder='Write your message' rows={10}></TextArea>
        <Button>Send</Button>
       </Form>
    </Contactleft>
    <Contactright>
      <MapChart/>
    </Contactright>
    </Contactcontainer>
   </ContactsSection>
  )
}

export default Contacts
