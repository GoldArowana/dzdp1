import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/index'

class Search extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render () {
        const params = this.props.match.params;
        return (
            <div>
                <SearchHeader keyword={params.keyword} {...this.props}/>
                <SearchList keyword={params.keyword} category={params.searchType}/>
            </div>
        )
    }
}
export default Search


