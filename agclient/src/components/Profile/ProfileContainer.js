import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import Preloader from 'common/Preloader';
import { getUser } from 'components/Users/Users.actions';
import MessageList from 'components/Message/MessageList';

class ProfileContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.fetchUserData(this.props.params.userId);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.params.userId !== this.props.params.userId) {
      this.setState({ isLoading: true });
      this.fetchUserData(newProps.params.userId);
    }
  }

  fetchUserData(userId) {
    this.props.getUser(userId).then(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <Preloader />}
        <MessageList />
        <Profile user={this.props.user} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.profileState.user
  };
};

export default connect(mapStateToProps, { getUser })(ProfileContainer);
