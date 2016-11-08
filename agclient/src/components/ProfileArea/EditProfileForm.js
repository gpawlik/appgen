import React from 'react';
import TextFieldGroup from '../../common/TextFieldGroup';
import MultiSelectGroup from '../../common/MultiSelectGroup';

class EditProfileForm extends React.Component {
    render() {        
        const { username, email, location, interests, errors, onChange } = this.props;
        return (
            <form>
                <TextFieldGroup 
                    field="username"
                    label="Username"
                    value={username}
                    error={errors.username}
                    onChange={onChange}
                />
                <TextFieldGroup 
                    field="email"
                    label="E-mail"
                    value={email}
                    error={errors.email}
                    onChange={onChange}
                />
                <TextFieldGroup 
                    field="location"
                    label="Location"
                    value={location}
                    error={errors.location}
                    onChange={onChange}
                />
                <MultiSelectGroup 
                    field="interests"
                    label="Interests"
                    value={interests}
                    error={errors.interests}
                />
                <button type="submit" className="button-primary">Save changes</button>
            </form>
        );
    }
}

export default EditProfileForm;