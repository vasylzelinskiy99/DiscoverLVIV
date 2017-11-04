import React, {PropTypes} from 'react';
import {Card, Col, Row} from 'antd';

export default class PostsList extends React.Component {
  render() {
    return (<Row gutter={16} style={{
        padding:'2em 4em'
      }}>
      <Col span={6}>
        <Card bordered={true} bodyStyle={{ padding: 0 }} style="">
          <img src="https://media.timeout.com/images/101887547/image.jpg" alt="" style={{width:'100%'}}/>
          <div className="card_content">
          <h3>Event title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          </div>
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={true} bodyStyle={{ padding: 0 }} style={{background:'url("https://media.timeout.com/images/101887547/image.jpg")', backgroundSize:'cover'}}>
          <div className="card_content">
          <h3>Event title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          </div>
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={true} bodyStyle={{ padding: 0 }}>
          <img src="https://media.timeout.com/images/101887547/image.jpg" alt="" style={{width:'100%'}}/>
          <div className="card_content">
          <h3>Event title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          </div>
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={true} bodyStyle={{ padding: 0 }}>
          <img src="https://media.timeout.com/images/101887547/image.jpg" alt="" style={{width:'100%'}}/>
          <div className="card_content">
          <h3>Event title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          </div>
        </Card>
      </Col>
    </Row>);
  }
}

PostsList.propTypes = {};
