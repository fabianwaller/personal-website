import React from 'react'
import ReactDOM from 'react-dom'

import { Outlet } from "react-router-dom";

import Search from './search'
import Articles from './articles'

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
      <section className='blog first__section' id='blog'>

        <div className="blog__container container">

          <div className="section__header">
            <h1 className="section__title linear__gradient linear__gradient-1">My personal blog</h1>
            <span className="section__subtitle">insight in my thoughts</span>
          </div>

          <div className="blog__content grid">
            <p className="blog__description">This blog serves as a home for all my public thoughts, notes, learnings and experiences, ranging from programming to math, web development and much more. Scroll down to check them out! Hopefully You can find something valuable.</p>

            {/* <Search categories={this.state.categories} onchange={this.updateSearch} onclick={this.toggleCategorie} /> */}

            <Articles title={this.state.search} categories={this.state.categories} />
          </div>

        </div>

      </section>
    )
  };
}

export default Blog