import {Html, Head, Main, NextScript} from 'next/document'

const siteTitle = 'fabianwaller';

const Document = () => {
    return (
        <Html>
            <Head>
                <title>{siteTitle}</title>
                <meta name="og:title" content={siteTitle} />
                <meta
                    property="og:image"
                    content="https://www.fabianwaller.de/logo.svg"
                />

                {/* <!-- Favicons --> */}
                <link rel="icon" href="/logo.svg" type="image/svg+xml" />
                <link rel="mask-icon" href="mask-icon.svg" color="#7e8fe7" />
                <link rel="apple-touch-icon" href="logo.png" />
                {/* <meta name="theme-color" content="#ffffff" /> */}
                <link rel="manifest" href="manifest.json"></link>

                {/* <!-- Icons --> */}
                <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' type="text/css" />


                {/* <!-- Google tag (gtag.js) --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-133HYRMPNS"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-133HYRMPNS');
                        `
                    }}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document