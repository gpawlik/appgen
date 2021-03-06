import React from 'react';
import { connect } from 'react-redux';
import { addFlashMessage } from 'common/Flash/Flash.actions';

// Wrap the component in HOC - higher order component
export default ComposedComponent => {
  class Authenticate extends React.Component {

    componentWillMount() {
      if(!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'You need to be authenticated to view this page',
          category: 'user_need_auth'
        });
        this.context.router.push('/login');
        // TODO: router is slow enough to let the ComposedComponent mount...
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.isAuthenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
  };

  Authenticate.contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.authState.isAuthenticated
    };
  }

  return connect(mapStateToProps, { addFlashMessage })(Authenticate);
};
