import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore'
import {CITYNAME} from '../config/localStoreKey'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

class App extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }

    render () {
        return (
            <div>
                {
                    this.state.initDone
                        ? this.props.myChildren()
                        : <div>
                            <img width={"100%"} src={require('../static/img/cat-loading.gif')} alt={"加载中"}/>
                            <div align="center">加载中</div>
                        </div>
                }
            </div>
        )
    }

    componentDidMount () {
        let cityName = LocalStore.getItem(CITYNAME);
        if (cityName == null) {
            cityName = '哈理工西区'
        }

        this.props.userInfoActions.update({
            cityName: cityName
        })

        setTimeout(() => {
            this.setState({
                initDone: true
            })
        }, 2000)
    }
}

function mapStateToProps (state) {
    return {}
}

function mapDispatchToProps (dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}


// export default App

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);