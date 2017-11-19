import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'
import {getCommentData} from '../../../fetch/detail/detail'
import ListComponent from '../../../components/CommentListComponent/index'
import LoadMore from '../../../components/LoadMore/index'

class Comment extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
    }

    render () {
        return (
            <div>
                <h2>用户点评</h2>
                {
                    this.state.data.length
                        ? <ListComponent data={this.state.data}/>
                        : <div>{/* 加载中... */}</div>
                }
                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                        : <div>{/* 没有更多数据了... */}</div>
                }
            </div>
        )
    }

    componentDidMount () {
        this.loadFirstPageData();
    }

    loadFirstPageData () {
        const id = this.props.id;
        const result = getCommentData(0, id);
        this.resultHandler(result)
    }

    loadMoreData () {
        this.setState({
            isLoadingMore: true
        });
        const id = this.props.id;
        const page = this.state.page;
        const result = getCommentData(page, id);
        this.resultHandler(result);
        this.setState({
            isLoadingMore: false
        })
    }

    resultHandler (result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            const page = this.state.page;
            const hasMore = json.hasMore;
            const data = json.data;
            this.setState({
                page: page + 1,
                hasMore: hasMore,
                // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
                data: this.state.data.concat(data)
            });
        }).catch(ex => {
            console.error('详情页获取用户评论数据出错, ', ex.message)
        })
    }
}

export default Comment