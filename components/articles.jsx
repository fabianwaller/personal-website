import React from 'react'
import Link from 'next/link';
import Button from './button'
import formatDate from "../lib/formatdate"

function TweetBoxes({tweets}) {
    if (tweets == null) {return null}

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
                    <Button classname="project__link" text="" disabled='true' href={`https://mobile.twitter.com/user/status/${tweet.id}`} iconl='bx bx-link-external' link='true' />
                </a>
            ))}
        </div>

    );
}

const Articles = ({allPostsData}) => {

    // const [articleUrl, setArticleUrl] = useState("/api/articles");
    // const [articles, setArticles] = useState(null);
    // const [tweets, setTweets] = useState(null);

    // useEffect(() => {

    //     getData();
    //     async function getData() {
    //         const res = await fetch(articleUrl);
    //         const data = await res.json();
    //         setArticles(data);
    //     }

    // }, [articleUrl]);

    return (
        <div className='article__boxes'>

            {allPostsData.map((post) => (
                <Link href={`/blog/${post.id}`} key={post.id} className={`article__box article__box-small`}>
                    <div className='article__data grid'>
                        <div>
                            <h3 className="article__title">{post.title}</h3>
                            <p className='article__text'>{post.description}</p>
                        </div>
                    </div>


                    <span className="article__data flex">
                        {formatDate(new Date(post.date))}
                    </span>
                </Link>
            ))}
        </div>
    );
}


export default Articles