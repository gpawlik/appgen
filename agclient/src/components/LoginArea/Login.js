import React from 'react';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import { login as loginAction } from '../../actions/authActions';
import MessageList from './../MessageArea/MessageList';
import translate from 'utils/translate';

class Login extends React.Component {
  render() {
    const { login } = this.props;

    return(
      <div>
        <MessageList />
        <h3>{translate('login.title')}</h3>
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
