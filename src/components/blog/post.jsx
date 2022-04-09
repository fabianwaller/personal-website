import React, { useState, useEffect } from "react";

import { useParams } from "react-router";

import picture from '../../assets/Aurora.jpeg'

function Post(props) {
  let { slug } = useParams();

  const [article, setArticle] = useState (
    {
      title: "",
      categorie: "",
      text: "",
      created_time: ""
    }
  );

  useEffect(() => {

    console.log('fetch article once')

    fetch(`/api/articles?slug=${slug}`)
          .then((response) => response.json())
          //.then((data) => console.log(data[0]))
          .then((data) => setArticle(data[0]))
        
  }, []);

  useEffect(() => {
    document.getElementById('content').innerHTML=article.content;
  }, [article]);

  return (
    <section className="section first__section">
      <div className='article__box article__box--single container'>

      <h3 className="article__title">{article.title}</h3>
      <img className="article__img" src={picture} alt="" />

      <div className="article__tags flex">
        <span className='article__tag keyword'>{article.categorie}</span>
      </div>

      <div className="article__content grid">
        <p className='article__text'>{article.text}</p>
        <p id="content"></p>
      </div>

      </div>
    </section>
  );
}

export default Post;