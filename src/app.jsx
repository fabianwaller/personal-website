import React from 'react'
import ReactDOM from 'react-dom'

import './scss/style.scss'

import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Journey from './components/journey'

function App() {
  return (
    <div className='App'>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Journey />
      </main>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)