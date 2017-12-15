import React from 'react';
import { Modal, Button } from 'antd';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: this.props.visible
      }
  }
  showModal = () => {
     this.setState({
      visible: true,
     });
   }
  componentWillReceiveProps(nextProps){
    this.setState({
      visible: nextProps.visible
    })
  }
  render() {
    return (
      <div>
        <Modal
          visible={this.state.visible}
          title="Log In"
          onCancel={this.props.handleCancel}
          footer={null}
        >
          <p>For this action You should log in with</p>
          <div className="LoginButtons">
          <Button type="primary" value="large" icon="">Facebook</Button>
          <Button type="primary" value="large" icon="">Gmail</Button>
          </div>
        </Modal>
      </div>
    );
  }
}
