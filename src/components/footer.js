
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = (props) => {

  return (
    <ul style={{'list-style-type': 'none'}}>  
      <li>
        <a href="https://github.com/ronniergz">
          <FontAwesomeIcon icon={fab, faGithub} size="2x"/>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ronniergz/">
          <FontAwesomeIcon icon={fab, faLinkedin} size="2x"/>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/ronniergz">
          <FontAwesomeIcon icon={fab, faTwitter} size="2x"/>
        </a>
      </li>
    </ul> 
  )
}

export default Footer;