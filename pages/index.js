import React, { Component } from 'react'
import Router from 'next/router'
import { Title } from '../components'
import './index.scss'

import picture from '../static/images/dd.jpg'

class Index extends Component {
    componentDidMount () {
        console.log('index page mount')
    }
    render () {
        return (
            <div className="content-main">
                <Title title={'首页'} />
                <h1>centos</h1>
                <div>
                    <img className="img-item" src={picture} />
                </div>
                <a onClick={() => Router.push('/about')}>go about</a>
            </div>
        )
    }
}

export default Index



