import React, {PropTypes} from 'react';
import {Card, Col, Row} from 'antd'
import {Link} from 'react-router-dom'
import EventsListItem from './EventsListItem'
import {Spin} from 'antd';
import {connect} from 'react-redux';
import {fetchEvents} from '../actions/events';

export default class PostsList extends React.Component {
  componentWillReceiveProps(nextProps){

  }
  render() {
    const {fetching} = this.props;
    if (fetching) {
      return (<div>
        <Row className="events_list" gutter={16} style={{
            padding: '2em 4em'
          }}>
          <Spin/>
        </Row>
      </div>)
    } else {
      return (<div>
        <Row className="events_list" gutter={16} style={{
            padding: '2em 4em'
          }}>
          {this.props.events.map((singleEvent)=>{
            return(<Col key={singleEvent.id} span={6} style={{
                margin: '1em 0'
              }}>
              <Link to={'/event'+singleEvent.id }>
                <EventsListItem title={singleEvent.name} description={singleEvent.description} img={singleEvent.coverPicture} place={singleEvent.place.name} time={singleEvent.startTime}/>
              </Link>
            </Col>)
          })}
        </Row>
      </div>)
    }
  }
}
