import * as React from "react" /*
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo" */
import Apropos from "../components/Apropos"
import Contact from "../components/Contact"
// import Footer from "../components/footer"
import Services from "../components/Services"
// import Header from "../components/header"
// import Landingpage from "../components/Landing-page"
import "../style/stlye.css"
import Layout from "../components/layout"
import Landingpage from "../components/Landing-page"



export default function index() {
   

    return (
        <>


        <Layout>
        <Landingpage/>
            <Apropos/>
            <Services/>

            <Contact/>
        </Layout>
            
        </>
    )
}


