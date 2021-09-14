import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Footer() {
    return (
        <footer id="footer">
        <div id="footerLogo">
            <StaticImage src="../images/logoFooter.png" alt=""/>
        </div>
        <nav id="footerNavIcons">
                <a href="#"><StaticImage src="../images/linkedin.png" alt="ss"/>ss</a>
                <a href="#"><StaticImage src="../images/linkedin.png" alt="xx"/></a>
                <a href="#"><StaticImage src="../images/linkedin.png" alt="vv"/></a>

        </nav>
    </footer>
    )
}
