import React from 'react'
import ReactDOM from 'react-dom'

const PageNotFound = (props) => {

    return (
        <div className='container first__section'>
            <div className="section__header">
                <h1 className='section__title'>404 page not found</h1>
                <span className='section__subtitle'>This page doesn't exist or was removed!</span>
            </div>
        </div>
    );
}

export default PageNotFound