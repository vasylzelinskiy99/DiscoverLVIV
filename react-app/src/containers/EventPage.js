import React, {PropTypes} from 'react';
import {Col, Row, Tag, Icon} from 'antd';
import Comments from './Comments'
import Rating from './Rating'

export default class EventPage extends React.Component {
  render() {
    var eventId = this.props.match.params.id
    const apiData = JSON.parse(window.localStorage.getItem('apiData'))
    var allEvents = apiData
    return(
    allEvents.map((singleEvent) => {
      if (singleEvent.id === eventId) {
        var EventDate = new Date(singleEvent.startTime)
        return (
          <div className="eventPage">
          <Row type="flex" justify="start">
            <Col sm={{span:10}}>
              <img style={{
                  width: '100%'
                }} src={singleEvent.coverPicture}/>
            </Col>

            <Col sm={{span:10,push:2}} class="event-description">
              <h1>{singleEvent.name}</h1>
              <Rating/>
              <div className="details">
                <p>{singleEvent.description}</p>
                <div className="info-table">
                  <meta itemprop="endDate" content="2017-11-11 06:00:00"/>
                    <table className="info-table__table">
                      <tbody>
                        <tr itemprop="location" itemscope="" itemtype="https://schema.org/Place" className="info-table__row">
                          <td itemprop="name" className="info-table__cell about-event__info-place" colspan="2">
                            <a itemprop="url" href="/restoran-sixty/" class="link about-event__place-link">
                              <meta itemprop="address" content="Пресненская наб., 12, БЦ «Башня Федерация»"/>
                                <meta itemprop="telephone" content="+7 (495) 653 83 69, +7 (495) 653 83 68"/>
                                  {singleEvent.place.name}</a>
                              </td>
                            </tr>
                            <tr itemprop="startDate" content="2017-11-10 20:00:00" className="info-table__row">

                              <td className="info-table__cell about-event__info-date">
                                <span className="event__info-day">{EventDate.getDate()}</span>
                                <span className="event__info-month">{EventDate.getMonth()}<br/></span>
                              {EventDate.getDay()}
                              </td>
                              <td className="info-table__cell about-event__table-cell event__info-date_mobile">
                                <span className="event__info-day">10/11 FR</span>
                              </td>

                              <td className="info-table__cell event__info-time">
                                {EventDate.toLocaleTimeString()}
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

    })
)
        }
      }
