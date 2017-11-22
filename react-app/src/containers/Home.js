import React, {PropTypes, Component} from 'react';
import { Menu, Icon} from 'antd';
import {TopBanner} from './TopBanner'
import PostsProvider from './PostsProvider'

export default class Home extends Component {
  render() {
    return (
      <div>
      <TopBanner/>
      <PostsProvider/>
      </div>
    );
  }
}
