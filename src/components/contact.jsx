import React from 'react'
import ReactDOM from 'react-dom'
import { useState , useEffect } from 'react';

import { collection, addDoc } from "firebase/firestore";

import db from '../firebase'

import Button from './button'
import Section from './section'

/* const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [alerts, addAlert] = useState([]);
    const [height, setHeight] = useState(0);
    const [warnings, setWarnings] = useState([false,false,false,false]);


    const handleWarnings = () => {
        let arr = warnings;
        arr[0] = isEmpty(name);
        arr[1] = isEmpty(email);
        arr[2] = isEmpty(subject);
        arr[3] = isEmpty(message);
        setWarnings(arr);
        console.log('warnings handled');
        console.log(warnings)
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        handleWarnings();

        let error = false;
        warnings.forEach(field => {
            error = error || field;
        })
        

        if(error) {
            console.log('missing values');
        } else {
            console.log('message sent');
        }
        
         try {
            const docRef = await addDoc(collection(db, "contacts"), {
              name: name,
              email: email,
              subject: subject,
              message: message
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
        console.error("Error adding document: ", e);
        } 

        setName('');
        setEmail('');
        setSubject('');
        setMessage(''); 

    }

    useEffect(() => {
        document.title = `You typed ${name}`;
        console.log(warnings);
    }, [warnings, subject]);


    const onInput = () => {
        setHeight(document.getElementById('message').scrollHeight);
    }

   
    return (
        <Section name='contact' title='Contact' subtitle ='get in touch'> 

            <form className="contact__form form grid">
                <div className="form__content">
                    <input onInput={handleWarnings} type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className='form__input' placeholder={email}/>
                    <label htmlFor="name" className='form__label'>Name</label>
                </div>
                <div className="form__content">
                    <input onInput={handleWarnings} type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form__input' placeholder=" "/>
                    <label htmlFor="email" className='form__label'>Email</label>
                </div>
                <div className="form__content">
                    <input onInput={handleWarnings} type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className='form__input' placeholder=" "/>
                    <label htmlFor="subject" className='form__label'>Subject</label>
                </div>
                <div className="form__content">
                    <textarea onInput={onInput} type="text" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} className='form__input' placeholder=" "/>
                    <label htmlFor="message" style={{height: {height}}} className='form__label'>Message</label>
                </div>

                <div>
                    <Button text="Send Message" onclick={handleSubmit} disabled='false' id="form__submit" iconr='bx bx-send'/>
                </div>

            </form>
    
        </Section>
    );
} */

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            warnings: [false,false,false,false],
            alerts: [],
            textareaHeight: 0,
        };
    } 

    componentDidMount() {
        this.setState({textareaHeight: this.divElement.scrollHeight})
    }

    async sendMessage() {

        let arr = this.state.warnings;
        arr[0] = isEmpty(this.state.name);
        arr[1] = isEmpty(this.state.email) || !isEmail(this.state.email);
        arr[2] = isEmpty(this.state.subject);
        arr[3] = isEmpty(this.state.message);
        
        this.setState({
            warnings: arr
        });

        let error = false;
        this.state.warnings.forEach(warning => {
            error = error || warning; 
        })

        if(!error) {
            try {
                const docRef = await addDoc(collection(db, "contacts"), {
                    name: this.state.name,
                    email: this.state.email,
                    subject: this.state.subject,
                    message: this.state.message
                });
                console.log("Message sent with ID: ", docRef.id);

                this.setState({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                    warnings: [false,false,false,false],
                    alerts: ['Message sent']
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
            <Section name='contact' title='Contact' subtitle ='get in touch'> 

                <form className="contact__form form grid">
                    <div className="form__content">
                        <input type="text" id="name" name="name" value={this.state.name} 
                        onChange={(e) => this.setState({name: e.target.value}, () => {
                                let arr = this.state.warnings;
                                arr[0] = isEmpty(this.state.name);
                                this.setState({
                                    warnings: arr
                                });
                            })} 
                        className={`form__input ${this.state.warnings[0] ? 'form__input--alert' : ''}`} placeholder=" "/>
                        <label htmlFor="name" className='form__label'>Name</label>
                    </div>
                    <div className="form__content">
                        <input type="email" id="email" name="email" value={this.state.email} 
                        onChange={(e) => this.setState({email: e.target.value}, () => {
                            let arr = this.state.warnings;
                            let newalerts = [];
                            if(isEmpty(this.state.email)) {
                                arr[1] = true;
                            } 
                            if (isEmail(this.state.email)) {
                                arr[1] = false;
                            } else {
                                arr[1] = true;
                                newalerts = ['please enter a valid email address'];
                            }
                            this.setState({warnings: arr, alerts: newalerts});
                            })} 
                        className={`form__input ${this.state.warnings[1] ? 'form__input--alert' : ''}`} placeholder=" "/>
                        <label htmlFor="email" className='form__label'>Email</label>
                    </div>
                    <div className="form__content">
                        <input type="text" id="subject" name="subject" value={this.state.subject} 
                        onChange={(e) => this.setState({subject: e.target.value}, () => {
                            let arr = this.state.warnings;
                            arr[2] = isEmpty(this.state.subject);
                            this.setState({warnings: arr});
                            })}  
                        className={`form__input ${this.state.warnings[2] ? 'form__input--alert' : ''}`} placeholder=" "/>
                        <label htmlFor="subject" className='form__label'>Subject</label>
                    </div>
                    <div className="form__content">
                        <textarea style={style} ref={ (divElement) => { this.divElement = divElement } } type="text" id="message" name="message" value={this.state.message}
                        onChange={(e) => this.setState({message: e.target.value}, () => {
                            let arr = this.state.warnings;
                            arr[3] = isEmpty(this.state.message);
                            this.setState({warnings: arr});
                            this.setState({textareaHeight: this.divElement.scrollHeight});
                            })} 
                        className={`form__input ${this.state.warnings[3] ? 'form__input--alert' : ''}`} placeholder=" "/>
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
                        <Button text="Send Message" id="form__submit" onclick={this.sendMessage} iconr='bx bx-send'/>
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