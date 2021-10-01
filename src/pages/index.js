import * as React from "react" /*
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo" */
import { Helmet } from "react-helmet"
import Apropos from "../components/Apropos"
import Contact from "../components/Contact"
import Services from "../components/Services"
import "../style/stlye.css"
import Layout from "../components/layout"
import Landingpage from "../components/Landing-page"



export default function index() {
   

    return (
        <>

        <Helmet   htmlAttributes={{
         lang: 'fr',
        }}>
            <meta charSet="utf-8" />
            <title>IKISQUARE</title>
            <meta name="description" 
            content="Une agence web consititué d'une equipe de quatre enfants du numérique ayant décidé de se spécialiser dedans : développeurs web - Web designer - rédacteur web. Nous avons décidé d’associer nos compétences afin de former une équipe complète et proposer un service complet et personnalisé à nos clients. " />
        </Helmet>
        <Layout>
        <Landingpage/>
            <Apropos/>
            <Services/>

            <Contact/>
        </Layout>
            
        </>
    )
}


