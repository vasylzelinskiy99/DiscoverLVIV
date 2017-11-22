import React, {PropTypes} from 'react';
import { Menu, Icon} from 'antd';
import {SearchTitle} from './SearchTitle'
import CategoriesMenu from './CategoriesMenu'
import PostsList from './PostsList'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class SearchPage extends React.Component {
  state = {
    current: 'mail',
  }
  render() {
    return (
      <div>
      <SearchTitle/>
      <CategoriesMenu/>
      <PostsList/>
      </div>
    );
  }
}

SearchPage.propTypes = {
};
