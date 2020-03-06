import React from "react";
import './NewsArticleCard.css';


const NewsArticleCard = (props) => {

    return (
        <div className="news-card-container">
            <div className="news-card-content">

                <h1>{props.newsArticle.title}</h1>
                <h3>{props.newsArticle.url}</h3>
                <p>{props.newsArticle.synopsis}</p>

            </div>
            <div className="news-card-buttons-container">

                <button
                    type="button"
                    className="edit-news-button"
                    onClick={() => {
                        props.history.push(`/newsArticles/${props.newsArticle.id}/edit`)
                    }}
                >Edit</button>

                <button
                    type="button"
                    className="delete-news-button"
                    onClick={() => props.handleDeleteNewsArticle(props.newsArticle.id)}
                >Delete</button>

            </div>
        </div>
    )
}

export default NewsArticleCard;