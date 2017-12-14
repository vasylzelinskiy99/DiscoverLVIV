import React, {PropTypes} from 'react'
import CategoriesMenu from './CategoriesMenu'
import PostsList from './PostsList'
import {connect} from 'react-redux'
import {fetchEvents} from '../actions/events'
import {search} from '../actions/search'
import * as eventsEn from '../api/eventsen.json';

class PostsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      events: this.props.events,
      currentlyDisplayed: this.props.events,
      filter: ''
    }
    this.filterPosts = this.filterPosts.bind(this)
  }
  componentWillMount() {
    const {fetchEvents, events} = this.props
    fetchEvents(eventsEn)
  }
  filterPosts = (filter) => {
    let filterWord = this.state.filter
    let newlyDisplayed = this.state.events.filter((oneEvent) => oneEvent.description.includes(filterWord));
    this.setState({currentlyDisplayed: newlyDisplayed})
  }
  filterPostsByCategory = (filter) => {
    let newlyDisplayed = []
    this.state.events.map((event) => {
      if (event.category === filter) {
        newlyDisplayed.push(event)
      }
    })
    if (filter === 'all') {
      newlyDisplayed = this.state.events
    }
    this.setState({currentlyDisplayed: newlyDisplayed})
  }
  componentWillReceiveProps(nextProps) {
    this.setState({fetching: nextProps.fetching, events: nextProps.events, currentlyDisplayed: nextProps.events, filter: nextProps.searchWord})

    if (nextProps.searchWord) {
      this.filterPosts(this.state.filter)
    }
  }
  render() {
    return (<div>
      <CategoriesMenu filterPostsByCategory={this.filterPostsByCategory}/>
      <PostsList events={this.state.currentlyDisplayed} fetching={this.state.fetching}/>
    </div>);
  }
}

function mapStateToProps(state) {
  return {fetching: state.events.fetching, events: state.events.events, searchWord: state.search.searchWord};
}

export default connect(mapStateToProps, {fetchEvents, search})(PostsProvider);
