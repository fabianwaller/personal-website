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
            <span className="section__subtitle">where I post my thoughts</span>
          </div>

          <div className="blog__content grid">
            <p className="blog__description">I like to blog about the stuff I'm interested in. Hopefully you find something valuable too.</p>

            <Search />

            <Articles />
          </div>

        </div>
      
      </section>
  );
}

export default Blog