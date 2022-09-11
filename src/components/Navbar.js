import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'


const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  const Container = styled.div`
  background-color: black;
  `
  const Wrapper = styled.div`
  justify-content: space-around;
  align-items: center;
  display:flex;
  `

function Navbar() {
  return (
    <Container>
        <Wrapper>
        <NavLink   to="/" 
       exact style={linkStyles}
       activeStyle={{
         background: "darkblue",
       }}>
    Home
        </NavLink>
        <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
      <NavLink
        to="/stocks"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Stocks
      </NavLink>
      </Wrapper>
    </Container>
  )
}

export default Navbar