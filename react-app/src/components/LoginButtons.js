import React, {PropTypes} from 'react';
import { Button } from 'antd';
const ButtonGroup = Button.Group;

export default class LoginButtons extends React.Component {
  render() {
    return (

      ReactDOM.render(
        <div>
          <ButtonGroup>
            <Button type="primary">
              <Icon type="left" />Facebook
            </Button>
            <Button type="primary">Gmail
			<Icon type="right" />
            </Button>
          </ButtonGroup>
        </div>
      );
    )
  }
}
