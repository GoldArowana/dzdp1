/**
 * Created by Administrator on 2017/7/3.
 */
import React from 'react'
import {
    BrowserRouter as Router,//BrowserRouter,HashRouter
    Route,
    Switch
} from 'react-router-dom'

import Home from '../containers/Home/index'
import City from '../containers/City/index'
import User from '../containers/User/index'
import Login from '../containers/Login/index'
import Search from '../containers/Search/index'
import Detail from '../containers/Detail/index'
import NotFound from '../containers/NotFound/404'
import App from '../containers/index'
// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps
//router4  相应的变更 https://github.com/gmfe/Think/issues/6

export default class RouterMap extends React.Component {
    render () {
        return (
            <Router>
                <Route path="/" component={(props) => (
                    <App {...props}>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/home' component={Home}/>
                            <Route path='/city' component={City}/>
                            <Route path='/login/:router?' component={Login}/>
                            <Route path='/user' component={User}/>
                            <Route path='/search/:searchType/:keyword?' component={Search}/>
                            <Route path='/detail/:id' component={Detail}/>
                            <Route path='*' component={NotFound}/>
                        </Switch>
                    </App>
                )}/>
            </Router>
        );
    }
}
