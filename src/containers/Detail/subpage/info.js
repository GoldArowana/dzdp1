import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getInfoData} from '../../../fetch/detail/detail'
import DetailInfoComponent from '../../../components/DetailInfoComponent/index'
class Info extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info: false
        }
    }

    render () {
        return (
            <div>
                {
                    this.state.info
                        ?<DetailInfoComponent data={this.state.info}/>
                        :<div>没有数据</div>
                }
            </div>
        )
    }

    componentDidMount () {
        let id = this.props.id;
        let result = getInfoData(id);
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                info: json
            })
        })
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// module.exports = Info
export default Info
