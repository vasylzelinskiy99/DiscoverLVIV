import React, {PropTypes} from 'react';
import {Card, Col, Row} from 'antd'
import {Link} from 'react-router-dom'
import EventsListItem from './EventsListItem'
import {Spin} from 'antd';
import {connect} from 'react-redux';
import {fetchEvents} from '../actions/events';

export default class PostsList extends React.Component {
  render(props) {
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
          {this.props.events.map((event)=>{
            return(<Col key={event.id} span={6} style={{
                margin: '1em 0'
              }}>
              <Link to={'/event'+event.id }>
                <EventsListItem title={event.name} description={event.description} img={event.coverPicture} place={event.place.name} time={event.startTime}/>
                </Link>
            </Col>)
          })}
        </Row>
      </div>)
    }
  }
}
