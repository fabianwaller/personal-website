import React from 'react'
import ReactDOM from 'react-dom'

import './scss/style.scss'

import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Journey from './components/journey'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
    const sections = document.querySelectorAll('section[id]');

    function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            let sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                let element = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
                if(element !== null) {
                    element.classList.add('nav__link__active');
                }
            } else {
                let element = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
                if(element !== null) {
                    element.classList.remove('nav__link__active');
                }
            }
        })
    }
    window.addEventListener('scroll', scrollActive)
  }

  render (){
    return (
      <div className='App'>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Journey />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    )};
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)