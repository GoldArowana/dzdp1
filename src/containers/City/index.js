import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '../../components/Header'
import CurrentArea from '../../components/CurrentArea'
import AreaList from '../../components/AreaList'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import {CITYNAME} from '../../config/localStoreKey'
import localStore from '../../util/localStore'
import './style.css'

class City extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render () {
        return (
            <div className="cityPage">
                <Header title="选择校区"/>
                <CurrentArea cityName={this.props.userinfo.cityName}/>
                <AreaList changeFn={this.changeCity.bind(this)} {...this.props}/>
            </div>
        )
    }

    changeCity (newCity) {
        if (newCity == null) {
            return
        }
        // 修改 redux
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        this.props.userInfoActions.update(userinfo);

        // 修改 cookie
        localStore.setItem(CITYNAME, newCity);

        // 跳转页面
        console.log("city");

        this.props.history.push('/home')
    }
}


function mapStateToProps (state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps (dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)
