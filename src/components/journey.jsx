import React from 'react'
import ReactDOM from 'react-dom'

import Section from './section'

class Journey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'education'
        };
    }

    toggleMenu = () => {
        const visible = !this.state.menu;
        this.setState({ menu: visible });
    }

    render() {
        return (
            <Section name='journey' title='My journey' subtitle ='CV'> 

                <div className="journey__tabs">
                    <div className="journey__button"></div>
                </div>

            </Section>
        );
    }
}

export default Journey