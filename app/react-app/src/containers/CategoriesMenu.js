import React from 'react'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class CategoriesMenu extends React.Component {
  state = {
    current: 'all',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={{display: 'flex',justifyContent: 'center'}}
      >
        <Menu.Item key="all">
          <Icon type="mail" />All
        </Menu.Item>
        <Menu.Item key="sport">
          <Icon type="appstore" />Sport
        </Menu.Item>
        <Menu.Item key="party">
          <a href="#">Party</a>
        </Menu.Item>
        <Menu.Item key="exhibition">
          <a href="#">Exhibition</a>
        </Menu.Item>
        <Menu.Item key="science">
          <a href="#">Science</a>
        </Menu.Item>
      </Menu>
    );
  }
}
