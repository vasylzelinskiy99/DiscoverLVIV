import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom'
import { Menu, Button} from 'antd';
import LanguageSwitcher from './LanguageSwitcher'
import SearchBar from './SearchBar'
import {Icon} from 'react-fa'
import Login from './Login'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

 class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showLogin:false
      }
      this.showLogin = this.showLogin.bind(this)
  }
  showLogin() {
    this.setState(prevState => ({showLogin:true}))
  }
  render() {
    return (
      <Menu
        mode="horizontal"
        style={{textAlign:'right'}}
      >
          <Link to="/" style={{float:'left',marginLeft:'2em'}}> Home </Link>
          <Login visible={this.state.showLogin}/>
          <Button size="default" onClick={this.showLogin}>Login</Button>
          <a href="#" style={{marginLeft:'10px'}}><Icon name="facebook" /></a>
          <a href="#" style={{margin:'0 20px'}}><Icon name="twitter" /></a>
          <LanguageSwitcher/>
          <SearchBar/>
      </Menu>
    );
  }
}

export default TopBar;
