
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import styled from "styled-components"

const FooterArea = styled.div`
  background-color: #000000;
  height: 15rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 50%;
`;

const SocialList = styled.ul`
  list-style-type: none;
  text-align: center;
  padding: 9rem auto 3rem auto;
`;

const Social = styled.li`
  margin: 1rem;
  display: inline
`;

const Icon = styled.a`
  color: #828282;
  :hover {
    color: #b2b2b2;
  }
`;

const Footer = (props) => {

  return (
    <FooterArea>
      <Container>
        <SocialList>  
          <Social>
            <Icon href="https://github.com/ronniergz">
              <FontAwesomeIcon icon={fab, faGithub} size="2x"/>
            </Icon>
          </Social>
          <Social>
            <Icon href="https://www.linkedin.com/in/ronniergz/">
              <FontAwesomeIcon icon={fab, faLinkedin} size="2x"/>
            </Icon>
          </Social>
          <Social>
            <Icon href="https://twitter.com/ronniergz">
              <FontAwesomeIcon icon={fab, faTwitter} size="2x"/>
            </Icon>
          </Social>
        </SocialList> 
      </Container>
    </FooterArea>
  )
}

export default Footer;