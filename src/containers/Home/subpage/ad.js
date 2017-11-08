import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getAdData} from '../../../fetch/home/home'

class Ad extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    render () {
        return (
            <h1>{this.state.data.okokok}</h1>
        )
    }

    componentDidMount () {
        // 获取广告数据
        const result = getAdData();
        console.log("-----输出result----");
        console.log(result);
        result.then(res => {
            console.log("-----输出res----");
            console.log(res);
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json;
            console.log("-----data----");
            console.log(data);
            this.setState({
                data: data
            })
        }).catch(ex => {
            // 发生错误
        })
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// module.exports = NotFound
export default Ad
