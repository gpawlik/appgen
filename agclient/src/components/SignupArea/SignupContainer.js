import React from 'react';
import { connect } from 'react-redux';

import SignupForm from './SignupForm';
import { userSignupRequest, isUserExists } from '../../actions/signup';
import { addFlashMessage } from '../../actions/flash';
import MessageList from './../MessageArea/MessageList';
import translate from 'utils/translate';

const SignupPage = ({ signupRequest, userExists, addMessage }) => {
  return(
    <div>
      <MessageList />
      <h3>{translate('signup.title')}</h3>
      <div className="content-wrapper">
        <SignupForm
          userSignupRequest={signupRequest}
          isUserExists={userExists}
          addFlashMessage={addMessage}
          />
      </div>
    </div>
  );
};

SignupPage.propTypes = {
  signupRequest: React.PropTypes.func.isRequired,
  addMessage: React.PropTypes.func.isRequired
};

export default connect(
  null,
  {
    signupRequest: userSignupRequest,
    userExists: isUserExists,
    addMessage: addFlashMessage
  }
)(SignupPage);
