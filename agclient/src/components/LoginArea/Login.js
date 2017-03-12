import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login as loginAction } from '../../actions/authActions';
import MessageList from './../MessageArea/MessageList';

class Login extends React.Component {
  render() {
    const { login } = this.props;

    return(
      <div>
        <MessageList />
        <h3>Login Area</h3>
        <div className="content-wrapper">
          <LoginForm login={login} />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: React.PropTypes.func.isRequired
};

export default connect(null, { login: loginAction })(Login);
