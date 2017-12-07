import React from 'react';
import { Modal, Button } from 'antd';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible
    }
    this.handleCancel = this.handleCancel.bind(this)
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      visible: nextProps.visible
    })
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
