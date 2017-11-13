import React, {PropTypes} from 'react';
import {Card, Col, Row} from 'antd';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/events';

class PostsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount(){
     const {fetchEvents} = this.props
     fetchEvents('')
     //categories=SOME_CAT& !!!!
  }
  render() {
    const { events,fetching } = this.props;
          if(fetching){
            return (<div>
              <Row className="events_list" gutter={16} style={{
                  padding: '2em 4em'}}>
                <Spin />
                </Row>
              </div>)
          }
          else{
            return (<div>
              <Row className="events_list" gutter={16} style={{
                  padding: '2em 4em'}}>
                  {events}
                </Row>
              </div>)
          }

  }
}

function mapStateToProps(state) {
    return {
       fetching:state.events.fetching,
        events: state.events.events
    };
}

export default connect(
    mapStateToProps,
    { fetchEvents }
)(PostsList);
