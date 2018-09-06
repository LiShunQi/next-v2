import React from 'react'
import Head from 'next/head'

const Title = (props) => {
    return (
        <Head>
            <title>{props.title}</title>
        </Head>
    )
}

export default Title