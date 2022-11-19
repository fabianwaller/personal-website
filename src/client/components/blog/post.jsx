import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import formatDate from "../../helpers/formatdate"


//import picture from '../../assets/'

function Post(props) {
  let { slug } = useParams();

  let node = React.createRef();
  const [article, setArticle] = useState({});

  useEffect(() => {

    getData();
    async function getData() {
      let data = await (await fetch(`/api/articles?slug=${slug}`)).json()
      if (data.length == 0) {
        window.location.href = "/404"
      }
      setArticle(data[0])
    }

  }, []);

  const renderMath = () => {
    window.MathJax.Hub.Queue([
      "Typeset",
      window.MathJax.Hub,
      node.current
    ]);
  }

  useEffect(() => {
    const mount = document.getElementById('article-content');
    if (mount) mount.innerHTML = article.html;
    document.title = "fabianwaller.de - " + article.title;

    renderMath();
  }, [article]);

  let image = null

  /*   if(article.imageurl != null) {
      image = <img className="article__img--large" src={`https://www.fabianwaller.de/cdn/${article.imageurl}`} alt="" />
    } */

  return (
    <section className="section first__section" ref={node}>

      <div className='article__box article__box--single container grid'>

        <h1 className="article__title">{article.title}</h1>

        {image}

        <p className='article__text'>{article.description}</p>

        <div className="article__content" id='article-content'></div>

        <span className="project__info flex">
          article published on {formatDate(new Date(article.createdAt))}
        </span>

      </div>

    </section>
  );
}

export default Post;