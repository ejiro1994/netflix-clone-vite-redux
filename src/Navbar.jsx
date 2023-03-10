import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  const hideNavbar = () => {
    if (window.scrollY > 100) {
      setShowNav(false)
    } else {
      setShowNav(true)
    }
  }

  useEffect(() => {
    setShowNav(true)

    window.addEventListener('scroll', hideNavbar)
    return () => {
      window.removeEventListener('scroll', hideNavbar)
    }
  }, [])

  return (
    <Nav showNav={showNav}>
      <NavContents>
        <NavLogo
          classname='nav__logo'
          src={
            'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
          }
          alt='logo'
        />
        <NavAvatar
          classname='nav__avatar'
          src={
            'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          }
          alt='avatar'
        />
      </NavContents>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  position: fixed;
  top: 0;
  padding: 20px;
  width: 100%;
  height: 30px;
  z-index: 100;
  ${({ showNav }) => showNav && ` background: #000; `}

  /* aAnimations */
  transition-timing-function: ease-in;
  transition: all 0.5s;
`

const NavContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const NavLogo = styled.img`
  position: fixed;
  left: 0;
  width: 80px;
  cursor: pointer;
  object-fit: contain;
  margin-left: 20px;
`
const NavAvatar = styled.img`
  position: fixed;
  right: 20px;
  width: 30px;
  cursor: pointer;
`
