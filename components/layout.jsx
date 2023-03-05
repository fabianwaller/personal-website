import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import Commands from './commands';

const Layout = (props) => {
    return (
        <div>
            <Commands />

            {!props.home && (
                <Header activeItem={props.page} scroll={1} />
            )}

            <main>{props.children}</main>
            {!(props.home || props.page == '404') && (
                <Footer />
            )}
        </div>
    )
}

export default Layout