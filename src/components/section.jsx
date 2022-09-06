import React from 'react'
import ReactDOM from 'react-dom'

class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={`${this.props.name} section`} id={this.props.name}>
        <div className="section__header">
          <h2 className={`section__title ${this.props.gradient}`}>{this.props.title}</h2>
          <span className="section__subtitle">{this.props.subtitle}</span>
        </div>

        <div className={`${this.props.name}__container container grid`}>
          {this.props.children}
        </div>
      </section>
    )
  };
}

export default Section