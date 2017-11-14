import React, {PropTypes} from 'react';
import {Col, Row, Tag, Icon} from 'antd';
import Comments from './Comments'

export default class EventPage extends React.Component {
  render() {
    var imgSrc = this.props.history.location.search
    return (<div className="eventPage">
      <Row type="flex" justify="start">
        <Col sm={{span:10}}>
          <img style={{
              width: '100%'
            }} src={imgSrc.replace('?', '')}/>
        </Col>

        <Col sm={{span:10,push:2}} class="event-description">
          <h1>Event Title</h1>
          <div className="stars">
          <Icon type="star" style={{fontSize:'25px',color:'gold'}}/>
          <Icon type="star" style={{fontSize:'25px',color:'gold'}}/>
          <Icon type="star" style={{fontSize:'25px',color:'gold'}}/>
          <Icon type="star" style={{fontSize:'25px',}}/>
          <Icon type="star" style={{fontSize:'25px',}}/>
          </div>
          <div className="details">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="info-table">
              <meta itemprop="endDate" content="2017-11-11 06:00:00"/>
                <table className="info-table__table">
                  <tbody>
                    <tr itemprop="location" itemscope="" itemtype="https://schema.org/Place" className="info-table__row">
                      <td itemprop="name" className="info-table__cell about-event__info-place" colspan="2">
                        <a itemprop="url" href="/restoran-sixty/" class="link about-event__place-link">
                          <meta itemprop="address" content="Пресненская наб., 12, БЦ «Башня Федерация»"/>
                            <meta itemprop="telephone" content="+7 (495) 653 83 69, +7 (495) 653 83 68"/>
                              Place</a>
                          </td>
                        </tr>
                        <tr itemprop="startDate" content="2017-11-10 20:00:00" className="info-table__row">

                          <td className="info-table__cell about-event__info-date">
                            <span className="event__info-day">10</span>
                            <span className="event__info-month">november,<br/></span>
                            friday
                          </td>
                          <td className="info-table__cell about-event__table-cell event__info-date_mobile">
                            <span className="event__info-day">10/11 FR</span>
                          </td>

                          <td className="info-table__cell event__info-time">
                            20:00
                          </td>

                        </tr>
                      </tbody>
                    </table>
                    <div className="tags">
                      <Icon type="tag" style={{marginRight:'10px'}}/>
                      <Tag>some tag</Tag>
                      <Tag>few</Tag>
                      <Tag>more</Tag>
                      <Tag>tags</Tag>
                    </div>
                  </div>
                </div>
                <Comments/>
              </Col>
            </Row>
          </div>
          );
        }
      }

    EventPage.propTypes = {};
