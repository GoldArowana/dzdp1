import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'

class CurrentArea extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="current-city">
                <h2>你所在的校区：{this.props.cityName}</h2>
            </div>
        )
    }
}

export default CurrentArea