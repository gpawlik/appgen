import React from 'react';

import TextFieldGroup from 'common/TextFieldGroup';
import validateInput from 'utils/validations/signup';
import translate from 'utils/translate';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false,
      invalid: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  checkUserExists(e) {
    const { name, value } = e.target;

    if (value !== '') {
      this.props
      .isUserExists(value)
      .then(res => {
        let errors = this.state.errors;
        let invalid;

        if (res.data.user) {
          errors[name] = translate('signup.form.error.name') + name;
          invalid = true;
        } else {
          errors[name] = '';
          invalid = false;
        }
        this.setState({ errors, invalid });
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    if(this.isValid()) {
      this.setState({
        errors: {},
        isLoading: true
      });
      this.props
        .userSignupRequest(this.state)
        .then(() => {
          this.props.addFlashMessage({
            type: 'success',
            text: translate('messages.userCreateSuccess'),
            category: 'user_created'
          });
          this.context.router.push('/login');
        })
        .catch(err => {
          this.setState({
            errors: err.response.data,
            isLoading: false
          });
        });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  render() {
    const { username, email, password, passwordConfirmation, errors, isLoading, invalid } = this.state;

    return(
      <form onSubmit={this.onSubmit} className="form-box">
        <TextFieldGroup
          field="username"
          label={translate('signup.form.label.username')}
          value={username}
          error={errors.username}
          onChange={this.onChange}
          checkUserExists={this.checkUserExists}
          />
        <TextFieldGroup
          field="email"
          label={translate('signup.form.label.email')}
          value={email}
          error={errors.email}
          onChange={this.onChange}
          checkUserExists={this.checkUserExists}
          type="email"
          />
        <TextFieldGroup
          field="password"
          label={translate('signup.form.label.password')}
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
          />
        <TextFieldGroup
          field="passwordConfirmation"
          label={translate('signup.form.label.repeatPassword')}
          value={passwordConfirmation}
          error={errors.passwordConfirmation}
          onChange={this.onChange}
          type="password"
          />
        <button disabled={isLoading || invalid} className="button-primary">{translate('signup.form.button')}</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
};

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default LoginForm;
