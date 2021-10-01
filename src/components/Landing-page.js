import React from 'react'
import { Link } from 'gatsby'


export default function Landingpage() {
    return (
        <div id="page-acceuill">
        <section className="slide">
        <div className="slidetext">
            <h1 className="welcome-big">BIENVENU A IKISQUARE</h1>
            <p className="welcome-medium">Agence web à liege specialisée dans l'eco conception de site internet sur mesure </p>
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
                <Link to="#contact-page" id="ikisquare-button">Contacter Nous </Link>
            </div>
            <div className="bottomright" ></div>  
        </div>
        </div>
        </section>

        <section id="blog">
            <article>
                <p className="article-title">Web design and integration</p>
                <p id="article-description">Nous vous proposons de vous accompagner dans la numérisation éco-responsable de votre projet. De la conception du Design à son Intégration, notre équie mettra ses compétences à votre service pour vous satisfaire tout au long de ce processus. </p>
            </article>
            <article>
                <p className="article-title">En passant par le contenu</p>
                <p id="article-description">Le contenu d’un site web est ce qui va lui permettre d’exister sur les moteurs de recherches. Un contenu pertinent est un des facteurs clés à prendre en compte pour avoir son site référencé sur Internet, et ainsi générer du traffic.</p>
            </article>
            <article>
                <p className="article-title">Autour de valeurs fortes </p>
                <p id="article-description">D’éco-responsabilité, de durabilité dans le développement des solutions numériques que nous proposons à notre clientèle. 
Mais aussi de proximité et de transparence autour de nos projets et de nos engagements. </p>
            </article>
            <article>
                <p className="article-title">Afin de contribuer</p>
                <p id="article-description">A la conscientisation du plus grand nombre d’entre-nous, avec l’objectif  de construire ensembles un futur du numérique qui serait plus respecteux de l’environnement, mais aussi plus éthique. </p>
            </article>             
        </section>

</div>
    )
}
