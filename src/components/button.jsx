import React from 'react'
import ReactDOM from 'react-dom'

// sample usage: <Button text='Contact' href='#contact' white='true' iconr='bx bx-message-square-dots'/>

function ButtonStandard(props) {
    return (
        <a href={props.href} className={props.classname}>
            {props.children}
        </a>
    );
}

function ButtonDisabled(props) {
    return (
        <span className={props.classname}>
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
        let classname = 'button button--flex ';
        let iconl = this.props.iconl;
        let iconr = this.props.iconr;

        if(this.props.white == 'true') {
            classname += 'button--white '
        } 
        if(this.props.small == 'true') {
            classname += 'button--small '
        } 
        if(this.props.link == 'true') {
            classname += 'button--link '
        }  

        if(this.props.iconl != null) {
            iconl = <ButtonIcon icon={this.props.iconl}/>
        }
        if(this.props.iconr != null) {
            iconr = <ButtonIcon icon={this.props.iconr}/>
        }

        if(this.props.disabled == 'true') {
            button = <ButtonDisabled classname={classname}>{iconl} {this.props.text} {iconr}</ButtonDisabled>
        } else {
            button = <ButtonStandard href={this.props.href} classname={classname}>{iconl} {this.props.text} {iconr}</ButtonStandard>
        }

        return (
            button
        );
    }
}
  
export default Button