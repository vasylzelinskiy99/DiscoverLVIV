import React, {PropTypes} from 'react';
import TopBar from '../components/nav/TopBar'
import Footer from '../components/footer/Footer'
import { Layout} from 'antd';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
      <TopBar/>
      {this.props.children}
      <Footer/>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
};
