import React from 'react'
import ReactDOM from 'react-dom'

import { Link } from "react-router-dom";

import { useState , useEffect } from 'react';

import Button from '../button'

function ArticleBox({articles}) {
    if(articles == null) { return null }

    //console.log({articles});

    return (
        <div>
            {articles.map(article => (

            <Link to={`/blog/${article.slug}`} key={article.slug}>
                <div className='article__box card'>
                    <img className="article__img" src={`http://localhost:4000/cdn/${article.imageurl}`} alt="" />

                    <div className="article__tags flex">
                      <span className='article__tag keyword'>{article.categorie}</span>
                    </div>

                    <div className="article__content grid">
                      <h3 className="article__title">{article.title}</h3>
                      <p className='article__text'>{article.text}</p>
                    </div>

                    <Button classname="article__link" text="read article" disabled='true' href="" iconr='bx bx-right-arrow-alt' link='true'/>

                </div>

            </Link> 


            ))}
        </div>

    );
}

function TweetBox({tweets}) {
    function formatDate(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        //var ampm = hours >= 12 ? 'pm' : 'am';
        //hours = hours % 12;
        //hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+ minutes : minutes;
        let strTime = hours + ':' + minutes + ' '; //+ ampm;
        return date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear() + " " + strTime;
    }
      
    if(tweets == null) { return null }

    return (
        <div className='grid'>
             {tweets.data.map(tweet => (
                <a key={tweet.id} className='project__container card grid' href={`https://mobile.twitter.com/user/status/${tweet.id}`}>
                    <div className="project__content">
                        <span className='project__location flex'><i className='bx bxl-twitter'></i> Twitter</span>
                        <span className="project__description">{tweet.text}</span>
                    </div>
                    
                    <div className="project__footer">
                        <span className="project__info flex">
                            <i className='bx bx-transfer'></i>
                            {tweet.public_metrics.retweet_count}
                        </span> 
                        <span className="project__info flex">
                            <i className='bx bxs-heart'></i>
                            {tweet.public_metrics.like_count}
                        </span> 
                        <span className="project__info flex">
                            <i className='bx bx-calendar-alt'></i>{formatDate(new Date(tweet.created_at))}
                        </span> 
                    </div>
                    <Button classname="project__link" text="" disabled='true' href={`https://mobile.twitter.com/user/status/${tweet.id}`} iconl='bx bx-link-external' link='true'/>
                </a>
            ))}
        </div>

    );
}

function Articles(props) {
    const [articleUrl, setArticleUrl] = useState("/api/articles");
    const [articles, setArticles] = useState(null);
    const [tweets, setTweets] = useState(null);

    useEffect(() => {
        let url = "/api/articles?categorie="

        let filterActive = false;
        for(let key in props.categories) {
            if(props.categories[key]) {
                filterActive = true;
                url += "'" + key + "',";
            };   
        }
        url = url.slice(0, -1);
        if(filterActive) setArticleUrl(url);

    }, [props]);

    useEffect(() => {

        fetch(articleUrl)
            .then((response) => response.json())
            //.then((data) => console.log(data))
            .then((data) => setArticles(data));

        fetch('/api/tweets')
            .then((response) => response.json())
            .then((data) => setTweets(data));

    }, [articleUrl]);


    return (
        <div className="articles__container grid"> 
            <ArticleBox articles={articles}/>
            <TweetBox tweets={tweets}/>
        </div> 

    );
}
  

export default Articles