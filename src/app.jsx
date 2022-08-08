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

import Blog from './components/blog/blog'
import Post from './components/blog/post'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexSection: 'home',
      blogSection: 'blog'
    };
  }

  setIndexSection = (section) => {
    this.setState({ indexSection: section });
  }

  componentDidMount() {
    /* SCROLL SECTIONS ACTIVE LINK */
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 65;
        let sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          this.setIndexSection(sectionId);
        }
      })
    });

    /*     const reqOptions = {
          method: 'POST',
          header: {'Content-Type': 'application/json'},
          //body: JSON.stringify({title: 'react post request example'})
        };
        fetch('http://localhost:4000/api/v1/articles/', reqOptions)
          .then(response => response.json())
          .then(res => console.log(res)); */
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
            <Route path="/blog" element={
              <div>
                <Header activeItem={this.state.blogSection} scroll={1} />
                <Blog />
              </div>
            } />
            <Route exact path="/blog/:slug" element={
              <div>
                <Header activeItem={this.state.blogSection} scroll={1} />
                <Post></Post>
              </div>
            } />
            <Route path="/*" element={
              <div>
                <Header activeItem='null' />
                <h1 className='container section'>404</h1>
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