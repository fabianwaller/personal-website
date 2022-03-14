import React from 'react'
import ReactDOM from 'react-dom'

import Button from './button'
import Section from './section'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.state = {
            warnings: [false,false,false,false],
            alerts: []
        };
    }

    sendMessage() {
        console.log('send message');
        let alerts = [];

        const contactForm = document.querySelector('.contact__form');
        const contactSubmit = document.getElementById('form__submit');
        const contactAlertbox = document.getElementById('contact__alertbox');

        let formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        }

        let arr = [this.state.warnings];
        arr[0] = isEmpty(formData.name);
        if(isEmpty(formData.email)) {
            arr[1] = true
        } else if (!isEmail(formData.email)) {
            arr[1] = true;
            alerts.push('check email again');
        }
        arr[1] = (isEmpty(formData.email) || !isEmail(formData.email))
        arr[2] = (isEmpty(formData.subject))
        arr[3] = (isEmpty(formData.message))
        this.setState({warnings: arr});
        


        console.log(this.state);
        this.setState({alerts: alerts})
        console.log(formData);
    }



    render() {          
        return (
            <Section name='contact' title='Contact' subtitle ='get in touch'> 

                <form className="contact__form form grid">
                    <div className="form__content">
                        <input type="text" id="name" name="name" className={`form__input ${this.state.warnings[0] ? 'form__input--alert' : ''}`} placeholder=" "/>
                        <label htmlFor="name" className='form__label'>Name</label>
                    </div>
                    <div className="form__content">
                        <input type="email" id="email" name="email" className={`form__input ${this.state.warnings[1] ? 'form__input--alert' : ''}`} placeholder=" "/>
                        <label htmlFor="email" className='form__label'>Email</label>
                    </div>
                    <div className="form__content">
                        <input type="text" id="subject" name="subject" className={`form__input ${this.state.warnings[2] ? 'form__input--alert' : ''}`} placeholder=" "/>
                        <label htmlFor="subject" className='form__label'>Subject</label>
                    </div>
                    <div className="form__content">
                        <textarea cols="0" rows="3" type="text" id="message" name="message" className={`form__input ${this.state.warnings[3] ? 'form__input--alert' : ''}`} placeholder=" "/>
                        <label htmlFor="message" className='form__label'>Message</label>
                    </div>

                    <ul className="alertbox" id="contact__alertbox">
                        {this.state.alerts.map(alert => (
                            <div key={alert} className='alertbox__alert'>
                                {alert}
                            </div>
                        ))}
                    </ul>

                    <div>
                        <Button text="Send Message" disabled='true' id="form__submit" onclick={this.sendMessage} iconr='bx bx-send'/>
                    </div>

                </form>
        
            </Section>
        );
    }
}

function isEmpty(value) {
    if (value == "" || value == null || typeof value == 'undefined') {
        return true;
    }
    return (value.length < 0);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

export default Contact