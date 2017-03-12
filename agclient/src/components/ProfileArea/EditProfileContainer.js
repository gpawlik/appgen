import React from 'react';
import { connect } from 'react-redux';

import EditProfileForm from './EditProfileForm';
import { getUser, editUser } from 'components/UsersArea/Users.actions';
import { addFlashMessage } from 'common/Flash/Flash.actions';
import translate from 'utils/translate';

class EditProfileContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: '',
        username: '',
        email: '',
        location: '',
        interests: []
      },
      errors: {},
      isFormLoading: false,
      isLoading: true
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelectInterest = this.onSelectInterest.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props
      .editUser(this.state.user)
      .then(() => {
        this.props.addFlashMessage({
          type: 'success',
          text: translate('messages.userEditSuccess'),
          category: 'user_edited'
        });
        this.context.router.push('/user/' + this.state.user.id);
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          isFormLoading: false
        });
      });
  }

  onSelectInterest(id) {
    this.setState({
      user: { ...this.state.user, interests: this.toggleInterests(id) }
    });
  }

  toggleInterests(interestId) {
    const currentInterests = this.state.user.interests;
    const newInterests = currentInterests ? currentInterests.slice() : [];
    const existingIndex = newInterests.indexOf(interestId);

    if(existingIndex === -1) {
      newInterests.push(interestId);
    } else {
      newInterests.splice(existingIndex, 1);
    }
    return newInterests;
  }

  componentDidMount() {
    this.fetchUserData(this.props.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    const { _id, username, email, location, interests } = nextProps.user;

    this.setState({
      user: {
        id: _id,
        username,
        email,
        location,
        interests
      }
    });
  }

  fetchUserData(userId) {
    this.props.getUser(userId).then(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    return (
      <div className="content-wrapper">
        <h3>{translate('users.edit.title')}</h3>
        <EditProfileForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          onSelectInterest={this.onSelectInterest}
          {...this.state}
          />
      </div>
    );
  }
}

EditProfileContainer.propTypes = {
  getUser: React.PropTypes.func.isRequired,
  editUser: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
};

EditProfileContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

const mapStateToProps = store => {
  return {
    user: store.profileState.user
  };
};

export default connect(mapStateToProps, { getUser, editUser, addFlashMessage })(EditProfileContainer);
