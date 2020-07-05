import React, { useState } from "react";
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const HeaderArea = styled.div`
  width: 100%;
  background-color: #1c1c1c;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const logoStyle = {
  fontSize: '1.5rem', 
  fontFamily: '',
  color: 'white'
}

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    return (
      <HeaderArea>
        <Container >
          <Navbar dark expand="sm" >
            <NavbarBrand href="/" style={logoStyle} >Ronnie Rodriguez</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem >
                  <NavLink href='/' >About Me</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/projects" >Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/blog" >Blog</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </HeaderArea>
    )  

}

export default Header;