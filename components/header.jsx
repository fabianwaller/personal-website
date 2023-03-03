import React, {useEffect} from 'react'

import Logo from './logo'

const NavItem = (props) => {
    return (
        <li className="nav__item" onClick={props.click}>
            <a href={props.link} className={`nav__link ${props.active ? "nav__link__active" : ""}`}>
                <i className={`${props.icon} nav__icon`}></i> {props.name}
            </a>
        </li>
    );
}

const Header = (props) => {
    const [menu, setMenu] = React.useState(false);
    const [headerScroll, setHeaderScroll] = React.useState(false);

    const toggleMenu = () => {
        window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Escape'}));
        setMenu(!menu)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setHeaderScroll(window.scrollY >= props.scroll)
        });
    }, [])

    return (
        <header className={`header ${headerScroll ? "header--scroll" : ""}`} id="header">
            <nav className="nav container">
                <Logo />

                <div className={`nav__menu ${menu ? "nav__menu__show" : ""}`} id="nav-menu">
                    <div className="nav__shape"></div>

                    <ul className="nav__list grid">
                        <NavItem link="/" active={props.activeItem == 'home'} icon="bx bx-home" name="Home" click={toggleMenu} />
                        <NavItem link="/about" active={props.activeItem == 'about'} icon="bx bx-user" name="About" click={toggleMenu} />
                        <NavItem link="/journey" active={props.activeItem == 'journey'} icon="bx bx-rocket" name="Journey" click={toggleMenu} />
                        <NavItem link="/projects" active={props.activeItem == 'projects'} icon="bx bx-collection" name="Projects" click={toggleMenu} />
                    </ul>

                    <ul className="nav__list nav__list__external grid">
                        <NavItem link="/blog" active={props.activeItem == 'blog'} icon="bx bx-news" name="Blog" click={toggleMenu} />
                        <NavItem link="/newsletter" active={props.activeItem == 'newsletter'} icon="bx bx-bell" name="Newsletter" click={toggleMenu} />
                    </ul>

                    <i className="bx bx-x nav__close" id="nav-close" onClick={toggleMenu}></i>

                </div>

                <div className="nav__btn">
                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <i className='bx bx-menu'></i>
                    </div>
                </div>
            </nav>
        </header>
    );

}

export default Header