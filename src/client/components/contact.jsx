import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react';

import Button from './button'
import Section from './section'

import { isEmpty, isEmail } from '../helpers/formHelper'


const Contact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [warnings, setWarnings] = useState([false, false, false]);
    const [alerts, setAlerts] = useState([]);
    const [textAreaHeight, setTextAreaHeight] = useState(55);

    let divElement;


    useEffect(() => {
        setTextAreaHeight(divElement.scrollHeight);
    }, []);


    const style = {
        height: textAreaHeight + 'px'
    };


    const sendMessage = async () => {

        let arr = warnings;
        arr[0] = isEmpty(name) || name.length > 255;
        arr[1] = isEmpty(email) || !isEmail(email) || email.length > 255;
        arr[2] = isEmpty(message);

        setWarnings(arr);

        let error = false;
        warnings.forEach(warning => {
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
                        name: name,
                        email: email,
                        message: message
                    }),
                    crossdomain: true
                };
                await fetch('/api/contact', reqOptions)
                    .then(response => response.json())
                    .then(res => console.log(res));

                setName("");
                setEmail("");
                setMessage("");
                setWarnings([false, false, false]);
                setAlerts(['Your message was sent']);

            } catch (e) {
                console.error("Message not sent: ", e);
            }
        }
    }

    return (
        <Section name='contact first__section' title='Contact' subtitle='Email me. Like in the old days.'>

            <form className="contact__form form grid">
                <div className="form__content">
                    <input type="text" id="name" name="name" value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            let arr = warnings;
                            arr[0] = isEmpty(name);
                            setWarnings(arr);
                        }}
                        className={`form__input ${warnings[0] ? 'form__input--alert' : ''}`} placeholder=" " />
                    <label htmlFor="name" className='form__label'>Name</label>
                </div>
                <div className="form__content">
                    <input type="email" id="email" name="email" value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            let arr = warnings;
                            let newAlerts = [];
                            if (isEmpty(email)) {
                                arr[1] = true;
                            }
                            if (isEmail(email)) {
                                arr[1] = false;
                            } else {
                                arr[1] = true;
                                newAlerts = ['please enter a valid email address'];
                            }
                            setWarnings(arr);
                            setAlerts(newAlerts);
                        }}
                        className={`form__input ${warnings[1] ? 'form__input--alert' : ''}`} placeholder=" " />
                    <label htmlFor="email" className='form__label'>Email</label>
                </div>
                <div className="form__content">
                    <textarea style={style} ref={(element) => { divElement = element }} type="text" id="message" name="message" value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                            let arr = warnings;
                            arr[2] = isEmpty(message);
                            setWarnings(arr);
                            setTextAreaHeight(divElement.scrollHeight);
                        }}
                        className={`form__input ${warnings[3] ? 'form__input--alert' : ''}`} placeholder=" " />
                    <label htmlFor="message" className='form__label'>Message</label>
                </div>

                <ul className="alertbox" id="contact__alertbox">
                    {alerts.map(alert => (
                        <div key={alert} className='alertbox__alert'>
                            {alert}
                        </div>
                    ))}
                </ul>

                <div>
                    <Button text="Send" id="form__submit" onclick={sendMessage} iconr='bx bx-send' />
                </div>

            </form>

        </Section>
    );

}


export default Contact