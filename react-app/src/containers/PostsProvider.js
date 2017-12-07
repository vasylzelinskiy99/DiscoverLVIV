import React, {PropTypes} from 'react'
import CategoriesMenu from './CategoriesMenu'
import PostsList from './PostsList'
import {connect} from 'react-redux'
import { fetchEvents } from '../actions/events'
import {search} from '../actions/search'
import _ from 'lodash'
import uniq from 'lodash'


class PostsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      events: this.props.events,
      currentlyDisplayed: this.props.events,
      filter:'ф'
    }
    this.filterPosts = this.filterPosts.bind(this)
  }
  componentWillMount(){
    const {fetchEvents, events} = this.props
    fetchEvents('')
  }
  filterPosts = (filter) => {
    let filterWord = this.state.filter
    let newlyDisplayed = this.state.events.filter((oneEvent) => oneEvent.description.includes(filterWord));
    console.log(newlyDisplayed);
    this.setState({
      currentlyDisplayed: newlyDisplayed,
      filter: filterWord
    })
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      fetching: nextProps.fetching,
      events:nextProps.events,
      currentlyDisplayed: nextProps.events,
      filter:nextProps.searchWord
    })
  }
  render() {
    return (
      <div>
      <CategoriesMenu filterPosts={this.filterPosts}/>
      <PostsList events={this.state.currentlyDisplayed} fetching={this.state.fetching}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
       fetching:state.events.fetching,
        events: state.events.events,
        searchWord:state.search.searchWord
    };
}

export default connect(mapStateToProps,
  {fetchEvents,search}
)(PostsProvider);
