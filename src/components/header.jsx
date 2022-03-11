import React from 'react'
import ReactDOM from 'react-dom'

import Logo from './logo'

function NavItem(props) {
  return (
    <li className="nav__item" onClick={props.click}>
        <a href={props.link} className={`nav__link ${props.active == "true" ? "nav__link__active" : ""}`}>
            <i className={`${props.icon} nav__icon`}></i> {props.name}
        </a>
    </li>
  );
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
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
                    <Logo />

                    <div className={`nav__menu ${this.state.menu ? "nav__menu__show" : ""}`} id="nav-menu">
                        <div className="nav__shape"></div>

                        <ul className="nav__list grid">
                            <NavItem link="#home" active="true" icon="bx bx-home" name="Home" click={this.toggleMenu}/>
                            <NavItem link="#about" active="false" icon="bx bx-user" name="About" click={this.toggleMenu}/>
                            <NavItem link="#contact" active="false" icon="bx bx-message-square-detail" name="Contact" click={this.toggleMenu}/>
                        </ul>

                        <ul className="nav__list nav__list__external grid">
                            <NavItem link="#blog" active="false" icon="bx bx-news" name="Blog" click={this.toggleMenu}/>
                            <NavItem link="#tools" active="false" icon="bx bx-category-alt" name="Tools" click={this.toggleMenu}/>
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