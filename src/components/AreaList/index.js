import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'

class AreaList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="city-list-container">
                <h3>哈理工各大校区</h3>
                <ul className="clear-fix">
                    <li>
                        <span onClick={this.clickHandle.bind(this, '西区')}>西区</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '南区')}>南区</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '东区')}>东区</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '荣成')}>荣成</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '北区')}>北区</span>
                    </li>
                </ul>
            </div>
        )
    }
    clickHandle(cityName) {
        const changeFn = this.props.changeFn;
        changeFn(cityName)
    }
}

export default AreaList