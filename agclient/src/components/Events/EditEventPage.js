import React from 'react';
import { connect } from 'react-redux';

import { getEvent, editEvent } from './Events.actions';
import { addFlashMessage } from 'common/Flash/Flash.actions';
import EventForm from './EventForm';
import translate from 'utils/translate';

class EditEventPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.params.eventId,
      title: '',
      headline: '',
      description: '',
      eventDate: '',
      errors: {},
      isFormLoading: false,
      isLoading: true
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  componentWillReceiveProps(nextProps) {
    const { title, headline, description, eventDate } = nextProps.event;

    this.setState({
      title,
      headline,
      description,
      eventDate
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props
      .editEvent(this.state)
      .then(() => {
        this.props.addFlashMessage({
          type: 'success',
          text: translate('messages.eventEditSuccess'),
          category: 'event_edited'
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
        <h3>{translate('events.edit.title')}</h3>
        <EventForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          buttonText={translate('events.edit.buttonText')}
          {...this.state}
        />
      </div>
    );
  }
}

EditEventPage.propTypes = {
  editEvent: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
};

EditEventPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

const mapStateToProps = store => {
  return {
    event: store.eventState.event
  };
};

export default connect(mapStateToProps, { getEvent, editEvent, addFlashMessage })(EditEventPage);
