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

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    return (
      <React.Fragment>
        <Container>
          <Navbar light expand="sm">
            <NavbarBrand href="/" style={{'font-size': '2rem', 'color': "black"}}>RR</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/" className="nav-link">About Me</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/projects">Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/blog">Blog</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </React.Fragment>
    )  

}

export default Header;