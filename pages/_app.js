/**
 * Created by Administrator on 2018/9/6.
 */
import App, {Container} from 'next/app'
import React from 'react'
// store
import { Provider } from 'react-redux'
import store from '../store'
import '../static/style/common.scss'

export default class MyApp extends App {
    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {
            name: 'lsq'
        }

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }

    render () {
        const {Component, pageProps} = this.props
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}