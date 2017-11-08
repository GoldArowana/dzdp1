import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'
import {Input} from 'antd'

class HomeHeader extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render () {
        return (
            <div>
                <div id="home-header" className="clear-fix">
                    <div className="home-header-left float-left">
                        <i className="fa fa-map-marker fa-lg"/>
                        <span>{this.props.cityName}</span>
                        <i className="fa fa-angle-double-down"/>
                    </div>
                    <div className="home-header-right float-right">
                        <i className="fa fa-user-circle-o fa-lg"/>
                    </div>
                    <div className="home-header-middle">
                        <div className="search-container">
                            <i className="fa fa-search fa-lg"/>
                            <Input size="small" placeholder="请输入关键字" className="inputSearch"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader