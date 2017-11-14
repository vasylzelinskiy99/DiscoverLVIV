import React, {PropTypes} from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="text-center" style={{padding:'1em 0',backgroundColor:'#fff', borderTop: '1px solid #e9e9e9'}}>
        (c) All rights reserved
      </div>);
  }
}

Footer.propTypes = {
};
