import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styles from "../style/stlye.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'gatsby'

export default function Contact() {
    return (
        <section id="contact-page">
            <div id="contact-header-photo">
                <StaticImage src="../images/contact-header.png" alt=""  style={{width : '100%'}} height={200} />
            </div>
        <div id="contact-aside-form-container">
            <div id="contact-form-container">
                <h1>Contact</h1>
                <p id="contact-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit lacinia suspendisse sit ut fusce.
                </p>
                <div id="contact-form">
                    <input type="text" class="form-input" placeholder="Entre votre nom" size="2"/>
                    <input type="email" class="form-input"  placeholder="Entre votre Email"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Entre votre message" ></textarea>
                    <button id="contact-form-button">Envoyer</button>
                </div>
            </div>
            <aside>
                <div id="contact-icons">
                    <div id="icons-container">
                        <StaticImage src="../images/Group.png" alt=""/>
                        <p>01234567891345678</p>
                        <StaticImage src="../images//contact-icon.png" alt=""/>
                        <p>ikisquare@gmail.com</p>
    
                    </div>
                    <div id="social-media-icons">
                    <Link to="https://www.linkedin.com/company/ikisquare/posts/?feedView=all" > <FontAwesomeIcon className="social-media-icons" icon={faLinkedin} /></Link>
                    <Link to="#" > <FontAwesomeIcon  className="social-media-icons" icon={faInstagram} /></Link>
                    <Link to="https://www.facebook.com/IKISQUAREAgency/" > <FontAwesomeIcon className="social-media-icons" icon={faFacebook} /></Link>
                    </div>
                </div>
            </aside>

     
        </div>
    </section>
    )
}
