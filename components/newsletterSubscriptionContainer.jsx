import React, {useState} from 'react'
import Button from './button'
import Section from './section'
import {isEmpty, isEmail} from '../lib/formHelper'

const NewsletterSubscriptionContainer = () => {
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
            setAlerts(['Please enter a valid email address']);
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
        <Section name='newsletter'
            title='Newsletter'
            subtitle='Sign up for my newsletter to get new articles with curated content that I believe are worth reading directly in your inbox.'
            children={<div className='newsletter__box'>
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
            </div>}
        />

    );
}

export default NewsletterSubscriptionContainer