import React from 'react'

// sample usage: <Button text='Contact' href='#contact' white='true' iconr='bx bx-message-square-dots'/>

function ButtonLink(props) {
    return (
        <a href={props.href} className={props.classname}>
            {props.children}
        </a>
    );
}

function ButtonAction(props) {
    return (
        <span onClick={props.onclick} className={props.classname}>
            {props.children}
        </span>
    );
}

function ButtonDisabled(props) {
    return (
        <span className={`${props.classname} button--disabled`}>
            {props.children}
        </span>
    );
}

function ButtonIcon(props) {
    return (
        <i className={`${props.icon} button__icon`}></i>
    );
}

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let button;
        let classname = this.props.classname;
        classname += ' button button--flex ';
        let iconl = this.props.iconl;
        let iconr = this.props.iconr;

        if (this.props.white == 'true') {
            classname += 'button--white '
        }
        if (this.props.small == 'true') {
            classname += 'button--small '
        }
        if (this.props.link == 'true') {
            classname += 'button--link '
        }

        if (this.props.iconl != null) {
            iconl = <ButtonIcon icon={this.props.iconl} />
        }
        if (this.props.iconr != null) {
            iconr = <ButtonIcon icon={this.props.iconr} />
        }

        if (this.props.disabled == 'true') {
            button = <ButtonDisabled classname={classname}>{iconl} {this.props.text} {iconr}</ButtonDisabled>
        } else {
            if (this.props.href != null) {
                button = <ButtonLink href={this.props.href} classname={classname}>{iconl} {this.props.text} {iconr}</ButtonLink>
            } else if (this.props.onclick != null) {
                button = <ButtonAction onclick={this.props.onclick} classname={classname}>{iconl} {this.props.text} {iconr}</ButtonAction>
            }
        }

        return (
            button
        );
    }
}

export default Button