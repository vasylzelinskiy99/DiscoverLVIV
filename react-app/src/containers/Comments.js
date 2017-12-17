import React, {PropTypes} from 'react';
import {Input, Button, Avatar, List} from 'antd';
const {TextArea} = Input;

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      currentComment: '',
      commentId:1
    }
  }
  sendComment = () => {
    var comments = this.state.comments
    comments.push({username: this.props.username, avatar: this.props.avatar, comment: this.state.currentComment,id:this.state.commentId++})
    this.setState({comments: comments, currentComment: '', commentId:this.state.commentId++})

  }
  commentHandler = (event) => {
    this.setState({currentComment: event.target.value})
  }
  render() {
    return (<div className="comments-wrap" style={{
        marginTop: '5em'
      }}>
      <h2>Leave your comment</h2>
      <List size="large" style={{maxWidth:'300px'}} dataSource={this.state.comments} renderItem={item => (<List.Item key={item.title}>
          <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={item.username}
          description={item.comment}/>
        </List.Item>)}/>
      <TextArea rows="5" onChange={this.commentHandler} value={this.state.currentComment}/>
      <Button type="primary" htmlType="submit" style={{
          margin: '1em 0'
        }} onClick={this.sendComment}>Submit</Button>
    </div>);
  }
}
