import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { logout } from 'common/Auth/Auth.actions';
import { toggleNavigation } from 'common/Ui/Ui.actions';
import translate from 'utils/translate';

class NavigationBar extends React.Component {

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  toggleNavigation(toggleState) {
    if(toggleState !== this.props.ui.isMobileNavigationOpen) {
      this.props.toggleNavigation(toggleState);
    }
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { isMobileNavigationOpen } = this.props.ui;

    const userLinks = [
      (<li key="0"><a href="#" onClick={this.logout.bind(this)}>{translate('navigation.user.logout')}</a></li>),
      (<li key="1"><Link to={'/user/' + user.id}>{translate('navigation.user.myProfile')}</Link></li>)
    ];

    const guestLinks = [
      (<li key="0"><Link to="/login">{translate('navigation.user.login')}</Link></li>),
      (<li key="1"><Link to="/signup">{translate('navigation.user.signup')}</Link></li>)
    ];

    const navClassName = classNames('MainNav', {'isMobile': isMobileNavigationOpen});

    return (
      <nav className={navClassName} onClick={this.toggleNavigation.bind(this, false)}>
        <ul className="MainLinks">
          <li><Link to="/">{translate('navigation.content.events')}</Link></li>
          <li><Link to="/users">{translate('navigation.content.users')}</Link></li>
          <li><Link to="/about">{translate('navigation.content.about')}</Link></li>
        </ul>
        <ul className="AccountLinks">
          { isAuthenticated ? userLinks : guestLinks }
        </ul>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired,
  toggleNavigation: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.authState,
    ui: state.uiState
  };
}

export default connect(mapStateToProps, { logout, toggleNavigation })(NavigationBar);
