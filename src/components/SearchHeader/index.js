import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SearchInput from '../SearchInput'

import './style.css'

class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="searchHeader" className="clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    <i className="fa fa-chevron-circle-left fa-2x "/>
                </span>
                <div className="input-container">
                    <i className="fa fa-search fa-lg"/>
                    &nbsp;
                    <SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
                </div>
            </div>
        )
    }
    clickHandle() {
        window.history.back()
    }
    enterHandle(value) {
        this.props.history.push('/search/all/' + encodeURIComponent(value))
    }
}

export default SearchHeader