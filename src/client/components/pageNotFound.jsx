import React from 'react'
import ReactDOM from 'react-dom'

const PageNotFound = (props) => {

    return (
        <section className='container first__section'>
            <div className="section__header">
                <h1 className='section__title'>404</h1>
                <span className='section__subtitle'>This page could not be found.</span>
                <span className='section__subtitle'>It doesn't exist or was removed.</span>
            </div>
        </section>
    );
}

export default PageNotFound