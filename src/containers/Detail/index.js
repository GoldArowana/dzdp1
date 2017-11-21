import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import Info from './subpage/info'
import Comment from './subpage/Comment'
import Buy from './subpage/BuyAndStore'

class Detail extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render () {
        const id = this.props.match.params.id;
        return (
            <div>
                <Header title="商品详情"/>
                <Info id={id}/>
                <Buy id={id} {...this.props}/>
                <Comment id={id}/>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// module.exports = Detail
export default Detail
