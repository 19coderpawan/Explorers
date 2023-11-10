import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import MapChart from './Map';
import emailjs from '@emailjs/browser';

const ContactsSection = styled.div`
    height: 100vh;
    color: white;
    scroll-snap-align: start;
    /* background-image: url('./stars.webp'); */
    @media only screen and (max-width:786px){
      width:100%;

    }
`;
const Contactcontainer = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  justify-content: space-between;
  gap:10px;
`;
const Contactleft = styled.div`
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width:786px){
    flex:4;
  }
`;

const Form = styled.form`
   width:500px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap:20px;
   @media only screen and (max-width:786px){
    width:100%;
    /* align-items: center; */
    justify-content: flex-start;
    gap:10px;
   }
`;
const Contacttitle = styled.h1`
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
  @media only screen and (max-width:786px){
    font-size:30px;
    margin-top:-300px;
  }
`;
const Para = styled.p`
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
  @media only screen and (max-width:786px){
    font-size:20px;
  }
`
const Input = styled.input`
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

const TextArea = styled.textarea`
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
   @media only screen and (max-width:786px){
    width:100%s;
   }
`;
const Button = styled.button`
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
const Contactright = styled.div`
  flex:1;
  @media only screen and (max-width:786px){
    display: none;
  }
`;



const Contacts = () => {
  const form = useRef();
  const [values, setvalues] = useState({ name: "", email: "", message: "" });
  const [error, seterror] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmailpawan', 'template_xd1vzt9', form.current, 'VYOW4SDB1X8S_fdAV')
      .then((result) => {
        console.log(result.text);
        seterror(true);
        setvalues({ name: "", email: "", message: "" });
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <ContactsSection className='contact_section'>
      <Contactcontainer>
        <Contactleft>
          <Form ref={form} onSubmit={handleSubmit}>
            <Contacttitle>Contact Us
              <Para>From any where</Para>
            </Contacttitle>
            <Input placeholder='name' value={values.name} name='name' onChange={(e) => { setvalues(e.target.value) }} required></Input>
            <Input placeholder='email' name='email' value={values.email} onChange={(e) => { setvalues(e.target.value) }} required></Input>
            <TextArea placeholder='Write your message' name='message' value={values.message} onChange={(e) => { setvalues(e.target.value) }}
               required></TextArea>
            <Button type='submit' value="Send">Send</Button>
            {error && <p>`Your response is submitted thank you for your valueable time.`</p>}
          </Form>
        </Contactleft>
        <Contactright>
          <MapChart />
        </Contactright>
      </Contactcontainer>
    </ContactsSection>
  )
}

export default Contacts
