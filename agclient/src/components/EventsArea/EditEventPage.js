import React from 'react';
import { connect } from 'react-redux';
import TextFieldGroup from '../../common/TextFieldGroup';
import TextAreaGroup from '../../common/TextAreaGroup';
import { getEvent, editEvent } from '../../actions/eventActions';
import { addFlashMessage } from '../../actions/flash';

class EditEventPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {
            id: props.params.eventId,
            title: '',
            headline: '',
            description: '',
            eventDate: '',
            errors: {},
            isFormLoading: false,
            isLoading: true
        }
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    componentDidMount() {
        this.props.getEvent(this.props.params.eventId).then(() => {                                  
            this.setState({ isLoading: false });          
        })
        .catch(err => {
            this.context.router.push('/404');
        });
    }    
    
    componentWillReceiveProps(nextProps) {
        const { title, headline, description, eventDate } = nextProps.event; 
        this.setState({ 
            title, headline, description, eventDate 
        }); 
    }
    
    onChange (e) {        
        this.setState({ [e.target.name]: e.target.value });
    }
    
    onSubmit(e) {
        e.preventDefault();
        this.props.editEvent(this.state)
            .then(() => {
                this.props.addFlashMessage({
                    type: 'success',
                    text: 'Event succesfully edited!',
                    category: 'event_edited'
                });
                this.context.router.push('/')
            })
            .catch(
                (err) => {this.setState({ errors: err.response.data, isFormLoading: false })}
            );
    }
    
    render () {
        const { title, headline, description, eventDate, errors, isFormLoading } = this.state;                
        /*const title = this.state.title || this.props.event.title;
        const headline = this.state.headline || this.props.event.headline;
        const description = this.state.description || this.props.event.description;
        const eventDate = this.state.eventDate || this.props.event.eventDate;*/
        
        return (
            <div>                
                <h3>Edit Event</h3>
                <form onSubmit={this.onSubmit} className="form-box">                                
                    <div className="content-wrapper">
                        <TextFieldGroup 
                            field="title"
                            label="Event title"
                            value={title}
                            error={errors.title}
                            onChange={this.onChange}
                        />
                        
                        <TextFieldGroup 
                            field="headline"
                            label="Event headline"
                            value={headline}
                            error={errors.headline}
                            onChange={this.onChange}
                        />
                        
                        <TextAreaGroup 
                            field="description"
                            label="Event description"
                            value={description} 
                            error={errors.description}
                            onChange={this.onChange}
                        />
                        
                        <TextFieldGroup 
                            field="eventDate"
                            label="Event date"
                            value={eventDate}
                            error={errors.eventDate}
                            onChange={this.onChange}
                        />
                        
                        <button type="submit" disabled={isFormLoading} className="button-primary">Edit event</button>                
                    </div>
                </form>
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

const mapStateToProps = function(store) {
    return {
        event: store.eventState.event
    };
};

export default connect(mapStateToProps, { getEvent, editEvent, addFlashMessage })(EditEventPage);