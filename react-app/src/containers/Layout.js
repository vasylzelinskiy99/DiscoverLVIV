import React, {PropTypes} from 'react';
import TopBar from '../components/nav/TopBar'
import Footer from '../components/footer/Footer'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
      <TopBar/>
      {this.props.children}
      <Footer/>
      </div>
    );
  }
}

Layout.propTypes = {
};
