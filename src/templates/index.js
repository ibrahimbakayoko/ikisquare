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
  return (
    <Layout>
      <h4>{pageCount} Pages</h4>

      {group.map(({ node }) => (
       
        <SingleListedArticle
          articleUrl={"/"+node.articleTitle.replace(/\s/g,'-')}
          articleTitle={node.articleTitle}
          articleImgSrc={strapiPathPrefix + node.articleImages.url}
          publishedBy={node.publisher.username}
          publishedImgSrc={strapiPathPrefix + node.publisher.publisher_img.url}
        />
          
      ))}
      <div className="previousLink">
        <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={nextUrl} text="Go to Next Page" />
      </div>
    </Layout>
  )
}
export default IndexPage