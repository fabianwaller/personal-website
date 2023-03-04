import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import Commands from './commands';

export const siteTitle = 'fabianwaller';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>{siteTitle}</title>
                <meta name="og:title" content={siteTitle} />
                <meta
                    property="og:image"
                    content="https://www.fabianwaller.de/logo.svg"
                />
            </Head>

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