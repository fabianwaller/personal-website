import React from 'react'
import ReactDOM from 'react-dom'

import Button from './button'
import Section from './section'

function JourneyData(props) {
    let line;
    if (props.last != 'true') {
        line = <span className="timeline__line"></span>
    }
    return (
        <div className="journey__data">
            <div className="journey__timeline timeline">
                <span className="timeline__rounder"></span>
                {line}
            </div>

            <div className="journey__databox card">
                <h3 className="card__title">{props.title}</h3>
                <span className="card__subtitle">{props.subtitle}</span>
                <div className="flex">{props.time}</div>
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
        this.setState({ tab: 'education' });
    }

    setExperienceTab = () => {
        this.setState({ tab: 'experience' });
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
                <JourneyData title='Abitur' subtitle='Peter-Wust-Gymnasium' time='2013 - 2021' />
                <JourneyData title='B.Sc. Computer Science' subtitle='Saarland University' time='2021 - 2024' last='true' />
            </div>
        } else {
            journey__tabs = <div className="journey__tabs">
                <Button classname="journey__tab journey__tab__inactive" text='Education' onclick={this.setEducationTab} link='true' />
                <Button classname="journey__tab" text='Experience' onclick={this.setExperienceTab} link='true' />
            </div>;

            journey__data = <div>
                <JourneyData title='Web Development' subtitle='HTML, CSS, JS, REACT' time='2020-2022' last='true' />
            </div>
        }
        return (
            <Section name='journey' title='My journey' subtitle='CV'>

                {journey__tabs}

                {journey__data}

                <div className="journey__download">
                    <Button text='Download CV' href='/cdn/cv.pdf' iconr='bx bx-download' disabled='false' />
                </div>

            </Section>
        );
    }
}

export default Journey