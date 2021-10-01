import React from 'react'
import Layout from "../components/layout"
import { StaticQuery, graphql } from 'gatsby';
import "../style/blog.css"

const query = graphql`
query  {

    allStrapiArticles {
      edges {
        node {
          articleTitle
          articleContent
          articleImages {
            url
          }
        }
      }
    }
  }
  
  
`; 

export default function blog() {
    // à changer après
    const prefix = 'http://localhost:1337'
    return (

        <Layout>
                <StaticQuery
                query={query}
                render={data => (
                <ul id="rendered-msgs">
                    {data.allStrapiArticles.edges.map(res => (
                        <div>
                            
                            <h1 /* key={res.node.strapiId} */>
                                {res.node.articleTitle}
                            </h1>
                            <img src={prefix+res.node.articleImages.url} alt="cak" width={800} />

                            <p /* key={res.node.strapiId} */>
                                {res.node.articleContent}
                            </p>
                        </div>
                 
                    ))}
                </ul>
                )}
            />  
        </Layout>
       
    )
}

