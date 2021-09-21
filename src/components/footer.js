import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "../style/footer.css"

export default function Footer() {
    return (
    <footer id="footer">
        <div id="footer-container">
            <div id="footerLogo">
                <StaticImage src="../images/logoFooter.png"  alt=""/>
            </div>
            <p id="cpyright">
                IKISQUARE &copy;2021
            </p>

            <nav id="footerNavIcons">
                    <Link to="https://www.linkedin.com/company/ikisquare/posts/?feedView=all" > <FontAwesomeIcon className="footerNavIcons" icon={faLinkedin} /></Link>
                    <Link to="https://www.facebook.com/IKISQUAREAgency/" > <FontAwesomeIcon className="footerNavIcons" icon={faFacebook} /></Link>
            </nav>
        </div>
    </footer>
    )
}
