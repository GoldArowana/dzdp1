import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import './static/css/common.css'
import './static/css/font-awesome.css'
import RouteMap from './router/routeMap'


render(
    // 创建 Redux 的 store 对象
    <Provider store={configureStore()}>
        <RouteMap/>
    </Provider>,
    document.getElementById('root')
);
