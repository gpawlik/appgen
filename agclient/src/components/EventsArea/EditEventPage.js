import React from 'react';
import { connect } from 'react-redux';
import { getEvent, editEvent } from '../../actions/eventActions';
import { addFlashMessage } from '../../actions/flash';
import EventForm from './EventForm';

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
                (err) => {
                    this.setState({ 
                        errors: err.response.data, 
                        isFormLoading: false 
                    })
                }
            );
    }
    
    render () {
        return (  
            <div className="content-wrapper">             
                <h3>Edit Event</h3>
                <EventForm 
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    buttonText="Edit event"
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

const mapStateToProps = function(store) {
    return {
        event: store.eventState.event
    };
};

export default connect(mapStateToProps, { getEvent, editEvent, addFlashMessage })(EditEventPage);