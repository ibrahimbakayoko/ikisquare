import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Footer() {
    return (
        <footer id="footer">
        <div id="footerLogo">
            <StaticImage src="../images/logoFooter.png" alt=""/>
        </div>
        <nav id="footerNavIcons">
                <a href="linkedin.com"><StaticImage src="../images/linkedin.png" alt="ss"/></a>
                <a href="linkedin.com"><StaticImage src="../images/instagram.png" alt="xx"/></a>
                <a href="linkedin.com"><StaticImage src="../images/facebook 1.png" alt="vv"/></a>

        </nav>
    </footer>
    )
}
