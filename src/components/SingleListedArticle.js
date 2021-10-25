import React from 'react'
import { Link } from 'gatsby'

export default function SingleListedArticle(props) {
    let article_date = props.articlePublishedDate
    return (

        <div  className="blogListing">
            <div className="blogUrl" >
                <div className="article-listing-img">
                    <Link to={props.articleUrl} >
                       
                     <img src={props.articleImgSrc} alt="pas d'image"  />
                     </Link>
                </div>
                <div id="articlePublishedDate">
                {
                article_date.getDate()+'/'+(article_date.getMonth()+1) +'/'+article_date.getFullYear()
                }</div>
            </div>
            <div id="blogArticleDetails">
                <Link id="articlelistingArticle" to={props.articleUrl} > {props.articleTitle}</Link>
                <p id="ArticleBriefDesc">
                    {props.articleBriefDesc.substring(0, 80)}<Link id="lirePlus" to={props.articleUrl} >...Lire plus</Link>


                </p>
                <div id="publishedByContainer">
                    <p > Par. {props.publishedBy} </p>

                    <img src={props.publishedImgSrc} alt="pas d'image" width={60} heigh={200} />
                </div>
           </div>
        </div>

    )
}
