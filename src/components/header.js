import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons'



export default function Header() {
  if (typeof window !== `undefined`){
  
    window.onscroll = ()=> {
      var header = document.getElementById("header");
      var sticky = header.offsetTop;

      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
    };
  }

  }



      let show=()=>{
        document.querySelector('.mainMenu').style.display = 'flex';

        document.querySelector('.mainMenu').style.top = '0';
      }

      let close =()=>{

        document.querySelector('.mainMenu').style.top = '-100%';
      };

  return (
    <header id="header">
      <div id="Header-container">
          <div id="HeaderLogo">
              <Link to="#page-acceuill"  >
              <StaticImage   src="../images/logo.png"   width={95} alt="A Gatsby astronaut" /></Link>  
          </div>
          <FontAwesomeIcon icon={faBars} onClick={show}  className="openMenu" size="3x" />
          <nav id="HeaderNavLinks" className="mainMenu">
                  <Link to="#page-acceuill" className="navLinks" onClick={close} >Acceuil</Link>
                  <Link to="#apropos-page" className="navLinks" onClick={close}><p>A propos</p> </Link>
                  <Link to="#services-page" className="navLinks" onClick={close}>Services</Link>
                  <Link to="#contact-page" className="navLinks" onClick={close} id="contact-button">Contact</Link>
          </nav>
      </div>

</header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

