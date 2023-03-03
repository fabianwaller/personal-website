import Section from '../components/section';
import Layout from '../components/layout';

const About = () => {
    return (
        <Layout page='about'>
            <Section name='about' title='About me' subtitle='introduction of myself'>
                <div className="about__keywords">
                    <span className="about__keyword keyword">computer science student</span>
                    <span className="about__keyword keyword">developer</span>
                    <span className="about__keyword keyword">footballer</span>
                    <span className="about__keyword keyword">learner</span>
                    <span className="about__keyword keyword">reader</span>
                </div>

                <div className="about__data">
                    <p className="about__description">Currently studying computer science at Saarland University and
                        sharing my learnings and projects on this website.
                    </p>
                </div>
            </Section>
        </Layout>
    )
}

export default About