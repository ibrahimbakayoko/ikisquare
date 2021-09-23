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
              <Link to="#page-acceuill" aria-label="page-acceuill" >
              <StaticImage   src="../images/logo.png"    alt="Header logo" /></Link>  
          </div>
          <FontAwesomeIcon icon={faBars} onClick={show}  className="openMenu" size="3x" />
          <nav id="HeaderNavLinks" className="mainMenu">
                  <Link to="#page-acceuill" aria-label="page-acceuill" className="navLinks" onClick={close} >Acceuil</Link>
                  <Link to="#apropos-page" aria-label="page-apropos" className="navLinks" onClick={close}><p>A propos</p> </Link>
                  <Link to="#services-page" aria-label="page-services" className="navLinks" onClick={close}>Services</Link>
                  <Link to="#contact-page" aria-label="page-contact" className="navLinks" onClick={close} id="contact-button">Contact</Link>
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

