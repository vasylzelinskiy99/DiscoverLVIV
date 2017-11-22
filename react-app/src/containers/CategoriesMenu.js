import React from 'react'
import { Menu, Icon } from 'antd';
import { fetchEvents } from '../actions/events';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class CategoriesMenu extends React.Component {
  state = {
    current: 'all',
    filter: ''
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
      filter: e.filter
    });
    this.props.filterPosts(this.state.filter)
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
        <Menu.Item key="sport" filter="Майстер-клас">
          Sport
        </Menu.Item>
        <Menu.Item key="party" filter="вечеря">
            Party
        </Menu.Item>
        <Menu.Item key="exhibition" filter="Бізнес">
            Exhibition
        </Menu.Item>
        <Menu.Item key="science" filter="трактати">
            Science
        </Menu.Item>
      </Menu>
    );
  }
}
