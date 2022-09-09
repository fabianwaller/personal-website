import React from 'react'
import ReactDOM from 'react-dom'

import Section from './section'

function About() {
    return (
        <Section name='about' title='About me' subtitle='introduction of myself'>
            <div className="about__keywords">
                <span className="about__keyword keyword">computer science student</span>
                <span className="about__keyword keyword">developer</span>
                <span className="about__keyword keyword">footballer</span>
                <span className="about__keyword keyword">learner</span>
                <span className="about__keyword keyword">reader</span>
            </div>

            <div className="about__data">
                <p className="about__description">Currently studying computer science at Saarland University and creating some stuff I like to publish on this website.</p>
            </div>
        </Section>
    );
}

export default About