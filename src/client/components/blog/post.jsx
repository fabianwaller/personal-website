import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import formatDate from "../../helpers/formatdate"


//import picture from '../../assets/'

function Post(props) {
  let { slug } = useParams();

  const [article, setArticle] = useState(
    {
      title: "",
      categorie: "",
      text: "",
      created_time: "",
      imageurl: null
    }
  );

  useEffect(() => {

    fetch(`/api/articles?slug=${slug}`)
      .then((response) => response.json())
      //.then((data) => console.log(data))
      .then((data) => setArticle(data[0]))

  }, []);

  useEffect(() => {
    const mount = document.getElementById('article-content');
    if (mount) mount.innerHTML = article.content;
    document.title = "fabianwaller.de - " + article.title;
  }, [article]);

  let image = null
  let categorie = null;

  if (article.categorie != "") {
    categorie = <div className="article__tags flex">
      <span className='article__tag keyword'>{article.categorie}</span>
    </div>
  }

  /*   if(article.imageurl != null) {
      image = <img className="article__img--large" src={`https://www.fabianwaller.de/cdn/${article.imageurl}`} alt="" />
    } */

  return (
    <section className="section first__section">

      <div className='article__box article__box--single container grid'>

        <h1 className="article__title">{article.title}</h1>

        {image}

        <p className='article__text'>{article.text}</p>

        {categorie}

        <div className="article__content" id='article-content'></div>

        <span className="project__info flex">
          article published on {formatDate(new Date(article.date))}
        </span>


      </div>

    </section>
  );
}

export default Post;