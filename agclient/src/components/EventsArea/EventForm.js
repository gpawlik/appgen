import React from 'react';
import TextFieldGroup from '../../common/TextFieldGroup';
import TextAreaGroup from '../../common/TextAreaGroup';
import moment from 'moment';

class EventForm extends React.Component {    
    render() {                   
        const { title, headline, description, eventDate, errors, onChange, onSubmit, isFormLoading, buttonText } = this.props;
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
    }    
}

EventForm.propTypes = {    
    title: React.PropTypes.string.isRequired,
    headline: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    eventDate: React.PropTypes.string.isRequired,
    errors: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired
};

export default EventForm;