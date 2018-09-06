/**
 * Created by Administrator on 2018/9/6.
 */
import React, { Component } from 'react'
import './index.scss'

import { connect } from 'react-redux'

class About extends Component {
    render () {
        const { storeState, dispatch } = this.props
        return (
            <div className="about-page-wrapper">
                <span>{storeState.count}</span>
                <button onClick={() => dispatch.increment(1)}>click</button>
            </div>
        )
    }
}

const mapState = state => {
    return { storeState: state.about}
}

const mapDispatch = (dispatch) => {
    return {dispatch: dispatch.about}
}

export default connect(mapState, mapDispatch)(About)
// export default About
