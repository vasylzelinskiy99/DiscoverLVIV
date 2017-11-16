import React from 'react';
import { Modal, Button } from 'antd';

class LoginModal extends React.Component {
  state = {
    loading: false,
    visible: false,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  
  handleCancel = () => {
    this.setState({ visible: false });
  }
  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open
        </Button>
        <Modal
          visible={visible}
          title="Logging in"
          onCancel={this.handleCancel}
          footer={null}
        > 
          <p>For this action You should log in with</p>
          <br />
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

ReactDOM.render(<LoginModal />, login);
