import PropTypes from 'prop-types';
import { graphql } from "gatsby";
import Layout from "../components/layout"
import React, { Component } from 'react'
import articleTimeIcon from "../images/articleTimeIcon.svg"
import articleWriter from "../images/writerIcon.svg"
const Blog = ({ data}) => {
  const strapiPathPrefix = "http://localhost:1337"
     const article = data.allStrapiArticles.edges[0].node;
     const birthday = new Date(article.published_at);
     var dateShow = birthday.getDate()+'/'+(birthday.getMonth()+1) +'/'+birthday.getFullYear() 
    return (
        <Layout>
          <div className="article-page-body">
              <div id="article-body">
                <div id="img-container">
                    <div id="article-body-img">
                        <img src={strapiPathPrefix+article.articleImages.url/*formats.medium.url*/} alt="pas d'image" />
                    </div>
                </div>
                   
                    <h3>{article.articleTitle}</h3>
                    <div id="articleHeader">
                    <img src={articleTimeIcon} alt="iconArticle"/>
                    <p class="articleHeaderParagrahpe"> { dateShow }</p>
                    <img src={articleWriter} alt="articleWriter"/>
                    <p class="articleHeaderParagrahpe">{article.users_permissions_user.username}</p>
                    </div>
                  
                    <p id="contentArticle">{article.articleContent}</p>
              </div>
          </div>
        </Layout>
    ) 
};

 Blog.propTypes = {
    data : PropTypes.object.isRequired,
} 
export const query = graphql`
  query( $id: String! ) {
    allStrapiArticles(filter: {id: {eq: $id}}) {
      edges {
        node {
          id
          articleContent
          articleTitle
          published_at
          articleImages {
            url
            
          }
          users_permissions_user {
            username
          }
        }
      }
    }
  }
` 
  export default Blog ;
  