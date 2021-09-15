import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header>
    <div id="Header-container">
        <div id="HeaderLogo">
        <StaticImage   src="../images/logo.png"    alt="A Gatsby astronaut" />  </div>
        <nav id="HeaderNavLinks">
                <a href="#">Acceuil</a>
                <a href="#"><p>A propos</p> </a>
                <a href="#">Services</a>
                <a href="#" id="contact-button">Contact</a>
        </nav>
    </div>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
