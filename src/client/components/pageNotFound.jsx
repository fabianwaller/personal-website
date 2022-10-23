import React from 'react'
import ReactDOM from 'react-dom'

const PageNotFound = (props) => {

    return (
        <div className='container'>
            <div className="full-screen centered">
                <h1 className='section__title'>404</h1>
                <span className='section__subtitle'>This page could not be found.</span>
                <span className='section__subtitle'>It doesn't exist or was removed.</span>
            </div>
        </div>
    );
}

export default PageNotFound