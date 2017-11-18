import React, {PropTypes} from 'react';
import {Card} from 'antd';

export default class EventsListItem extends React.Component {
  render(props) {
    var EventDate = new Date(this.props.time)
    var time = EventDate.toLocaleTimeString()
    return (<Card className="card" bordered={false} bodyStyle={{
        padding: 0
      }} style={{
        background: 'url('+this.props.img+')',
        backgroundSize: 'cover'
      }}>
      <div className="event_content">
      <h1 className="event_title">{this.props.title}</h1>
      <div className="blur" style={{background: 'url('+this.props.img+')'}}></div>
        <div className='event_description__text'>{this.props.description}
        </div>
        <div className="info-table">
          <meta itemProp="endDate" content="2017-11-05 06:00:00"/>
            <table className="info-table__table">
              <tbody>
                <tr itemProp="location" itemType="https://schema.org/Place" className="info-table__row">
                  <td itemProp="name" className="info-table__cell event__info-place" itemSpan="2">
                        Standart</td>
                    </tr>
                    <tr itemProp="startDate" content="2017-11-04 20:00:00" className="info-table__row">
                      <td className="info-table__cell event__info-date">
                        <span className="event__info-day">{EventDate.getDate()}</span>
                        <span className="event__info-month">{EventDate.getMonth()},<br/></span>
                        {EventDate.getDay()}
                      </td>
                      <td className="info-table__cell event__table-cell event__info-date_mobile">
                        <span className="event__info-day">4/11 СБ</span>
                      </td>
                      <td className="info-table__cell event__info-time">
                        {time}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
          ); } }
