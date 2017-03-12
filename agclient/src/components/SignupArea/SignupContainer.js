import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../../actions/signup';
import { addFlashMessage } from '../../actions/flash';
import MessageList from './../MessageArea/MessageList';

const SignupPage = ({ signupRequest, userExists, addMessage }) => {
  return(
    <div>
      <MessageList />
      <h3>SignUp Area</h3>
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
