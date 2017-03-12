import React from 'react';
import TextFieldGroup from '../../common/TextFieldGroup';
import MultiSelectGroup from '../../common/MultiSelectGroup';
import MultiSelectGroupItem from '../../common/MultiSelectGroupItem';
import { interestList } from '../../config';
import shortid from 'shortid';

const EditProfileForm = ({ user, errors, onChange, onSelectInterest, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextFieldGroup
        field="username"
        label="Username"
        value={user.username}
        error={errors.username}
        onChange={onChange}
        />
      <TextFieldGroup
        field="email"
        label="E-mail"
        value={user.email}
        error={errors.email}
        onChange={onChange}
      />
      <TextFieldGroup
        field="location"
        label="Location"
        value={user.location}
        error={errors.location}
        onChange={onChange}
      />
      <MultiSelectGroup
        field="interests"
        label="Interests"
        options={interestList}
        error={errors.interests}>
        {interestList.map(interest => {
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
      <button type="submit" className="button-primary">Save changes</button>
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
