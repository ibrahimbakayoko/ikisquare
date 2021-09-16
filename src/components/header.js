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
                <Link to="/">Acceuil</Link>
                <Link to="/"><p>A propos</p> </Link>
                <Link to="/">Services</Link>
                <Link to="/" id="contact-button">Contact</Link>
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
