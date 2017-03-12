import React from 'react';
import { connect } from 'react-redux';
import UsersList from './UsersList';
import Preloader from '../../common/Preloader';
import { getUsers, deleteUser } from '../../actions/userActions';

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.props.getUsers().then(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <Preloader />}
        <UsersList
          users={this.props.users}
          deleteUser={this.props.deleteUser}
          />
      </div>
    );
  }
}

UsersContainer.propTypes = {
  users: React.PropTypes.array.isRequired,
  getUsers: React.PropTypes.func.isRequired,
  deleteUser: React.PropTypes.func.isRequired
};

const mapStateToProps = store => {
  return {
    users: store.usersState.users
  };
};

export default connect(mapStateToProps, { getUsers, deleteUser })(UsersContainer);
