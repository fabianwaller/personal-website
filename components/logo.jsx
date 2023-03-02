import React from 'react'
import ReactDOM from 'react-dom'

function Logo(props) {
    let bottomclass = 'logo__graphic__bottom'
    let topclass = 'logo__graphic__top'
    if (props.type == 'white') {
        bottomclass = 'logo__graphic__bottom--white'
        topclass = 'logo__graphic__top--white'
    }
    return (
        <a href="/" className="logobox">
            <svg className="logo__graphic" width="78" height="74" viewBox="0 0 78 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={`${bottomclass} br`} d="M43.1746 30.0684L68.5683 47.8492V47.8492C58.7482 61.8738 39.4183 65.2822 25.3937 55.4621V55.4621L43.1746 30.0684Z" />
                <path className={`${bottomclass} bl`} d="M13.1066 46.8583C17.8582 40.0722 27.2114 38.423 33.9975 43.1747V43.1747L25.3938 55.462L13.1066 46.8583V46.8583Z" />
                <path className={`${topclass} tl`} d="M33.9973 43.1746L8.6036 25.3937V25.3937C18.4237 11.3691 37.7536 7.96074 51.7782 17.7808V17.7808L33.9973 43.1746Z" />
                <path className={`${topclass} tr`} d="M64.0656 26.3848C59.3139 33.1709 49.9607 34.8201 43.1746 30.0685V30.0685L51.7783 17.7812L64.0656 26.3848V26.3848Z" />
            </svg>
            <span className="logo__text">Fabian</span>
        </a>
    );
}

export default Logo