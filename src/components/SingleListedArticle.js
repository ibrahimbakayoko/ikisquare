import React from 'react'
import { Link } from 'gatsby'

export default function SingleListedArticle(props) {
    return (
        <div  className="blogListing">
            <div className="blogUrl" >
               <img src={props.articleImgSrc} alt="pas d'image" width={400} heigh={400} />
                <div id="articlePublishedDate">12 octobre 21</div>
            </div>
            <div id="blogArticleDetails">
                <Link to={props.articleUrl} > {props.articleTitle}</Link>
                <p id="ArticleBriefDesc">
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </p>
                <div id="publishedByContainer">
                    <img src={props.publishedImgSrc} alt="pas d'image" width={200} heigh={200} />
                    <p> published by : {props.publishedBy} </p>
                </div>
           </div>
        </div>
    )
}
