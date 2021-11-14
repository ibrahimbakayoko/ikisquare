module.exports = {
  //pathPrefix: '/iki-war',
  siteMetadata: {
    title: `ikisquare | Agence de développement web`,
    description: `Agence web liégeoise spécialisée dans l'éco-conception de solutions numériques.`,
    url: `https://ikisquare.com`, // No trailing slash allowed!
    //image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    image: "/images/snapes.svg", // Path to your image you placed in the 'static' folder
    author: `@ikisquare`,
   // siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ikisquare`,
        short_name: `ikisquare`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
        
      },
    },
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        // collectionTypes: [`Articles`],
        /* singleTypes: [`home-page`, `contact`], */
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
