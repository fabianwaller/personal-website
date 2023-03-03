import Head from 'next/head';
import Header from './header';
import Footer from './footer';

import Commands from './commands';

export const siteTitle = 'fabianwaller';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <Commands />

            {!props.home && (
                <Header activeItem={props.page} scroll={1} />
            )}

            <main>{props.children}</main>
            {!(props.home || props.page == '404') && (
                <Footer />
            )}
            {/* {!props.home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )} */}
        </div>
    )
}

export default Layout