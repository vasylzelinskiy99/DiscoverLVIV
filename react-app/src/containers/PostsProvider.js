import React, {PropTypes} from 'react';
import CategoriesMenu from './CategoriesMenu'
import PostsList from './PostsList'
import {connect} from 'react-redux'
import { fetchEvents } from '../actions/events';
import _ from 'lodash';
import filter from 'lodash'


class PostsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: props.fetching,
      currentlyDisplayed: props.events
    }
    this.filterPosts = this.filterPosts.bind(this)
  }
  componentWillMount(){
    const {fetchEvents, events} = this.props
    fetchEvents('')
  }
  filterPosts(filter){
      let newlyDisplayed = _.filter(this.props.events, oneEvent => oneEvent.name.includes('Бізнес'));
      this.setState({
        currentlyDisplayed:newlyDisplayed
      })
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      fetching: nextProps.fetching,
      currentlyDisplayed: nextProps.events
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
        events: state.events.events
    };
}

export default connect(mapStateToProps,
  {fetchEvents}
)(PostsProvider);
