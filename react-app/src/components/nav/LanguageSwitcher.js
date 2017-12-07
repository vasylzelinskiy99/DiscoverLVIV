import React, {PropTypes} from 'react';
import { fetchEvents } from '../../actions/events'
import * as eventsUa from '../../api/eventsukr.json';
import * as eventsDe from '../../api/eventsde.json';
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
    }
    else if (value === 'de') {
      _this.switchToDe()
    }
  }

  switchToUa = () => {
    this.props.fetchEvents(eventsUa)
}

  switchToDe = () => {
    this.props.fetchEvents(eventsDe)
  }

  render() {
    return (
      <Select defaultValue="en" style={{
        width: 60
      }} onChange={this.handleChange}>
      <Option value="en">En</Option>
      <Option value="ru">Ru</Option>
      <Option value="de">De</Option>
      <Option value="ua">Ua</Option>
    </Select>);
  }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps,
  {fetchEvents}
)(LanguageSwitcher);
