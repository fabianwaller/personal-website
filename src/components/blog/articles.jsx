import React from 'react'
import ReactDOM from 'react-dom'

import { Link } from "react-router-dom";

import { useState , useEffect } from 'react';

import Button from '../button'

import formatDate from "../formatdate"

function ArticleBoxes({articles}) {
    if(articles == null) { return null }

    return (
        <div className='article__boxes'>
            {articles.map((article, index) => (

            <Link to={`/blog/${article.slug}`} key={article.slug} className={`article__box grid ${index == 0 ? 'article__box--featured' : ''}`}>

                <img className="article__img" src={`https://www.fabianwaller.de/cdn/${article.imageurl}`} alt="" />

                <div className='article__data grid'>
                    <div className="article__tags flex">
                        <span className='article__tag keyword'>{article.categorie}</span>
                    </div>

                    <h3 className="article__title">{article.title}</h3>
                    <p className='article__text'>{article.text}</p>

                    <span className="project__info flex">
                        <i className='bx bx-calendar-alt'></i>{formatDate(new Date(article.created_time))}
                    </span> 
                        
                    <Button classname="article__link" text="read article" disabled='true' href="" iconr='bx bx-right-arrow-alt' link='true'/>
                </div>

            </Link> 


            ))}
        </div>
    );
}

function TweetBoxes({tweets}) {      
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
        let searchUrl = "/api/articles"

        let url = "?categorie="
        let filterActive = false;
        for(let key in props.categories) {
            if(props.categories[key]) {
                filterActive = true;
                url += "'" + key + "',";
            };   
        }
        url = url.slice(0, -1);
        if(filterActive) {
            searchUrl += url 
            url = "&title="
        } else {
            url = "?title="
        }

        if (props.title != "") {
            url += props.title
            searchUrl += url; 
        }
        
        setArticleUrl(searchUrl);

        //console.log(searchUrl);

    }, [props]);

    useEffect(() => {

        getData();
        async function getData() {
            const res = await fetch(articleUrl);
            const data = await res.json(); 

            function compare(a, b) {
                if (new Date(a.created_time) < new Date(b.created_time)){
                  return 1;
                }
                if (new Date(a.created_time) > new Date(b.created_time)){
                  return -1;
                }
                return 0;
            }              
            data.sort(compare);
            setArticles(data);
        }

        fetch('/api/tweets')
            .then((response) => response.json())
            .then((data) => setTweets(data));

    }, [articleUrl]);


    return (
        <div className="articles__container grid"> 
            <ArticleBoxes articles={articles}/>
            <TweetBoxes tweets={tweets}/>
        </div> 

    );
}
  

export default Articles