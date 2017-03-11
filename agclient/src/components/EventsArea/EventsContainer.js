import React from 'react';
import { connect } from 'react-redux';
import EventsList from './EventsList';
import Preloader from '../../common/Preloader';
import { getEvents } from '../../actions/eventActions';

class EventsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.props.getEvents().then(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <Preloader />}
        <EventsList
          events={this.props.events}
          showCreateLink={this.props.user.isAdmin} />
      </div>
    );
  }
}

EventsContainer.propTypes = {
  events: React.PropTypes.array.isRequired,
  user: React.PropTypes.object.isRequired
};

const mapStateToProps = store => {
  return {
    events: store.eventsState.events,
    user: store.authState.user
  };
};

export default connect(mapStateToProps, { getEvents })(EventsContainer);
