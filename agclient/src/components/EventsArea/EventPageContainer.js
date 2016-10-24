import React from 'react';
import { connect } from 'react-redux';
import EventPage from './EventPage';
import Preloader from '../../common/Preloader';
import { getEvent, deleteEvent } from '../../actions/eventActions';

class EventPageContainer extends React.Component {   
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }       
    
    componentDidMount() {
        this.props.getEvent(this.props.params.eventId).then(res => {
            if(res) {
                this.setState({ isLoading: false });
            }
            else {
                this.context.router.push('/404');
            }            
        })
        .catch(err => {
            this.context.router.push('/404');
        });
    }

    render() {     
        const { event, deleteEvent } = this.props;   
        return (
            <div>
                {this.state.isLoading && <Preloader />}                
                <EventPage 
                    event={event}
                    deleteEvent={deleteEvent} />
            </div>            
        )
    }        
};

EventPageContainer.propTypes = {
    event: React.PropTypes.object.isRequired,
    getEvent: React.PropTypes.func.isRequired,
    deleteEvent: React.PropTypes.func.isRequired
}

EventPageContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = function(store) {
    return {
        event: store.eventState.event
    };
};

export default connect(mapStateToProps, { getEvent, deleteEvent })(EventPageContainer);