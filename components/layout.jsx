import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import {CommandDialogDemo} from './commands';

const Layout = (props) => {
    return (
        <div>
            <CommandDialogDemo />
            

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