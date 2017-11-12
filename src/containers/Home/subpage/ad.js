import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getAdData} from '../../../fetch/home/home'
import HomeAd from '../../../components/HomeAd/index'

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
            <div>
                {
                    this.state.data.length
                        ? <HomeAd data={this.state.data}/>
                        : <div>正在加载中</div>
                }
            </div>
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
        }).then(retJson => {
            // 处理获取的数据
            const data = retJson;
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
