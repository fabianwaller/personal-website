import {Html, Head, Main, NextScript} from 'next/document'

const Document = () => {
    return (
        <Html>
            <Head>
                {/* <!-- Favicons --> */}
                <link rel="icon" type="image/svg+xml" href="/logo.svg" />

                {/* <!-- Icons --> */}
                <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' type="text/css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document