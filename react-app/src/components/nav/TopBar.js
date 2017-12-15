import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom'
import { Menu, Button, Layout} from 'antd';
import LanguageSwitcher from './LanguageSwitcher'
import SearchBar from './SearchBar'
import {Icon} from 'react-fa'
import Login from './Login'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer } = Layout;

 class TopBar extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
           showLogin:false
         }
    this.showLogin = this.showLogin.bind(this)
   }
  showLogin = () => {
    console.log('show');
    this.setState({showLogin:true})
  }
  handleCancel = () => {
    this.setState({ showLogin: false });
  }
  render() {
    return (
      <div>
      <Menu
        mode="horizontal"
        style={{textAlign:'right',width:'30%',float:'left'}}
      >
          <Link to="/" style={{float:'left',marginLeft:'2em'}}> Home </Link>
      </Menu>
      <div style={{float:'right',textAlign:'right',width:'70%',backgroundColor:'#fff',lineHeight:'46px'}}>
      <Login visible={this.state.showLogin} handleCancel={this.handleCancel}/>
      <Button size="default" onClick={this.showLogin}>Login</Button>
      <a href="#" style={{marginLeft:'10px'}}><Icon name="facebook" /></a>
      <a href="#" style={{margin:'0 20px'}}><Icon name="twitter" /></a>
      <LanguageSwitcher/>
      <SearchBar/>
      </div>
      </div>
    );
  }
}

export default TopBar;
