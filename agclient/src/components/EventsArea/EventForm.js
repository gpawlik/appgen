import React, { PropTypes } from 'react';
import TextFieldGroup from '../../common/TextFieldGroup';
import TextAreaGroup from '../../common/TextAreaGroup';
import moment from 'moment';

const EventForm = ({
  title,
  headline,
  description,
  eventDate,
  errors,
  onChange,
  onSubmit,
  isFormLoading,
  buttonText
}) => {
  return (
    <form onSubmit={onSubmit} className="form-box">
      <TextFieldGroup
        field="title"
        label="Event title"
        value={title}
        error={errors.title}
        onChange={onChange}
        />

      <TextFieldGroup
        field="headline"
        label="Event headline"
        value={headline}
        error={errors.headline}
        onChange={onChange}
        />

      <TextAreaGroup
        field="description"
        label="Event description"
        value={description}
        error={errors.description}
        onChange={onChange}
        />

      <TextFieldGroup
        field="eventDate"
        label="Event date"
        value={moment(eventDate).format('YYYY/MM/DD')}
        error={errors.eventDate}
        onChange={onChange}
        placeholder="YYYY/MM/DD"
        />

      <button type="submit" disabled={isFormLoading} className="button-primary">{buttonText}</button>
    </form>
  );
};

EventForm.propTypes = {
  title: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default EventForm;
