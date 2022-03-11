import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        };
    }

    toggleMenu = () => {
        const visible = !this.state.menu;
        this.setState({ menu: visible });
    }

    render() {
        return (
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="#" className="logobox">
                        <svg className="logo__graphic" width="78" height="74" viewBox="0 0 78 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="logo__graphic__bottom br" d="M43.1746 30.0684L68.5683 47.8492V47.8492C58.7482 61.8738 39.4183 65.2822 25.3937 55.4621V55.4621L43.1746 30.0684Z"/>
                            <path className="logo__graphic__bottom bl" d="M13.1066 46.8583C17.8582 40.0722 27.2114 38.423 33.9975 43.1747V43.1747L25.3938 55.462L13.1066 46.8583V46.8583Z"/>
                            <path className="logo__graphic__top tl" d="M33.9973 43.1746L8.6036 25.3937V25.3937C18.4237 11.3691 37.7536 7.96074 51.7782 17.7808V17.7808L33.9973 43.1746Z"/>
                            <path className="logo__graphic__top tr" d="M64.0656 26.3848C59.3139 33.1709 49.9607 34.8201 43.1746 30.0685V30.0685L51.7783 17.7812L64.0656 26.3848V26.3848Z"/>
                        </svg>
                        <span className="logo__text">Fabian {this.state.menu}</span>
                    </a>

                    <div className={`nav__menu ${this.state.menu ? "nav__menu__show" : ""}`} id="nav-menu">
                        <div className="nav__shape"></div>

                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a href="#home" className="nav__link nav__link__active">
                                    <i className='bx bx-home nav__icon'></i> Home
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                <i className='bx bx-user nav__icon'></i> About
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                <i className='bx bx-message-square-detail nav__icon'></i> Contact
                                </a>
                            </li>
                        </ul>

                        <ul className="nav__list nav__list__external grid">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                <i className='bx bx-news nav__icon'></i> Blog
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                <i className='bx bx-category-alt nav__icon'></i> Tools
                                </a>
                            </li>
                        </ul>

                        <i className="bx bx-x nav__close" id="nav-close" onClick={this.toggleMenu}></i>

                    </div>

                    <div className="nav__btn">
                        <div className="nav__toggle" id="nav-toggle" onClick={this.toggleMenu}>
                        <i className='bx bx-menu'></i>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header