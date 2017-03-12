import React from 'react';
import { connect } from 'react-redux';

import { createEvent } from './Events.actions';
import { addFlashMessage } from 'common/Flash/Flash.actions';
import EventForm from './EventForm';
import translate from 'utils/translate';

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
          text: translate('messages.eventCreateSuccess'),
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
        <h3>{translate('events.create.title')}</h3>
        <EventForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          buttonText={translate('events.create.buttonText')}
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
