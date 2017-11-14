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

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
       <!-- Button type="primary" onClick={this.showModal}>
          Log in
        </Button -->
        <Modal
          <p>To continue log in with</p>
        </Modal>
        <LoginButtons/>
      </div>
    );
  }
}

ReactDOM.render(<LoginModal />);
