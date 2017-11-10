import React, {PropTypes} from 'react';
import {Card} from 'antd';

export default class EventsListItem extends React.Component {
  render(props) {
    return (<Card className="card" bordered={false} bodyStyle={{
        padding: 0
      }} style={{
        background: 'url('+this.props.img+')',
        backgroundSize: 'cover'
      }}>
      <div className="event_content">
      <h1 className="event_title">Event title</h1>
      <div className="blur" style={{background: 'url('+this.props.img+')'}}></div>
        <div className='event_description__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div class="info-table">
          <meta itemprop="endDate" content="2017-11-05 06:00:00"/>
            <table class="info-table__table">
              <tbody>
                <tr itemprop="location" itemscope="" itemtype="https://schema.org/Place" class="info-table__row">
                  <td itemprop="name" class="info-table__cell event__info-place" colspan="2">
                        Standart</td>
                    </tr>
                    <tr itemprop="startDate" content="2017-11-04 20:00:00" class="info-table__row">
                      <td class="info-table__cell event__info-date">
                        <span class="event__info-day">4</span>
                        <span class="event__info-month">november,<br/></span>
                        saturday
                      </td>
                      <td class="info-table__cell event__table-cell event__info-date_mobile">
                        <span class="event__info-day">4/11 СБ</span>
                      </td>
                      <td class="info-table__cell event__info-time">
                        20:00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
          ); } } EventsListItem.propTypes = {};
