import Logo from "./logo"
import { Navigation } from "./navigation"

const Header = () => {
    return (
        <header className="container fixed top-0 left-0 right-0 z-50 w-ful" id="header">
            <nav className="h-header-height flex items-center justify-between">
                <Logo />

                <Navigation />
            </nav>
        </header>
    )
}

export default Header