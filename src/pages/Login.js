import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://media.gettyimages.com/photos/dog-working-comfortably-from-home-picture-id170462856?s=612x612")
  ;
background-size: cover;
display: flex;
  align-items: ;
  justify-content: center;
`;

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;


function Login() {
  return (
    <Container className='loginname'>
         <h1>Mavuno reports </h1>    
    <Wrapper>
      
      <Form>
        
          <Input type="text" name="username" placeholder="Username" />
       
      
          <Input type="password" name="password" placeholder="Password" />
       
        <Button>submit</Button>
      </Form> 
    </Wrapper>
    </Container>
  )
}

export default Login