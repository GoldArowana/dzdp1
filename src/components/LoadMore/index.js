import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'

class LoadMore extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render () {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                        ? <span>加载中...</span>
                        : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }

    loadMoreHandle () {
        // 执行传输过来的
        this.props.loadMoreFn();
    }

    componentDidMount () {
        // 使用滚动时自动加载更多
        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.refs.wrapper;//wrapper对应本页面render()里的ref='wrapper'
        //console.log(this.refs)；
        let timeoutId;

        function callback () {
            const top = wrapper.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            // console.log(top);
            // console.log(windowHeight);
            if (top && top < windowHeight + 100) {
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                loadMoreFn()
            }
        }

        window.addEventListener('scroll', function () {
            if (this.props.isLoadingMore) {
                return
            }
            //方案一：50毫秒内不动，才加载更多
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50);
            //方案二：滑到最底部，就加载更多。
            // callback()
        }.bind(this), false);
    }
}

export default LoadMore