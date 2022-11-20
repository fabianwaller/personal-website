import React from 'react'
import ReactDOM from 'react-dom'

import { Outlet } from "react-router-dom";

import Search from './search'
import Articles from './articles'
import NewsletterSubscriptionContainer from '../newsletter/subscribe'

class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.toggleCategorie = this.toggleCategorie.bind(this);
    this.state = {
      search: '',
      categories: {
        "productivity": true,
        "studying": true,
        "entrepreneurship": true,
        "finance": true
      }
    };
    document.title = "fabianwaller.de - blog";
  }

  updateSearch = (e) => {
    this.setState({
      search: e.target.value
    });
  }

  toggleCategorie = (e) => {
    let categorie = e.target.innerHTML
    let updatedState = this.state.categories
    updatedState[categorie] = !this.state.categories[categorie];
    this.setState(updatedState);
  }

  render() {
    return (
      <section className='blog section' id='blog'>

        <div className="blog__container container">

          <div className="section__header">
            <h1 className="section__title linear__gradient linear__gradient-2">Personal Blog</h1>
            <span className="section__subtitle">insight in my thoughts</span>
          </div>

          <p className="blog__description">Here you'll find all my public thoughts, notes, learnings and experiences. I share whatever I want, ranging from programming to math, over books and podcasts and much more. Scroll down to check them out!</p>

          <div className="blog__content grid">
            <Articles />
          </div>

          <NewsletterSubscriptionContainer />

        </div>

      </section>
    )
  };
}

export default Blog