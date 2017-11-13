import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom'
import {Card, Col, Row} from 'antd';
import EventsListItem from './EventsListItem'
import axios from 'axios'

export default class PostsList extends React.Component {
  constructor(props){
    super(props)
    this.state = {events: []}
  }
  componentDidMount(){
    axios.get('http://localhost:3001/events?lat=49.839683&lng=24.029717&distance=1000&sort=time&accessToken=194370554467183|qb0BhT3-pFuCRHDxDRbebnbGlpY')
    .then((response) => {
      console.log(response.data.events);
      var events = response.data.events.map((event) => {
        return (
          <Col key={event.id} span={6} style={{margin:'1em 0'}}>
          <Link to={{
              pathname: '/event',
              search: 'http://malevich.virtual.ua/images/381062/'
            }}><EventsListItem id={event.id}  title={event.name} description={event.description}
             img={event.coverPicture} place={event.place.name} time={event.startTime}/></Link>
        </Col>
      )
      })
      this.setState({
        events:events
      });
    })
    .catch(function () {

    })
  }
  render() {
    return (
      <div>
      <Row className="events_list" gutter={16} style={{
        padding: '2em 4em'
      }}>
      {this.state.events}
    </Row>
    </div>
  );
  }
}

PostsList.propTypes = {};
