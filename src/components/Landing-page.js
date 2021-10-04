import React from 'react'
import { Link } from 'gatsby'


export default function Landingpage() {
    return (
        <div id="page-acceuill">
        <section className="slide">
        <div className="slidetext">
            <h1 className="welcome-big">BIENVENUE A </h1>
            <p className="welcome-medium">Agence web liégeoise spécialisée dans l'éco-conception de solutions numériques </p>
        </div>
        <div className="slideimage">
        <div className="container-ikisquare">
            <div className="topleft" ></div>            
            <div id="ikisquare">
                <p>
                    <span className="tags">
                        &lt;
                    </span>
                    IKISQUARE
                </p>
                <p>WEB AGENCY <span className="tags">&#47;&gt;</span></p>
                <Link to="#contact-page" id="ikisquare-button">CONTACTEZ NOUS </Link>
            </div>
            <div className="bottomright" ></div>  
        </div>
        </div>
        </section>

        <section id="blog">
            <article>
                <div className="card-header">
                     Web design et integration
                </div>
                <div className="card-body">
                    Nous vous proposons de vous accompagner dans la numérisation éco-responsable de votre projet. De la conception du Design à son Intégration, notre équie mettra ses compétences à votre service pour vous satisfaire tout au long de ce processus. 
                </div>
            </article>
            <article>
                <div className="card-header">
                      En passant par le contenu
                </div>
                <div className="card-body">
                Le contenu d’un site web est ce qui va lui permettre d’exister sur les moteurs de recherches. Un contenu pertinent est un des facteurs clés à prendre en compte pour avoir son site référencé sur Internet, et ainsi générer du traffic.
                </div>                
            </article>
            <article>
                <div className="card-header">
                    Autour de valeurs fortes
                </div>
                <div className="card-body">
                    D’éco-responsabilité, de durabilité dans le développement des solutions numériques que nous proposons à notre clientèle. 
                    Mais aussi de proximité et de transparence autour de nos projets et de nos engagements.
                </div>               
            </article>
            <article>
                <div className="card-header">
                    Afin de contribuer
                </div>
                <div className="card-body">
                A la conscientisation du plus grand nombre d’entre-nous, avec l’objectif  de construire ensembles un futur du numérique qui serait plus respecteux de l’environnement, mais aussi plus éthique.
                </div>                 
            </article>             
        </section>

</div>
    )
}
