import React from 'react'
import ReactDOM from 'react-dom'

import './scss/style.scss'

import Header from './components/header'

function App() {
  return (
    <div className='App'>
      <Header />  
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)