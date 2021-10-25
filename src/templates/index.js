import React, { Component } from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout"
import SingleListedArticle from "../components/SingleListedArticle"

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span id="propstext">{props.text}</span>
  }
}

const IndexPage = ({ pageContext }) => {
  const pathPrefix = '/blog/' ;
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 == 1 ? '/blog' : pathPrefix+(index - 1).toString()
  const nextUrl = pathPrefix + (index + 1).toString()
  const strapiPathPrefix = "http://localhost:1337"

  let article_date;
  let date_day ; 
  let date_month ; 
  let date_year ;
  return (
    <Layout>
      <div id="blogHeader" >
        <p>
          Blog
        </p>
      </div>
      <div id="blog-big-container">
          <div id="blog-container">
              {group.map(({ node }) => (
                 <>
             
                
                <SingleListedArticle
                  articleUrl={"/"+node.articleTitle.replace(/\s/g,'-').replace(/\?/g,'')}
                  articleTitle={node.articleTitle}
                  articleImgSrc={strapiPathPrefix + node.articleImages./*formats.small.*/url}
                  articleBriefDesc={ node.articleContent}
                  articlePublishedDate = {new Date(node.published_at)}
                  publishedBy={node.users_permissions_user.username}
                  publishedImgSrc={strapiPathPrefix + node.users_permissions_user.user_img.url}
                />
                </>
              ))}
<div id="blog-buttons">

              <div className="previousLink">
                  <NavLink test={first} url={previousUrl} text="Page suivante" />
              </div>
              <div className="nextLink">
                  <NavLink test={last} url={nextUrl} text="Page précédente" />
              </div>
          </div>
          </div>
      </div>
    </Layout>
  )
}
export default IndexPage