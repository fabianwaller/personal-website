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
import Newsletter from './components/newsletter/newsletter';
import NewsletterSubscriptionContainer from './components/newsletter/subscribe'

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
    this.scrollSectionsUpdateActiveLink();
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
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={
              <main className="main">
                <Header activeItem={this.state.indexSection} scroll={310} />
                <Home />
                <About />
                <Journey />
              </main>
            } />
            <Route path="/contact" element={
              <div>
                <Header scroll={1} />
                <Contact />
              </div>
            } />
            <Route path="/blog" element={
              <div>
                <Header activeItem={this.state.blogSection} scroll={1} />
                <Blog />
              </div>
            } />
            <Route exact path="/blog/:slug" element={
              <div>
                <Header activeItem={this.state.blogSection} scroll={1} />
                <Post />
              </div>
            } />
            <Route path="/newsletter" element={
              <div>
                <Header activeItem='null' />
                <section className='first__section container'>
                  <NewsletterSubscriptionContainer />
                </section>
              </div>} />
            <Route path="/newsletter/verify" element={
              <div>
                <Header activeItem='null' />
                <Newsletter />
              </div>} />
            <Route path="/*" element={
              <div>
                <Header activeItem='null' />
                <PageNotFound />
              </div>} />
          </Routes>

          <Footer />
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