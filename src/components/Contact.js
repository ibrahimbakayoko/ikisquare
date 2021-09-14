import React from 'react'

export default function Contact() {
    return (
        <section id="contact-page">
        <div id="contact-header-photo">
            <img src="Assets/img/contact-header.png" alt=""/>
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
                        <img src="Assets/img/contact-icon.png" alt=""/>
                        <p>ikisquare@gmail.com</p>
                        <img src="Assets/img/contact-icon.png" alt=""/>
                        <p>ikisquare@gmail.com</p>
                        <img src="Assets/img/contact-icon.png" alt=""/>
                        <p>ikisquare@gmail.com</p>
                    </div>
                    <div id="social-media-icons">
                        <img src="Assets/img/linkedin.png" alt=""/>
                        <img src="Assets/img/linkedin.png" alt=""/>
                        <img src="Assets/img/linkedin.png" alt=""/>
                    </div>
                </div>
            </aside>

     
        </div>
    </section>
    )
}
