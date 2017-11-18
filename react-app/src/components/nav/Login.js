import React from 'react';
import { Modal, Button } from 'antd';

export default class Login extends React.Component {
  state = {
    visible: this.props.visible
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      visible: true,
    });
  }
  render() {
    const { visible} = this.state;
    return (
      <div>
        <Modal
          visible={this.state.visible}
          title="Log In"
          onCancel={this.handleCancel}
          footer={null}
        >
          <p>For this action You should log in with</p>
          <br/>
          <div className="LoginButtons">
          <Button type="primary" value="large" icon="">Facebook</Button>
          <br />
          <br />
          <Button type="primary" value="large" icon="">Gmail</Button>
          </div>
        </Modal>
      </div>
    );
  }
}
