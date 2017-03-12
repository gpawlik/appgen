import React from 'react';
import shortid from 'shortid';

import TextFieldGroup from '../../common/TextFieldGroup';
import MultiSelectGroup from '../../common/MultiSelectGroup';
import MultiSelectGroupItem from '../../common/MultiSelectGroupItem';
import config from 'config';
import translate from 'utils/translate';

const EditProfileForm = ({ user, errors, onChange, onSelectInterest, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextFieldGroup
        field="username"
        label={translate('users.edit.form.label.username')}
        value={user.username}
        error={errors.username}
        onChange={onChange}
        />
      <TextFieldGroup
        field="email"
        label={translate('users.edit.form.label.email')}
        value={user.email}
        error={errors.email}
        onChange={onChange}
      />
      <TextFieldGroup
        field="location"
        label={translate('users.edit.form.label.location')}
        value={user.location}
        error={errors.location}
        onChange={onChange}
      />
      <MultiSelectGroup
        field="interests"
        label={translate('users.edit.form.label.interests')}
        options={config.interestList}
        error={errors.interests}>
        {config.interestList.map(interest => {
          const selected = user.interests ? user.interests.indexOf(interest.id) !== -1 : false;

          return (
            <MultiSelectGroupItem
              key={shortid.generate()}
              selected={selected}
              onClick={onSelectInterest}
              {...interest}
              />
          );
        })}
      </MultiSelectGroup>
      <button type="submit" className="button-primary">
        {translate('users.edit.form.saveButton')}
      </button>
    </form>
  );
};

EditProfileForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  errors: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

export default EditProfileForm;
