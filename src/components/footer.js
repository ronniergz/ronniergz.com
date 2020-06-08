
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import styled from "styled-components"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Social = styled.li`
  margin: 1rem;
  display: inline
`;

const SocialList = styled.ul`
  list-style-type: none;
  text-align: center;
  margin: 3rem;

`;

const Footer = (props) => {

  return (
    <Container>
      <SocialList>  
        <Social>
          <a href="https://github.com/ronniergz">
            <FontAwesomeIcon icon={fab, faGithub} size="2x"/>
          </a>
        </Social>
        <Social>
          <a href="https://www.linkedin.com/in/ronniergz/">
            <FontAwesomeIcon icon={fab, faLinkedin} size="2x"/>
          </a>
        </Social>
        <Social>
          <a href="https://twitter.com/ronniergz">
            <FontAwesomeIcon icon={fab, faTwitter} size="2x"/>
          </a>
        </Social>
      </SocialList> 
    </Container>
  )
}

export default Footer;