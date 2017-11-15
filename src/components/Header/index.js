import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'

class Header extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render () {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="fa fa-chevron-circle-left fa-lg" aria-hidden="true"/>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }

    clickHandle () {
        window.history.back()
    }
}

export default Header