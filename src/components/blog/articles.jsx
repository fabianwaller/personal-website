import React from 'react'
import ReactDOM from 'react-dom'

import { Link } from "react-router-dom";

import { useState , useEffect } from 'react';


import picture from '../../assets/Aurora.jpeg'

import Button from '../button'


function ArticleBox({articles}) {
    if(articles == null) { return null }
    return (
        <div>
            {articles.map(article => (

              <Link to={`/blog/${article.title}`} key={article.created_time}>
                <div className='article__box grid'>
                    <img className="article__img" src={picture} alt="" />

                    <div className="article__tags flex">
                      <span className='article__tag keyword'>{article.categorie}</span>
                    </div>

                    <div className="article__content grid">
                      <h3 className="article__title">{article.title}</h3>
                      <p className='article__text'>{article.text} <i className='bx bx-right-arrow-alt'></i></p>
                    </div>

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

    //console.log(tweets);

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

function Articles() {
    const [articles, setArticles] = useState(null);
    const [tweets, setTweets] = useState(null);

    useEffect(() => {

      //let results = [];

      fetch('/api/articles', {crossdomain: true})
        .then((response) => response.json())
        //.then((data) => console.log(data))
        .then((data) => setArticles(articles));


      fetch('/api/tweets', {crossdomain: true})
        .then((response) => response.json())
        .then((data) => setTweets(data));

      //console.log(results);

    }, []);

    return (
        <div className="articles__container grid"> 
            <ArticleBox articles={articles}/>
            <TweetBox tweets={tweets}/>
        </div> 

    );
}
  

export default Articles