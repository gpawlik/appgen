import React from 'react';
import { connect } from 'react-redux';
import EventPage from './EventPage';
import Preloader from 'common/Preloader';
import { getEvent, deleteEvent } from './Events.actions';

class EventPageContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  componentDidMount() {
    this.props
      .getEvent(this.props.params.eventId)
      .then(() => {
        this.setState({ isLoading: false });
      })
      .catch(() => {
        this.context.router.push('/404');
      });
  }

  deleteEvent(eventId) {
    this.props.deleteEvent(eventId).then(() => {
      this.context.router.push('/');
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <Preloader />}
        <EventPage
          event={this.props.event}
          deleteEvent={this.deleteEvent}
          isAdmin={this.props.auth.user.isAdmin} />
      </div>
    );
  }
}

EventPageContainer.propTypes = {
  event: React.PropTypes.object.isRequired,
  getEvent: React.PropTypes.func.isRequired,
  deleteEvent: React.PropTypes.func.isRequired,
  auth: React.PropTypes.object.isRequired
};

EventPageContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

const mapStateToProps = store => {
  return {
    event: store.eventState.event,
    auth: store.authState
  };
};

export default connect(mapStateToProps, { getEvent, deleteEvent })(EventPageContainer);
