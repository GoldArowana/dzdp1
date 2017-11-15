import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader/index'
import Category from '../../components/Category/index'
import {connect} from 'react-redux'
import Ad from './subpage/ad'
import LikeList from './subpage/List'

// import {withRouter} from 'react-router-dom'
class Home extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render () {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category style={{marginTop: "70%"}}/>
                <div style={{height: "6px"}}/>
                <Ad/>
                <LikeList/>
            </div>
        )
    }
}


function mapStateToProps (state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps (dispatch) {
    return {}
}

// export default Home
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
