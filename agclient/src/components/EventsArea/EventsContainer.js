import React from 'react';
import { connect } from 'react-redux';
import EventsList from './EventsList';
import Preloader from '../../common/Preloader';
import { getEvents, deleteEvent } from '../../actions/eventActions';

class EventsContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }    
    
    componentDidMount() {
        this.props.getEvents().then(res => {
            this.setState({ isLoading: false });
        });
    }         

    render() {      
        return (
            <div>
                {this.state.isLoading && <Preloader />}
                <EventsList 
                    events={this.props.events}
                    deleteEvent={this.props.deleteEvent}             
                />
            </div>
        )
    }        
};

EventsContainer.propTypes = {
    events: React.PropTypes.array.isRequired,
    deleteEvent: React.PropTypes.func.isRequired
}

const mapStateToProps = function(store) {
    return {
        events: store.eventsState.events
    };
};

export default connect(mapStateToProps, { getEvents, deleteEvent })(EventsContainer);