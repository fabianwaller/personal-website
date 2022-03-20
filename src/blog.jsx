import React from 'react'
import ReactDOM from 'react-dom'

import './scss/style.scss'


import paper from './assets/paper.svg'

import Header from './components/header'

import Search from './components/search'

import Contact from './components/contact'
import Footer from './components/footer'


const Blog = () => {
  return (
    <div className='App'>
      <Header activeItem='blog'/>
      <main className="main">

        <section className='blog first__section' id='blog'>

          <div className="blog__container container">

{/*             <div className="blog__img">
              <svg className="paper" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 428.01 387.83">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <rect class="cls-1" x="96.01" y="21.83" width="326" height="360" rx="19.39" ry="19.39"/>
                        <path class="cls-2" d="M422,60.83v282c0,21.54-15.81,39-35.31,39H131.33c-18.65,0-33.93-16-35.2-36.2H343c19.51,0,35.31-17.46,35.31-39v-282c0-.95,0-1.87-.11-2.8h8.5C406.2,21.83,422,39.29,422,60.83Z"/>
                        <path class="cls-3" d="M402.62,387.83H115.41A25.42,25.42,0,0,1,90,362.44V41.22a25.42,25.42,0,0,1,25.39-25.39H402.62A25.42,25.42,0,0,1,428,41.22V362.44A25.42,25.42,0,0,1,402.62,387.83Zm-287.21-360A13.41,13.41,0,0,0,102,41.22V362.44a13.41,13.41,0,0,0,13.39,13.39H402.62A13.41,13.41,0,0,0,416,362.44V41.22a13.41,13.41,0,0,0-13.39-13.39Z"/>
                        <path class="cls-4" d="M16.77,9h0a25.13,25.13,0,0,1,34.92,6.58L197.11,228.49a295.88,295.88,0,0,1,38.52,80.06l1.71,5.58a10.41,10.41,0,0,1-16.42,11.1l-3.88-3a295.88,295.88,0,0,1-61.95-66.11L10.2,43.91A25.13,25.13,0,0,1,16.77,9Z"/>
                        <path class="cls-5" d="M236.73,317.41a10.41,10.41,0,0,1-16.83,8.53l-3.88-3a295.81,295.81,0,0,1-62-66.11L9.16,44.62A25.14,25.14,0,0,1,23.89,6.05a25.12,25.12,0,0,0-.21,28.65l144.9,212.16a295.81,295.81,0,0,0,62,66.11l3.88,3A10.92,10.92,0,0,0,236.73,317.41Z"/>
                        <ellipse class="cls-1" cx="78.39" cy="92.37" rx="3.83" ry="29.06" transform="translate(-38.73 61.39) rotate(-34.86)"/>
                        <ellipse class="cls-1" cx="46.05" cy="45.57" rx="3.83" ry="14.53" transform="translate(-17.78 34.5) rotate(-34.86)"/>
                        <path class="cls-3" d="M227.52,334.89a16.32,16.32,0,0,1-10.1-3.55l-3.88-3a301.53,301.53,0,0,1-63.2-67.45L5.43,48.69A31.13,31.13,0,0,1,36.9.55a30.93,30.93,0,0,1,19.94,13L202.25,226.49a301.6,301.6,0,0,1,39.31,81.68l1.71,5.59A16.19,16.19,0,0,1,236.73,332,16.41,16.41,0,0,1,227.52,334.89ZM31.09,12A19.13,19.13,0,0,0,15.34,41.92L160.25,254.09a289.54,289.54,0,0,0,60.69,64.77l3.88,3a4.41,4.41,0,0,0,7-4.7l-1.69-5.5a289.57,289.57,0,0,0-37.74-78.43L46.93,20.35a19,19,0,0,0-12.25-8A19.36,19.36,0,0,0,31.09,12Z"/>
                        <rect class="cls-3" x="258.51" y="321.33" width="94" height="12"/>
                        <rect class="cls-3" x="217.51" y="205.34" width="135" height="12"/>
                        <rect class="cls-3" x="217.51" y="173.59" width="135" height="12"/>
                        <rect class="cls-3" x="217.51" y="141.84" width="135" height="12"/>
                        <rect class="cls-3" x="217.51" y="110.09" width="135" height="12"/>
                        <rect class="cls-3" x="217.51" y="78.34" width="135" height="12"/>
                    </g>
                </g>
              </svg>
            </div> */}

            <div className="section__header">
              <h1 className="section__title">Blog</h1>
              <span className="section__subtitle">where I post my thoughts</span>
            </div>

            <div className="blog__content grid">
              <p className="blog__description">I like to blog about the stuff I'm interested in. Hopefully you find something valuable too.</p>

              <Search />
            </div>


          </div>
        
        </section>


        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Blog />
  </React.StrictMode>,
  document.getElementById('root')
)