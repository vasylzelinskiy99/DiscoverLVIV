import React from 'react';
import { Input } from 'antd';
import {search} from '../../actions/search'
import {connect} from 'react-redux'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord:''
    }
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler = (event) => {
    event.preventDefault()
    this.props.search(event.target.value)
    this.setState({
      searchWord:event.target.value
    })
  }
  render() {
    return (
      <Input
      placeholder="search"
      style={{ width: 200,margin:'0 20px' }}
      onChange={this.searchHandler}
      />
    );
  }
}

function mapStateToProps(state) {
    return {
       searchWord:state.search.searchWord
    };
}

export default connect(mapStateToProps,
  {search}
)(SearchBar);
