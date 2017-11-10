import React, {PropTypes} from 'react';
import { Menu, Icon} from 'antd';
import {TopBanner} from './TopBanner'
import CategoriesMenu from './CategoriesMenu'
import PostsList from './PostsList'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Home extends React.Component {
  state = {
    current: 'mail',
  }
  render() {
    return (
      <div>
      <TopBanner/>
      <CategoriesMenu/>
      <PostsList/>
      </div>
    );
  }
}

Home.propTypes = {
};
