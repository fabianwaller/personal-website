import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './scss/style.scss'

import Header from './components/header'
import Footer from './components/footer'

class Newsletter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main">
                <Header />
                <div className="main container section">

                    <h2>Successfully verified your email address</h2>

                    You now get new notifications directly in your inbox.

                </div>
                <Footer />
            </main>

        )
    };
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Newsletter />
    </React.StrictMode>
);