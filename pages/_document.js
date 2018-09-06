// ./pages/_document.js
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import remScript from 'raw-loader!../libs/rem'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
                <link rel="stylesheet" href="/_next/static/style.css" />
                <script dangerouslySetInnerHTML={{ __html: remScript }} />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}