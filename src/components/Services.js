import React from 'react'

import Internet from "../images/services/internet.svg"
import Ecopense from "../images/services/ecopense.svg"
import Hebergement from "../images/services/hebergement.svg"
import SeoImage from "../images/services/seo.svg"
import RedContenu from '../images/services/redconteneu.svg'
import Ux from "../images/services/ux.svg"

export default function Services() {
    return (
        <section id="services-page">
            <div id="services-page-content">
                <h1 class="sections-title" id="service-title">SERVICES</h1>
                <div class="services flex-container wrap"  id="services-firstchild">
                    <div class="bg-bk flex-item">
                       <img src={Ux}  className="services-img" alt="services-con"/>

                        <p class="services-titles">UX/UI design</p>
                        <p class="services-description sections-description">
                            L’éco-conception passe aussi et surtout par le design. Un design épuré et simple permettra à vos utilisateurs de tomber rapidement sur ce qu’ils désirent trouver en consultant votre page.
                        </p>
                    </div>
                    <div class="flex-item">
                        <img src={Internet}  className="services-img" alt="services-con"/>
                     
                        <p class="services-titles ">Création site internet</p>
                        <p class="services-description sections-description">
                            Ah le respect du code propre ! Et oui, vous ne voyez pas le code de votre interface, mais nous OUI ! Nous savons pourquoi votre site met trois heures à charger, et ce n’est pas toujours un problème de connexion {/* ;)  */}                           
                        </p>
                    </div>
                    <div class="bg-bk flex-item">
                        <img src={RedContenu} className="services-img" alt="services-con" />
                        

                        <p class="services-titles">Rédaction de contenu</p>
                        <p class="services-description sections-description">
                            Nous vous accompagnons dans la rédaction des contenus de votre site web. Comme le dit l’adage, « la plume est plus forte que l’épée ». Si votre plume est déplumée, votre stratégie marketing peut se révèler être affectée d’inefficacité.                            
                        </p>
                    </div>
                    <div class="flex-item">
{/*                         <StaticImage src="../images/services/hebergement.svg"  className="services-img" alt="services-con"/>
 */}                        <img src={Hebergement} className="services-img" alt="services-con" />


                        <p class="services-titles">Hébergement site web</p>
                        <p class="services-description sections-description">
                            Le choix d’un hébergeur est important. Nous vous accompagnons également dans le choix d’un hébergeur adapté à vos besoins.
                        </p>
                    </div>
                    <div class="bg-bk flex-item">
{/*                         <StaticImage src="../images/services/seo.svg"  className="services-img" alt="services-con"/>
 */}                        <img src={SeoImage} className="services-img" alt="services-con" />


                        <p class="services-titles">Réferencement SEO</p>
                        <p class="services-description sections-description">
                            Le référencement va permettre à votre site d’être connu et reconnu par les moteurs de recherches. Et oui, vous vous faites scanner et juger par des robots ! Laissez-nous vous aider à les satisfaire {/* ;) */}                             
                        </p>
                    </div>
                    <div class="flex-item">
{/*                         <StaticImage src="../images/services/ecopense.svg"  className="services-img" alt="services-con"/>
 */}                        <img src={Ecopense} className="services-img" alt="services-con" />


                        <p class="services-titles">Eco-conception</p>
                        <p class="services-description sections-description">
                            Vous avez l’âme du sauveur écolo, ca se ressent dans votre stratégie de communication, dans vos engagements sur les RS. C’est super de surfer sur la tendance...mais êtes-vous cependant réellement conscients de la pollution numérique que vous générez ?                        
                        </p>
                    </div>
            
                </div>
               
            </div>
        </section>
    )
}
