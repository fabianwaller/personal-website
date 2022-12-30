import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './scss/style.scss'

import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Journey from './components/journey'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import PageNotFound from './components/pageNotFound'

import Blog from './components/blog/blog'
import Post from './components/blog/post'
import { Verify } from './components/newsletter/verify'
import { Unsubscribe } from './components/newsletter/unsubscribe'
import NewsletterSubscriptionContainer from './components/newsletter/subscribe'

import scrollObserver from './helpers/scrollObserver'

import Commands from './components/commands';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      indexSection: 'home',
      blogSection: 'blog'
    };
  }

  setSection = (section) => {
    this.setState({ indexSection: section });
  }

  componentDidMount() {
    //this.scrollSectionsUpdateActiveLink();
  }

  scrollSectionsUpdateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 65;
        let sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          this.setSection(sectionId);
        }
      })
    });
  }

  render() {
    return (
      <div className='App' onKeyDown={this.onKeyDown}>
        <Commands />
        <Router>
          <Routes>
            <Route path="/" element={
              <main className="main">
                <Header activeItem='home' scroll={310} />
                <Home activateCommandsModal={this.activateCommandsModal} />
              </main>
            } />
            <Route path="/about" element={
              <div>
                <Header activeItem='about' scroll={1} />
                <About />
                <Footer />
              </div>
            } />
            <Route path="/journey" element={
              <div>
                <Header activeItem='journey' scroll={1} />
                <Journey />
                <Footer />
              </div>
            } />
            <Route path="/projects" element={
              <div>
                <Header activeItem='projects' scroll={1} />
                <Projects />
                <Footer />
              </div>
            } />
            <Route path="/contact" element={
              <div>
                <Header scroll={1} />
                <Contact />
                <Footer />
              </div>
            } />
            <Route path="/blog" element={
              <div>
                <Header activeItem='blog' scroll={1} />
                <Blog />
                <Footer />
              </div>
            } />
            <Route exact path="/blog/:slug" element={
              <div>
                <Header activeItem='blog' scroll={1} />
                <Post />
                <Footer />
              </div>
            } />
            <Route path="/newsletter" element={
              <div>
                <Header activeItem='null' />
                <section className='container'>
                  <NewsletterSubscriptionContainer />
                </section>
                <Footer />
              </div>} />
            <Route path="/newsletter/verify" element={
              <div>
                <Header activeItem='null' />
                <Verify />
                <Footer />
              </div>} />
            <Route path="/newsletter/unsubscribe" element={
              <div>
                <Header activeItem='null' />
                <Unsubscribe />
                <Footer />
              </div>} />
            <Route path="/*" element={
              <div>
                <Header activeItem='null' />
                <PageNotFound />
              </div>} />
          </Routes>
        </Router>
      </div>
    )
  };
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);