import React from 'react'
import ReactDOM from 'react-dom'

import { Outlet } from "react-router-dom";

import Search from '../search'
import Articles from './articles'

const Blog = () => {
  return (
      <section className='blog first__section' id='blog'>

        <div className="blog__container container">

          <div className="section__header">
            <h1 className="section__title">Blog</h1>
            <span className="section__subtitle">insight in my thoughts</span>
          </div>

          <div className="blog__content grid">
            <p className="blog__description">Section where you can hopefully find something valuable.</p>

            <Search />

            <Articles />
          </div>

        </div>
      
      </section>
  );
}

export default Blog