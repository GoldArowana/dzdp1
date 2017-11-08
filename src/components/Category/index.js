import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'
import {Carousel} from 'antd'

class Category extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            pageIndex: 0
        }

    }

    render () {
        var opt = {
            dots: false,
            vertical: false,
            autoplay: false,
            beforeChange: (from, to) => {
                this.setState({
                    pageIndex: to
                });
                // console.log(this.state.pageIndex);
            }
        };
        return (
            <div className="mainDiv">
                <Carousel {...opt} >
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="float-left lesson"><span className="mainDivIconFont">课程</span></li>
                            <li className="float-left science"><span className="mainDivIconFont">科研</span></li>
                            <li className="float-left shopping"><span className="mainDivIconFont">超市</span></li>
                            <li className="float-left live"><span className="mainDivIconFont">生活</span></li>
                            <li className="float-left sporting"><span className="mainDivIconFont">健身运动</span></li>
                            <li className="float-left dinner1"><span className="mainDivIconFont">一食堂</span></li>
                            <li className="float-left selfDinner"><span className="mainDivIconFont">自助餐</span></li>
                            <li className="float-left dinner2"><span className="mainDivIconFont">二食堂</span></li>
                            <li className="float-left onDoorFood"><span className="mainDivIconFont">外卖</span></li>
                            <li className="float-left hourWork"><span className="mainDivIconFont">兼职</span></li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="float-left learning"><span className="mainDivIconFont">学习培训</span></li>
                            <li className="float-left trainTicket"><span className="mainDivIconFont">火车票</span></li>
                            <li className="float-left job"><span className="mainDivIconFont">就业</span></li>
                            <li className="float-left graduate"><span className="mainDivIconFont">考研</span></li>
                            <li className="float-left allFunction"><span className="mainDivIconFont">全部分类</span></li>
                        </ul>
                    </div>
                </Carousel>
                <div align="center">
                    <i className="fa fa-hand-o-left icon-large"/>
                    <span><b>向左滑动&nbsp;</b></span>
                    <i className="fa fa-fire icon-2x"/>
                    <span><b>&nbsp;向右滑动</b></span>
                    <i className="fa fa-hand-o-right icon-large"/>
                </div>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// module.exports = NotFound
export default Category
