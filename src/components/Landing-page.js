import React from 'react'
import { Link } from 'gatsby'


export default function Landingpage() {
    return (
        <div id="page-accueil">
        <section className="slide">
        <div className="slidetext">
             {/* <h1 className="welcome-big"> pour grand titre eventuellement </h1>  */}
            <p className="welcome-medium"> Agence web liégeoise spécialisée dans l'éco-conception de solutions numériques </p>
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
                <Link to="#contact-page" id="ikisquare-button">Contactez-nous </Link>
            </div>
            <div className="bottomright" ></div>  
        </div>
        </div>
        </section>

 

</div>
    )
}
