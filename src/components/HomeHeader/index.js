import React from 'react'
import {Link} from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'

import SearchInput from '../SearchInput'

class HomeHeader extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            kwd: ''
        }
    }

    render () {
        return (
            <div>
                <div id="home-header" className="clear-fix">
                    <div className="home-header-left float-left">
                        <Link to={"/city"} style={{color: 'yellow'}}>
                            <i className="fa fa-map-marker fa-lg"/>
                            <span>{this.props.cityName}</span>
                            <i className="fa fa-angle-double-down"/>
                        </Link>
                    </div>
                    <div className="home-header-right float-right">
                        <Link to="/login">
                            <i className="fa fa-user-circle-o fa-lg"/>
                        </Link>
                    </div>
                    <div className="home-header-middle">
                        <div className="search-container">
                            <i className="fa fa-search fa-lg"/>
                            <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    enterHandle (value) {
        this.props.history.push('/search/all/' + encodeURIComponent(value))
    }
}

export default HomeHeader