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
          <main id="blog-page">
              <h1>Highlited articles :</h1>
               
              <h1>Trier les articles selon :</h1>
                <StaticQuery
                query={query}
                render={data => (
                <div id="all-articles">
                    {data.allStrapiArticles.edges.map(res => (
                        <article className="single-article">
                          <div className="article-img">
                                <img src={prefix+res.node.articleImages.url} alt="cak" width={400} height={305} />
                          </div>
                          <div className="article-card-container">
                              <div className="article-card-elements-wrapper">
                                  <h1 className="article_card-title" /* key={res.node.strapiId} */>
                                    {/* {res.node.articleTitle} */}
                                    Cinque outils blah
                                  </h1>
                                  <p className="article-briefDesc" /* key={res.node.strapiId} */>
                                    {/*res.node.articleContent*/}
                                    “The most used tools to create the most modern websites is between your dirty hands”
                                  </p>
                                  <div className="article-hashTags-container">
                                      <div className="hashTag-wrapper">
                                          <span className="hashTagSymbol">#</span>
                                          <p className="hashTag-KeyWord">Tools</p>
                                      </div>
                                      <div className="hashTag-wrapper">
                                          <span className="hashTagSymbol">#</span>
                                          <p className="hashTag-KeyWord">Learn</p>
                                      </div>
                                  </div>
                                  <p className="article-publishDate">
                                      ..12 Novombre 21
                                  </p>
                              </div>
                          </div>
                        </article>
                    ))}
                </div>
                )}
                />  
            </main>

        </Layout>
       
    )
}

