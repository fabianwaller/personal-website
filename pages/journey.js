/* eslint-disable react/prop-types */
import React from 'react';
import Section from '../components/section';
import Layout from '../components/layout';
import Button from '../components/button';

const JourneyData = (props) => {
    let line;
    if (props.last != 'true') {
        line = <span className="timeline__line"></span>;
    }

    let time;
    if (props.time) {
        time = <div className="flex">{props.time}</div>;
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
};

class Journey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'education',
        };
    }

    setEducationTab = () => {
        this.setState({ tab: 'education' });
    };

    setExperienceTab = () => {
        this.setState({ tab: 'experience' });
    };

    render() {
        return (
            <Layout page='journey'>
                <Section name='journey' title='My journey' subtitle='CV'>

                    <div className="journey__tabs">
                        <Button classname={`journey__tab ${this.state.tab != 'education' ? "journey__tab__inactive" : null}`} text='Education' onclick={this.setEducationTab} link='true' />
                        <Button classname={`journey__tab ${this.state.tab == 'education' ? "journey__tab__inactive" : null}`} text='Experience' onclick={this.setExperienceTab} link='true' />
                    </div>

                    {this.state.tab == 'education' ? (
                        <div>
                            <JourneyData title='Bachelor of Computer Science' subtitle='University of Saarland, Saarbrücken, Germany' time='2021 - 2024' />
                            <JourneyData title='Abitur' subtitle='Peter-Wust-Gymnasium' time='2013 - 2021' last='true' />
                        </div>
                    ) : (
                        <div>
                            <JourneyData title='Fullstack web application development' subtitle='React, Next, Node, Express, SQL, NoSQL' />
                            <JourneyData title='Programming languages' subtitle='Java, C, Typescript' last='true' />
                        </div>
                    )}
                </Section>
            </Layout>
        );
    }
}

export default Journey;
