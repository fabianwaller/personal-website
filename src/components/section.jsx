import React from 'react'
import ReactDOM from 'react-dom'

function Section(props) {
    return (
        <section className={`${props.name} section`} id={props.name}>
            <h2 className="section__title">{props.title}</h2>
            <span className="section__subtitle">{props.subtitle}</span>

            <div className={`${props.name}__container container grid`}>
                {props.children}
            </div>
        </section>
    );
}
  
export default Section