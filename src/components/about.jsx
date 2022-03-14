import React from 'react'
import ReactDOM from 'react-dom'

import Section from './section'

function About() {
    return (
        <Section name='about' title='About me' subtitle ='My intro'> 
                <div className="about__keywords">
                    <span className="about__keyword keyword">computer science student</span>
                    <span className="about__keyword keyword">devleoper</span>
                    <span className="about__keyword keyword">productivity</span>
                    <span className="about__keyword keyword">reading</span>
                    <span className="about__keyword keyword">football</span>
                </div>
                
                <div className="about__data">
                    <p className="about__description">I am currently studying computer science at Saarland University and create websites on the side. In my free time I like to play football.</p>
                </div>
        </Section>
    );
}
  
export default About


/*         <section className="about section" id="about">
            <h2 className="section__title">About me</h2>
            <span className="section__subtitle">My intro</span>

            <div className="about__container container grid">

                <div className="about__keywords">
                    <span className="about__keyword">computer science student</span>
                    <span className="about__keyword">devleoper</span>
                    <span className="about__keyword">productivity</span>
                    <span className="about__keyword">reading</span>
                    <span className="about__keyword">football</span>
                </div>
                
                <div className="about__data">
                    <p className="about__description">I am currently studying computer science at Saarland University and create websites on the side. In my free time I like to play football.</p>
                </div>

            </div>
        </section> */