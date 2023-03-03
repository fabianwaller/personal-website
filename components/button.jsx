import React from 'react'

// sample usage: <Button text='Contact' href='#contact' white='true' iconr='bx bx-message-square-dots'/>

const ButtonLink = (props) => {
    return (
        <a href={props.href} className={props.classname}>
            {props.children}
        </a>
    );
}

const ButtonAction = (props) => {
    return (
        <span onClick={props.onclick} className={props.classname}>
            {props.children}
        </span>
    );
}

const ButtonDisabled = (props) => {
    return (
        <span className={`${props.classname} button--disabled`}>
            {props.children}
        </span>
    );
}

const ButtonIcon = (props) => {
    return (
        <i className={`${props.icon} button__icon`}></i>
    );
}

const Button = (props) => {
    let button;
    let classname = props.classname;
    classname += ' button button--flex ';
    let iconl = props.iconl;
    let iconr = props.iconr;

    if (props.white == 'true') {
        classname += 'button--white '
    }
    if (props.small == 'true') {
        classname += 'button--small '
    }
    if (props.link == 'true') {
        classname += 'button--link '
    }

    if (props.iconl != null) {
        iconl = <ButtonIcon icon={props.iconl} />
    }
    if (props.iconr != null) {
        iconr = <ButtonIcon icon={props.iconr} />
    }

    if (props.disabled == 'true') {
        button = <ButtonDisabled classname={classname}>{iconl} {props.text} {iconr}</ButtonDisabled>
    } else {
        if (props.href != null) {
            button = <ButtonLink href={props.href} classname={classname}>{iconl} {props.text} {iconr}</ButtonLink>
        } else if (props.onclick != null) {
            button = <ButtonAction onclick={props.onclick} classname={classname}>{iconl} {props.text} {iconr}</ButtonAction>
        }
    }

    return button
}

export default Button