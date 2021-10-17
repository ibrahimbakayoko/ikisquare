import React , { useRef }  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin  } from "@fortawesome/free-brands-svg-icons"
import {
    faEnvelope,
    faMobileAlt
  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import emailjs from 'emailjs-com';
// import ContactImg from "../images/contact-header.svg"
// import { StaticImage } from 'gatsby-plugin-image'

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_arb76yq', 'template_dj2m2yf', form.current, 'user_TlVhDKjtUENvRj1TFcGkL')
        .then((result) => {
            console.log(result)
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset();
        window.alert("Votre Email a été envoyé ")
    };

    return (
        <section id="contact-page">

        {/* section call to action image */}

        <div className="contact-calltoaction">
             <div className="banner-inner">
                <div className="calltoaction-title">
                    <h1> L' éco-conception est au centre de nos valeurs. </h1>
                </div>
                {/* <div className="calltoaction-content">Vous avez un projet ? N'attendez plus, parlons en !</div> */}

             </div>   
              
        </div> 
        
        {/* end section call to action  */}


        <div id="contact-aside-form-container">
            <div id="contact-form-container">
                <div>
                <h1 className="sections-title"><span className="first-title" >CONTACTEZ </span> NOUS</h1>
                <p id="contact-description">
                N’hésitez pas à prendre contact avec nous pour nous faire part de vos questions. Nous serons ravis d’y apporter une réponse.                 </p>
                <form id="contact-form" ref={form} onSubmit={sendEmail} >
                    <input type="text" class="form-input" name="user_name" placeholder="Nom" size="2"/>
                    <input type="email" class="form-input" name="user_email" placeholder="Email" required/>
                    <textarea name="" id="" cols="30" rows="10" name="message" placeholder="Message" required ></textarea>
                    <input type="submit" className="btn-grad" id="contact-form-button" value="Envoyer" />
                </form>
                </div>
                
            </div>


            <aside>
                <div id="contact-icons">
                    <div id="icons-container">
                    <FontAwesomeIcon className="contact-icons" icon={faMobileAlt} />
{/*                         <StaticImage src="../images/smartphone.svg" alt="Nombre gsm icon"/>
 */}                        <p>+32 475 93 76 79</p>
                     <FontAwesomeIcon className="contact-icons" icon={faEnvelope} />

{/*                         <StaticImage src="../images/contact-icon.svg" alt="email contact icon"/>
 */}                        <p>ikisquareagency@gmail.com</p>

    
                    </div>
                    <div id="social-media-icons">
                    <Link to="https://www.linkedin.com/company/ikisquare/posts/?feedView=all" > <FontAwesomeIcon className="social-media-icons" icon={faLinkedin} /></Link>
                    <Link to="https://www.facebook.com/IKISQUAREAgency/" > <FontAwesomeIcon className="social-media-icons" icon={faFacebookSquare} /></Link>
                    </div>
                </div>
            </aside>

     
        </div>
    </section>
    )
}
