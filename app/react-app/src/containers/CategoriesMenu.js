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
          All
        </Menu.Item>
        <Menu.Item key="sport">
          Sport
        </Menu.Item>
        <Menu.Item key="party">
            Party
        </Menu.Item>
        <Menu.Item key="exhibition">
            Exhibition
        </Menu.Item>
        <Menu.Item key="science">
            Science
        </Menu.Item>
      </Menu>
    );
  }
}
