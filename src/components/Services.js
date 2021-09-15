import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
export default function Services() {
    return (
        <section id="services-page">
            <div id="services-page-content">
                <h1 class="sections-title">SERVICES</h1>
                <div class="services flex-container wrap"  id="services-firstchild">
                    <div class="bg-bk flex-item">
                        <StaticImage src="../images/services/ux1.png" alt="services-con"
                     
                        />
                        <p class="services-titles">UX design</p>
                        <p class="services-description sections-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit suspendisse amet, hendrerit sed turpis commodo, nulla amet, quisque.</p>
                    </div>
                    <div class="flex-item">
                        <StaticImage src="../images/services/internet.png" alt="services-con"/>
                        <p class="services-titles ">Creation site web</p>
                        <p class="services-description sections-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit suspendisse amet, hendrerit sed turpis commodo, nulla amet, quisque.</p>
                    </div>
                    <div class="bg-bk flex-item">
                        <StaticImage src="../images/services/ux (2).png" alt="services-con"/>
                        <p class="services-titles">Rédaction de contenu</p>
                        <p class="services-description sections-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit suspendisse amet, hendrerit sed turpis commodo, nulla amet, quisque.</p>
                    </div>
            
                </div>
                <div class="services flex-container wrap">
                    <div class="flex-item">
                        <StaticImage src="../images/services/ecopense.png" alt="services-con"/>
                        <p class="services-titles">Hébergement site web</p>
                        <p class="services-description sections-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit suspendisse amet, hendrerit sed turpis commodo, nulla amet, quisque.</p>
                    </div>
                    <div class="bg-bk flex-item">
                        <StaticImage src="../images/services/hebergement.png" alt="services-con"/>
                        <p class="services-titles">Réferencement SEO</p>
                        <p class="services-description sections-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit suspendisse amet, hendrerit sed turpis commodo, nulla amet, quisque.</p>
                    </div>
                    <div class="flex-item">
                        <StaticImage src="../images/services/internet.png" alt="services-con"/>
                        <p class="services-titles">Eco-pensée</p>
                        <p class="services-description sections-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit suspendisse amet, hendrerit sed turpis commodo, nulla amet, quisque.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
