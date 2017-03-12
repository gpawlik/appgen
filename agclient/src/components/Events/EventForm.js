import React, { PropTypes } from 'react';
import moment from 'moment';

import TextFieldGroup from 'common/TextFieldGroup';
import TextAreaGroup from 'common/TextAreaGroup';
import translate from 'utils/translate';

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
        label={translate('events.edit.form.label.title')}
        value={title}
        error={errors.title}
        onChange={onChange}
        />

      <TextFieldGroup
        field="headline"
        label={translate('events.edit.form.label.headline')}
        value={headline}
        error={errors.headline}
        onChange={onChange}
        />

      <TextAreaGroup
        field="description"
        label={translate('events.edit.form.label.description')}
        value={description}
        error={errors.description}
        onChange={onChange}
        />

      <TextFieldGroup
        field="eventDate"
        label={translate('events.edit.form.label.date')}
        value={eventDate}
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
  eventDate: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]).isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default EventForm;
