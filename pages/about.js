import Section from '../components/section';
import Layout from '../components/layout';

const About = () => {
    return (
        <Layout page='about'>
            <Section name='about' title='About me' subtitle="What I'm Doing Now">
                <div className="about__keywords">
                    <span className="about__keyword keyword">computer science student</span>
                    <span className="about__keyword keyword">fullstack web + native development</span>
                    <span className="about__keyword keyword">footballer</span>
                    <span className="about__keyword keyword">learner</span>
                    <span className="about__keyword keyword">reader</span>
                    <span className="about__keyword keyword">traveller</span>
                </div>
                <div className="about__data">
                    <p className="about__description">I'm currently studying computer science at Saarland University in Germany and I share my knowledge and projects on this website.
                    I'm mainly interested in full-stack web and native development, software engineering and artificial intelligence.
                    I am currently working on the
                    <a className="underline hover_anchor" href="https://squadmanagerapp.com" target='blank'> Squadmanager</a> app to gain experience in building and launching a product.
                    I also enjoy playing football, travelling around the world and reading books in my spare time.
                    </p>
                </div>
            </Section>
        </Layout>
    )
}

export default About