import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "../style/footer.css"
import Logofooter from "../images/logoFooter.svg"


export default function Footer() {
    return (
    <footer id="footer">
        <div id="footer-container">
            <div id="footerLogo">
{/*                <StaticImage src="../images/logoFooter.svg"  alt="Logo footer"/>
 */}               <img src={Logofooter} className="services-img" alt="services-con" />

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
