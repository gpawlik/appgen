import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { toggleNavigation } from 'common/Ui/Ui.actions';
import config from 'config';

class Header extends React.Component {
  toggleNavigation(toggleState) {
    this.props.toggleNavigation(toggleState);
  }

  render() {
    const { isMobileNavigationOpen } = this.props.ui;

    return (
      <div className="Header">
        <h1><Link to="/">{config.appName}</Link></h1>
        <div
          className={classNames('menu-icon', { 'open': isMobileNavigationOpen })}
          onClick={this.toggleNavigation.bind(this, !isMobileNavigationOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ui: state.uiState
  };
}

export default connect(mapStateToProps, { toggleNavigation })(Header);
