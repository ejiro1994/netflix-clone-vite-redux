import React, { useState } from 'react'
import styled from 'styled-components'
import { NetflixLogo, LoginScreenBackground } from '../utility/constants'

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false)
  return (
    <Container>
      <Background>
        <Logo src={NetflixLogo} />
        <Button right onClick={ () => setSignIn(true)}>Sign In</Button>
        <Gradient />
      </Background>

      <Body>
        <h1>Unlimited films, TV Programmes and more.</h1>
        <h2>Watch anywhere, cancel anytime.</h2>
        <h3>Watch anywhere, cancel anytime.</h3>
        <Form>
          <input type='email' placeholder='email address' name='email' />
          <button>Get Started</button>
        </Form>
      </Body>
    </Container>
  )
}

export default LoginScreen

const Container = styled.div`
  position: relative;
  height: 100%;
  background: url(${LoginScreenBackground}) center no-repeat;
  background-size: cover;
`

const Background = styled.div``

const Logo = styled.img`
  position: fixed;
  object-fit: contain;
  width: 150px;
  left: 0;
  padding-left: 20px;
  top: 20px;
`

const Button = styled.button`
  cursor: pointer;
  position: fixed;
  ${({ right }) => `right: 20px`};
  top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background: #e50914;
  border: none;
`

const Gradient = styled.div`
  width: 100%;
  z-index: 1;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`

const Body = styled.div`
  z-index: 1;
  color: #fff;
  padding: 20px;
  position: absolute;
  top: 30%;
  margin: 0 auto;
  /* margin-left: auto;
margin-right: auto; */
  text-align: center;

  & > h1 {
    font-size: 3.125rem;
    margin-bottom: 20px;
  }
  & > h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    font-weight: 400;
  }
  & > h3 {
    font-size: 1.3rem;
  }
`

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  & > input {
    padding: 10px;
    outline-width: 0;
    height: 30px;
    width: 30%;
    max-width: 600px;
    border: none;
  }

  & > button {
    /* all: unset; */
    padding: 16px 20px;
    font-size: 1rem;
    color: #fff;
    background: #e50914;
    border: none;
    font-weight: 600;
    cursor: pointer;
  }
`
