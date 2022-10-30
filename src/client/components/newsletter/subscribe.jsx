import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Button from '../button'
import { isEmpty, isEmail } from '../../helpers/formHelper'


const NewsletterSubscriptionContainer = (props) => {
    const [email, setEmail] = useState(" ");
    const [emailWarning, setEmailWarning] = useState(false);
    const [alerts, setAlerts] = useState([]);

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const onSubmit = () => {
        if (checkIfInputIsValid()) {
            makePostRequest();
        }
    }

    const checkIfInputIsValid = () => {
        if (isEmpty(email) || !isEmail(email)) {
            setEmailWarning(true);
            setAlerts(['please enter a valid email address']);
            return false;
        }
        setEmailWarning(false);
        setAlerts([]);
        return true;
    }

    const makePostRequest = async () => {
        try {
            let reqOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email
                }),
                crossdomain: true
            };
            await fetch('/api/newsletter/signup', reqOptions)
                .then(response => response.json())
                .then(res => setAlerts([res]));



        } catch (e) {
            console.error("Message not sent: ", e);
        }
    }

    return (
        <div className="article__box newsletter__box">
            <h3>Enter your email address<br />and get notifications</h3>
            <span className='section__subtitle'>Your email is never shared and will be immediately deleted when you unsubscribe</span>

            <div className="form__content flex">
                <input type="email" id="email" name="email" placeholder=" " className={`form__input ${emailWarning ? 'form__input--alert' : ''}`}
                    value={email} onChange={(e) => onEmailChange(e)} />
                <label htmlFor="email" className='form__label'>Email</label>
                <Button text="" id="newsletter__submit" onclick={onSubmit} iconr='bx bxs-bell' />
            </div>

            <ul className="alertbox" id="contact__alertbox">
                {alerts.map(alert => (
                    <div key={alert} className='alertbox__alert'>
                        {alert}
                    </div>
                ))}
            </ul>


        </div>
    );
}

export default NewsletterSubscriptionContainer