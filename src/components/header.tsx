import Logo from "./logo"
import { NavigationMenuDemo } from "./navigation"

const Header = () => {
    return (
        <header className="container fixed top-0 left-0 z-50" id="header">
            <nav className="h-header-height flex items-center justify-between">
                <Logo />

                <NavigationMenuDemo />
            </nav>
        </header>
    )
}

export default Header