import React, {PropTypes} from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';

const menu = (
  <Menu>
    <Menu.Item key="1">Ru</Menu.Item>
    <Menu.Item key="2">Ua</Menu.Item>
  </Menu>
);

export default class LanguageSwitcher extends React.Component {
  render() {
    return (
        <Dropdown overlay={menu}>
          <span>
              En <Icon type="down" />
          </span>
        </Dropdown>
    );
  }
}

LanguageSwitcher.propTypes = {
};
