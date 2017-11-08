import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import './static/css/common.css'
import './static/css/font-awesome.css'
import RouteMap from './router/routeMap'
import {testFetch} from './fetch/test.js'

// 创建 Redux 的 store 对象
const store = configureStore();

testFetch();

render(
    <Provider store={store}>
        <RouteMap/>
    </Provider>,
    document.getElementById('root')
);
