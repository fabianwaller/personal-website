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
          "entrepreneurship" : true,
          "money" : true
        }
      };
    }

    updateSearch = (e) => {
      this.setState({
        search: e.target.value
      });
      //console.log(this.state.search)
    }

    toggleCategorie = (e) => {
        let categorie = e.target.innerHTML
        let updatedState = this.state.categories
        updatedState[categorie] = !this.state.categories[categorie];
        this.setState(updatedState);
        //console.log(updatedState);
    }
  
    render (){
      return (
        <section className='blog first__section' id='blog'>

          <div className="blog__container container">

            <div className="section__header">
              <h1 className="section__title">Blog</h1>
              <span className="section__subtitle">insight in my thoughts</span>
            </div>

            <div className="blog__content grid">
              <p className="blog__description">Section where you can hopefully find something valuable.</p>

              <Search categories={this.state.categories} onchange={this.updateSearch} onclick={this.toggleCategorie}/>

              <Articles title={this.state.search} categories={this.state.categories}/>
            </div>

          </div>

        </section>
      )};
}

export default Blog