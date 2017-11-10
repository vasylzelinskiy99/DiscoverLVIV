import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom'
import { Menu } from 'antd';
import LanguageSwitcher from './LanguageSwitcher'
import {SearchBar} from './SearchBar'
import {Icon} from 'react-fa'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class TopBar extends React.Component {
  render() {
    return (
      <Menu
        mode="horizontal"
        style={{textAlign:'right'}}
      >
          <Link to="/" style={{float:'left',marginLeft:'2em'}}> Home </Link>
          <a href="#" style={{marginLeft:'10px'}}><Icon name="facebook" /></a>
          <a href="#" style={{margin:'0 20px'}}><Icon name="twitter" /></a>
          <LanguageSwitcher/>
          <SearchBar/>
      </Menu>
    );
  }
}

TopBar.propTypes = {
};
