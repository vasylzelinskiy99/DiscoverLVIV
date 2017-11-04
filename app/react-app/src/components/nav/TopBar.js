import React, {PropTypes} from 'react';
import { Menu, Icon } from 'antd';
import LanguageSwitcher from './LanguageSwitcher'
import {SearchBar} from './SearchBar'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class TopBar extends React.Component {
  render() {
    return (
      <Menu
        mode="horizontal"
        style={{textAlign:'right'}}
      >
          <a href="#" style={{marginLeft:'10px'}}><Icon type="facebook" />facebook</a>
          <a href="#" style={{margin:'0 20px'}}><Icon type="twitter" />twitter</a>
          <LanguageSwitcher/>
          <SearchBar/>
      </Menu>
    );
  }
}

TopBar.propTypes = {
};
