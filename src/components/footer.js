import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import "../style/footer.css"

export default function Footer() {
    return (
    <footer id="footer">
        <div id="footerLogo">
            <StaticImage src="../images/logoFooter.png" alt=""/>
        </div>
        <p id="cpyright">
              &copy;ikisquare 2021
        </p>
        <nav id="footerNavIcons">
                <a href="linkedin.com"><StaticImage src="../images/linkedin.png" alt="ss"/></a>
                <a href="linkedin.com"><StaticImage src="../images/instagram.png" alt="xx"/></a>
                <a href="linkedin.com"><StaticImage src="../images/facebook 1.png" alt="vv"/></a>

        </nav>
    </footer>
    )
}
