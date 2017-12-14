import React from 'react'
import { Menu, Icon } from 'antd';
import { fetchEvents } from '../actions/events';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class CategoriesMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'all',
      filter: ''
    }
  }
  handleClick = (e) => {
    this.setState({
      current: e.key
    })
    this.props.filterPostsByCategory(e.key)
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={this.state.current}
        mode="horizontal"
        style={{display: 'flex',justifyContent: 'center'}}
      >
        <Menu.Item key="all">
          All
        </Menu.Item>
        <Menu.Item key="family">
          Family
        </Menu.Item>
        <Menu.Item key="night life">
            Party
        </Menu.Item>
        <Menu.Item key="exhibition">
            Exhibition
        </Menu.Item>
        <Menu.Item key="other">
            Other
        </Menu.Item>
      </Menu>
    );
  }
}
