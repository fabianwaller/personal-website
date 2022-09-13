import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react';

import Button from './button'
import Section from './section'

import { isEmpty, isEmail } from './formHelper'


class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            warnings: [false, false, false, false],
            alerts: [],
            textareaHeight: 55,
        };
    }

    componentDidMount() {
        this.setState({ textareaHeight: this.divElement.scrollHeight })
    }

    async sendMessage() {

        let arr = this.state.warnings;
        arr[0] = isEmpty(this.state.name) || this.state.name.length > 255;
        arr[1] = isEmpty(this.state.email) || !isEmail(this.state.email) || this.state.email.length > 255;
        arr[2] = isEmpty(this.state.subject) || this.state.subject.length > 255;
        arr[3] = isEmpty(this.state.message);

        this.setState({
            warnings: arr
        });

        let error = false;
        this.state.warnings.forEach(warning => {
            error = error || warning;
        })

        if (!error) {
            try {

                let reqOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + import.meta.env.VITE_API_ACCESS_TOKEN
                    },
                    body: JSON.stringify({
                        name: this.state.name,
                        email: this.state.email,
                        subject: this.state.subject,
                        message: this.state.message
                    }),
                    crossdomain: true
                };
                await fetch('/api/contact', reqOptions)
                    .then(response => response.json())
                    .then(res => console.log(res));

                this.setState({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                    warnings: [false, false, false, false],
                    alerts: ['Your message was sent']
                });


            } catch (e) {
                console.error("Message not sent: ", e);
            }
        }
    }

    render() {
        const style = {
            height: (this.state.textareaHeight) + 'px'
        };
        return (
            <Section name='contact' title='Contact' subtitle='get in touch'>

                <form className="contact__form form grid">
                    <div className="form__content">
                        <input type="text" id="name" name="name" value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value }, () => {
                                let arr = this.state.warnings;
                                arr[0] = isEmpty(this.state.name);
                                this.setState({
                                    warnings: arr
                                });
                            })}
                            className={`form__input ${this.state.warnings[0] ? 'form__input--alert' : ''}`} placeholder=" " />
                        <label htmlFor="name" className='form__label'>Name</label>
                    </div>
                    <div className="form__content">
                        <input type="email" id="email" name="email" value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value }, () => {
                                let arr = this.state.warnings;
                                let newalerts = [];
                                if (isEmpty(this.state.email)) {
                                    arr[1] = true;
                                }
                                if (isEmail(this.state.email)) {
                                    arr[1] = false;
                                } else {
                                    arr[1] = true;
                                    newalerts = ['please enter a valid email address'];
                                }
                                this.setState({ warnings: arr, alerts: newalerts });
                            })}
                            className={`form__input ${this.state.warnings[1] ? 'form__input--alert' : ''}`} placeholder=" " />
                        <label htmlFor="email" className='form__label'>Email</label>
                    </div>
                    <div className="form__content">
                        <input type="text" id="subject" name="subject" value={this.state.subject}
                            onChange={(e) => this.setState({ subject: e.target.value }, () => {
                                let arr = this.state.warnings;
                                arr[2] = isEmpty(this.state.subject);
                                this.setState({ warnings: arr });
                            })}
                            className={`form__input ${this.state.warnings[2] ? 'form__input--alert' : ''}`} placeholder=" " />
                        <label htmlFor="subject" className='form__label'>Subject</label>
                    </div>
                    <div className="form__content">
                        <textarea style={style} ref={(divElement) => { this.divElement = divElement }} type="text" id="message" name="message" value={this.state.message}
                            onChange={(e) => this.setState({ message: e.target.value }, () => {
                                let arr = this.state.warnings;
                                arr[3] = isEmpty(this.state.message);
                                this.setState({ warnings: arr });
                                this.setState({ textareaHeight: this.divElement.scrollHeight });
                            })}
                            className={`form__input ${this.state.warnings[3] ? 'form__input--alert' : ''}`} placeholder=" " />
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
                        <Button text="Send Message" id="form__submit" onclick={this.sendMessage} iconr='bx bx-send' />
                    </div>

                </form>

            </Section>
        );
    }
}


export default Contact