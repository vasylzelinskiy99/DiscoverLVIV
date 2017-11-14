import React, {PropTypes} from 'react';
import { Input, Button } from 'antd';
const { TextArea } = Input;

export default class Comments extends React.Component {
  render() {
    return (
      <div className="comments-wrap" style={{marginTop:'5em'}}>
        <h2>Leave your comment</h2>
        <TextArea rows="5"/>
        <Button type="primary" htmlType="submit" style={{margin:'1em 0'}}>Submit</Button>
      </div>
    );
  }
}

Comments.propTypes = {
};
