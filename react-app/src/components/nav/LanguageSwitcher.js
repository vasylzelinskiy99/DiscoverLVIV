import React, {PropTypes} from 'react';
import {fetchEvents} from '../../actions/events'
import * as eventsUa from '../../api/eventsukr.json';
import * as eventsDe from '../../api/eventsde.json';
import * as eventsPl from '../../api/eventspl.json';
import * as eventsRu from '../../api/eventsrus.json';
import * as eventsEn from '../../api/eventsen.json';
import {connect} from 'react-redux'
import {Select} from 'antd';
const Option = Select.Option;

class LanguageSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLanguage: 'en'
    }
  }

  handleChange = (value) => {
    const _this = this
    this.setState({currentLanguage: value})
    if (value === 'ua') {
      _this.switchToUa()
    } else if (value === 'de') {
      _this.switchToDe()
    } else if (value === 're') {
      _this.switchToRu()
    } else if (value === 'en') {
      _this.switchToEn()
    } else if (value === 'ru') {
      _this.switchToRu()
    } else if (value === 'pl') {
      _this.switchToPl()
    } else {
      _this.switchToEn()
    }
  }

  switchToEn = () => {
    this.props.fetchEvents(eventsEn)
  }

  switchToUa = () => {
    this.props.fetchEvents(eventsUa)
  }

  switchToDe = () => {
    this.props.fetchEvents(eventsDe)
  }

  switchToRu = () => {
    this.props.fetchEvents(eventsRu)
  }

  switchToPl = () => {
    this.props.fetchEvents(eventsPl)
  }
  render() {
    return (<Select defaultValue="en" style={{
        width: 60
      }} onChange={this.handleChange}>
      <Option value="en">En</Option>
      <Option value="ru">Ru</Option>
      <Option value="de">De</Option>
      <Option value="ua">Ua</Option>
      <Option value="pl">Pl</Option>
    </Select>);
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {fetchEvents})(LanguageSwitcher);
