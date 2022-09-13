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
    }


    render() {
        return (
            <main className="main">
                <Home />
                <Footer />
            </main>

        )
    };
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);