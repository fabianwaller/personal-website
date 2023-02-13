import React from 'react'
import ReactDOM from 'react-dom'

import Button from './button'
import Section from './section'

function JourneyData(props) {
    let line;
    if (props.last != 'true') {
        line = <span className="timeline__line"></span>
    }

    let time;
    if (props.time) {
        time = <div className="flex">{props.time}</div>
    }
    return (
        <div className="journey__data">
            <div className="journey__timeline timeline">
                <span className="timeline__rounder"></span>
                {line}
            </div>

            <div className="journey__databox card">
                <div>
                    <h3 className="card__title">{props.title}</h3>
                    <span className="card__subtitle">{props.subtitle}</span>
                </div>
                {time}
            </div>
        </div>
    );
}

class Journey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'education'
        };
    }

    setEducationTab = () => {
        this.setState({tab: 'education'});
    }

    setExperienceTab = () => {
        this.setState({tab: 'experience'});
    }

    render() {
        let journey__tabs;
        let journey__data;
        if (this.state.tab == 'education') {
            journey__tabs = <div className="journey__tabs">
                <Button classname="journey__tab" text='Education' onclick={this.setEducationTab} link='true' />
                <Button classname="journey__tab journey__tab__inactive" text='Experience' onclick={this.setExperienceTab} link='true' />
            </div>;

            journey__data = <div>
                <JourneyData title='Bachelor of Computer Science' subtitle='University of Saarland, Saarbrücken, Germany' time='2021 - 2024' />
                <JourneyData title='Abitur' subtitle='Peter-Wust-Gymnasium' time='2013 - 2021' last='true' />
            </div>
        } else {
            journey__tabs = <div className="journey__tabs">
                <Button classname="journey__tab journey__tab__inactive" text='Education' onclick={this.setEducationTab} link='true' />
                <Button classname="journey__tab" text='Experience' onclick={this.setExperienceTab} link='true' />
            </div>;

            journey__data = <div>
                <JourneyData title='Fullstack application development' subtitle='ReactJS, NodeJS, Express, MySQL, MongoDB' last='true' />
            </div>
        }
        return (
            <Section name='journey' title='My journey' subtitle='CV'>

                {journey__tabs}

                {journey__data}

            </Section>
        );
    }
}

export default Journey