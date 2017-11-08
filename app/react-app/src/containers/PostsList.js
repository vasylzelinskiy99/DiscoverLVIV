import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom'
import {Card, Col, Row} from 'antd';
import EventsListItem from './EventsListItem'

export default class PostsList extends React.Component {
  render() {
    return (
      <div>
      <Row className="events_list" gutter={16} style={{
        padding: '2em 4em'
      }}>
      <Col span={6}>
        <Link to={{
            pathname: '/event',
            search: 'http://malevich.virtual.ua/images/381062/'
          }}><EventsListItem img="http://malevich.virtual.ua/images/381062/"/></Link>
      </Col>
      <Col span={6}>
        <Link to={{
            pathname: '/event',
            search: 'http://malevich.virtual.ua/images/381782/'
          }}><EventsListItem img="http://malevich.virtual.ua/images/381782/"/></Link>
      </Col>
      <Col span={6}>
        <Link to={{
            pathname: '/event',
            search: 'http://malevich.virtual.ua/images/385895/'
          }}><EventsListItem img="http://malevich.virtual.ua/images/385895/"/></Link>
      </Col>
      <Col span={6}>
        <Link to={{
            pathname: '/event',
            search: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5AWxGdos9sGJDnxA4LWdTpPXKC0c99Hgw-nvlsmCBthggoajiA'
          }}><EventsListItem img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5AWxGdos9sGJDnxA4LWdTpPXKC0c99Hgw-nvlsmCBthggoajiA"/></Link>
      </Col>
      </Row>
      <Row className="events_list" gutter={16} style={{
        padding: '2em 4em'
      }}>
      <Col span={6}>
        <Link to={{
            pathname: '/event',
            search: 'http://malevich.virtual.ua/images/381782/'
          }}><EventsListItem img="http://malevich.virtual.ua/images/381782/"/></Link>
      </Col>
      <Col span={6}>
        <Link to={{
            pathname: '/event',
            search: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5AWxGdos9sGJDnxA4LWdTpPXKC0c99Hgw-nvlsmCBthggoajiA'
          }}><EventsListItem img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5AWxGdos9sGJDnxA4LWdTpPXKC0c99Hgw-nvlsmCBthggoajiA"/></Link>
      </Col>
      <Col span={6}>
        <Link to={{
            pathname: '/event',
            search: 'http://malevich.virtual.ua/images/385895/'
          }}><EventsListItem img="http://malevich.virtual.ua/images/385895/"/></Link>
      </Col>
      <Col span={6}>
        <Link to={{
            pathname: '/event',
            search: 'http://malevich.virtual.ua/images/381062/'
          }}><EventsListItem img="http://malevich.virtual.ua/images/381062/"/></Link>
      </Col>
    </Row>
    </div>
  );
  }
}

PostsList.propTypes = {};
