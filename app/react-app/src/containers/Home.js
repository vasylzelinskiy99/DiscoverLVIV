import React, {PropTypes} from 'react';
import { Menu, Icon, Layout } from 'antd';
import TopBar from '../components/nav/TopBar'
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
      <Layout>
      <TopBar/>
      <TopBanner/>
      <CategoriesMenu/>
      <PostsList/>
      </Layout>
    );
  }
}

Home.propTypes = {
};
