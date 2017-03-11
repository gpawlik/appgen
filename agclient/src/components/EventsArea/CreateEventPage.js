import React from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/eventActions';
import { addFlashMessage } from '../../actions/flash';
import EventForm from './EventForm';

// TODO: add client validation
class CreateEventPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      headline: '',
      description: '',
      eventDate: '',
      errors: {},
      isFormLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props
      .createEvent(this.state)
      .then(() => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'Event succesfully created!',
          category: 'event_created'
        });
        this.context.router.push('/');
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          isFormLoading: false
        });
      });
  }

  render() {
    return (
      <div className="content-wrapper">
        <h3>New Event</h3>
        <EventForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          buttonText="Create event"
          {...this.state}
        />
      </div>
    );
  }
}

CreateEventPage.propTypes = {
  createEvent: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
};

CreateEventPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(null, { createEvent, addFlashMessage })(CreateEventPage);
