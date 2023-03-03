import React from 'react'

const Section = (props) => {
  return (
    <section className={`${props.name} section`} id={props.name}>
      <div className="section__header">
        <h1 className={`section__title ${props.gradient}`}>{props.title}</h1>
        <span className="section__subtitle">{props.subtitle}</span>
      </div>

      <div className={`${props.name}__container container grid`}>
        {props.children}
      </div>
    </section>
  )
}

export default Section